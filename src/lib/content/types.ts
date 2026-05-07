import type { StaticImageData } from "next/image";

export type ContentSection =
  | { type: "prose"; title?: string; eyebrow?: string; paragraphs: string[] }
  | { type: "list"; title?: string; eyebrow?: string; intro?: string; items: string[] }
  | {
      type: "checklist";
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: string[];
    }
  | {
      type: "pricing";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      columns: string[];
      rows: Array<string[]>;
      note?: string;
    }
  | {
      type: "tieredPricing";
      title?: string;
      eyebrow?: string;
      intro?: string;
      tiers: Array<{
        name: string;
        price: string;
        cadence?: string;
        description?: string;
        features: string[];
        featured?: boolean;
      }>;
      note?: string;
    }
  | {
      type: "comparison";
      title?: string;
      eyebrow?: string;
      intro?: string;
      columns: string[];
      rows: Array<{ label: string; values: Array<boolean | string> }>;
      note?: string;
    }
  | {
      type: "definitions";
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: Array<{ term: string; definition: string }>;
    }
  | {
      type: "timeline";
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: Array<{ time: string; label: string; body: string }>;
    }
  | {
      type: "faq";
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: Array<{ question: string; answer: string }>;
    }
  | {
      type: "callout";
      id?: string;
      title: string;
      eyebrow?: string;
      body: string;
      cta?: { label: string; href: string };
    }
  | {
      type: "iconBullets";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      icon: string;
      items: string[];
    }
  | {
      type: "featureGrid";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: Array<{ icon: string; title: string; description: string }>;
      ctas?: Array<{ label: string; href: string }>;
    };

export type ContentPage = {
  slug: string;
  title: string;
  eyebrow: string;
  hero: string;
  metaTitle: string;
  metaDescription: string;
  canonicalSlug?: string;
  image?: string | StaticImageData;
  heroCtas?: {
    primary: { label: string; href: string };
    ghost: { label: string; href: string };
  };
  sections: ContentSection[];
};

export type ProsePage = {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated?: string;
  intro?: string;
  sections: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};
