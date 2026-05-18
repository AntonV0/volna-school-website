import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/site";
import type { JsonLdObject } from "@/lib/metadata/types";

export function getAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createProviderSchema() {
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

export function createFaqSchema(
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

export function createBreadcrumbSchema(
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
