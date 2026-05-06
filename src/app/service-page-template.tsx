import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Home } from "lucide-react";
import type { ServicePage } from "./service-page-data";
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

type ServicePageTemplateProps = {
  service: ServicePage;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="relative min-h-[620px] overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src={service.image}
          alt={`${service.title} at Planet Pooch`}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,50,56,0.92)_0%,rgba(38,50,56,0.74)_42%,rgba(38,50,56,0.22)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
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
              href="/#contact"
              className="inline-flex items-center justify-center border border-[var(--pp-mint)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              Get Started
            </Link>
          </header>

          <div className="flex flex-1 items-end py-16">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">
                {service.eyebrow}
              </p>
              <h1 className="mt-5 max-w-3xl text-white">{service.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{service.hero}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-white/54 bg-black/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:bg-white/8"
                >
                  <Home className="h-4 w-4" />
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
              Overview
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">{service.intro}</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {service.highlights.map((highlight) => (
              <article
                key={highlight}
                className="border border-[rgba(50,73,83,0.12)] bg-white/55 p-5 shadow-[0_14px_40px_rgba(50,73,83,0.08)]"
              >
                <Check className="h-5 w-5 text-[var(--pp-main)]" />
                <p className="mt-4 text-sm leading-7 text-[rgba(47,42,39,0.78)]">{highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/48 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
              What Is Included
            </p>
            <div className="mt-8 grid gap-3">
              {service.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border border-[rgba(50,73,83,0.1)] bg-[var(--pp-cream)] px-5 py-4 text-sm leading-7"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--pp-main)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
              How It Works
            </p>
            <div className="mt-8 grid gap-4">
              {service.process.map((step, index) => (
                <article
                  key={step}
                  className="border border-[rgba(50,73,83,0.1)] bg-white/70 p-5"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/70">
                    Step {index + 1}
                  </p>
                  <p className="mt-3 text-base leading-8 text-[rgba(47,42,39,0.78)]">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
              Questions
            </p>
            <h2 className="mt-4 text-4xl leading-tight">Helpful details before you get started.</h2>
          </div>

          <div className="grid gap-4">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="border border-[rgba(50,73,83,0.12)] bg-white/55 p-6">
                <h3 className="text-xl font-semibold text-[var(--pp-ink)]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.72)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--pp-night)] px-5 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-mint)]">
              Ready when you are
            </p>
            <h2 className="mt-3 text-4xl leading-tight">Let us help plan the right care.</h2>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center bg-[var(--pp-mint)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
