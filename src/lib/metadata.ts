import type { Metadata } from "next";

import type { CourseContent } from "@/content/course-content";
import {
  getCourseDetailContent,
  getCourseDetailKeysForParent,
  type CourseDetailContent,
} from "@/content/course-detail-content";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import {
  getCourseDetailPath,
  getLocalizedPath,
  type CourseDetailKey,
  type RouteKey,
} from "@/lib/i18n/routing";
import { siteUrl } from "@/lib/site";

type PageMetadataInput = Pick<Metadata, "description" | "robots" | "title">;
type JsonLdObject = Record<string, unknown>;
type HomeStructuredDataContent = {
  hero: {
    title: string;
    summary: string;
  };
  courseChooser: {
    courses: Array<{
      routeKey: RouteKey;
      title: string;
      summary: string;
    }>;
  };
};

function getAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

function createProviderSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "Volna School",
    url: siteUrl,
    email: "info@volnaschool.com",
    telephone: "+44 7881 764892",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@volnaschool.com",
      telephone: "+44 7881 764892",
    },
  };
}

function createFaqSchema(
  locale: Locale,
  path: string,
  content: CourseContent,
): JsonLdObject {
  return {
    "@type": "FAQPage",
    "@id": `${getAbsoluteUrl(path)}#faq`,
    url: getAbsoluteUrl(path),
    inLanguage: locale,
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

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

export function createHomeStructuredData(
  locale: Locale,
  content: HomeStructuredDataContent,
): JsonLdObject {
  const path = getLocalizedPath(locale, "home");
  const absolutePath = getAbsoluteUrl(path);
  const provider = createProviderSchema();

  return {
    "@context": "https://schema.org",
    "@graph": [
      provider,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Volna School",
        url: siteUrl,
        description: content.hero.summary,
        inLanguage: locale,
        publisher: {
          "@id": provider["@id"],
        },
      },
      {
        "@type": "WebPage",
        "@id": `${absolutePath}#webpage`,
        name: content.hero.title,
        description: content.hero.summary,
        url: absolutePath,
        inLanguage: locale,
        isPartOf: {
          "@id": `${siteUrl}#website`,
        },
        about: {
          "@id": provider["@id"],
        },
      },
      {
        "@type": "ItemList",
        "@id": `${absolutePath}#courses`,
        name:
          locale === "en"
            ? "Russian course pathways"
            : "Направления курсов русского языка",
        itemListElement: content.courseChooser.courses.map((course, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Course",
            name: course.title,
            description: course.summary,
            url: getAbsoluteUrl(getLocalizedPath(locale, course.routeKey)),
            provider,
          },
        })),
      },
      createBreadcrumbSchema([
        { name: "Volna School", path: getLocalizedPath(locale, "home") },
      ]),
    ],
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

export function createCourseStructuredData(
  locale: Locale,
  content: CourseContent,
): JsonLdObject {
  const path = getLocalizedPath(locale, content.routeKey);
  const detailCourses = getCourseDetailKeysForParent(content.routeKey).map(
    (detailKey) => {
      const detail = getCourseDetailContent(locale, detailKey);
      const detailPath = getCourseDetailPath(locale, detailKey);

      return {
        "@type": "Course",
        "@id": `${getAbsoluteUrl(detailPath)}#course`,
        name: detail.hero.title,
        description: detail.hero.summary,
        url: getAbsoluteUrl(detailPath),
        inLanguage: locale,
      };
    },
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${getAbsoluteUrl(path)}#course`,
        name: content.hero.title,
        description: content.hero.summary,
        url: getAbsoluteUrl(path),
        inLanguage: locale,
        provider: createProviderSchema(),
        teaches: content.overview.highlights,
        hasPart: detailCourses,
      },
      createBreadcrumbSchema([
        { name: "Volna School", path: getLocalizedPath(locale, "home") },
        { name: content.hero.title, path },
      ]),
      createFaqSchema(locale, path, content),
    ],
  };
}

export function createCourseDetailStructuredData(
  locale: Locale,
  content: CourseDetailContent,
  parentTitle: string,
): JsonLdObject {
  const path = getCourseDetailPath(locale, content.key);
  const parentPath = getLocalizedPath(locale, content.parentKey);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${getAbsoluteUrl(path)}#course`,
        name: content.hero.title,
        description: content.hero.summary,
        url: getAbsoluteUrl(path),
        inLanguage: locale,
        provider: createProviderSchema(),
        isPartOf: {
          "@type": "Course",
          "@id": `${getAbsoluteUrl(parentPath)}#course`,
          name: parentTitle,
          url: getAbsoluteUrl(parentPath),
        },
        teaches: content.sections.map((section) => section.title),
      },
      createBreadcrumbSchema([
        { name: "Volna School", path: getLocalizedPath(locale, "home") },
        { name: parentTitle, path: parentPath },
        { name: content.hero.title, path },
      ]),
    ],
  };
}
