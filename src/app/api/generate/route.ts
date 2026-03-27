import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { TEMPLATES } from "@/lib/templates";

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

    // Use tencentarc/photomaker-style for style-based personalization.
    // This model takes the user's photo as the subject reference (input_image)
    // and the template's style image URL as the style reference (style_image).
    const output = await replicate.run(
      "tencentarc/photomaker-style:467d062309da518648ba89d226490e02b8ed09b5abc15026e54e31c5a8cd0769",
      {
        input: {
          prompt: template.prompt,
          input_image: userImageDataUrl,
          style_image: template.styleImageUrl,
          num_steps: 50,
          style_strength_ratio: 20,
          negative_prompt:
            "nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
        },
      }
    );

    // The model returns an array of URLs or a single URL
    let resultUrl: string | undefined;
    if (Array.isArray(output) && output.length > 0) {
      resultUrl = output[0] as string;
    } else if (typeof output === "string") {
      resultUrl = output;
    }

    if (!resultUrl) {
      return NextResponse.json(
        { error: "Generation failed: no output received" },
        { status: 500 }
      );
    }

    return NextResponse.json({ imageUrl: resultUrl });
  } catch (err) {
    console.error("Generation error:", err);
    const message = err instanceof Error ? err.message : "Generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
