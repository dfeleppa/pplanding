import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDispatchSlugs, getDispatchEntry } from "../../lib/content/registry";
import { TownPageTemplate } from "../town-page-template";
import { TeamBioTemplate } from "../team-bio-template";
import { BlogPostTemplate } from "../blog-post-template";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllDispatchSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getDispatchEntry(slug);
  if (!entry) return {};

  const data = entry.data;
  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical: `/${slug}/` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/${slug}/`,
      type: entry.type === "blog" ? "article" : "website",
    },
  };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const entry = getDispatchEntry(slug);
  if (!entry) notFound();

  switch (entry.type) {
    case "town":
      return <TownPageTemplate page={entry.data} />;
    case "team":
      return <TeamBioTemplate member={entry.data} />;
    case "blog":
      return <BlogPostTemplate post={entry.data} />;
  }
}
