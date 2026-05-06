import type { Metadata } from "next";
import type { ContentPage, ProsePage } from "./types";

export function makeContentMetadata(page: ContentPage): Metadata {
  const canonical = `/${page.canonicalSlug ?? page.slug}/`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      type: "website",
    },
  };
}

export function makeProseMetadata(page: ProsePage): Metadata {
  const canonical = `/${page.slug}/`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      type: "website",
    },
  };
}
