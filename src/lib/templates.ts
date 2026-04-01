import { Template, Category } from "@/types";

export const CATEGORY_LABELS: Record<Category, string> = {
  family: "Family Photos",
  portrait: "Self Portraits",
  vacation: "Vacation Photos",
  cinematic: "Cinematic",
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  family:
    "Warm, joyful family moments captured with professional lighting and composition.",
  portrait:
    "Stunning personal portraits with beautiful bokeh and natural expressions.",
  vacation:
    "Vibrant travel photos that capture the essence of adventure and exploration.",
  cinematic:
    "Dramatic, film-quality images with cinematic color grading and depth.",
};

export const TEMPLATES: Template[] = [
  // Family Photos
  {
    id: "family-1",
    name: "Golden Hour Family",
    description: "Warm family portrait bathed in golden sunset light",
    category: "family",
    styleImageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    prompt:
      "The scene is a warm golden-hour outdoor family portrait: soft backlit sunset glow, " +
      "lush blurred background, relaxed natural poses, casual elegant clothing.",
  },
  {
    id: "family-2",
    name: "Park Stroll",
    description: "Candid family moments in a lush green park",
    category: "family",
    styleImageUrl:
      "https://images.unsplash.com/photo-1543342384-1f1350e27861?w=800&q=80",
    prompt:
      "The scene is a candid family photo in a lush green park: natural daylight, " +
      "greenery in background, joyful relaxed expressions, casual clothing.",
  },
  {
    id: "family-3",
    name: "Cozy Indoors",
    description: "Intimate family portrait with soft indoor lighting",
    category: "family",
    styleImageUrl:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
    prompt:
      "The scene is a cozy indoor family portrait: soft natural window light, warm tones, " +
      "comfortable home setting, intimate atmosphere, casual clothing.",
  },
  {
    id: "family-4",
    name: "Seasonal Bloom",
    description: "Family surrounded by spring blossoms",
    category: "family",
    styleImageUrl:
      "https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=800&q=80",
    prompt:
      "The scene is a beautiful spring family photo: cherry blossom trees, soft pink light, " +
      "romantic floral backdrop, elegant casual clothing.",
  },

  // Self Portraits
  {
    id: "portrait-1",
    name: "Studio Headshot",
    description: "Professional studio portrait with perfect lighting",
    category: "portrait",
    styleImageUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    prompt:
      "The scene is a professional studio headshot: clean neutral background, " +
      "perfect three-point studio lighting, sharp focus, formal or smart-casual attire.",
  },
  {
    id: "portrait-2",
    name: "Natural Light Portrait",
    description: "Soft, flattering natural light self portrait",
    category: "portrait",
    styleImageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    prompt:
      "The scene is a natural light portrait: soft diffused window light, " +
      "beautiful background bokeh, genuine relaxed expression, casual clothing.",
  },
  {
    id: "portrait-3",
    name: "Urban Edge",
    description: "Stylish portrait with an urban city backdrop",
    category: "portrait",
    styleImageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    prompt:
      "The scene is a stylish urban portrait: city street backdrop, editorial lighting, " +
      "modern aesthetic, confident pose, smart casual clothing.",
  },
  {
    id: "portrait-4",
    name: "Forest Mystique",
    description: "Ethereal portrait surrounded by lush greenery",
    category: "portrait",
    styleImageUrl:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
    prompt:
      "The scene is an ethereal forest portrait: lush green forest backdrop, " +
      "dappled natural light, magical atmosphere, flowing casual clothing.",
  },

  // Vacation Photos
  {
    id: "vacation-1",
    name: "Tropical Paradise",
    description: "Breathtaking tropical beach with crystal waters",
    category: "vacation",
    styleImageUrl:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    prompt:
      "The scene is a tropical beach vacation: crystal turquoise water, white sand, " +
      "bright sunshine, summer clothing (swimwear or light casual).",
  },
  {
    id: "vacation-2",
    name: "Mountain Adventure",
    description: "Epic mountain landscape with dramatic vistas",
    category: "vacation",
    styleImageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    prompt:
      "The scene is an epic mountain adventure: dramatic alpine scenery, clear blue sky, " +
      "outdoor adventure clothing, wide panoramic vista.",
  },
  {
    id: "vacation-3",
    name: "European Stroll",
    description: "Charming European city street scene",
    category: "vacation",
    styleImageUrl:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    prompt:
      "The scene is a charming European city vacation: beautiful cobblestone streets, " +
      "golden hour light, historic architecture, smart casual travel clothing.",
  },
  {
    id: "vacation-4",
    name: "Sunset Safari",
    description: "Magical African savanna at sunset",
    category: "vacation",
    styleImageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    prompt:
      "The scene is a magical safari at sunset: African savanna, golden warm light, " +
      "acacia trees silhouetted, safari/adventure clothing.",
  },

  // Cinematic
  {
    id: "cinematic-1",
    name: "Noir Drama",
    description: "Dramatic film noir style with moody shadows",
    category: "cinematic",
    styleImageUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    prompt:
      "The scene is a dramatic film noir cinematic shot: high contrast shadows, " +
      "moody dark atmosphere, black and white or desaturated color grading.",
  },
  {
    id: "cinematic-2",
    name: "Epic Blockbuster",
    description: "Hollywood blockbuster cinematic composition",
    category: "cinematic",
    styleImageUrl:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
    prompt:
      "The scene is an epic Hollywood blockbuster cinematic shot: dramatic hero lighting, " +
      "lens flare, wide-angle composition, action movie color grading.",
  },
  {
    id: "cinematic-3",
    name: "Neon Nights",
    description: "Vibrant neon-lit night scene with urban energy",
    category: "cinematic",
    styleImageUrl:
      "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=800&q=80",
    prompt:
      "The scene is a vibrant neon-lit night city: colorful neon signs reflecting on wet pavement, " +
      "cyberpunk atmosphere, dramatic color contrast.",
  },
  {
    id: "cinematic-4",
    name: "Golden Epic",
    description: "Sweeping epic landscape with golden atmosphere",
    category: "cinematic",
    styleImageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    prompt:
      "The scene is a sweeping epic cinematic landscape: golden hour light, " +
      "dramatic storm clouds, widescreen composition, epic scale.",
  },
];

export const CATEGORIES: Category[] = [
  "family",
  "portrait",
  "vacation",
  "cinematic",
];
