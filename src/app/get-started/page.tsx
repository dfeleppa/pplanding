import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "../../lib/site";
import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";

const FORM_URL =
  "https://form.moego.pet/go/form?formId=f13f0fe8abe34acf9af59dc81b13e70e";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Tell Planet Pooch about you and your pup. Get started with daycare, boarding, grooming, or training at our Franklin Square pet resort.",
  alternates: { canonical: "/get-started/" },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function GetStartedPage() {
  return (
    <main id="main" className="min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]">
      <div className="bg-[var(--pp-night)] px-5 pt-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SiteHeader ctaHref="#new-client-form" />
        </div>
      </div>

      <section className="px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pp-main)]">
              Welcome to Planet Pooch
            </p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Your pup&apos;s next adventure starts here.
            </h1>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.78)]">
              Looking for daycare, boarding, grooming, or training? Tell us a little
              about you and your dog, and our team will follow up with availability
              and the best next step.
            </p>
            <div className="relative mt-7 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/hero-dog.jpg"
                alt="A dog at Planet Pooch"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                preload
              />
            </div>
            <p className="mt-6 text-base leading-7">
              Prefer to talk?{" "}
              <a href={SITE.phone.href} className="font-semibold underline underline-offset-4">
                Call {SITE.phone.display}
              </a>
            </p>
          </div>

          <div id="new-client-form" className="scroll-mt-6 overflow-hidden rounded-2xl border border-[rgba(50,73,83,0.15)] bg-white shadow-[0_14px_40px_rgba(50,73,83,0.08)]">
            <iframe
              src={FORM_URL}
              width="100%"
              height="800"
              title="New Leads (M) — Planet Pooch new client form"
              className="block h-[800px] w-full border-0"
              allow="payment; geolocation; microphone; camera"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-downloads"
            />
            <p className="border-t border-[rgba(50,73,83,0.12)] px-5 py-4 text-sm leading-6">
              Trouble viewing the form?{" "}
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
                Open it in a new tab
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
