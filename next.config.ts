import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WordPress / Yoast canonicalized URLs with a trailing slash. Match that
  // exactly so we don't 308 every indexed URL on first visit and so our
  // canonicals match the live planet-pooch.com format.
  trailingSlash: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // ===== Service consolidations =====
      // Sub-pages from the old WordPress site are now consolidated into
      // their parent service page. Each parent page renders the full
      // pricing, packages, FAQs, etc., so the sub-page URL just 301s.

      // ----- Mobile Grooming consolidations -----
      { source: "/grooming-pricing/", destination: "/mobile-grooming/", permanent: true },
      { source: "/services-pricing/", destination: "/mobile-grooming/", permanent: true },
      { source: "/mobile-grooming-packages/", destination: "/mobile-grooming/", permanent: true },
      { source: "/grooming-packages/", destination: "/mobile-grooming/", permanent: true },
      { source: "/spa-services/", destination: "/mobile-grooming/", permanent: true },
      { source: "/spa-services-2/", destination: "/mobile-grooming/", permanent: true },
      { source: "/cat-experience/", destination: "/mobile-grooming/", permanent: true },
      { source: "/our-vans/", destination: "/mobile-grooming/", permanent: true },
      { source: "/in-house-grooming/", destination: "/mobile-grooming/", permanent: true },
      { source: "/mobile-grooming-pricing-new/", destination: "/mobile-grooming/", permanent: true },
      { source: "/new-grooming-pricing-jan-1/", destination: "/mobile-grooming/", permanent: true },

      // ----- Daycare consolidations -----
      { source: "/group-play/", destination: "/dog-daycare/", permanent: true },
      { source: "/group-play-pricing/", destination: "/dog-daycare/", permanent: true },
      { source: "/daycare-pricing/", destination: "/dog-daycare/", permanent: true },
      { source: "/puppy-socialization-program/", destination: "/dog-daycare/", permanent: true },
      { source: "/daycare-a-day-in-the-life/", destination: "/dog-daycare/", permanent: true },
      { source: "/dog-daycare-boarding/", destination: "/dog-daycare/", permanent: true },

      // ----- Boarding consolidations -----
      { source: "/boarding-pricing/", destination: "/dog-boarding/", permanent: true },
      { source: "/boarding-pricing2/", destination: "/dog-boarding/", permanent: true },
      { source: "/boarding-packages/", destination: "/dog-boarding/", permanent: true },
      { source: "/boarding-add-ons/", destination: "/dog-boarding/", permanent: true },
      { source: "/boarding-a-day-in-the-life/", destination: "/dog-boarding/", permanent: true },

      // ----- Enrichment + Events consolidations -----
      { source: "/what-is-enrichment/", destination: "/enrichment/", permanent: true },
      { source: "/enrichment-activities/", destination: "/enrichment/", permanent: true },
      { source: "/enrichment-a-day-in-the-life/", destination: "/enrichment/", permanent: true },
      { source: "/enrichment-pricing/", destination: "/enrichment/", permanent: true },
      { source: "/our-events/", destination: "/enrichment/", permanent: true },
      { source: "/events/", destination: "/enrichment/", permanent: true },
      { source: "/birthday-party/", destination: "/enrichment/", permanent: true },
      { source: "/field-trip/", destination: "/enrichment/", permanent: true },
      { source: "/photos-with-santa/", destination: "/enrichment/", permanent: true },

      // ===== About Us consolidated to home page =====
      // The about content (origin story + team callout) now lives on the
      // home page; the standalone /about-us/ page was removed.
      { source: "/about-us/", destination: "/", permanent: true },

      // ===== Old blog post duplicates =====
      {
        source: "/what-is-dog-daycare-a-complete-guide-for-pet-parents-2/",
        destination: "/what-is-dog-daycare-a-complete-guide-for-pet-parents/",
        permanent: true,
      },
      {
        source: "/make-this-long-weekend-a-holiday-for-your-pup-too-2/",
        destination: "/make-this-long-weekend-a-holiday-for-your-pup-too/",
        permanent: true,
      },

      // ===== Junk / draft / test pages → closest meaningful page =====
      { source: "/test/", destination: "/", permanent: true },
      { source: "/inquiry2/", destination: "/contact/", permanent: true },
      { source: "/events-page-draft/", destination: "/enrichment/", permanent: true },

      // ===== Old WP blog post with URL-encoded emoji slug =====
      // 0 GSC clicks; cannot reliably static-generate.
      {
        source: "/beat-the-summer-heat-keep-your-dog-safe-and-cool-%e2%98%80%ef%b8%8f%f0%9f%90%be/",
        destination: "/blog/",
        permanent: true,
      },

      // ===== WP plugin scaffolding (auth/booking/calendar) =====
      { source: "/login/", destination: "/", permanent: true },
      { source: "/register/", destination: "/", permanent: true },
      { source: "/user-profile/", destination: "/", permanent: true },
      { source: "/booking/", destination: "/contact/", permanent: true },
      { source: "/booking-details/", destination: "/contact/", permanent: true },
      { source: "/submit-event/", destination: "/contact/", permanent: true },
      { source: "/event-types/", destination: "/enrichment/", permanent: true },
      { source: "/event-organizers/", destination: "/enrichment/", permanent: true },
      { source: "/event-directory/", destination: "/enrichment/", permanent: true },
      { source: "/all-events/", destination: "/enrichment/", permanent: true },
      { source: "/performers/", destination: "/enrichment/", permanent: true },
      { source: "/venues/", destination: "/enrichment/", permanent: true },
      { source: "/ticket-receipt/", destination: "/enrichment/", permanent: true },
      { source: "/ticket-details/", destination: "/enrichment/", permanent: true },
      { source: "/my-calendar/", destination: "/enrichment/", permanent: true },

      // ===== WP /event/{slug}/ children → all to /enrichment/ =====
      { source: "/event/", destination: "/enrichment/", permanent: true },
      { source: "/event/:slug*/", destination: "/enrichment/", permanent: true },

      // ===== WP MetForm internal routes =====
      { source: "/metform-form/training-form/", destination: "/dog-training/", permanent: true },
      { source: "/metform-form/inquiry-form/", destination: "/contact/", permanent: true },
      { source: "/metform-form/job-application/", destination: "/were-hiring/", permanent: true },
      { source: "/metform-form/:path*/", destination: "/contact/", permanent: true },

      // ===== WP author archive / category fallbacks =====
      { source: "/author/:author/", destination: "/our-team/", permanent: true },
      { source: "/author/:author/page/:page/", destination: "/our-team/", permanent: true },
      { source: "/category/uncategorized/", destination: "/blog/", permanent: true },
      { source: "/category/:cat/", destination: "/blog/", permanent: true },
    ];
  },
};

export default nextConfig;
