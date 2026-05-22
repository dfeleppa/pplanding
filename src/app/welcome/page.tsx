import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Home,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Welcome to Planet Pooch | Long Island's Premier Pet Resort",
  description:
    "Mobile grooming, daycare, boarding & training across Long Island. Rated 4.9 stars by 700+ pet parents. Get started today.",
  robots: { index: false, follow: false },
};

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const services = [
  {
    title: "Mobile Grooming",
    icon: Scissors,
    image: "/mobile_home.jpg",
    copy: "Luxury grooming at your door — we come to you across Long Island and the Hamptons.",
  },
  {
    title: "Dog Daycare",
    icon: PawPrint,
    image: "/boarding_home.jpeg",
    copy: "Supervised play and enrichment in a calm, nurturing space your dog will love.",
  },
  {
    title: "Dog Boarding",
    icon: Home,
    image: "/daycare_home.png",
    copy: "Cozy overnight stays with attentive, personalized care — not a kennel.",
  },
  {
    title: "Dog Training",
    icon: GraduationCap,
    image: "/training_home.jpeg",
    copy: "Results-driven training led by our AKC Evaluator Trainer.",
  },
  {
    title: "Enrichment",
    icon: Sparkles,
    image: "/enrichment_home.jpg",
    copy: "One-on-one sensory play, scent work, and agility tailored to each dog.",
  },
] as const;

const reviews = [
  {
    name: "Kerryann R.",
    initials: "K",
    service: "Mobile Grooming",
    avatarBg: "bg-[var(--pp-main)]",
    body:
      "Planet Pooch did an amazing job giving my mini golden doodle her first haircut! Their mobile grooming service was super convenient, and Jenn was absolutely fantastic. She was patient, professional, and made my pup look adorable. The entire experience was stress-free, and I really appreciate the care and attention to detail. I highly recommend Planet Pooch and Jenn for anyone looking for top-quality mobile grooming. Thank you for taking such great care of my pup!",
  },
  {
    name: "Gina M.",
    initials: "G",
    service: "Daycare",
    avatarBg: "bg-[var(--pp-gold-deep)]",
    body:
      "We've been bringing Gertie to Planet Pooch for about 4 months now and she absolutely LOVES it! The staff is wonderful and attentive, and we love that she has lots of time to play both indoors and outdoors. It is such a relief to have a place where we know our girl is loved and cared for. We can't recommend Planet Pooch enough!",
  },
  {
    name: "Michelle F.",
    initials: "M",
    service: "Boarding",
    avatarBg: "bg-[var(--pp-night)]",
    body:
      "My mini Goldendoodle was taken such great care of from start to finish. They were able to accommodate a last-minute stay for a full week… He received one-on-one playtime and they sent the best action shots of him playing ball and having an absolute blast. I loved receiving the daily boarding reports about how his day went… I drove over an hour from home to get here and it was 100 percent worth the drive.",
  },
  {
    name: "Emily P.",
    initials: "E",
    service: "Daycare",
    avatarBg: "bg-[var(--pp-main-deep)]",
    body:
      "Such an awesome place! Makes your dog feel right at home and is very communicative throughout the day and with report at pick up!! My girl, Violet works with Rebecca and ADORES her, although everyone at Planet Pooch is great. Vi is extremely shy and everyone is so patient and works at her pace. Her first day and she practically ran in the back room with Kim, goes to show the energy and love they have for our babies. Can't recommend Rebecca and this place enough but the picture goes to show how much she truly loves this place already!!! 10/10",
  },
  {
    name: "Jessica C.",
    initials: "J",
    service: "Mobile Grooming",
    avatarBg: "bg-[var(--pp-ink)]",
    body:
      "Madison needed a Good Groomer because I have had bad experiences with other places. The Doggie Daycare she was going too the owner recommended Planet Pooch Mobile. And we have been with them since. I give them a 10/10. Kris is her groomer and we Love her!! I have had others when Kris is away and they are great too. So if you need a groomer for your dog or cat look no further!!",
  },
  {
    name: "Pat H.",
    initials: "P",
    service: "Daycare & Boarding",
    avatarBg: "bg-[var(--pp-main)]",
    body:
      "I adopted a very shy, nervous dog & after a few days of daycare & several days of boarding my dog has shown a huge improvement… He runs & plays with the other dogs & has a lot more confidence now. He was also groomed there & I was extremely happy with the grooming, he looked terrific… All the staff there are amazing, kind, compassionate & very accommodating. At Planet Pooch it is truly all about the dogs!",
  },
] as const;

const FORM_URL =
  "https://api.leadconnectorhq.com/widget/form/BuIn8g5wkvpXVAcvbRO7";

export default function WelcomePage() {
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/hero-dog.jpg"
          alt="A happy dog lounging in a polished resort setting"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,30,36,0.6)_0%,rgba(20,30,36,0.48)_45%,rgba(20,30,36,0.68)_100%)]" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
          {/* Minimal header — logo + phone only */}
          <div className="flex items-center justify-between py-5">
            <Image
              src="/planet-pooch-logo.png"
              alt="Planet Pooch"
              width={120}
              height={40}
              className="h-8 w-auto brightness-0 invert sm:h-9"
              priority
            />
            <a
              href={SITE.phone.href}
              className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[var(--pp-mint)]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">{SITE.phone.display}</span>
              <span className="sm:hidden">Call Us</span>
            </a>
          </div>

          {/* Hero content */}
          <div className="pb-28 pt-14 lg:pb-36 lg:pt-20">
            <div className="max-w-2xl">
              <h1 className="text-white">
                Your dog deserves{" "}
                <span className="text-[var(--pp-mint)]/80">the best care</span>{" "}
                on Long Island.
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80 sm:text-xl">
                Mobile grooming, daycare, boarding &amp; training — trusted by
                700+ pet parents across Nassau County, Suffolk County &amp; the
                Hamptons.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={FORM_URL} className="pp-cta">
                  Get Started
                  <span className="pp-cta-arrow" aria-hidden />
                </Link>
                <a href={SITE.phone.href} className="pp-cta-ghost">
                  Call {SITE.phone.display}
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                    />
                  ))}
                </span>
                <span>
                  <strong className="font-semibold text-white">4.9</strong> from
                  700+ reviews on Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 pt-10 pb-2 sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:pt-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { value: "11+", label: "Years in Business" },
            { value: "4.9★", label: "Google Rating" },
            { value: "6,800+", label: "Happy Puppies" },
            { value: "5", label: "Services Offered" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-[var(--pp-night)] sm:text-4xl" style={{ fontFamily: "var(--font-display), serif" }}>
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--pp-main)]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Our Services
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Everything your pet needs, all in one place.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative px-3 pb-4 pt-7 text-center">
                    <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--pp-cream)] shadow-sm">
                      <Icon
                        className="h-5 w-5 stroke-[1.5] text-[var(--pp-gold-deep)]"
                        aria-hidden
                      />
                    </div>
                    <h3
                      className="mt-2 text-lg italic text-[var(--pp-night)]"
                      style={{ fontFamily: "var(--font-display), serif" }}
                    >
                      {svc.title}
                    </h3>
                    <span
                      className="mx-auto mt-3 block h-px w-10 bg-[var(--pp-gold-deep)]/40"
                      aria-hidden
                    />
                    <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                      {svc.copy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href={FORM_URL} className="pp-cta">
              Get Started Today
              <span className="pp-cta-arrow" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About / Trust ── */}
      <section className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                Why Planet Pooch
              </p>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
                Family-run since 2014. Trusted across Long Island.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                Founded by Andy Gonzaga, Planet Pooch grew from a single mobile
                grooming van into Nassau County&rsquo;s most trusted pet resort.
                Every service is built on one principle: treat every dog like
                your own.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/78">
                {[
                  "Licensed, insured & professionally trained staff",
                  "Clean, climate-controlled facility in Franklin Square",
                  "Daily photo & video updates for boarding guests",
                  "AKC Evaluator on staff for training programs",
                  "Serving all of Nassau & Suffolk County + the Hamptons",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <PawPrint className="mt-0.5 h-4 w-4 shrink-0 text-[var(--pp-mint)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden border border-white/15 bg-[var(--pp-night)] shadow-[0_24px_70px_rgba(20,30,36,0.32)]">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/9vUKmx3k5AQ?si=mvCHALROv_obKOo5"
                title="Planet Pooch Facility Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Real Reviews
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              See why Long Island pet parents trust us.
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[var(--pp-ink)]/65">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                  />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-[var(--pp-ink)]">
                  {SITE.reviews.rating}
                </strong>{" "}
                from {SITE.reviews.count.toLocaleString()} reviews on Google
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col gap-4 rounded-2xl border border-[var(--pp-sand)] bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarBg}`}
                  >
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--pp-ink)]">
                      {review.name}
                    </p>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/75">
                        {review.service}
                      </p>
                      <span
                        aria-label="Posted on Google"
                        className="flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--pp-ink)]/35"
                      >
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center gap-0.5"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                    />
                  ))}
                </div>

                <p className="text-sm leading-7 text-[var(--pp-ink)]/72">
                  {review.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[var(--pp-night)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Ready to give your dog the{" "}
            <span className="text-[var(--pp-mint)]/80">Planet Pooch</span>{" "}
            experience?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/70">
            Whether it&rsquo;s a grooming appointment at your door, a fun-filled
            day of play, or overnight boarding — we&rsquo;re here for your pet.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href={FORM_URL} className="pp-cta">
              Get Started
              <span className="pp-cta-arrow" aria-hidden />
            </Link>
            <a href={SITE.phone.href} className="pp-cta-ghost">
              <Phone className="h-4 w-4" aria-hidden />
              Call {SITE.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* ── Minimal footer ── */}
      <footer className="bg-[var(--pp-ink)] px-5 py-8 text-white/50 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center text-xs sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            <span>
              {SITE.address.street}, {SITE.address.locality},{" "}
              {SITE.address.region} {SITE.address.postalCode}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
