import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";
import {
  courseDetailKeys,
  courseDetailParents,
  getCourseDetailPath,
  getLocalizedPath,
  type CourseDetailKey,
  routeKeys,
  type RouteKey,
} from "@/lib/i18n/routing";
import { siteUrl } from "@/lib/site";

const routeChangeFrequency: Record<
  RouteKey,
  MetadataRoute.Sitemap[number]["changeFrequency"]
> = {
  home: "weekly",
  about: "monthly",
  children: "monthly",
  gcse: "monthly",
  alevel: "monthly",
  adults: "monthly",
  registration: "monthly",
  privacy: "yearly",
  refund: "yearly",
};

const routePriority: Record<RouteKey, number> = {
  home: 1,
  about: 0.75,
  children: 0.9,
  gcse: 0.9,
  alevel: 0.9,
  adults: 0.9,
  registration: 0.85,
  privacy: 0.2,
  refund: 0.2,
};

const courseDetailPriority: Record<
  (typeof courseDetailParents)[CourseDetailKey],
  number
> = {
  children: 0.78,
  gcse: 0.8,
  alevel: 0.8,
  adults: 0.76,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries = routeKeys.flatMap((routeKey) =>
    locales.map((locale) => ({
      url: new URL(getLocalizedPath(locale, routeKey), siteUrl).toString(),
      changeFrequency: routeChangeFrequency[routeKey],
      priority: routePriority[routeKey],
    })),
  );

  const courseDetailEntries = courseDetailKeys.flatMap((detailKey) =>
    locales.map((locale) => ({
      url: new URL(getCourseDetailPath(locale, detailKey), siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: courseDetailPriority[courseDetailParents[detailKey]],
    })),
  );

  return [...pageEntries, ...courseDetailEntries];
}
