import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import type { BlogPost } from "../lib/content/blog";
import { serviceNavItems } from "./service-page-data";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export function BlogPostTemplate({ post }: { post: BlogPost }) {
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

      <article className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75 transition hover:text-[var(--pp-night)]"
          >
            ← Back to Blog
          </Link>
          <h1 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
            {post.title}
          </h1>

          {post.intro ? (
            <p className="mt-8 text-lg leading-9 text-[rgba(47,42,39,0.85)]">{post.intro}</p>
          ) : null}

          {post.hasFullContent && post.sections ? (
            <div className="mt-10 grid gap-10">
              {post.sections.map((section, i) => (
                <section key={section.heading ?? i}>
                  {section.heading ? (
                    <h2 className="text-2xl leading-tight text-[var(--pp-ink)] sm:text-3xl">
                      {section.heading}
                    </h2>
                  ) : null}
                  {section.paragraphs ? (
                    <div className="mt-4 grid gap-4 text-base leading-8 text-[rgba(47,42,39,0.82)]">
                      {section.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.bullets ? (
                    <ul className="mt-4 grid gap-2 text-base leading-7 text-[rgba(47,42,39,0.82)]">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <ArrowRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-[var(--pp-main)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-5 text-base leading-8 text-[rgba(47,42,39,0.82)]">
              <p>
                We&apos;re updating this article as part of our site migration. The full post will
                be back online soon — in the meantime, reach out by phone or email if there&apos;s
                something specific you wanted to read about.
              </p>
              <p>
                You can also browse our most popular articles below, or get in touch about your
                dog&apos;s next visit.
              </p>
            </div>
          )}

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-[rgba(50,73,83,0.22)] bg-white/65 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/85"
            >
              More articles
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              Book your dog&apos;s next visit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-[var(--pp-night)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="text-sm uppercase tracking-[0.16em] text-white/72">
            Planet Pooch Pet Resort
          </p>
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
