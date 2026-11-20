import resortRoutes from "./resort-routes.json";

export function staysOnGroomingSite(slug: string) {
  return !Object.hasOwn(resortRoutes, slug);
}
