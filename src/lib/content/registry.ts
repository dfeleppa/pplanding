import { blogPosts, type BlogPost } from "./blog";
import { nassauTowns, type NassauTownPage } from "./nassau-towns";
import { towns, type TownPage } from "./towns";

export type DispatchEntry =
  | { type: "town"; data: TownPage }
  | { type: "nassau-town"; data: NassauTownPage }
  | { type: "blog"; data: BlogPost };

export function getDispatchEntry(slug: string): DispatchEntry | null {
  if (slug in towns) {
    return { type: "town", data: towns[slug as keyof typeof towns] };
  }
  if (slug in nassauTowns) {
    return { type: "nassau-town", data: nassauTowns[slug] };
  }
  if (slug in blogPosts) {
    return { type: "blog", data: blogPosts[slug] };
  }
  return null;
}

export function getAllDispatchSlugs(): string[] {
  return [
    ...Object.keys(towns),
    ...Object.keys(nassauTowns),
    ...Object.keys(blogPosts),
  ];
}
