import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "../../lib/site";
import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";
import { AttributionCapture } from "./attribution-capture";

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
      <AttributionCapture />
      <div className="bg-[var(--pp-night)] px-5 pt-5 pb-14 text-white sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <SiteHeader ctaHref="#new-client-form" />
          <div className="grid w-full gap-12 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">Welcome to Planet Pooch</p>
              <h1 className="mt-4 text-[2.75rem] leading-[1.08] text-white sm:text-[3.5rem] lg:text-[4.25rem]">Your pup&apos;s next adventure starts here.</h1>
            </div>
            <div className="lg:border-l lg:border-white/20 lg:pl-10">
              <p className="pp-hero-description max-w-md text-lg leading-relaxed text-white/90 sm:text-xl">
                Looking for daycare, boarding, grooming, or training? Tell us a little about you and your dog, and our team will follow up with availability and the best next step.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
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
