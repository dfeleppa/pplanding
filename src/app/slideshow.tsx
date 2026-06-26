"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";

type SlideshowProps = {
  images: Array<{ src: string | StaticImageData; alt: string }>;
  interval?: number;
};

export function Slideshow({ images, interval = 4000 }: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [hasMultipleImages, images.length, interval]);

  function showPrevious() {
    if (!hasMultipleImages) return;
    setCurrent((i) => (i - 1 + images.length) % images.length);
  }

  function showNext() {
    if (!hasMultipleImages) return;
    setCurrent((i) => (i + 1) % images.length);
  }

  if (images.length === 0) return null;

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <button
        type="button"
        aria-label="Previous gallery image"
        disabled={!hasMultipleImages}
        onClick={showPrevious}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-[var(--pp-night)]/85 text-white shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition hover:bg-[var(--pp-main)] disabled:cursor-default disabled:opacity-45 disabled:hover:bg-[var(--pp-night)]/85"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next gallery image"
        disabled={!hasMultipleImages}
        onClick={showNext}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-[var(--pp-night)]/85 text-white shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition hover:bg-[var(--pp-main)] disabled:cursor-default disabled:opacity-45 disabled:hover:bg-[var(--pp-night)]/85"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
