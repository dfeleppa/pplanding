# Geo town pages — templated content evidence

Compared `/mobile-dog-grooming-glen-cove-ny/` and `/mobile-dog-grooming-syosset-ny/`.
Bodies are nearly identical except for the town name. Same Hamptons CTA, same
Instagram embed, same testimonial reel.

## Glen Cove H1 / opening
> Mobile Pet Grooming in Glen Cove NY - Mobile Dog Groomer.
> Why Mobile Grooming For My Pet in Glen Cove NY?

## Syosset H1 / opening
> Why Mobile Grooming For My Pet in Syosset NY?

Both pages share the body copy from /mobile-grooming/ with town name swapped.

## Implication for the rebuild

Build a single dynamic geo route (`/mobile-dog-grooming-[town]-ny/page.tsx`)
backed by a data file with one entry per town. Daniel will fill in unique copy
per town over time. Each entry should support:

- town name + display name
- nearby neighborhoods / landmarks
- driving notes (e.g., "We service the entire North Shore from our Franklin Square base")
- a town-specific intro paragraph (or fallback to the generic mobile-grooming pitch)
- optional town-specific testimonial
- title and meta description

This preserves the URL-per-town structure (which is what's ranking) while
making the content easy to expand into genuinely unique copy.
