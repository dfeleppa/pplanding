import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Mail, MapPin, Phone } from "lucide-react";
import type { ProsePage } from "../lib/content/types";
import { ADDRESS_LINES, SITE } from "../lib/site";
import { breadcrumbSchema, homeBreadcrumbs, jsonLdAttrs } from "../lib/schema";
import { SiteHeader } from "./site-header";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

type ProsePageTemplateProps = {
  page: ProsePage;
};

export function ProsePageTemplate({ page }: ProsePageTemplateProps) {
  const crumbs = breadcrumbSchema(homeBreadcrumbs(page.title, page.slug));
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
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-main)]/75">
            {page.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">{page.title}</h1>
          {page.lastUpdated ? (
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[rgba(47,42,39,0.6)]">
              Last updated: {page.lastUpdated}
            </p>
          ) : null}
          {page.intro ? (
            <p className="mt-6 text-base leading-8 text-[rgba(47,42,39,0.82)]">{page.intro}</p>
          ) : null}

          <div className="mt-12 grid gap-10">
            {page.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-2xl leading-tight text-[var(--pp-ink)] sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs ? (
                  <div className="mt-4 grid gap-4 text-base leading-8 text-[rgba(47,42,39,0.8)]">
                    {section.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-4 grid gap-2 text-base leading-7 text-[rgba(47,42,39,0.8)]">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <ArrowRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-[var(--pp-main)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--pp-night)] px-5 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-mint)]">
              Questions about this page?
            </p>
            <h2 className="mt-3 text-3xl leading-tight">We&apos;re happy to walk you through it.</h2>
            <div className="mt-6 grid gap-3 text-sm text-white/82 sm:grid-cols-3">
              <a href={SITE.phone.href} className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{SITE.phone.display}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{SITE.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {ADDRESS_LINES[0]}
                  <br />
                  {ADDRESS_LINES[1]}
                </span>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85 transition hover:bg-white/8"
          >
            <Home className="h-4 w-4" />
            Back Home
          </Link>
        </div>
      </section>

      <script {...jsonLdAttrs(crumbs)} />
    </main>
  );
}
