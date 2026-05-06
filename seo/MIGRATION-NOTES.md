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

## Pricing has two sources of truth on the live WP site

This was a surprise. **Two URLs exist with two different prices**:

- `/services-pricing/` — older, lower prices ($145–$300 for full grooms).
  This is the **#2 ranked page on the entire site** (425 clicks/year).
- `/grooming-pricing/` — newer, higher prices ($150–$305 for full grooms).
  Plus / Premium upgrades use these tiers.

We preserved both URLs with their respective prices. **The user should
decide whether to align them** post-launch and 301 the older one to the
newer canonical (or vice versa). Files:
- `src/lib/content/pages.ts` → entries `services-pricing` and `grooming-pricing`

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
3. **Replace 16 placeholder team bios** with real bios. Data file is
   `src/lib/content/team.ts`.
4. **Decide pricing canonical** (see "Pricing has two sources of truth"
   above).
5. **Host the enrollment-form PDF** somewhere — either preserve the
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
  `src/app/sitemap.ts`. Adding a new town / team / blog entry
  automatically includes it in the sitemap.

## What's NOT done

- `BreadcrumbList` JSON-LD is on every template, but visible breadcrumb
  UI is not rendered. The schema is for Google; visible breadcrumbs
  would be a follow-up.
- No image optimization beyond `next/image` defaults. The hero images
  in `/public/` are the existing scaffolded ones — many service pages
  share them. Real, page-specific imagery is a content task.
- No `Service` JSON-LD on the sub-page routes (pricing, packages, etc.)
  — those use `BreadcrumbList` only. Could add Service type to those if
  Google's "Services" search appearance starts mattering.
- No A/B testing infrastructure. Vercel Analytics or PostHog could be
  added if conversion experimentation matters later.

## Quick reference: where things live

| Need to change | File |
|---|---|
| NAP, phone, address, social | `src/lib/site.ts` |
| Service page content (5 main services) | `src/app/service-page-data.ts` |
| Sub-page content (pricing, FAQs, etc.) | `src/lib/content/pages.ts` |
| Legal / policy text | `src/lib/content/prose.ts` |
| Town page metadata | `src/lib/content/towns.ts` |
| Team bios | `src/lib/content/team.ts` |
| Blog posts | `src/lib/content/blog.ts` |
| URL redirects | `next.config.ts` (`redirects()`) |
| Sitemap entries | `src/app/sitemap.ts` (auto-derived) |
| Schema generators | `src/lib/schema.ts` |
| Homepage layout | `src/app/page.tsx` |
| Service page layout | `src/app/service-page-template.tsx` |
| Sub-page layout | `src/app/content-page-template.tsx` |
| Legal layout | `src/app/prose-page-template.tsx` |
| Town page layout | `src/app/town-page-template.tsx` |
| Team bio layout | `src/app/team-bio-template.tsx` |
| Blog post layout | `src/app/blog-post-template.tsx` |
