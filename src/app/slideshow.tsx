"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";

type SlideshowProps = {
  images: Array<{ src: string | StaticImageData; alt: string }>;
  interval?: number;
};

export function Slideshow({ images, interval = 4000 }: SlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

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
    </div>
  );
}
