import { LegacyResortAnchor } from "./legacy-resort-anchor";
import { googleReviews } from "../lib/google-reviews";
import { SITE } from "../lib/site";
import { HeroScrollLink } from "./hero-scroll-link";
import { Libre_Baskerville, Manrope } from "next/font/google";
import Image from "next/image";
import { BenefitSplit } from "./benefit-split";
import { mobileGroomingBenefits } from "../lib/content/mobile-grooming-benefits";
import { ArrowUpRight, Star } from "lucide-react";
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

export default function HomePage() {
  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      <LegacyResortAnchor />
      <section id="home-hero" className="pp-page-hero relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/mobile-grooming-van-hero.webp"
          alt="A man sitting on the roof of a Planet Pooch mobile grooming van"
          fill
          sizes="100vw"
          className="object-cover object-[40%_top] sm:object-top"
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
            <HeroScrollLink href="#services" label="Why mobile grooming?" />
          </div>
        </div>
      </section>

      <div id="services" className="relative -mt-12 overflow-hidden rounded-t-[3rem] lg:-mt-14 lg:rounded-t-[4rem]">
        <BenefitSplit section={mobileGroomingBenefits} className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20" />
      </div>

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
