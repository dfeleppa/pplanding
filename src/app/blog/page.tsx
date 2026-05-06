import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { blogPosts } from "../../lib/content/blog";
import { serviceNavItems } from "../service-page-data";

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
  title: { absolute: "Planet Pooch Blog | Mobile Grooming, Daycare, Training" },
  description:
    "Stories and how-tos from the Planet Pooch team — grooming tips, daycare advice, seasonal pet care, and behind-the-scenes from our Franklin Square resort.",
  alternates: { canonical: "/blog/" },
};

export default function BlogIndexPage() {
  const posts = Object.values(blogPosts);
  const featured = posts.filter((p) => p.hasFullContent);
  const archive = posts.filter((p) => !p.hasFullContent);

  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="bg-[var(--pp-night)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Link className="flex items-center" href="/">
              <Image
                src="/planet-pooch-logo.png"
                alt="Planet Pooch Pet Resort"
                width={220}
                height={74}
                className="h-auto w-[180px] brightness-0 invert sm:w-[220px]"
                priority
              />
            </Link>
            <nav
              aria-label="Service pages"
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78"
            >
              {serviceNavItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="nav-link transition hover:text-white"
                >
                  {item.navLabel}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[var(--pp-mint)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              Book Now
            </Link>
          </header>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-main)]/75">
            Blog
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
            Notes on grooming, daycare, training, and life with dogs.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(47,42,39,0.78)]">
            Our team writes about what we see day to day — grooming questions we get asked again and
            again, the science behind enrichment, seasonal pet care, and stories from the resort.
          </p>
        </div>
      </section>

      <section className="bg-white/55 px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
            Featured
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
            Most-read articles
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group flex h-full flex-col justify-between border border-[rgba(50,73,83,0.12)] bg-[var(--pp-cream)] p-6 transition hover:bg-white/85"
              >
                <h3 className="text-xl font-semibold leading-snug text-[var(--pp-ink)]">
                  {p.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)] transition group-hover:translate-x-1">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
            Archive
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
            More from the Planet Pooch blog
          </h2>
          <p className="mt-3 max-w-2xl text-sm italic leading-7 text-[rgba(47,42,39,0.6)]">
            We&apos;re bringing the full archive back online as part of our migration. Each title
            below has a placeholder while we restore the original content.
          </p>
          <ul className="mt-8 grid gap-2 md:grid-cols-2">
            {archive.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="block border border-[rgba(50,73,83,0.1)] bg-white/55 px-5 py-4 text-sm leading-6 text-[rgba(47,42,39,0.8)] transition hover:bg-white/85 hover:text-[var(--pp-night)]"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--pp-night)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="text-sm uppercase tracking-[0.16em] text-white/72">Planet Pooch Pet Resort</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85 transition hover:bg-white/8"
          >
            <Home className="h-4 w-4" />
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
