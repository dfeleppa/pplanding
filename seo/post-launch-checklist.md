# Planet Pooch — Launch & Post-Launch Checklist

Use this as the literal runbook on launch day and through the first 30 days.
Tick items as you go. Anything that fails turns into an action item before
proceeding.

## T-24 hours

- [ ] Lower DNS TTL to 300 seconds on the apex `planet-pooch.com` and `www.planet-pooch.com` records
- [ ] Run a final crawl of the LIVE old WordPress site as a backup snapshot (Screaming Frog or `wget --mirror`)
- [ ] Confirm all GSC exports requested in the migration brief have been pulled and saved
- [ ] Confirm Google Business Profile (GBP) website link points to `https://planet-pooch.com/`
- [ ] Run `./seo/pre-launch-qa.sh` against staging — must report PASS
- [ ] Confirm staging `robots.txt` allows crawling (`Allow: /`, not `Disallow: /`)
- [ ] Run `npx next build` locally and verify TypeScript + ESLint clean
- [ ] Validate one example service page with [Schema Markup Validator](https://validator.schema.org/) — `LocalBusiness`, `Service`, and `BreadcrumbList` should all be detected
- [ ] Verify no `<meta name="robots" content="noindex">` in built output: `grep -r "noindex" .next/ && echo "FAIL"`
- [ ] Tell the on-call human you're cutting DNS tomorrow

## Launch day

- [ ] Cut DNS on apex and www records to the new host
- [ ] Confirm HTTPS is live and `http://` → `https://` redirects cleanly
- [ ] Confirm `www.planet-pooch.com` → `planet-pooch.com` (or vice versa, matching the existing canonical — Yoast had `https://planet-pooch.com/` as canonical)

### Within 1 hour of cutover

- [ ] Spot check 10 random old URLs from the inventory — all must return 200 or 301→200 (no 404, no chains)
  - [ ] `/services-pricing/`
  - [ ] `/dog-daycare-boarding-franklin-square-ny/`
  - [ ] `/mobile-dog-grooming-garden-city-ny/`
  - [ ] `/why-you-should-have-your-dog-socialized-and-how-not-socializing-them-can-lead-to-separation-anxiety/`
  - [ ] `/were-hiring/`
  - [ ] `/agreement/`
  - [ ] `/andy/`
  - [ ] `/contactus/`
  - [ ] `/grooming-pricing/`
  - [ ] `/blog/`
- [ ] Verify homepage loads and has correct title — `Mobile Pet Grooming Long Island | Mobile Dog Groomer`
- [ ] Verify schema markup with [Schema Markup Validator](https://validator.schema.org/) on `/` and `/mobile-grooming`
- [ ] Click through all 5 service pages from the homepage nav
- [ ] Submit a contact form (or hit a `mailto:` link) end-to-end to verify it works
- [ ] Tail server logs for unexpected 500s

### Within 24 hours of cutover

- [ ] Submit the new `sitemap.xml` in Google Search Console (Sitemaps → add `https://planet-pooch.com/sitemap.xml`)
- [ ] Use URL Inspection tool on the top 10 GSC pages and request indexing:
  - [ ] `/`
  - [ ] `/services-pricing/`
  - [ ] `/dog-daycare-boarding-franklin-square-ny/`
  - [ ] `/mobile-dog-grooming-garden-city-ny/`
  - [ ] `/mobile-grooming/`
  - [ ] `/dog-boarding/`
  - [ ] `/contact/`
  - [ ] `/were-hiring/`
  - [ ] `/dog-daycare/`
  - [ ] `/why-you-should-have-your-dog-socialized-and-how-not-socializing-them-can-lead-to-separation-anxiety/`
- [ ] Verify Google Business Profile website link still works
- [ ] Confirm Bing Webmaster Tools (if used) has the new sitemap
- [ ] Run `./seo/pre-launch-qa.sh` against the LIVE production URL — record the result

### Within 7 days of cutover

- [ ] Check Search Console "Coverage" report — should show no spike in 404s
- [ ] Check Search Console "Core Web Vitals" — should improve or hold (target LCP < 2.5s, CLS < 0.1, INP < 200ms)
- [ ] Check rankings for `mobile pet grooming long island` — minor fluctuation OK; sustained drop is a red flag
- [ ] Check rankings for the top 30 GSC queries (compare to pre-launch baseline)
- [ ] Verify Google has indexed at least 50% of the sitemap (Coverage → "Indexed")

## 30-day monitoring

Track these weekly. Normal redesign causes 1–2 weeks of fluctuation; anything beyond that is a problem.

| Metric | Source | Acceptable | Red flag |
|---|---|---|---|
| Total clicks | GSC | -10% to baseline | -20% sustained 2+ weeks |
| Impressions | GSC | -10% to baseline | -25% sustained 2+ weeks |
| Avg position for top 10 queries | GSC | ±2 positions | -5 positions sustained |
| 404 errors | GSC Coverage | < 5 unique URLs | > 20 unique URLs |
| Core Web Vitals | GSC | All "Good" | Any "Poor" |
| GBP profile views | GBP Insights | Stable | -20% sustained |

If any red flag triggers: **stop**, diagnose, don't ship more changes until rankings recover.

## Known follow-ups (intentionally deferred from migration)

These didn't ship in the initial launch but should be planned:

- [ ] Replace the 16 placeholder team bios with real bios (data file: `src/lib/content/team.ts`)
- [ ] Restore the 45 archived blog posts to full content (data file: `src/lib/content/blog.ts`)
- [ ] Add genuinely unique town-specific content to the 35 town pages — current pages share a service-typed template (data file: `src/lib/content/towns.ts`)
- [ ] Decide on canonical pricing source: `/grooming-pricing/` (current Plus/Premium-style) vs `/services-pricing/` (older lower pricing). They currently render different prices — see `seo/MIGRATION-NOTES.md` for details
- [ ] Host the enrollment-form PDF at the old URL (`/wp-content/uploads/2024/09/Enrollment-form-Most-Updated-Version.pdf`) or redirect it to a new location
