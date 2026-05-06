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
      // ----- Duplicate / older URLs → canonical -----
      { source: "/spa-services-2/", destination: "/spa-services/", permanent: true },
      { source: "/boarding-pricing2/", destination: "/boarding-pricing/", permanent: true },
      { source: "/mobile-grooming-pricing-new/", destination: "/services-pricing/", permanent: true },
      { source: "/new-grooming-pricing-jan-1/", destination: "/services-pricing/", permanent: true },
      { source: "/what-is-dog-daycare-a-complete-guide-for-pet-parents-2/", destination: "/what-is-dog-daycare-a-complete-guide-for-pet-parents/", permanent: true },
      { source: "/make-this-long-weekend-a-holiday-for-your-pup-too-2/", destination: "/make-this-long-weekend-a-holiday-for-your-pup-too/", permanent: true },

      // ----- Junk / draft / test pages → home -----
      { source: "/test/", destination: "/", permanent: true },
      { source: "/inquiry2/", destination: "/contact/", permanent: true },
      { source: "/events-page-draft/", destination: "/our-events/", permanent: true },

      // ----- Old WP post with URL-encoded emoji slug (cannot be static-generated reliably) -----
      // Preserves the URL with a 308 to the blog index. 0 GSC clicks; safe.
      {
        source: "/beat-the-summer-heat-keep-your-dog-safe-and-cool-%e2%98%80%ef%b8%8f%f0%9f%90%be/",
        destination: "/blog/",
        permanent: true,
      },

      // ----- Plugin scaffolding (auth/booking/calendar) -----
      { source: "/login/", destination: "/", permanent: true },
      { source: "/register/", destination: "/", permanent: true },
      { source: "/user-profile/", destination: "/", permanent: true },
      { source: "/booking/", destination: "/contact/", permanent: true },
      { source: "/booking-details/", destination: "/contact/", permanent: true },
      { source: "/submit-event/", destination: "/contact/", permanent: true },
      { source: "/event-types/", destination: "/our-events/", permanent: true },
      { source: "/event-organizers/", destination: "/our-events/", permanent: true },
      { source: "/event-directory/", destination: "/our-events/", permanent: true },
      { source: "/all-events/", destination: "/our-events/", permanent: true },
      { source: "/performers/", destination: "/our-events/", permanent: true },
      { source: "/venues/", destination: "/our-events/", permanent: true },
      { source: "/ticket-receipt/", destination: "/our-events/", permanent: true },
      { source: "/ticket-details/", destination: "/our-events/", permanent: true },
      { source: "/my-calendar/", destination: "/our-events/", permanent: true },

      // ----- WP event detail pages → closest analogue -----
      { source: "/event/photos-with-santa/", destination: "/photos-with-santa/", permanent: true },
      { source: "/event/field-trip-adventure-bark-in-the-park/", destination: "/field-trip/", permanent: true },
      { source: "/event/", destination: "/our-events/", permanent: true },
      { source: "/event/:slug*/", destination: "/our-events/", permanent: true },

      // ----- WP MetForm internal routes -----
      { source: "/metform-form/training-form/", destination: "/dog-training/", permanent: true },
      { source: "/metform-form/inquiry-form/", destination: "/contact/", permanent: true },
      { source: "/metform-form/job-application/", destination: "/were-hiring/", permanent: true },
      { source: "/metform-form/:path*/", destination: "/contact/", permanent: true },

      // ----- WP author archive / category fallbacks -----
      { source: "/author/:author/", destination: "/our-team/", permanent: true },
      { source: "/author/:author/page/:page/", destination: "/our-team/", permanent: true },
      { source: "/category/uncategorized/", destination: "/blog/", permanent: true },
      { source: "/category/:cat/", destination: "/blog/", permanent: true },
    ];
  },
};

export default nextConfig;
