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
  // ── Family Photos ────────────────────────────────────────────────────────────
  {
    id: "family-1",
    name: "Golden Hour Family",
    description: "Warm family portrait bathed in golden sunset light",
    category: "family",
    gender: "unisex",
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
    gender: "unisex",
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
    gender: "unisex",
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
    gender: "unisex",
    styleImageUrl:
      "https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=800&q=80",
    prompt:
      "The scene is a beautiful spring family photo: cherry blossom trees, soft pink light, " +
      "romantic floral backdrop, elegant casual clothing.",
  },

  // ── Self Portraits — Women ────────────────────────────────────────────────────
  {
    id: "portrait-1",
    name: "Studio Headshot",
    description: "Professional studio portrait with perfect lighting",
    category: "portrait",
    gender: "women",
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
    gender: "women",
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
    gender: "women",
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
    gender: "women",
    styleImageUrl:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
    prompt:
      "The scene is an ethereal forest portrait: lush green forest backdrop, " +
      "dappled natural light, magical atmosphere, flowing casual clothing.",
  },

  // ── Self Portraits — Men ──────────────────────────────────────────────────────
  {
    id: "portrait-men-1",
    name: "Sharp Suit Headshot",
    description: "Confident professional headshot in a sharp suit",
    category: "portrait",
    gender: "men",
    styleImageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    prompt:
      "The scene is a confident professional male studio headshot: clean neutral background, " +
      "crisp studio lighting, sharp business suit, strong confident expression.",
  },
  {
    id: "portrait-men-2",
    name: "Casual Cool",
    description: "Relaxed natural light portrait with effortless style",
    category: "portrait",
    gender: "men",
    styleImageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    prompt:
      "The scene is a relaxed natural light male portrait: soft window light, " +
      "background bokeh, casual stylish clothing, easy confident expression.",
  },
  {
    id: "portrait-men-3",
    name: "Street Style",
    description: "Bold urban portrait with edgy street fashion",
    category: "portrait",
    gender: "men",
    styleImageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    prompt:
      "The scene is a bold urban male street portrait: gritty city backdrop, dramatic side lighting, " +
      "edgy contemporary clothing, strong confident stance.",
  },
  {
    id: "portrait-men-4",
    name: "Outdoor Explorer",
    description: "Rugged outdoor portrait with natural mountain light",
    category: "portrait",
    gender: "men",
    styleImageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    prompt:
      "The scene is a rugged outdoor male portrait: natural mountain or forest backdrop, " +
      "warm golden hour light, casual outdoorsy clothing, relaxed adventurous expression.",
  },

  // ── Vacation Photos ───────────────────────────────────────────────────────────
  {
    id: "vacation-1",
    name: "Tropical Paradise",
    description: "Breathtaking tropical beach with crystal waters",
    category: "vacation",
    gender: "unisex",
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
    gender: "unisex",
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
    gender: "unisex",
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
    gender: "unisex",
    styleImageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    prompt:
      "The scene is a magical safari at sunset: African savanna, golden warm light, " +
      "acacia trees silhouetted, safari/adventure clothing.",
  },

  // ── Vacation Photos — Men ─────────────────────────────────────────────────────
  {
    id: "vacation-men-1",
    name: "Beach Vibes",
    description: "Laid-back male portrait on a sun-soaked beach",
    category: "vacation",
    gender: "men",
    styleImageUrl:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80",
    prompt:
      "The scene is a laid-back male beach vacation photo: warm golden sunshine, " +
      "ocean waves in the background, casual summer clothing, relaxed confident pose.",
  },
  {
    id: "vacation-men-2",
    name: "Alpine Hiker",
    description: "Epic mountain trek with rugged outdoor spirit",
    category: "vacation",
    gender: "men",
    styleImageUrl:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    prompt:
      "The scene is a rugged male hiking portrait on an alpine trail: dramatic mountain peaks, " +
      "clear sky, outdoor hiking gear, adventurous energetic expression.",
  },

  // ── Cinematic ─────────────────────────────────────────────────────────────────
  {
    id: "cinematic-1",
    name: "Noir Drama",
    description: "Dramatic film noir style with moody shadows",
    category: "cinematic",
    gender: "unisex",
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
    gender: "unisex",
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
    gender: "unisex",
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
    gender: "unisex",
    styleImageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    prompt:
      "The scene is a sweeping epic cinematic landscape: golden hour light, " +
      "dramatic storm clouds, widescreen composition, epic scale.",
  },

  // ── Cinematic — Men ───────────────────────────────────────────────────────────
  {
    id: "cinematic-men-1",
    name: "Action Hero",
    description: "Intense action-hero cinematic close-up",
    category: "cinematic",
    gender: "men",
    styleImageUrl:
      "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&q=80",
    prompt:
      "The scene is an intense action-hero cinematic male portrait: dramatic underlighting, " +
      "smoke or dust in background, strong determined expression, dark tactical clothing.",
  },
  {
    id: "cinematic-men-2",
    name: "Lone Wolf",
    description: "Brooding cinematic shot with dramatic urban rain",
    category: "cinematic",
    gender: "men",
    styleImageUrl:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&q=80",
    prompt:
      "The scene is a brooding cinematic male portrait: rain-slicked urban street at night, " +
      "lone figure under a streetlight, moody desaturated teal-orange color grading, stylish dark coat.",
  },
];

export const CATEGORIES: Category[] = [
  "family",
  "portrait",
  "vacation",
  "cinematic",
];
