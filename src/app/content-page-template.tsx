import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Bath, Brush, Camera, Check, ChevronDown, Droplets, Ear, Eye,
  Footprints, Heart, PawPrint, Ribbon, Scissors, Sparkles, Trees, Users,
  Utensils, Wind, X,
} from "lucide-react";
import type { ContentPage, ContentSection } from "../lib/content/types";
import { breadcrumbSchema, homeBreadcrumbs, jsonLdAttrs } from "../lib/schema";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Slideshow } from "./slideshow";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PawPrint, Footprints, Ear, Bath, Droplets, Wind, Brush, Scissors, Ribbon,
  Trees, Users, Sparkles, Eye, Heart, Camera, Utensils,
};

type ContentPageTemplateProps = {
  page: ContentPage;
};

const sectionPadding = "px-5 py-14 sm:px-8 lg:px-10 lg:py-20";

function SectionEyebrow({ eyebrow, title, intro }: { eyebrow?: string; title?: string; intro?: string }) {
  if (!eyebrow && !title && !intro) return null;
  return (
    <div className="mb-8 max-w-5xl">
      {eyebrow ? (
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">{title}</h2>
      ) : null}
      {intro ? (
        <p className="mt-4 text-base leading-8 text-[rgba(47,42,39,0.78)]">{intro}</p>
      ) : null}
    </div>
  );
}

function SectionRenderer({ section, index }: { section: ContentSection; index: number }) {
  const tone = index % 2 === 0 ? "bg-[var(--pp-cream)]" : "bg-white/55";

  switch (section.type) {
    case "prose": {
      const proseWidth = section.width === "wide" ? "max-w-5xl" : "max-w-3xl";
      const outerWidth = section.wide ? "max-w-[88rem]" : "max-w-7xl";
      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className={`mx-auto ${outerWidth}`}>
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} />
            <div className={`grid ${proseWidth} gap-5 text-base leading-8 text-[rgba(47,42,39,0.82)]`}>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {section.highlights?.length ? (
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {section.highlights.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={item.label} className="flex items-center gap-3 rounded-xl bg-white/65 px-4 py-3">
                      {Icon ? (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--pp-mint)]/20">
                          <Icon className="h-4.5 w-4.5 stroke-[1.5] text-[var(--pp-main)]" />
                        </div>
                      ) : null}
                      <span className="text-sm font-medium text-[var(--pp-ink)]">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>
      );
    }

    case "list":
    case "checklist": {
      const Bullet = section.type === "checklist" ? Check : null;
      const image = section.type === "checklist" ? section.image : undefined;
      const imageAlt = section.type === "checklist" ? section.imageAlt : undefined;
      const list = (
        <ul className="grid gap-3">
          {section.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border border-[rgba(50,73,83,0.1)] bg-white/65 px-5 py-4 text-sm leading-7 text-[rgba(47,42,39,0.82)]"
            >
              {Bullet ? <Bullet className="mt-1 h-4 w-4 shrink-0 text-[var(--pp-main)]" /> : null}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            {image ? (
              <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                <div>
                  <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                  {list}
                </div>
                <div className="relative aspect-[3/4] overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/65">
                  <Image
                    src={image}
                    alt={imageAlt ?? section.title ?? "Planet Pooch"}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <>
                <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                <div className="max-w-3xl">{list}</div>
              </>
            )}
          </div>
        </section>
      );
    }

    case "pricing":
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className="overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/65">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--pp-night)] text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
                    {section.columns.map((col) => (
                      <th key={col} className="px-5 py-3 text-left">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, i) => (
                    <tr
                      key={row.join("|")}
                      className={`${i % 2 === 0 ? "bg-white/30" : "bg-[var(--pp-cream)]"} text-[rgba(47,42,39,0.82)]`}
                    >
                      {row.map((cell, j) => (
                        <td key={j} className="px-5 py-4 leading-7">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.note ? (
              <p className="mt-4 max-w-3xl text-xs italic leading-6 text-[rgba(47,42,39,0.62)]">
                {section.note}
              </p>
            ) : null}
            {section.cta ? (
              <div className="mt-8 flex justify-center">
                <a
                  href={section.cta.href}
                  className="inline-flex items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "pricingPair":
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className="grid gap-8 lg:grid-cols-2">
              {section.tables.map((table) => (
                <div key={table.title}>
                  <h3 className="mb-2 text-xl leading-tight text-[var(--pp-ink)]">{table.title}</h3>
                  {table.intro ? (
                    <p className="mb-4 text-sm text-[rgba(47,42,39,0.72)]">{table.intro}</p>
                  ) : null}
                  <div className="overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/65">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[var(--pp-night)] text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
                          {table.columns.map((col) => (
                            <th key={col} className="px-5 py-3 text-left">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, i) => (
                          <tr
                            key={row.join("|")}
                            className={`${i % 2 === 0 ? "bg-white/30" : "bg-[var(--pp-cream)]"} text-[rgba(47,42,39,0.82)]`}
                          >
                            {row.map((cell, j) => (
                              <td key={j} className="px-5 py-4 leading-7">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {table.note ? (
                    <p className="mt-4 max-w-3xl text-xs italic leading-6 text-[rgba(47,42,39,0.62)]">{table.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
            {section.cta ? (
              <div className="mt-8 flex justify-center">
                <a
                  href={section.cta.href}
                  className="inline-flex items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "tieredPricing": {
      const tierCount = section.tiers.length;
      const gridCols =
        tierCount === 3
          ? "md:grid-cols-3"
          : tierCount >= 4
            ? "md:grid-cols-2 lg:grid-cols-4"
            : "md:grid-cols-2";
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className={`grid gap-5 ${gridCols} lg:items-stretch`}>
              {section.tiers.map((tier) => {
                const uniformDark = section.uniformStyle === "dark";
                const dark = uniformDark || tier.featured;
                const elevated = tier.featured && !uniformDark;
                return (
                  <article
                    key={tier.name}
                    className={`relative flex flex-col gap-4 border p-6 ${
                      elevated
                        ? "z-10 border-[var(--pp-mint)] bg-[var(--pp-night)] text-white shadow-[0_30px_80px_rgba(50,73,83,0.32)] ring-2 ring-[var(--pp-mint)]/50 lg:scale-[1.04]"
                        : dark
                          ? "border-[var(--pp-mint)]/40 bg-[var(--pp-night)] text-white"
                          : "border-[rgba(50,73,83,0.12)] bg-white/65 text-[var(--pp-ink)]"
                    }`}
                  >
                    {tier.badge ? (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[var(--pp-mint)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--pp-night)] shadow-[0_6px_20px_rgba(50,73,83,0.25)]">
                        {tier.badge}
                      </span>
                    ) : null}
                    <header>
                      <p
                        className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                          dark ? "text-[var(--pp-mint)]" : "text-[var(--pp-main)]/75"
                        }`}
                      >
                        {tier.name}
                      </p>
                      <p className="mt-3 text-3xl font-semibold leading-tight">{tier.price}</p>
                      {tier.cadence ? (
                        <p className={`mt-1 text-xs ${dark ? "text-white/70" : "text-[rgba(47,42,39,0.6)]"}`}>
                          {tier.cadence}
                        </p>
                      ) : null}
                      {tier.description ? (
                        <p
                          className={`mt-3 text-sm font-bold leading-6 ${
                            dark ? "text-white/80" : "text-[rgba(47,42,39,0.78)]"
                          }`}
                        >
                          {tier.description}
                        </p>
                      ) : null}
                    </header>
                    <ul className="grid gap-2 text-sm leading-6">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check
                            className={`mt-1 h-4 w-4 shrink-0 ${
                              dark ? "text-[var(--pp-mint)]" : "text-[var(--pp-main)]"
                            }`}
                          />
                          <span className={dark ? "text-white/85" : "text-[rgba(47,42,39,0.8)]"}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
            {section.note ? (
              <div className="mt-8 rounded-2xl bg-lime-100 px-6 py-5 text-sm font-bold text-lime-900">
                {section.note}
              </div>
            ) : null}
            {section.secondaryCard ? (
              <article className="mt-8 flex flex-col gap-5 border border-[rgba(50,73,83,0.12)] bg-white p-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  {section.secondaryCard.eyebrow ? (
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
                      {section.secondaryCard.eyebrow}
                    </p>
                  ) : null}
                  <h3 className="mt-2 text-2xl leading-tight text-[var(--pp-ink)]">
                    {section.secondaryCard.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                    {section.secondaryCard.body}
                  </p>
                </div>
                {section.secondaryCard.cta ? (
                  <Link
                    href={section.secondaryCard.cta.href}
                    className="inline-flex shrink-0 items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                  >
                    {section.secondaryCard.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </article>
            ) : null}
          </div>
        </section>
      );
    }

    case "comparison":
      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className="overflow-x-auto border border-[rgba(50,73,83,0.12)] bg-white/65">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="bg-[var(--pp-night)] text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
                    {section.columns.map((col) => (
                      <th key={col} className="px-5 py-3 text-left">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`${i % 2 === 0 ? "bg-white/30" : "bg-[var(--pp-cream)]"} text-[rgba(47,42,39,0.82)]`}
                    >
                      <td className="px-5 py-4 leading-7 font-medium text-[var(--pp-ink)]">
                        {row.label}
                      </td>
                      {row.values.map((value, j) => (
                        <td key={j} className="px-5 py-4 leading-7">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="h-4 w-4 text-[var(--pp-main)]" />
                            ) : (
                              <X className="h-4 w-4 text-[rgba(47,42,39,0.3)]" aria-label="Not included" />
                            )
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.note ? (
              <p className="mt-4 max-w-3xl text-xs italic leading-6 text-[rgba(47,42,39,0.62)]">
                {section.note}
              </p>
            ) : null}
          </div>
        </section>
      );

    case "definitions":
      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <dl className="grid gap-5 md:grid-cols-2">
              {section.items.map((item) => (
                <div
                  key={item.term}
                  className="flex flex-col border border-[rgba(50,73,83,0.12)] bg-white/65 p-6"
                >
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/80">
                    {item.term}
                  </dt>
                  <dd className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.82)]">
                    {item.definition}
                  </dd>
                  {item.cta ? (
                    <Link
                      href={item.cta.href}
                      className="mt-5 inline-flex w-fit items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                    >
                      {item.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </section>
      );

    case "timeline":
      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <ol className={`grid gap-5 ${section.items.length > 1 ? "lg:grid-cols-2" : ""}`}>
              {section.items.map((item) => (
                <li
                  key={`${item.time}-${item.label}`}
                  className="flex flex-col border border-[rgba(50,73,83,0.12)] bg-white/65 p-6"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/80">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-3 text-xl font-semibold text-[var(--pp-ink)]">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">{item.body}</p>
                  {item.cta ? (
                    <Link
                      href={item.cta.href}
                      className="mt-5 inline-flex w-fit items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                    >
                      {item.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case "faq":
      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className="grid gap-4">
              {section.items.map((item) => (
                <article
                  key={item.question}
                  className="border border-[rgba(50,73,83,0.12)] bg-white/65 p-6"
                >
                  <h3 className="text-xl font-semibold text-[var(--pp-ink)]">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">{item.answer}</p>
                </article>
              ))}
            </div>
            {section.cta ? (
              <div className="mt-10 flex justify-center">
                <a
                  href={section.cta.href}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/85 transition hover:text-[var(--pp-main)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "iconBullets": {
      const BulletIcon = iconMap[section.icon];
      const itemCount = section.items.length;
      const bulletCols =
        itemCount >= 5
          ? "sm:grid-cols-2 lg:grid-cols-5"
          : itemCount === 4
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : itemCount === 3
              ? "sm:grid-cols-3"
              : "sm:grid-cols-2";
      const iconBulletsOuterWidth = section.wide ? "max-w-[88rem]" : "max-w-7xl";
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className={`mx-auto ${iconBulletsOuterWidth}`}>
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className={`grid gap-5 ${bulletCols}`}>
              {section.items.map((item) => (
                <article key={item} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--pp-mint)]/20">
                    {BulletIcon ? <BulletIcon className="h-6 w-6 stroke-[1.5] text-[var(--pp-main)]" /> : null}
                  </div>
                  <p className="mx-auto mt-3 max-w-[12rem] text-sm leading-6 text-[rgba(47,42,39,0.78)]">
                    {item}
                  </p>
                </article>
              ))}
            </div>
            {section.cta ? (
              <div className="mt-10 flex justify-center">
                <a
                  href={section.cta.href}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/85 transition hover:text-[var(--pp-main)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            ) : null}
          </div>
        </section>
      );
    }

    case "featureGrid": {
      const itemCount = section.items.length;
      const featureCols =
        itemCount >= 4
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : itemCount === 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : itemCount === 2
              ? "sm:grid-cols-2"
              : "";
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className={`grid gap-8 ${featureCols}`}>
              {section.items.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <article key={item.title} className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--pp-mint)]/20">
                      {Icon ? <Icon className="h-7 w-7 stroke-[1.5] text-[var(--pp-main)]" /> : null}
                    </div>
                    <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--pp-ink)]">
                      {item.title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-[14rem] text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                      {item.description}
                    </p>
                    {item.cta ? (
                      <Link
                        href={item.cta.href}
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/85 hover:text-[var(--pp-main)]"
                      >
                        {item.cta.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : null}
                  </article>
                );
              })}
            </div>
            {section.cta ? (
              <div className="mt-10 flex justify-center">
                <a
                  href={section.cta.href}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/85 transition hover:text-[var(--pp-main)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            ) : null}
            {section.ctas?.length ? (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {section.ctas.map((cta) => {
                  const isHash = cta.href.startsWith("#");
                  const Tag = isHash ? "a" : Link;
                  return (
                    <Tag
                      key={cta.href}
                      href={cta.href}
                      className="inline-flex items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                    >
                      {cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Tag>
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>
      );
    }

    case "slideshow": {
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            {section.images.length > 0 ? (
              <Slideshow images={section.images} />
            ) : null}
          </div>
        </section>
      );
    }

    case "callout": {
      const calloutOuterWidth = section.wide ? "max-w-[88rem]" : "max-w-7xl";
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className={`mx-auto ${calloutOuterWidth}`}>
            <article className="flex flex-col gap-5 border border-[rgba(50,73,83,0.12)] bg-[var(--pp-night)] p-7 text-white lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                {section.eyebrow ? (
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-mint)]">
                    {section.eyebrow}
                  </p>
                ) : null}
                <h2 className="mt-2 text-2xl leading-tight sm:text-3xl">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/80">{section.body}</p>
              </div>
              {section.ctas?.length ? (
                <div className="flex flex-wrap gap-3 lg:shrink-0 lg:justify-end">
                  {section.ctas.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className="inline-flex items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                    >
                      {cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              ) : section.cta ? (
                <Link
                  href={section.cta.href}
                  className="inline-flex shrink-0 items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  {section.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </article>
          </div>
        </section>
      );
    }
  }
}

export function ContentPageTemplate({ page }: ContentPageTemplateProps) {
  const crumbs = breadcrumbSchema(
    homeBreadcrumbs(page.title, page.canonicalSlug ?? page.slug)
  );
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className={`relative overflow-hidden bg-[var(--pp-night)] text-white${page.heroCtas ? "" : " min-h-[520px]"}`}>
        {page.image ? (
          <Image
            src={page.image}
            alt={`${page.title} at Planet Pooch`}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "62% center" }}
            priority
          />
        ) : null}
        <div className={`absolute inset-0 ${page.heroCtas ? "bg-[linear-gradient(180deg,rgba(20,30,36,0.55)_0%,rgba(20,30,36,0.42)_45%,rgba(20,30,36,0.62)_100%)]" : "bg-[linear-gradient(90deg,rgba(38,50,56,0.92)_0%,rgba(38,50,56,0.74)_42%,rgba(38,50,56,0.32)_100%)]"}`} />
        <div className={`relative z-10 mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10${page.heroCtas ? "" : " min-h-[520px] pb-14"}`}>
          <SiteHeader />

          {page.heroCtas ? (
            <>
              <div id="top" className="py-12 lg:py-16">
                <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--pp-mint)]/85">
                      {page.eyebrow}
                    </p>
                    <h1 className="mt-7 max-w-xl text-white">{page.title}</h1>
                  </div>
                  <div className="lg:border-l lg:border-white/20 lg:pl-10">
                    <p
                      className="max-w-md text-lg italic leading-relaxed text-white/90 sm:text-xl"
                      style={{ fontFamily: "var(--font-display), serif" }}
                    >
                      {page.hero}
                    </p>
                    <div className="mt-9 flex flex-col items-start gap-3">
                      <Link href={page.heroCtas.primary.href} className="pp-cta">
                        {page.heroCtas.primary.label}
                        <span className="pp-cta-arrow" aria-hidden />
                      </Link>
                      <a href={page.heroCtas.ghost.href} className="pp-cta-ghost">
                        {page.heroCtas.ghost.label}
                      </a>
                      {page.heroCtas.tertiary ? (
                        <a
                          href={page.heroCtas.tertiary.href}
                          className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-mint)] hover:text-white"
                        >
                          {page.heroCtas.tertiary.label}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-white/15 pt-6 pb-16 lg:mt-14 lg:pb-20">
                <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
                  <span className="flex items-center gap-3">
                    <span aria-hidden className="h-px w-8 bg-white/40" />
                    Scroll to Explore
                  </span>
                  <span>Long Island, New York</span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-end pt-12">
              <div className="max-w-3xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">
                  {page.eyebrow}
                </p>
                <h1 className="mt-5 max-w-3xl text-white">{page.title}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{page.hero}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {page.sections.map((section, i) => (
        <div
          key={`${section.type}-${i}`}
          className={
            i === 0
              ? "relative -mt-12 overflow-hidden rounded-t-[3rem] bg-[var(--pp-cream)] lg:-mt-14 lg:rounded-t-[4rem]"
              : undefined
          }
          {...(i === 0 ? { id: "overview" } : {})}
        >
          <SectionRenderer section={section} index={i} />
        </div>
      ))}

      <SiteFooter />

      <script {...jsonLdAttrs(crumbs)} />
    </main>
  );
}
