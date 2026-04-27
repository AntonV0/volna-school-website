import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";
import { getLocalizedPath, routeKeys, type RouteKey } from "@/lib/i18n/routing";
import { siteUrl } from "@/lib/site";

const routePriority: Record<RouteKey, number> = {
  home: 1,
  about: 0.8,
  children: 0.9,
  gcse: 0.9,
  alevel: 0.9,
  adults: 0.9,
  privacy: 0.3,
  refund: 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routeKeys.flatMap((routeKey) =>
    locales.map((locale) => ({
      url: new URL(getLocalizedPath(locale, routeKey), siteUrl).toString(),
      changeFrequency: routeKey === "home" ? "weekly" : "monthly",
      priority: routePriority[routeKey],
    })),
  );
}
