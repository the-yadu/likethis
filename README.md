# LikeThis

AI-powered personalized photo generation. Choose a professional template from our curated collection of family portraits, self portraits, vacation photos, or cinematic photos — then upload your own photo to generate a stunning, personalized version.

## Getting Started

### 1. Clone and install dependencies

```bash
npm install
```

### 2. Configure your Replicate API token

```bash
cp .env.local.example .env.local
# Then edit .env.local and add your Replicate API token
# Get one at https://replicate.com/account/api-tokens
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## How It Works

1. **Choose a Template** — Browse 16 professional templates across 4 categories: Family Photos, Self Portraits, Vacation Photos, and Cinematic
2. **Upload Your Photo** — Upload a clear photo of yourself (a face photo works best)
3. **Generate** — Our AI (powered by [Replicate](https://replicate.com) and the PhotoMaker model) combines your photo with the selected template style to create a personalized high-quality image

## Tech Stack

- [Next.js 16](https://nextjs.org) with App Router
- [Tailwind CSS 4](https://tailwindcss.com)
- [Replicate](https://replicate.com) — AI image generation via `tencentarc/photomaker-style`
- TypeScript

