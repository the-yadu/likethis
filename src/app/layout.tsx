import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LikeThis — AI Personalized Photo Generation",
  description:
    "Choose a professional photo template, upload your photo, and let AI generate a stunning personalized image in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
