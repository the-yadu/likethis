"use client";

import Image from "next/image";
import { Template } from "@/types";

interface ResultDisplayProps {
  resultUrl: string;
  template: Template;
  onReset: () => void;
  onRegenerate: () => void;
  isLoading: boolean;
}

export default function ResultDisplay({
  resultUrl,
  template,
  onReset,
  onRegenerate,
  isLoading,
}: ResultDisplayProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(resultUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `likethis-${template.id}-${Date.now()}.jpg`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      window.open(resultUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Your Image is Ready!</h2>
        <p className="text-zinc-400 mt-2 text-sm">
          Generated in the style of &ldquo;{template.name}&rdquo;
        </p>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col gap-2">
          <p className="text-zinc-500 text-xs uppercase tracking-wider text-center font-medium">
            Template
          </p>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-zinc-700">
            <Image
              src={template.styleImageUrl}
              alt={template.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 300px"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-amber-500 text-xs uppercase tracking-wider text-center font-medium">
            Your Result ✨
          </p>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden ring-2 ring-amber-500">
            <Image
              src={resultUrl}
              alt="Generated result"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 300px"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Buy Me a Coffee */}
      <div className="w-full flex flex-col items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center">
        <p className="text-zinc-300 text-sm font-medium">
          🎉 Happy with your result? Support this project!
        </p>
        <a
          href="https://buymeacoffee.com/yadu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-semibold px-6 py-2.5 rounded-full transition-colors text-sm"
        >
          <span className="text-base">☕</span>
          Buy me a coffee
        </a>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 px-6 rounded-full transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download
        </button>
        <button
          onClick={onRegenerate}
          disabled={isLoading}
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-full transition-colors disabled:opacity-50"
        >
          <svg
            className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          {isLoading ? "Generating..." : "Regenerate"}
        </button>
        <button
          onClick={onReset}
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold py-3 px-6 rounded-full transition-colors border border-zinc-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5" />
          </svg>
          Start Over
        </button>
      </div>
    </div>
  );
}
