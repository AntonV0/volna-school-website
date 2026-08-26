import { defaultLocale, type Locale } from "@/lib/i18n/config";

export const routeKeys = [
  "home",
  "about",
  "children",
  "gcse",
  "alevel",
  "adults",
  "registration",
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
  "registration",
  "privacy",
  "refund",
] as const satisfies readonly PageRouteKey[];

export const courseRouteKeys = [
  "children",
  "gcse",
  "alevel",
  "adults",
] as const satisfies readonly PageRouteKey[];

type CourseRouteKey = (typeof courseRouteKeys)[number];

export const courseDetailKeys = [
  "children-bilingual",
  "children-rfl",
  "children-early-years",
  "children-private-tuition",
  "gcse-preparation",
  "gcse-curriculum",
  "gcse-faq",
  "alevel-preparation",
  "alevel-curriculum",
  "alevel-faq",
  "adult-foundations",
  "adult-conversation",
  "adult-business-russian",
] as const;

export type CourseDetailKey = (typeof courseDetailKeys)[number];

const routeSlugs = {
  home: "",
  about: "about-us",
  children: "classes-for-children",
  gcse: "gcse-courses",
  alevel: "a-level-courses",
  adults: "courses-for-adults",
  registration: "registration",
  privacy: "privacy-policy",
  refund: "refund-policy",
} as const satisfies Record<RouteKey, string>;

export const courseDetailParents = {
  "children-bilingual": "children",
  "children-rfl": "children",
  "children-early-years": "children",
  "children-private-tuition": "children",
  "gcse-preparation": "gcse",
  "gcse-curriculum": "gcse",
  "gcse-faq": "gcse",
  "alevel-preparation": "alevel",
  "alevel-curriculum": "alevel",
  "alevel-faq": "alevel",
  "adult-foundations": "adults",
  "adult-conversation": "adults",
  "adult-business-russian": "adults",
} as const satisfies Record<CourseDetailKey, (typeof courseRouteKeys)[number]>;

const courseDetailSlugs = {
  "children-bilingual": "bilingual-classes",
  "children-rfl": "russian-for-beginners",
  "children-early-years": "early-years",
  "children-private-tuition": "private-tuition",
  "gcse-preparation": "exam-preparation",
  "gcse-curriculum": "curriculum",
  "gcse-faq": "faq",
  "alevel-preparation": "exam-preparation",
  "alevel-curriculum": "curriculum",
  "alevel-faq": "faq",
  "adult-foundations": "russian-foundations",
  "adult-conversation": "conversation",
  "adult-business-russian": "business-russian",
} as const satisfies Record<CourseDetailKey, string>;

export function getLocalizedPath(locale: Locale, routeKey: RouteKey) {
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const slug = routeSlugs[routeKey];

  if (!slug) {
    return localePrefix || "/";
  }

  return `${localePrefix}/${slug}`;
}

export function getCourseDetailPath(
  locale: Locale,
  detailKey: CourseDetailKey,
) {
  return `${getLocalizedPath(locale, courseDetailParents[detailKey])}/${courseDetailSlugs[detailKey]}`;
}

export function getCourseDetailSlug(detailKey: CourseDetailKey) {
  return courseDetailSlugs[detailKey];
}

export function getCourseDetailKeyBySlug(
  parentRouteKey: CourseRouteKey,
  slug: string,
) {
  return courseDetailKeys.find(
    (detailKey) =>
      courseDetailParents[detailKey] === parentRouteKey &&
      courseDetailSlugs[detailKey] === slug,
  );
}

export function getRouteKeyBySlug(slug: string): PageRouteKey | undefined {
  return pageRouteKeys.find((routeKey) => routeSlugs[routeKey] === slug);
}

export function getRouteSlug(routeKey: PageRouteKey) {
  return routeSlugs[routeKey];
}

function isCourseRouteKey(routeKey: PageRouteKey): routeKey is CourseRouteKey {
  return courseRouteKeys.some((courseRouteKey) => courseRouteKey === routeKey);
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
  const [firstSegment, secondSegment, thirdSegment] = pathname
    .split("/")
    .filter(Boolean);
  const isLocalizedPath = firstSegment === "ru";
  const routeSlug = isLocalizedPath ? secondSegment : firstSegment;
  const detailSlug = isLocalizedPath ? thirdSegment : secondSegment;
  const routeKey = routeSlug ? getRouteKeyBySlug(routeSlug) : undefined;

  if (routeKey && isCourseRouteKey(routeKey) && typeof detailSlug === "string") {
    const detailKey = getCourseDetailKeyBySlug(routeKey, detailSlug);

    if (detailKey) {
      return getCourseDetailPath(targetLocale, detailKey);
    }
  }

  return getLocalizedPath(targetLocale, getRouteKeyFromPathname(pathname));
}
