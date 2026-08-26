import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import {
  getCourseDetailPath,
  getLocalizedPath,
  type CourseDetailKey,
  type RouteKey,
} from "@/lib/i18n/routing";
import { siteUrl } from "@/lib/site";
import type { PageMetadataInput } from "@/lib/metadata/types";

export function createPageMetadata(
  locale: Locale,
  routeKey: RouteKey,
  metadata: PageMetadataInput,
): Metadata {
  const {
    languageAlternates = true,
    languageCodes,
    openGraphDescription,
    openGraphTitle,
    socialImage,
    twitterDescription,
    twitterTitle,
    ...pageMetadata
  } = metadata;
  const languages = Object.fromEntries(
    locales.map((availableLocale) => [
      languageCodes?.[availableLocale] ?? availableLocale,
      getLocalizedPath(availableLocale, routeKey),
    ]),
  );
  const imageUrl = new URL(socialImage ?? "/og", siteUrl).toString();

  return {
    ...pageMetadata,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: getLocalizedPath(locale, routeKey),
      ...(languageAlternates
        ? {
            languages: {
              ...languages,
              "x-default": getLocalizedPath(defaultLocale, routeKey),
            },
          }
        : {}),
    },
    openGraph: {
      description:
        openGraphDescription ?? pageMetadata.description ?? undefined,
      images: [imageUrl],
      locale,
      siteName: "Volna School",
      title: openGraphTitle ?? pageMetadata.title ?? undefined,
      type: "website",
      url: new URL(getLocalizedPath(locale, routeKey), siteUrl).toString(),
    },
    twitter: {
      card: "summary_large_image",
      description:
        twitterDescription ?? pageMetadata.description ?? undefined,
      images: [imageUrl],
      title: twitterTitle ?? pageMetadata.title ?? undefined,
    },
  };
}

export function createCourseDetailMetadata(
  locale: Locale,
  detailKey: CourseDetailKey,
  metadata: PageMetadataInput,
): Metadata {
  const {
    languageAlternates = true,
    languageCodes,
    openGraphDescription,
    openGraphTitle,
    socialImage,
    twitterDescription,
    twitterTitle,
    ...pageMetadata
  } = metadata;
  const languages = Object.fromEntries(
    locales.map((availableLocale) => [
      languageCodes?.[availableLocale] ?? availableLocale,
      getCourseDetailPath(availableLocale, detailKey),
    ]),
  );
  const imageUrl = new URL(socialImage ?? "/og", siteUrl).toString();
  const path = getCourseDetailPath(locale, detailKey);

  return {
    ...pageMetadata,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
      ...(languageAlternates
        ? {
            languages: {
              ...languages,
              "x-default": getCourseDetailPath(defaultLocale, detailKey),
            },
          }
        : {}),
    },
    openGraph: {
      description:
        openGraphDescription ?? pageMetadata.description ?? undefined,
      images: [imageUrl],
      locale,
      siteName: "Volna School",
      title: openGraphTitle ?? pageMetadata.title ?? undefined,
      type: "website",
      url: new URL(path, siteUrl).toString(),
    },
    twitter: {
      card: "summary_large_image",
      description:
        twitterDescription ?? pageMetadata.description ?? undefined,
      images: [imageUrl],
      title: twitterTitle ?? pageMetadata.title ?? undefined,
    },
  };
}
