// Single source of truth for the site header navigation.
// Used by SiteHeader; the same set of links appears on every page.
export type NavItem =
  | { label: string; href: string }
  | { label: string; items: ReadonlyArray<{ label: string; href: string }> };

export const pricingMenu = {
  label: "Pricing",
  items: [
    { label: "Nassau Pricing", href: "/nassau-pricing/" },
    { label: "Hamptons Pricing", href: "/pet-grooming-hamptons/#pricing" },
    { label: "Packages", href: "/grooming-packages/" },
  ],
} as const;

export const desktopNavItems: ReadonlyArray<NavItem> = [
  { label: "Mobile Grooming", href: "/mobile-grooming/" },
  pricingMenu,
  {
    label: "Explore",
    items: [
      { label: "About Us", href: "/#about" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
];
