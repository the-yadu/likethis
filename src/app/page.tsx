"use client";

import { useState, useCallback } from "react";
import TemplateGallery from "@/components/TemplateGallery";
import PhotoUpload from "@/components/PhotoUpload";
import ResultDisplay from "@/components/ResultDisplay";
import { Template, GenerationStatus } from "@/types";
import Image from "next/image";

type Step = 1 | 2 | 3;

export default function Home() {
  const [step, setStep] = useState<Step>(1);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [userImageDataUrl, setUserImageDataUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<GenerationStatus>("idle");
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleTemplateSelect = useCallback((template: Template) => {
    setSelectedTemplate(template);
  }, []);

  const handleImageSelected = useCallback((dataUrl: string) => {
    setUserImageDataUrl(dataUrl || null);
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!selectedTemplate || !userImageDataUrl) return;

    setStatus("loading");
    setErrorMessage(null);
    setStep(3);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateId: selectedTemplate.id,
          userImageDataUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Generation failed");
      }

      setResultUrl(data.imageUrl);
      setStatus("success");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setErrorMessage(msg);
      setStatus("error");
    }
  }, [selectedTemplate, userImageDataUrl]);

  const handleReset = useCallback(() => {
    setStep(1);
    setSelectedTemplate(null);
    setUserImageDataUrl(null);
    setStatus("idle");
    setResultUrl(null);
    setErrorMessage(null);
  }, []);

  const handleRegenerate = useCallback(() => {
    handleGenerate();
  }, [handleGenerate]);

  return (
    <div className="min-h-full bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">LikeThis</span>
          </div>
          <p className="text-zinc-500 text-sm hidden sm:block">
            AI-powered personalized photo generation
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-20">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Create Your{" "}
            <span className="text-amber-500">Perfect Photo</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose a professional template, upload your photo, and let AI
            generate a stunning personalized image — just like the pros.
          </p>
        </div>

        {/* Step Indicator */}
        {!(step === 3 && status !== "idle") && (
          <StepIndicator currentStep={step} />
        )}

        {/* Step Content */}
        {step === 1 && (
          <div className="space-y-8">
            <SectionHeader
              number={1}
              title="Choose Your Template"
              subtitle="Pick the style you want to recreate with yourself"
            />
            <TemplateGallery
              selectedTemplate={selectedTemplate}
              onSelect={handleTemplateSelect}
            />
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedTemplate}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-black font-semibold py-3 px-8 rounded-full transition-all text-base"
              >
                Continue
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <SectionHeader
              number={2}
              title="Upload Your Photo"
              subtitle="A clear face photo works best — we'll use it to personalize your image"
            />

            {/* Selected Template Preview */}
            {selectedTemplate && (
              <div className="flex items-center gap-4 bg-zinc-900 rounded-2xl p-4 max-w-md mx-auto border border-zinc-800">
                <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={selectedTemplate.styleImageUrl}
                    alt={selectedTemplate.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-400 text-xs uppercase tracking-wider font-medium mb-1">
                    Selected Template
                  </p>
                  <p className="text-white font-semibold truncate">
                    {selectedTemplate.name}
                  </p>
                  <p className="text-zinc-500 text-sm truncate">
                    {selectedTemplate.description}
                  </p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-zinc-500 hover:text-amber-400 transition-colors flex-shrink-0"
                  aria-label="Change template"
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
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </button>
              </div>
            )}

            <PhotoUpload
              onImageSelected={handleImageSelected}
              imageDataUrl={userImageDataUrl}
            />

            <div className="flex justify-center gap-3 pt-4">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-3 px-6 rounded-full transition-colors"
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
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back
              </button>
              <button
                onClick={handleGenerate}
                disabled={!userImageDataUrl}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-black font-semibold py-3 px-8 rounded-full transition-all text-base"
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
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
                Generate Image
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8">
            {status === "loading" && (
              <div className="flex flex-col items-center justify-center gap-6 py-20">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full border-4 border-zinc-800" />
                  <div className="absolute inset-0 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
                  <div className="absolute inset-3 rounded-full bg-zinc-900 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    Creating your personalized image...
                  </h2>
                  <p className="text-zinc-500 text-sm max-w-sm">
                    Our AI is combining your photo with the selected template.
                    This usually takes 30–60 seconds.
                  </p>
                </div>
                <GeneratingSteps />
              </div>
            )}

            {status === "error" && (
              <div className="flex flex-col items-center gap-6 py-16 text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">
                    Generation Failed
                  </h2>
                  <p className="text-zinc-400 text-sm max-w-md">
                    {errorMessage || "Something went wrong. Please try again."}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={handleRegenerate}
                    className="bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 px-6 rounded-full transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {status === "success" && resultUrl && selectedTemplate && (
              <ResultDisplay
                resultUrl={resultUrl}
                template={selectedTemplate}
                onReset={handleReset}
                onRegenerate={handleRegenerate}
                isLoading={false}
              />
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center">
        <p className="text-zinc-600 text-sm">
          LikeThis · AI-powered personalized photo generation
        </p>
      </footer>
    </div>
  );
}

function StepIndicator({ currentStep }: { currentStep: Step }) {
  const steps = [
    { number: 1, label: "Choose Template" },
    { number: 2, label: "Upload Photo" },
    { number: 3, label: "Generate" },
  ];

  return (
    <div className="flex items-center justify-center mb-10 max-w-sm mx-auto">
      {steps.map((s, i) => (
        <div key={s.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                currentStep === s.number
                  ? "bg-amber-500 text-black"
                  : currentStep > s.number
                  ? "bg-amber-500/20 text-amber-500"
                  : "bg-zinc-800 text-zinc-500"
              }`}
            >
              {currentStep > s.number ? (
                <svg
                  className="w-4 h-4"
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
              ) : (
                s.number
              )}
            </div>
            <span
              className={`text-xs mt-1.5 font-medium whitespace-nowrap ${
                currentStep === s.number ? "text-amber-400" : "text-zinc-600"
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`h-px w-16 sm:w-24 mx-2 mb-5 transition-colors ${
                currentStep > s.number ? "bg-amber-500/40" : "bg-zinc-800"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: number;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-3 border border-amber-500/20">
        <span className="w-5 h-5 bg-amber-500 text-black rounded-full text-xs flex items-center justify-center font-bold">
          {number}
        </span>
        Step {number} of 3
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        {title}
      </h2>
      <p className="text-zinc-400 text-base max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}

function GeneratingSteps() {
  const steps = [
    "Analyzing your photo...",
    "Applying template style...",
    "Enhancing details...",
    "Finalizing image...",
  ];

  return (
    <div className="flex flex-col gap-2 text-left max-w-xs">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          <span className="text-zinc-500 text-sm">{s}</span>
        </div>
      ))}
    </div>
  );
}
