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
    imageUrl: "/templates/family-1.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
    prompt:
      "A warm, joyful family portrait in golden hour sunlight, professional photography, beautiful bokeh background, high quality, photorealistic img",
  },
  {
    id: "family-2",
    name: "Park Stroll",
    description: "Candid family moments in a lush green park",
    category: "family",
    imageUrl: "/templates/family-2.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=800&q=80",
    prompt:
      "A candid family photo in a lush green park, natural daylight, joyful expressions, photorealistic, high detail img",
  },
  {
    id: "family-3",
    name: "Cozy Indoors",
    description: "Intimate family portrait with soft indoor lighting",
    category: "family",
    imageUrl: "/templates/family-3.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80",
    prompt:
      "A cozy family portrait indoors, soft natural window light, warm tones, intimate atmosphere, photorealistic img",
  },
  {
    id: "family-4",
    name: "Seasonal Bloom",
    description: "Family surrounded by spring blossoms",
    category: "family",
    imageUrl: "/templates/family-4.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80",
    prompt:
      "A beautiful family photo surrounded by spring cherry blossoms, soft pink light, professional photography, photorealistic img",
  },

  // Self Portraits
  {
    id: "portrait-1",
    name: "Studio Headshot",
    description: "Professional studio portrait with perfect lighting",
    category: "portrait",
    imageUrl: "/templates/portrait-1.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    prompt:
      "A professional studio headshot portrait, perfect studio lighting, clean background, sharp focus, ultra high quality, photorealistic img",
  },
  {
    id: "portrait-2",
    name: "Natural Light Portrait",
    description: "Soft, flattering natural light self portrait",
    category: "portrait",
    imageUrl: "/templates/portrait-2.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    prompt:
      "A gorgeous natural light portrait, soft diffused sunlight, beautiful bokeh, genuine smile, high quality photography img",
  },
  {
    id: "portrait-3",
    name: "Urban Edge",
    description: "Stylish portrait with an urban city backdrop",
    category: "portrait",
    imageUrl: "/templates/portrait-3.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    prompt:
      "A stylish urban portrait, city backdrop, editorial photography, sharp and detailed, modern aesthetic, photorealistic img",
  },
  {
    id: "portrait-4",
    name: "Forest Mystique",
    description: "Ethereal portrait surrounded by lush greenery",
    category: "portrait",
    imageUrl: "/templates/portrait-4.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
    prompt:
      "An ethereal portrait in a lush green forest, dappled light, magical atmosphere, high quality photography, photorealistic img",
  },

  // Vacation Photos
  {
    id: "vacation-1",
    name: "Tropical Paradise",
    description: "Breathtaking tropical beach with crystal waters",
    category: "vacation",
    imageUrl: "/templates/vacation-1.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    prompt:
      "A stunning tropical beach vacation photo, crystal clear turquoise water, white sand, vibrant colors, photorealistic img",
  },
  {
    id: "vacation-2",
    name: "Mountain Adventure",
    description: "Epic mountain landscape with dramatic vistas",
    category: "vacation",
    imageUrl: "/templates/vacation-2.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    prompt:
      "An epic mountain adventure photo, dramatic alpine scenery, clear blue sky, professional travel photography, photorealistic img",
  },
  {
    id: "vacation-3",
    name: "European Stroll",
    description: "Charming European city street scene",
    category: "vacation",
    imageUrl: "/templates/vacation-3.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    prompt:
      "A charming European city vacation photo, beautiful architecture, golden hour, travel photography, photorealistic img",
  },
  {
    id: "vacation-4",
    name: "Sunset Safari",
    description: "Magical African savanna at sunset",
    category: "vacation",
    imageUrl: "/templates/vacation-4.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    prompt:
      "A magical safari vacation photo at sunset, African savanna, golden light, adventurous atmosphere, photorealistic img",
  },

  // Cinematic
  {
    id: "cinematic-1",
    name: "Noir Drama",
    description: "Dramatic film noir style with moody shadows",
    category: "cinematic",
    imageUrl: "/templates/cinematic-1.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    prompt:
      "A dramatic film noir style cinematic photo, high contrast shadows, moody atmosphere, cinematic color grading, photorealistic img",
  },
  {
    id: "cinematic-2",
    name: "Epic Blockbuster",
    description: "Hollywood blockbuster cinematic composition",
    category: "cinematic",
    imageUrl: "/templates/cinematic-2.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
    prompt:
      "An epic Hollywood blockbuster style cinematic photo, dramatic lighting, lens flare, cinematic wide angle, ultra high quality photorealistic img",
  },
  {
    id: "cinematic-3",
    name: "Neon Nights",
    description: "Vibrant neon-lit night scene with urban energy",
    category: "cinematic",
    imageUrl: "/templates/cinematic-3.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=800&q=80",
    prompt:
      "A vibrant neon-lit night city scene, colorful reflections, cyberpunk atmosphere, cinematic color grading, photorealistic img",
  },
  {
    id: "cinematic-4",
    name: "Golden Epic",
    description: "Sweeping epic landscape with golden atmosphere",
    category: "cinematic",
    imageUrl: "/templates/cinematic-4.svg",
    styleImageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    prompt:
      "A sweeping epic cinematic landscape, golden hour light, dramatic clouds, widescreen composition, photorealistic img",
  },
];

export const CATEGORIES: Category[] = [
  "family",
  "portrait",
  "vacation",
  "cinematic",
];
