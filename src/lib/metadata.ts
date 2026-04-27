import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import { getLocalizedPath, type RouteKey } from "@/lib/i18n/routing";

type PageMetadataInput = Pick<Metadata, "description" | "title">;

export function createPageMetadata(
  locale: Locale,
  routeKey: RouteKey,
  metadata: PageMetadataInput,
): Metadata {
  const languages = Object.fromEntries(
    locales.map((availableLocale) => [
      availableLocale,
      getLocalizedPath(availableLocale, routeKey),
    ]),
  );

  return {
    ...metadata,
    alternates: {
      canonical: getLocalizedPath(locale, routeKey),
      languages: {
        ...languages,
        "x-default": getLocalizedPath(defaultLocale, routeKey),
      },
    },
  };
}
