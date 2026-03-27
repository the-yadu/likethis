export type Category = "family" | "portrait" | "vacation" | "cinematic";

export interface Template {
  id: string;
  name: string;
  description: string;
  category: Category;
  /** URL used to display the template in the UI (local or remote) */
  imageUrl: string;
  /**
   * Publicly accessible URL of the style reference image sent to the AI model.
   * Replace these with your own hosted high-quality images for best results.
   */
  styleImageUrl: string;
  prompt: string;
}

export type GenerationStatus = "idle" | "loading" | "success" | "error";

export interface GenerationResult {
  imageUrl: string;
}
