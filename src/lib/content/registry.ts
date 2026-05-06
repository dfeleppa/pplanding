import { blogPosts, type BlogPost } from "./blog";
import { team, type TeamMember } from "./team";
import { towns, type TownPage } from "./towns";

export type DispatchEntry =
  | { type: "town"; data: TownPage }
  | { type: "team"; data: TeamMember }
  | { type: "blog"; data: BlogPost };

export function getDispatchEntry(slug: string): DispatchEntry | null {
  if (slug in towns) {
    return { type: "town", data: towns[slug as keyof typeof towns] };
  }
  if (slug in team) {
    return { type: "team", data: team[slug as keyof typeof team] };
  }
  if (slug in blogPosts) {
    return { type: "blog", data: blogPosts[slug] };
  }
  return null;
}

export function getAllDispatchSlugs(): string[] {
  return [
    ...Object.keys(towns),
    ...Object.keys(team),
    ...Object.keys(blogPosts),
  ];
}
