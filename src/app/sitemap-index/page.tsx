import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { mainServicePages } from "../../lib/content/main-services";
import { contentPages } from "../../lib/content/pages";
import { prosePages } from "../../lib/content/prose";
import { towns } from "../../lib/content/towns";
import type { TownPage } from "../../lib/content/towns";
import { nassauTowns, REGION_LABELS } from "../../lib/content/nassau-towns";
import type { NassauSubRegion, NassauTownPage } from "../../lib/content/nassau-towns";
import { team } from "../../lib/content/team";
import { blogPosts } from "../../lib/content/blog";
import type { ContentPage } from "../../lib/content/types";
import { breadcrumbSchema, homeBreadcrumbs, jsonLdAttrs } from "../../lib/schema";
import { Breadcrumbs } from "../breadcrumbs";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: { absolute: "Site Map | Planet Pooch Pet Resort" },
  description:
    "Browse every page on Planet Pooch — services, town pages across Nassau County, blog, team, and policies.",
  alternates: { canonical: "/sitemap-index/" },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-2xl leading-tight text-[var(--pp-ink)] sm:text-3xl">{title}</h2>
      <div className="mt-5 grid gap-2 text-sm leading-7 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

function PageLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-[rgba(47,42,39,0.82)] transition hover:text-[var(--pp-main)]"
    >
      {label}
    </Link>
  );
}

export default function SiteMapPage() {
  const crumbs = breadcrumbSchema(homeBreadcrumbs("Site Map", "sitemap-index"));

  const groupedNassau: Record<NassauSubRegion, NassauTownPage[]> = {
    "north-shore": [],
    "central-nassau": [],
    "south-shore": [],
  };
  for (const t of Object.values(nassauTowns)) groupedNassau[t.subRegion].push(t);
  for (const k of Object.keys(groupedNassau) as NassauSubRegion[]) {
    groupedNassau[k].sort((a, b) => a.town.localeCompare(b.town));
  }

  const standalone = (Object.values(contentPages) as ContentPage[]).filter(
    (p) => !p.canonicalSlug || p.canonicalSlug === p.slug
  );

  const featuredBlog = Object.values(blogPosts).filter((p) => p.hasFullContent);
  const archiveBlog = Object.values(blogPosts).filter((p) => !p.hasFullContent);

  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="bg-[var(--pp-night)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SiteHeader />
        </div>
      </section>

      <section className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Site Map" }]}
            className="mb-6"
          />
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-main)]/75">
            Index
          </p>
          <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Site Map</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[rgba(47,42,39,0.75)]">
            Every page on planet-pooch.com — services, town pages across Nassau County,
            the blog, our team, and policies.
          </p>

          <Section title="Main Services">
            {Object.values(mainServicePages).map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
            <PageLink href="/contact/" label="Contact" />
          </Section>

          <Section title="Other Pages">
            {standalone.map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
          </Section>

          <Section title="Town Pages — Service Areas">
            {(Object.values(towns) as TownPage[]).map((p) => (
              <PageLink
                key={p.slug}
                href={`/${p.slug}/`}
                label={`${p.town}${p.region ? `, ${p.region}` : ""} — ${p.service.replace(/-/g, " ")}`}
              />
            ))}
          </Section>

          {(Object.keys(groupedNassau) as NassauSubRegion[]).map((region) => (
            <Section key={region} title={`Nassau County — ${REGION_LABELS[region]}`}>
              {groupedNassau[region].map((p) => (
                <PageLink
                  key={p.slug}
                  href={`/${p.slug}/`}
                  label={`Dog Services in ${p.town}, NY`}
                />
              ))}
            </Section>
          ))}

          <Section title="Our Team">
            {Object.values(team).map((m) => (
              <PageLink key={m.slug} href={`/${m.slug}/`} label={`Meet ${m.name}`} />
            ))}
          </Section>

          <Section title="Featured Articles">
            {featuredBlog.map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
          </Section>

          <Section title="Blog Archive">
            {archiveBlog.map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
          </Section>

          <Section title="Policies & Legal">
            {Object.values(prosePages).map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
          </Section>
        </div>
      </section>

      <SiteFooter />

      <script {...jsonLdAttrs(crumbs)} />
    </main>
  );
}
