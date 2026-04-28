import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import {
  getCourseDetailPath,
  getLocalizedPath,
  type CourseDetailKey,
  type RouteKey,
} from "@/lib/i18n/routing";
import { siteUrl } from "@/lib/site";

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
  const imageUrl = new URL("/og", siteUrl).toString();

  return {
    ...metadata,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: getLocalizedPath(locale, routeKey),
      languages: {
        ...languages,
        "x-default": getLocalizedPath(defaultLocale, routeKey),
      },
    },
    openGraph: {
      description: metadata.description ?? undefined,
      images: [imageUrl],
      locale,
      siteName: "Volna School",
      title: metadata.title ?? undefined,
      type: "website",
      url: new URL(getLocalizedPath(locale, routeKey), siteUrl).toString(),
    },
    twitter: {
      card: "summary_large_image",
      description: metadata.description ?? undefined,
      images: [imageUrl],
      title: metadata.title ?? undefined,
    },
  };
}

export function createCourseDetailMetadata(
  locale: Locale,
  detailKey: CourseDetailKey,
  metadata: PageMetadataInput,
): Metadata {
  const languages = Object.fromEntries(
    locales.map((availableLocale) => [
      availableLocale,
      getCourseDetailPath(availableLocale, detailKey),
    ]),
  );
  const imageUrl = new URL("/og", siteUrl).toString();
  const path = getCourseDetailPath(locale, detailKey);

  return {
    ...metadata,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
      languages: {
        ...languages,
        "x-default": getCourseDetailPath(defaultLocale, detailKey),
      },
    },
    openGraph: {
      description: metadata.description ?? undefined,
      images: [imageUrl],
      locale,
      siteName: "Volna School",
      title: metadata.title ?? undefined,
      type: "website",
      url: new URL(path, siteUrl).toString(),
    },
    twitter: {
      card: "summary_large_image",
      description: metadata.description ?? undefined,
      images: [imageUrl],
      title: metadata.title ?? undefined,
    },
  };
}
