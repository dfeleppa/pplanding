import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Home,
  PawPrint,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { SITE } from "../lib/site";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const heroQuickServices = [
  { title: "Mobile Grooming", href: "/mobile-grooming/", icon: Scissors },
  { title: "Daycare", href: "/dog-daycare/", icon: PawPrint },
  { title: "Boarding", href: "/dog-boarding/", icon: Home },
  { title: "Training", href: "/dog-training/", icon: GraduationCap },
] as const;

const heroHighlights = [
  {
    title: "Mobile Grooming",
    href: "/mobile-grooming/",
    icon: Scissors,
    image: "/mobile_home.jpg",
    copy: "Luxury grooming at your door across Long Island and the Hamptons.",
  },
  {
    title: "Daycare",
    href: "/dog-daycare/",
    icon: PawPrint,
    image: "/boarding_home.jpeg",
    copy: "Supervised play and enrichment in a safe, nurturing space.",
  },
  {
    title: "Boarding",
    href: "/dog-boarding/",
    icon: Home,
    image: "/daycare_home.png",
    copy: "Cozy overnight stays with attentive, personalized care.",
  },
  {
    title: "Training",
    href: "/dog-training/",
    icon: GraduationCap,
    image: "/training_home.jpeg",
    copy: "Results-driven training led by our AKC Evaluator Trainer.",
  },
  {
    title: "Enrichment",
    href: "/enrichment/",
    icon: Sparkles,
    image: "/enrichment_home.jpg",
    copy: "Sensory play, scent work, agility, and gentle one-on-one challenges.",
  },
] as const;


// Mock Google reviews — replace with real reviews pulled from the
// Google Business Profile when ready.
const googleReviews = [
  {
    name: "Sarah M.",
    initials: "S",
    avatarBg: "bg-[var(--pp-main)]",
    date: "2 weeks ago",
    body:
      "Bear has never looked better and he was completely calm — no more stressful trips to a salon. Dyana came right to our driveway in Garden City. Worth every penny.",
  },
  {
    name: "Michael T.",
    initials: "M",
    avatarBg: "bg-[var(--pp-gold-deep)]",
    date: "1 month ago",
    body:
      "We've been bringing our shepherd to daycare for almost a year. The staff knows him by name, the meet-and-greet was thorough, and he comes home tired in the best way.",
  },
  {
    name: "Jennifer L.",
    initials: "J",
    avatarBg: "bg-[var(--pp-night)]",
    date: "3 weeks ago",
    body:
      "Boarded our two huskies for a long weekend. Got daily updates and pictures, they came home happy and healthy. So glad we found Planet Pooch — we trust them completely.",
  },
] as const;

export default function HomePage() {
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
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
        {/* Subtle even darkening so the image still reads while text remains legible on either side. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,30,36,0.55)_0%,rgba(20,30,36,0.42)_45%,rgba(20,30,36,0.62)_100%)]" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          <div
            id="top"
            className="pt-12 pb-24 lg:pt-16 lg:pb-32"
          >
            <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h1 className="max-w-xl text-white">
                  Mobile grooming, daycare, boarding &amp; training across{" "}
                  <span className="text-[var(--pp-mint)]/75">Long Island</span>.
                </h1>
                <p
                  className="mt-5 max-w-md text-lg italic leading-relaxed text-[var(--pp-mint)]/90 sm:text-xl"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  Enriching the lives of pets since 2014.
                </p>
              </div>

              <div className="lg:border-l lg:border-white/20 lg:pl-10">
                <div className="flex flex-col items-start gap-4">
                  <Link href="https://api.leadconnectorhq.com/widget/form/BuIn8g5wkvpXVAcvbRO7" className="pp-cta">
                    Get Started
                    <span className="pp-cta-arrow" aria-hidden />
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-white/85">
                    <Star className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" aria-hidden />
                    <span>
                      <strong className="font-semibold text-white">4.9</strong> from 700+ Long Island pet parents
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3">
                  {heroQuickServices.map(({ title, href, icon: Icon }) => (
                    <Link
                      key={title}
                      href={href}
                      className="group flex items-center gap-3 border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm transition hover:border-[var(--pp-mint)]/60 hover:bg-white/10"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[var(--pp-mint)]" aria-hidden />
                      <span className="text-sm font-semibold text-white">{title}</span>
                      <span aria-hidden className="ml-auto text-white/40 transition group-hover:translate-x-0.5 group-hover:text-[var(--pp-mint)]">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 pb-18 pt-14 text-[var(--pp-ink)] sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:pt-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Tailored care. Heartfelt experience.
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Five ways we care differently.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {heroHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative px-3 pb-4 pt-7 text-center">
                    <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--pp-cream)] shadow-sm">
                      <Icon className="h-5 w-5 stroke-[1.5] text-[var(--pp-gold-deep)]" />
                    </div>
                    <h3 className="mt-2 font-display text-lg italic text-[var(--pp-night)] transition group-hover:text-[var(--pp-main)]" style={{ fontFamily: "var(--font-display), serif" }}>
                      {item.title}
                    </h3>
                    <span className="mx-auto mt-3 block h-px w-10 bg-[var(--pp-gold-deep)]/40" aria-hidden />
                    <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                      {item.copy}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-18 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                About Us
              </p>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
                Planet Pooch was founded in 2014 by Andy Gonzaga
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                At 17, Andy started working as a licensed professional groomer alongside his mother, Kathy. After graduating from the New York School of Dog Grooming in 2010, Andy built Planet Pooch from a single mobile grooming van into one of Nassau County&rsquo;s most trusted names in pet care.
              </p>
              <p className="mt-5 text-base leading-8 text-white/78">
                What began as mobile dog grooming across Franklin Square, Garden City, Rockville Centre, and surrounding Nassau County neighborhoods has grown into a full-service pet resort &mdash; offering professional grooming, dog daycare, overnight boarding, and training. Every service is built on the same family values Andy learned from day one: treat every dog like your own.
              </p>
            </div>

            <div>
              <div className="overflow-hidden border border-white/15 bg-[var(--pp-night)] shadow-[0_24px_70px_rgba(20,30,36,0.32)]">
                <Image
                  src="/our-resort-exterior.jpeg"
                  alt="Planet Pooch Pet Resort exterior with daycare and boarding entrances"
                  width={1300}
                  height={650}
                  sizes="(min-width: 1024px) 56rem, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm leading-7 text-white/78">
                🐾 Serving Franklin Square and all of Nassau County 🐾 Mobile Grooming • Daycare • Boarding • Training
              </p>
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-[color-mix(in_oklab,var(--color-white)_10%,transparent)] p-8 lg:mt-16 lg:p-10">
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                  Our Team
                </p>
                <h3 className="mt-3 text-3xl leading-tight sm:text-4xl">
                  Meet the team behind the resort.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/78">
                  From groomers to daycare specialists to our AKC Evaluator Trainer, our team is what makes Planet Pooch feel like home.
                </p>
              </div>
              <Link href="/our-team/" className="pp-cta-ghost sm:justify-self-end">
                Meet the Team
                <span className="pp-cta-arrow" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="facility-tour" className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/50 shadow-[0_24px_70px_rgba(50,73,83,0.1)] lg:order-1">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/9vUKmx3k5AQ?si=mvCHALROv_obKOo5"
              title="Planet Pooch Facility Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="lg:order-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Facility Tour
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Take a closer look before you visit.
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
              Watch the tour to get a feel for the resort layout, care spaces, and the environment
              your dog will experience with us.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-18 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Our clients say it best.
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-white/78">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-white">{SITE.reviews.rating}</strong>
                {" "}from {SITE.reviews.count.toLocaleString()} reviews on Google
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {googleReviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col gap-4 bg-white/10 p-6 backdrop-blur-sm sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarBg}`}
                    >
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-white/55">{review.date}</p>
                    </div>
                  </div>
                  <span
                    aria-label="Posted on Google"
                    title="Posted on Google"
                    className="flex shrink-0 items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45"
                  >
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>

                <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>

                <p className="text-sm leading-7 text-white/78">{review.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="bg-[var(--pp-cream)] px-5 py-18 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="bg-[var(--pp-mint)] p-8 shadow-[0_24px_70px_rgba(50,73,83,0.1)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main-deep)]/85">
                  Visit Us
                </p>
                <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
                  Come see the Planet Pooch difference.
                </h2>
                <p className="mt-5 text-base leading-8 text-[var(--pp-ink)]/82">
                  Learn about our calm spaces, polished care, and welcoming routines in person.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="https://api.leadconnectorhq.com/widget/form/BuIn8g5wkvpXVAcvbRO7"
                    className="inline-flex items-center justify-center bg-[var(--pp-night)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[var(--pp-main-deep)]"
                  >
                    Book Now
                  </Link>
                  <a
                    href={SITE.phone.href}
                    className="inline-flex items-center justify-center bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/85"
                  >
                    Call {SITE.phone.display}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden border border-[var(--pp-night)]/15 bg-white/40">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${SITE.legalName}, ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`)}&output=embed`}
                  title={`${SITE.legalName} location on Google Maps`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
