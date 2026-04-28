import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";
import {
  courseDetailKeys,
  getCourseDetailPath,
  getLocalizedPath,
  routeKeys,
  type RouteKey,
} from "@/lib/i18n/routing";
import { siteUrl } from "@/lib/site";

const routePriority: Record<RouteKey, number> = {
  home: 1,
  about: 0.8,
  children: 0.9,
  gcse: 0.9,
  alevel: 0.9,
  adults: 0.9,
  registration: 0.95,
  privacy: 0.3,
  refund: 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries = routeKeys.flatMap((routeKey) =>
    locales.map((locale) => ({
      url: new URL(getLocalizedPath(locale, routeKey), siteUrl).toString(),
      changeFrequency: routeKey === "home" ? ("weekly" as const) : ("monthly" as const),
      priority: routePriority[routeKey],
    })),
  );

  const courseDetailEntries = courseDetailKeys.flatMap((detailKey) =>
    locales.map((locale) => ({
      url: new URL(getCourseDetailPath(locale, detailKey), siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  );

  return [...pageEntries, ...courseDetailEntries];
}
