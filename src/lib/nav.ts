// Single source of truth for the site header navigation.
// Used by SiteHeader; the same set of links appears on every page.
export const headerNavItems = [
  { label: "About", href: "/#about" },
  { label: "Mobile Grooming", href: "/mobile-grooming/" },
  { label: "Daycare", href: "/dog-daycare/" },
  { label: "Boarding", href: "/dog-boarding/" },
  { label: "Training", href: "/dog-training/" },
  { label: "Enrichment & Events", href: "/enrichment/" },
  { label: "FAQs", href: "/faqs/" },
] as const;
