import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { TEMPLATES } from "@/lib/templates";

/** Safely convert a Replicate FileOutput or string to a URL string. */
function toUrl(value: unknown): string | undefined {
  if (value == null) return undefined;
  if (Array.isArray(value) && value.length > 0) return String(value[0]);
  return String(value);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { templateId, userImageDataUrl } = body as {
      templateId: string;
      userImageDataUrl: string;
    };

    if (!templateId || !userImageDataUrl) {
      return NextResponse.json(
        { error: "templateId and userImageDataUrl are required" },
        { status: 400 }
      );
    }

    const template = TEMPLATES.find((t) => t.id === templateId);
    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    const apiToken = process.env.REPLICATE_API_TOKEN;
    if (!apiToken) {
      return NextResponse.json(
        {
          error:
            "REPLICATE_API_TOKEN is not configured. Please add it to your .env.local file.",
        },
        { status: 503 }
      );
    }

    const replicate = new Replicate({ auth: apiToken });

    // ─────────────────────────────────────────────────────────────────────────
    // SINGLE-STAGE PIPELINE — google/nano-banana-pro
    //
    // image_input[0] = template scene reference  → defines style/composition
    // image_input[1] = user's real family photo  → defines identity & count
    //
    // nano-banana-pro natively attends to BOTH reference images in one pass,
    // which preserves facial identity far better than a separate face-swap
    // step that can mismatch faces (especially children) in group shots.
    // Cost: ~$0.15 per 1K image — one call per request.
    // ─────────────────────────────────────────────────────────────────────────

    const editPrompt =
      "Using the second image as the sole identity reference, replace ALL people in the first image with the people from the second image. " +
      "Rules:\n" +
      "• Preserve EVERY person in the second image — exact count, no additions, no omissions.\n" +
      "• Match each person's face (eyes, nose, mouth, jawline), skin tone, hair color/style, and body build exactly as they appear in the second image.\n" +
      "• Faithfully replicate the background, studio/ambient lighting, poses, and clothing style from the first image.\n" +
      "• Photorealistic output, sharp focus on all faces, no blurring or AI artifacts.\n" +
      template.prompt;

    console.log("[Generate] Running nano-banana-pro...");
    const output = await replicate.run("google/nano-banana-pro", {
      input: {
        prompt: editPrompt,
        // [0] = style reference (what scene to render)
        // [1] = identity reference (whose faces/bodies to use)
        image_input: [template.styleImageUrl, userImageDataUrl],
        aspect_ratio: "3:4",
        output_format: "jpg",
      },
    });

    const imageUrl = toUrl(output);
    if (!imageUrl) {
      return NextResponse.json(
        { error: "Generation failed: no output received" },
        { status: 500 }
      );
    }
    console.log("[Generate] Done:", imageUrl);
    return NextResponse.json({ imageUrl });
  } catch (err) {
    console.error("Generation error:", err);
    const message = err instanceof Error ? err.message : "Generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
