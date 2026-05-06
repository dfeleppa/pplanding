import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";
import { servicePages } from "./service-page-data";
import { contentPages } from "../lib/content/pages";
import { prosePages } from "../lib/content/prose";
import { towns } from "../lib/content/towns";
import { team } from "../lib/content/team";
import { blogPosts } from "../lib/content/blog";

type SitemapEntry = NonNullable<MetadataRoute.Sitemap>[number];

const ROOT_PRIORITY = 1.0;
const SERVICE_PRIORITY = 0.9;
const SUBPAGE_PRIORITY = 0.7;
const SUPPORT_PRIORITY = 0.5;
const ARCHIVE_PRIORITY = 0.4;

const today = new Date();

// Always emit URLs with a trailing slash to match WordPress / Yoast canonicals.
// Root path stays as `/`; everything else gets `/.../`.
const make = (path: string, priority: number, changeFrequency: SitemapEntry["changeFrequency"]): SitemapEntry => {
  const normalized = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return {
    url: `${SITE.url}${normalized}`,
    lastModified: today,
    changeFrequency,
    priority,
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: SitemapEntry[] = [];

  // Homepage
  entries.push(make("/", ROOT_PRIORITY, "weekly"));

  // Core pages
  entries.push(
    make("/contact", SERVICE_PRIORITY, "monthly"),
    make("/contactus", SUPPORT_PRIORITY, "yearly"),
    make("/about-us", SUBPAGE_PRIORITY, "monthly"),
    make("/our-team", SUBPAGE_PRIORITY, "monthly"),
    make("/faqs", SUBPAGE_PRIORITY, "monthly"),
    make("/were-hiring", SUPPORT_PRIORITY, "monthly"),
    make("/partners", SUPPORT_PRIORITY, "monthly"),
    make("/blog", SUBPAGE_PRIORITY, "weekly"),
    make("/thank-you", ARCHIVE_PRIORITY, "yearly"),
  );

  // Service pages (top priority — these are the SEO drivers)
  for (const slug of Object.keys(servicePages)) {
    entries.push(make(`/${slug}`, SERVICE_PRIORITY, "weekly"));
  }

  // Service sub-pages (pricing, packages, day-in-the-life, etc.)
  for (const slug of Object.keys(contentPages)) {
    // Skip ones already in core
    if (["about-us", "our-team", "faqs", "were-hiring", "partners", "blog", "thank-you", "contactus"].includes(slug)) continue;
    entries.push(make(`/${slug}`, SUBPAGE_PRIORITY, "monthly"));
  }

  // Prose pages (legal)
  for (const slug of Object.keys(prosePages)) {
    entries.push(make(`/${slug}`, SUPPORT_PRIORITY, "yearly"));
  }

  // Town landing pages (drive local SEO)
  for (const slug of Object.keys(towns)) {
    entries.push(make(`/${slug}`, SUBPAGE_PRIORITY, "monthly"));
  }

  // Team bios
  for (const slug of Object.keys(team)) {
    entries.push(make(`/${slug}`, ARCHIVE_PRIORITY, "yearly"));
  }

  // Blog posts — featured posts higher priority than archive
  for (const [slug, post] of Object.entries(blogPosts)) {
    entries.push(
      make(`/${slug}`, post.hasFullContent ? SUBPAGE_PRIORITY : ARCHIVE_PRIORITY, "monthly")
    );
  }

  return entries;
}
