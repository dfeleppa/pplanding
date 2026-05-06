import type { Metadata } from "next";
import { SITE } from "../lib/site";
import "./globals.css";

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
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.legalName,
  url: SITE.url,
  telephone: SITE.phone.e164,
  email: SITE.email,
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
    SITE.social.tiktok,
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
      </body>
    </html>
  );
}
