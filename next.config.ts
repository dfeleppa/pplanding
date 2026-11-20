import type { NextConfig } from "next";

import resortRoutes from "./src/lib/resort-routes.json";

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
  async rewrites() {
    return [{ source: "/", destination: "/choose.html" }];
  },
  async redirects() {
    return [
      ...Object.entries(resortRoutes).map(([slug, path]) => ({
        source: `/${slug}/`,
        destination: `https://planetpoochresorts.com${path}`,
        permanent: true,
      })),

      // ----- Mobile Grooming consolidations -----
      { source: "/grooming-pricing/", destination: "/mobile-grooming/", permanent: true },
      { source: "/services-pricing/", destination: "/mobile-grooming/", permanent: true },
      { source: "/mobile-grooming-packages/", destination: "/mobile-grooming/", permanent: true },
      { source: "/spa-services/", destination: "/mobile-grooming/", permanent: true },
      { source: "/spa-services-2/", destination: "/mobile-grooming/", permanent: true },
      { source: "/our-vans/", destination: "/mobile-grooming/", permanent: true },
      { source: "/mobile-grooming-pricing-new/", destination: "/mobile-grooming/", permanent: true },
      { source: "/new-grooming-pricing-jan-1/", destination: "/mobile-grooming/", permanent: true },

      // ===== About Us consolidated to home page =====
      // The about content (origin story + team callout) now lives on the
      // home page; the standalone /about-us/ page was removed.
      { source: "/about-us/", destination: "/grooming/#about", permanent: true },

      // ===== FAQs page removed =====
      { source: "/faqs/", destination: "/", permanent: true },

      // ===== Duplicate contact page =====
      { source: "/contactus/", destination: "/contact/", permanent: true },

      // ===== Junk / draft / test pages → closest meaningful page =====
      { source: "/inquiry2/", destination: "/contact/", permanent: true },

      // ===== Old WP blog post with URL-encoded emoji slug =====
      // 0 GSC clicks; cannot reliably static-generate.
      {
        source: "/beat-the-summer-heat-keep-your-dog-safe-and-cool-%e2%98%80%ef%b8%8f%f0%9f%90%be/",
        destination: "/blog/",
        permanent: true,
      },

      { source: "/login/", destination: "/", permanent: true },
      { source: "/user-profile/", destination: "/", permanent: true },
      { source: "/test/", destination: "/", permanent: true },
      { source: "/register/", destination: "/", permanent: true },

      // ===== WP plugin scaffolding (auth/booking/calendar) =====
      { source: "/booking/", destination: "/contact/", permanent: true },
      { source: "/booking-details/", destination: "/contact/", permanent: true },

      // ===== WP MetForm internal routes =====
      { source: "/metform-form/inquiry-form/", destination: "/contact/", permanent: true },
      { source: "/metform-form/:path*/", destination: "/contact/", permanent: true },

      // ===== WP author archive / category fallbacks =====
      { source: "/category/uncategorized/", destination: "/blog/", permanent: true },
      { source: "/category/:cat/", destination: "/blog/", permanent: true },
    ];
  },
};

export default nextConfig;
