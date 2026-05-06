# Content snapshots from live planet-pooch.com

Captured 2026-05-06 via WebFetch. Use these as the body-content floor for the
new build — preserve length and substance.

## Caveats

- WebFetch HTML→markdown conversion drops `<title>`, `<meta name="description">`,
  and `<link rel="canonical">` tags. Capture those separately via Chrome MCP if
  needed, or use known-good homepage values:
  - Title: `Mobile Pet Grooming Long Island | Mobile Dog Groomer`
  - Meta: `Planet Pooch is your go-to for mobile pet grooming, daycare, and boarding across Long Island & the Hamptons. Professional, convenient, and pet-centric service.`
- Geo pages on WordPress are templated — town name swapped, otherwise identical.
  This rebuild treats them as data-driven so unique copy can be added per town.
