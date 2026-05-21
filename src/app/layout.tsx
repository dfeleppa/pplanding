import type { Metadata, Viewport } from "next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE } from "../lib/site";
import { Analytics } from "./analytics";
import "./globals.css";

const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaults.homeTitle,
    template: SITE.defaults.titleTemplate,
  },
  description: SITE.defaults.homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.legalName,
    locale: "en_US",
    url: SITE.url,
    title: SITE.defaults.homeTitle,
    description: SITE.defaults.homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaults.homeTitle,
    description: SITE.defaults.homeDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { email: false, telephone: false, address: false },
  ...(GSC_VERIFICATION ? { verification: { google: GSC_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#324953",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.legalName,
  url: SITE.url,
  telephone: SITE.phone.e164,
  email: SITE.email,
  image: `${SITE.url}/opengraph-image.png`,
  logo: `${SITE.url}/planet-pooch-logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  areaServed: SITE.serviceArea.counties.map((county) => ({
    "@type": "AdministrativeArea",
    name: `${county}, NY`,
  })),
  sameAs: [
    SITE.social.instagram,
    SITE.social.facebook,
    SITE.social.youtube,
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.reviews.rating,
    reviewCount: SITE.reviews.count,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
