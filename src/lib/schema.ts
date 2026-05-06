import { SITE } from "./site";

type Crumb = { name: string; item: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  slug,
  serviceType,
}: {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType ?? name,
    description,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: SITE.serviceArea.counties.map((c) => ({
      "@type": "AdministrativeArea",
      name: `${c}, NY`,
    })),
    url: `${SITE.url}/${slug}/`,
  };
}

export function articleSchema({
  headline,
  description,
  slug,
  datePublished,
}: {
  headline: string;
  description: string;
  slug: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE.url}/${slug}/`,
    publisher: { "@id": `${SITE.url}/#business` },
    ...(datePublished ? { datePublished } : {}),
  };
}

export function jsonLdAttrs<T>(schema: T) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}

export function homeBreadcrumbs(currentName: string, currentSlug: string): Crumb[] {
  return [
    { name: "Home", item: `${SITE.url}/` },
    { name: currentName, item: `${SITE.url}/${currentSlug}/` },
  ];
}

export function nestedBreadcrumbs(
  parents: Array<{ name: string; slug: string }>,
  currentName: string,
  currentSlug: string
): Crumb[] {
  return [
    { name: "Home", item: `${SITE.url}/` },
    ...parents.map((p) => ({ name: p.name, item: `${SITE.url}/${p.slug}/` })),
    { name: currentName, item: `${SITE.url}/${currentSlug}/` },
  ];
}
