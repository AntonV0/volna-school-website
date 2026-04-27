import { defaultLocale, type Locale } from "@/lib/i18n/config";

export const routeKeys = [
  "home",
  "about",
  "children",
  "gcse",
  "alevel",
  "adults",
  "privacy",
  "refund",
] as const;

export type RouteKey = (typeof routeKeys)[number];
export type PageRouteKey = Exclude<RouteKey, "home">;

export const pageRouteKeys = [
  "about",
  "children",
  "gcse",
  "alevel",
  "adults",
  "privacy",
  "refund",
] as const satisfies readonly PageRouteKey[];

export const courseRouteKeys = [
  "children",
  "gcse",
  "alevel",
  "adults",
] as const satisfies readonly PageRouteKey[];

const routeSlugs = {
  home: "",
  about: "about-us",
  children: "classes-for-children",
  gcse: "gcse-courses",
  alevel: "a-level-courses",
  adults: "courses-for-adults",
  privacy: "privacy-policy",
  refund: "refund-policy",
} as const satisfies Record<RouteKey, string>;

export function getLocalizedPath(locale: Locale, routeKey: RouteKey) {
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const slug = routeSlugs[routeKey];

  if (!slug) {
    return localePrefix || "/";
  }

  return `${localePrefix}/${slug}`;
}

export function getRouteKeyBySlug(slug: string): PageRouteKey | undefined {
  return pageRouteKeys.find((routeKey) => routeSlugs[routeKey] === slug);
}

export function getRouteSlug(routeKey: PageRouteKey) {
  return routeSlugs[routeKey];
}

export function getRouteKeyFromPathname(pathname: string): RouteKey {
  const [firstSegment, secondSegment] = pathname.split("/").filter(Boolean);
  const slug = firstSegment === "ru" ? secondSegment : firstSegment;

  if (!slug) {
    return "home";
  }

  return getRouteKeyBySlug(slug) ?? "home";
}

export function getAlternateLocalePath(pathname: string, targetLocale: Locale) {
  return getLocalizedPath(targetLocale, getRouteKeyFromPathname(pathname));
}
