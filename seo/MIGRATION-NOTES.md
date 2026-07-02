# Migration notes — things to know before the next pass

Captured during the WordPress → Next.js migration. These are the
non-obvious things that won't be visible from the code alone.

## URL strategy

- **Every WP URL was preserved at the same path.** No new prefixes,
  no consolidation. This was the highest-leverage SEO decision.
- **Duplicate slugs use `canonicalSlug` to point at the keyword-richer
  canonical**, then both pages render the same content. Affected pages:
  - `/grooming-packages/` → canonical `/mobile-grooming-packages/`
  - `/group-play-pricing/` → canonical `/daycare-pricing/`
  - `/boarding-packages/` → canonical `/boarding-pricing/`
  - `/events/` → canonical `/our-events/`
  - `/spa-services/` → canonical `/grooming-pricing/`
  - `/contactus/` → canonical `/contact/`

## Pricing canonical — resolved

The WP site had two pricing URLs with conflicting numbers
(`/services-pricing/` $145–$300 and `/grooming-pricing/` $150–$305). Both
now 301 to `/mobile-grooming/` (see `next.config.ts`), which does not
itself host pricing — it links to area-specific pricing pages.

The authoritative pricing pages are:

- `/nassau-pricing/` — **Nassau County** (one rate card, $150–$305 for
  full grooms).
- `/pet-grooming-hamptons/` — **Hamptons only** ($275–$525), separate
  rate card reflecting extended travel.
- `/in-house-grooming/` — **in-house at the resort** ($95–$195), bundled
  with daycare or boarding.

Mobile grooming is offered only in Nassau County and the Hamptons —
**no other counties**. The "See pricing for your area" callout on
`/mobile-grooming/` routes visitors to the right page.

## Geo town pages on WP were templated, not unique

Confirmed by comparing `/mobile-dog-grooming-glen-cove-ny/` and
`/mobile-dog-grooming-syosset-ny/` — bodies identical except for town
name. We replicated this with a service-typed template in
`town-page-template.tsx` driven by `src/lib/content/towns.ts`.

Per-town unique content is the **highest-leverage post-launch SEO win**.
The existing structure makes this easy: add a `customIntro?: string`
or `neighborhoods?: string[]` field to `TownPage` and have the template
render it when present. Don't change the slug — it's what's ranking.

## The `/[slug]/` dispatcher catches town + team + blog at root

WP put team bios at root (`/andy/`, `/kathy/`) and blog posts at root
(no `/blog/{slug}/` prefix). We preserved these with a single
`src/app/[slug]/page.tsx` that:

1. Calls `generateStaticParams()` to enumerate ONLY known slugs from the
   towns/team/blog data files
2. Sets `dynamicParams: false` so unknown slugs 404 instead of being
   handled at runtime

This means **adding a new town/team/blog entry requires editing the data
file AND rebuilding** — there's no admin UI, no on-demand pages.

## Bot protection on the live WP site blocks PowerShell/curl

The WP site is fronted by a CDN that 403s default user agents. We had
to use the WebFetch tool (which goes through a different network path)
to scrape content during the migration. If you need to re-scrape later,
expect this. Workarounds: use Chrome MCP, a real browser, or pass a
realistic User-Agent header.

## Content captured vs deferred

- **Service pages (5)** — full content from WP scrape
- **Sub-pages (~25)** — full content from WP scrape (pricing tables, FAQs,
  policies, agreement)
- **Geo town pages (35)** — templated; data file has metadata + slug only,
  body is service-typed boilerplate
- **Team bios (18)** — Andy and Kathy have full bios; 16 are placeholders
- **Blog posts (52)** — top 7 by GSC traffic have full content; 45 are
  placeholders

## Deferred work that still needs doing

In priority order:

1. **Restore 45 blog post bodies** — data file is `src/lib/content/blog.ts`.
   Flip `hasFullContent: true` and add `intro` + `sections`. Each is its
   own SEO surface.
2. **Add unique town-page content for top 5 towns by GSC clicks**:
   Garden City (150), Franklin Square (244), New Hyde Park (59),
   Roslyn (44), Lynbrook (45). Data file is `src/lib/content/towns.ts`.
3. **Decide pricing canonical** (see "Pricing has two sources of truth"
   above).
4. **Host the enrollment-form PDF** somewhere — either preserve the
   `/wp-content/uploads/...` path via a host-level rewrite, or migrate
   the PDF and 301 the old URL.

## Architectural choices worth keeping

- **Single source of truth in `src/lib/site.ts`** for NAP, geo, social,
  reviews. Do NOT hardcode the phone number, address, or email anywhere
  else. Templates and `LocalBusiness` schema all read from here.
- **`title.absolute` per page** — every page sets its own title rather
  than relying on the layout template. This prevents accidental
  duplication when content is moved between routes.
- **JSON-LD schemas in `src/lib/schema.ts`** as builder functions,
  not inline objects. Templates compute and inject. Adding a new schema
  type means adding one builder, not editing every template.
- **Sitemap is auto-generated** from the data files via
  `src/app/sitemap.ts`. Adding a new town or blog entry automatically
  includes it in the sitemap.

## What's NOT done

- No A/B testing infrastructure. Could be added if conversion
  experimentation matters later.
- Team pages were removed after launch and are no longer part of the
  public sitemap or generated route list.

## What's now done (was previously deferred)

- `BreadcrumbList` JSON-LD AND a visible breadcrumb UI on every non-home
  page via `src/app/breadcrumbs.tsx`.
- `Service` JSON-LD on the 5 main service pages via the optional
  `serviceType` field on `ContentPage`.
- `FAQPage` JSON-LD auto-emitted by `content-page-template.tsx` when a
  page contains `faq` sections.
- `Article` schema now includes publisher logo, author, and dateModified.
- Twitter card metadata on every page (root layout + builders).
- Web manifest at `/manifest.webmanifest`, OG image at
  `/opengraph-image.png`, apple-icon, icon — all auto-generated by Next.js
  file conventions.
- GA4 (gated on `NEXT_PUBLIC_GA_ID`) + Vercel Analytics + Speed Insights.
- GSC verification meta tag (gated on `NEXT_PUBLIC_GSC_VERIFICATION`).
- Image optimization: `scripts/optimize-images.mjs` is a one-shot re-encoder
  that already ran once, cutting `/public` from 42MB to 7.8MB. Run again
  whenever oversized source images are added.
- Visible `/sitemap-index/` HTML page listing every URL on the site,
  linked from the footer.
- Unique town content via `localIntro` / `localFeatures` / `distanceFromResort`
  on `TownPage` and rendered in `town-page-template.tsx`.
- Full bodies for the 45 previously-stub blog posts.

## Quick reference: where things live

| Need to change | File |
|---|---|
| NAP, phone, address, social | `src/lib/site.ts` |
| Main service page content (5 services) | `src/lib/content/main-services.ts` |
| Sub-page content (pricing, FAQs, etc.) | `src/lib/content/pages.ts` |
| Legal / policy text | `src/lib/content/prose.ts` |
| Town page metadata + local content | `src/lib/content/towns.ts` |
| Nassau all-services towns | `src/lib/content/nassau-towns.ts` |
| Blog post bodies | `src/lib/content/blog-restored.ts` (45 posts) + `src/lib/content/blog.ts` (7 originals) |
| URL redirects | `next.config.ts` (`redirects()`) |
| Sitemap entries | `src/app/sitemap.ts` (auto-derived) |
| HTML sitemap UI | `src/app/sitemap-index/page.tsx` |
| Schema generators | `src/lib/schema.ts` |
| Breadcrumb UI | `src/app/breadcrumbs.tsx` |
| Analytics (GA4) | `src/app/analytics.tsx` |
| Homepage layout | `src/app/page.tsx` |
| Main service page layout | `src/app/content-page-template.tsx` |
| Legal layout | `src/app/prose-page-template.tsx` |
| Town page layout | `src/app/town-page-template.tsx` |
| Nassau town page layout | `src/app/nassau-town-page-template.tsx` |
| Blog post layout | `src/app/blog-post-template.tsx` |
| Image optimization | `scripts/optimize-images.mjs` |
