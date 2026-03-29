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
    // TWO-STAGE PIPELINE
    //
    // Stage 1 — nano-banana-pro (scene generation)
    //   First image  = template style reference  → defines scene/composition
    //   Second image = user's real family photo  → defines body builds/count
    //   Goal: produce a well-composed scene with correct number of people,
    //         right poses, clothing, lighting. Faces can be approximate here.
    //
    // Stage 2 — fofr/face-swap-with-ideogram (face fidelity)
    //   character_image = user's real photo      → source of exact faces
    //   target_image    = Stage 1 output         → the scene to put faces into
    //   Uses Ideogram's character model which handles multiple faces reliably
    //   and preserves fine details like children's faces far better than
    //   InsightFace-based swappers.
    // ─────────────────────────────────────────────────────────────────────────

    // ── Stage 1: generate the styled scene ──────────────────────────────────
    const stage1Prompt =
      "Edit the first image: replace the people with the people from the second image. " +
      "Keep the EXACT same background, studio lighting, poses, composition, and clothing style from the first image. " +
      "The output must have EXACTLY the same number of people as the second image — no more, no less. " +
      "Faithfully match each person's skin tone, hair color and length, and body build from the second image. " +
      "Photorealistic, sharp focus on all subjects, no blurring, no artifacts. " +
      template.prompt;

    console.log("[Stage 1] Generating styled scene with nano-banana-pro...");
    const stage1Output = await replicate.run("google/nano-banana-pro", {
      input: {
        prompt: stage1Prompt,
        // First = template scene (what to edit), Second = user photo (who to put in)
        image_input: [template.styleImageUrl, userImageDataUrl],
        aspect_ratio: "3:4",
        resolution: "1K",
        output_format: "jpg",
      },
    });

    const stage1Url = toUrl(stage1Output);
    if (!stage1Url) {
      return NextResponse.json(
        { error: "Stage 1 generation failed: no output received" },
        { status: 500 }
      );
    }
    console.log("[Stage 1] Done:", stage1Url);

    // ── Stage 2: swap in the exact real faces ────────────────────────────────
    // fofr/face-swap-with-ideogram uses Ideogram's character model which is
    // far more accurate than InsightFace for multiple people including children.
    // character_image = real family photo (TRUE source of faces)
    // target_image    = Stage 1 styled scene (receives the real faces)
    console.log("[Stage 2] Running face swap with fofr/face-swap-with-ideogram...");
    const stage2Output = await replicate.run("fofr/face-swap-with-ideogram", {
      input: {
        character_image: userImageDataUrl,
        target_image: stage1Url,
        // Describe the scene so Ideogram understands the context and lighting
        prompt: template.prompt,
        // cleanup passes output through Nano Banana to fix any seam artifacts
        cleanup: false,
      },
    });

    const finalUrl = toUrl(stage2Output);
    if (!finalUrl) {
      // Graceful fallback: return the Stage 1 result if face swap fails
      console.warn("[Stage 2] Face swap returned no output — falling back to Stage 1 result");
      return NextResponse.json({ imageUrl: stage1Url });
    }
    console.log("[Stage 2] Done:", finalUrl);
    return NextResponse.json({ imageUrl: finalUrl });
  } catch (err) {
    console.error("Generation error:", err);
    const message = err instanceof Error ? err.message : "Generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
