import type { CourseContent } from "@/content/course-content";
import {
  getCourseDetailContent,
  getCourseDetailKeysForParent,
  type CourseDetailContent,
} from "@/content/course-detail-content";
import type { Locale } from "@/lib/i18n/config";
import { getCourseDetailPath, getLocalizedPath } from "@/lib/i18n/routing";
import { siteUrl } from "@/lib/site";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createProviderSchema,
  getAbsoluteUrl,
} from "@/lib/metadata/schema-helpers";
import type {
  HomeStructuredDataContent,
  JsonLdObject,
} from "@/lib/metadata/types";

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
