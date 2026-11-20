import Image from "next/image";

/** Shared hero photograph for the Mobile Grooming site. */
export function HeroBackdrop() {
  return <>
    <Image src="/grooming-van-colonial.webp" alt="" fill sizes="100vw" className="object-cover object-[40%_top] sm:object-top" preload />
    <div className="pp-hero-image-overlay absolute inset-0" aria-hidden="true" />
  </>;
}
