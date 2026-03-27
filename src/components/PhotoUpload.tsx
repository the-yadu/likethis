"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface PhotoUploadProps {
  onImageSelected: (dataUrl: string) => void;
  imageDataUrl: string | null;
}

export default function PhotoUpload({
  onImageSelected,
  imageDataUrl,
}: PhotoUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          onImageSelected(result);
        }
      };
      reader.readAsDataURL(file);
    },
    [onImageSelected]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  if (imageDataUrl) {
    return (
      <div className="relative w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden ring-2 ring-amber-500">
        <Image
          src={imageDataUrl}
          alt="Uploaded photo"
          fill
          className="object-cover"
        />
        <button
          onClick={() => {
            onImageSelected("");
            if (inputRef.current) inputRef.current.value = "";
          }}
          className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors backdrop-blur-sm"
          aria-label="Remove photo"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-sm font-medium">Photo ready ✓</p>
          <button
            onClick={() => inputRef.current?.click()}
            className="text-amber-400 text-xs mt-1 hover:text-amber-300 transition-colors"
          >
            Change photo
          </button>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`w-full aspect-square max-w-sm mx-auto rounded-2xl border-2 border-dashed cursor-pointer transition-all flex flex-col items-center justify-center gap-4 p-8 text-center ${
        isDragging
          ? "border-amber-500 bg-amber-500/10"
          : "border-zinc-600 bg-zinc-900/50 hover:border-zinc-400 hover:bg-zinc-800/50"
      }`}
    >
      <div
        className={`rounded-full p-4 transition-colors ${
          isDragging ? "bg-amber-500/20" : "bg-zinc-800"
        }`}
      >
        <svg
          className={`w-10 h-10 transition-colors ${
            isDragging ? "text-amber-400" : "text-zinc-400"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      </div>
      <div>
        <p className="text-zinc-200 font-semibold text-base">
          {isDragging ? "Drop your photo here" : "Upload your photo"}
        </p>
        <p className="text-zinc-500 text-sm mt-1">
          Drag & drop or click to browse
        </p>
        <p className="text-zinc-600 text-xs mt-2">
          JPG, PNG, WEBP · Best with a clear face photo
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
