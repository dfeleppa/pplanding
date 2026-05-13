import type { StaticImageData } from "next/image";

export type ContentSection =
  | {
      type: "prose";
      title?: string;
      eyebrow?: string;
      paragraphs: string[];
      width?: "default" | "wide";
      wide?: boolean;
      highlights?: Array<{ icon: string; label: string }>;
    }
  | { type: "list"; title?: string; eyebrow?: string; intro?: string; items: string[] }
  | {
      type: "checklist";
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: string[];
      image?: string | StaticImageData;
      imageAlt?: string;
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
      cta?: { label: string; href: string };
    }
  | {
      type: "pricingPair";
      id?: string;
      eyebrow?: string;
      title?: string;
      intro?: string;
      tables: Array<{
        title: string;
        intro?: string;
        columns: string[];
        rows: Array<string[]>;
        note?: string;
      }>;
      cta?: { label: string; href: string };
    }
  | {
      type: "tieredPricing";
      id?: string;
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
        badge?: string;
      }>;
      uniformStyle?: "dark";
      note?: string;
      secondaryCard?: {
        eyebrow?: string;
        title: string;
        body: string;
        cta?: { label: string; href: string };
      };
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
      items: Array<{
        term: string;
        definition: string;
        cta?: { label: string; href: string };
      }>;
    }
  | {
      type: "timeline";
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: Array<{
        time: string;
        label: string;
        body: string;
        cta?: { label: string; href: string };
      }>;
    }
  | {
      type: "faq";
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: Array<{ question: string; answer: string }>;
      cta?: { label: string; href: string };
    }
  | {
      type: "callout";
      id?: string;
      title: string;
      eyebrow?: string;
      body: string;
      cta?: { label: string; href: string };
      ctas?: Array<{ label: string; href: string }>;
      wide?: boolean;
    }
  | {
      type: "iconBullets";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      icon: string;
      items: string[];
      cta?: { label: string; href: string };
      wide?: boolean;
    }
  | {
      type: "featureGrid";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
        cta?: { label: string; href: string };
      }>;
      cta?: { label: string; href: string };
      ctas?: Array<{ label: string; href: string }>;
    }
  | {
      type: "slideshow";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      images: Array<{ src: string | StaticImageData; alt: string }>;
    }
  | {
      type: "splitCards";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      cards: [
        { title: string; body: string; items?: string[] },
        { title: string; body: string; items?: string[] },
      ];
      footerCards?: Array<{ title: string; subtitle?: string; items?: string[]; theme?: "dark" | "mint" }>;
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
    tertiary?: { label: string; href: string };
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
