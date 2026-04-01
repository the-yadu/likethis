export type Category = "family" | "portrait" | "vacation" | "cinematic";

export interface Template {
  id: string;
  name: string;
  description: string;
  category: Category;
  /**
   * Publicly accessible URL of the style reference image — used both for
   * display in the UI and as the scene reference sent to the AI model.
   */
  styleImageUrl: string;
  prompt: string;
}

export type GenerationStatus = "idle" | "loading" | "success" | "error";

export interface GenerationResult {
  imageUrl: string;
}
