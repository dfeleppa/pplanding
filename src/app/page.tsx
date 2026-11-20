import { LegacyResortAnchor } from "./legacy-resort-anchor";
import { googleReviews } from "../lib/google-reviews";
import { SITE } from "../lib/site";
import { HeroScrollLink } from "./hero-scroll-link";
import { Libre_Baskerville, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "./booking-link";
import { ArrowUpRight, Scissors, PawPrint, Sparkles, Star } from "lucide-react";
import { SiteHeader } from "./site-header";
import { BookNowModal } from "./book-now-modal";
import { SiteFooter } from "./site-footer";
import { StickyMobileCta } from "./sticky-mobile-cta";
const displaySerif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  style: ["normal", "italic"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const heroHighlights = [
  {
    title: "Mobile Grooming",
    href: "/mobile-grooming/",
    icon: Scissors,
    image: "/mobile_home.jpg",
    copy: "Luxury grooming at your door across Nassau County.",
  },
  {
    title: "Grooming Packages",
    href: "/grooming-packages/",
    icon: Sparkles,
    image: "/grooming-fresh.jpg",
    copy: "Compare bath, haircut, and spa options for your pet.",
  },
  {
    title: "Nassau Pricing",
    href: "/nassau-pricing/",
    icon: PawPrint,
    image: "/Grooming.png",
    copy: "See local rates for full grooms, baths, and upgrades.",
  },
] as const;


export default function HomePage() {
  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      <LegacyResortAnchor />
      <section id="home-hero" className="pp-page-hero relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/hero-dog.jpg"
          alt="A curly-coated dog resting its chin on a sofa beside a window"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          preload
        />
        {/* Shared gradient keeps white hero copy readable over the photo. */}
        <div className="pp-hero-image-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader ctaHref="/new-client/" />

          <div
            id="top"
            className="pp-hero-content pt-12 pb-40 sm:pt-16 lg:pt-24 lg:pb-40"
          >
            <div>
              <div>
                <h1 id="page-content" tabIndex={-1} className="pp-hero-title max-w-xl text-white">
                  Mobile pet grooming{" "}
                  <span className="text-[var(--pp-mint)]">at your door.</span>
                </h1>
                <p
                  className="pp-hero-tagline"
                >
                  One-on-one grooming for dogs and cats across Nassau County and the Hamptons.
                </p>
              </div>

              <div className="mt-8">
                <div className="pp-hero-action-panel pp-home-hero-action-panel flex flex-col items-start gap-4">
                  <BookNowModal ctaHref="/new-client/" className="pp-cta" label="Get Started" icon="paw" />
                </div>

              </div>
            </div>
            <HeroScrollLink href="#services" label="View our services" />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 pb-10 pt-10 sm:pb-18 sm:pt-14 text-[var(--pp-ink)] sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:pt-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main-deep)]">
              Tailored care. Heartfelt experience.
            </p>
            <h2 className="text-2xl leading-tight sm:mt-4 sm:text-5xl">
              Mobile grooming services and pricing
            </h2>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-12 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
            {heroHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group mx-auto flex w-full items-center overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md sm:block sm:max-w-sm sm:rounded-2xl"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden sm:aspect-square sm:h-auto sm:w-full">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc((100vw - 96px) / 2), (max-width: 1279px) 33vw, 200px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative flex-1 px-4 py-3 sm:px-3 sm:pb-4 sm:pt-7 sm:text-center">
                    <div className="absolute -top-6 left-1/2 hidden sm:flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--pp-cream)] shadow-sm">
                      <Icon className="h-5 w-5 stroke-[1.5] text-[var(--pp-gold-deep)]" />
                    </div>
                    <h3 className="sm:mt-2 font-display text-base sm:text-lg sm:italic text-[var(--pp-night)] transition group-hover:text-[var(--pp-main)]" style={{ fontFamily: "var(--font-display), serif" }}>
                      {item.title}
                    </h3>
                    <span className="mx-auto mt-3 hidden sm:block h-px w-10 bg-[var(--pp-gold-deep)]/40" aria-hidden />
                    <p className="mx-auto mt-3 hidden sm:block max-w-[16rem] text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                      {item.copy}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[linear-gradient(180deg,#324953_0%,#2f3f47_100%)] px-5 py-12 sm:py-18 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                About Us
              </p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
                Planet Pooch was founded in 2014 by Andy Gonzaga
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                At 17, Andy started working as a licensed professional groomer alongside his mother, Kathy. After graduating from the New York School of Dog Grooming in 2010, Andy built Planet Pooch from a single mobile grooming van into one of Nassau County&rsquo;s most trusted names in pet care.
              </p>
              <p className="mt-5 text-base leading-8 text-white/78">
                Today our groomers bring the same personal attention to pets across Nassau County, from Franklin Square to Garden City and Rockville Centre.
              </p>
            </div>

            <div className="relative aspect-[3/2] overflow-hidden border border-white/15 shadow-[0_24px_70px_rgba(20,30,36,0.32)] lg:aspect-auto">
              <Image
                src="/van1.jpg"
                alt="Bathing tub and grooming table inside a Planet Pooch van"
                fill
                sizes="(min-width: 1360px) 42rem, (min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[center_60%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" aria-labelledby="reviews-heading" className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 id="reviews-heading" className="text-3xl leading-tight sm:text-5xl">What grooming clients say</h2>
              <p className="mt-4 flex flex-wrap items-center gap-x-2 text-sm text-[var(--pp-main-deep)]">
                <Star aria-hidden className="size-5 fill-[var(--pp-gold)] text-[var(--pp-main-deep)]" />
                <strong>{SITE.reviews.rating} out of 5</strong>
                <span>from {SITE.reviews.countDisplay} Google reviews for Planet Pooch</span>
              </p>
            </div>
            <a href={SITE.reviews.profileUrl} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[var(--pp-main-deep)] underline underline-offset-4">
              Read reviews on Google <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {googleReviews.filter(review => review.context === "Mobile grooming" || review.context === "Grooming").map(review => (
              <figure key={review.name} className="flex flex-col justify-between gap-6 rounded-2xl border border-[var(--pp-sand)] bg-white p-6 sm:p-7">
                <blockquote className="text-lg leading-relaxed text-[var(--pp-ink)]">“{review.body}”</blockquote>
                <figcaption className="flex items-center gap-3 border-t border-[var(--pp-sand)] pt-4 text-sm font-semibold">
                  <span aria-hidden className={`grid size-9 shrink-0 place-items-center rounded-full text-xs text-white ${review.avatarBg}`}>{review.initials}</span>
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />

      <StickyMobileCta ctaLabel="Book Now" ctaHref="/new-client/" openBookingModal />
    </main>
  );
}
