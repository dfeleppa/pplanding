// Single source of truth for the site header navigation.
// Used by SiteHeader; the same set of links appears on every page.
export type NavItem =
  | { label: string; href: string }
  | { label: string; items: ReadonlyArray<{ label: string; href: string }> };

export const desktopNavItems: ReadonlyArray<NavItem> = [
  { label: "Mobile Grooming", href: "/mobile-grooming/" },
  {
    label: "Explore",
    items: [
      { label: "About Us", href: "/#about" },
      { label: "Grooming Packages", href: "/grooming-packages/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
];
