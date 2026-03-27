"use client";

import { Template, Category } from "@/types";
import { CATEGORIES, CATEGORY_LABELS, TEMPLATES } from "@/lib/templates";
import Image from "next/image";
import { useState } from "react";

interface TemplateGalleryProps {
  selectedTemplate: Template | null;
  onSelect: (template: Template) => void;
}

export default function TemplateGallery({
  selectedTemplate,
  onSelect,
}: TemplateGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered =
    activeCategory === "all"
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === "all"
              ? "bg-amber-500 text-black"
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-amber-500 text-black"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((template) => {
          const isSelected = selectedTemplate?.id === template.id;
          return (
            <button
              key={template.id}
              onClick={() => onSelect(template)}
              className={`relative group rounded-xl overflow-hidden aspect-[3/4] transition-all duration-200 focus:outline-none ${
                isSelected
                  ? "ring-4 ring-amber-500 scale-[1.02]"
                  : "ring-1 ring-zinc-700 hover:ring-zinc-500 hover:scale-[1.01]"
              }`}
            >
              <Image
                src={template.imageUrl}
                alt={template.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity ${
                  isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
              {/* Label */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-3 text-left transition-opacity ${
                  isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <p className="text-white text-sm font-semibold leading-tight">
                  {template.name}
                </p>
                <p className="text-zinc-300 text-xs mt-0.5 leading-snug">
                  {template.description}
                </p>
              </div>
              {/* Selected Check */}
              {isSelected && (
                <div className="absolute top-2 right-2 bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
              {/* Category Badge */}
              <div className="absolute top-2 left-2">
                <span className="bg-black/60 text-zinc-300 text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {CATEGORY_LABELS[template.category]}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
