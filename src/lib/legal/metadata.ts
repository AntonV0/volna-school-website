import { legalContent, type LegalRouteKey } from "@/content/legal-content";
import type { Locale } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/metadata";

export function createLegalMetadata(locale: Locale, routeKey: LegalRouteKey) {
  const { seo } = legalContent[locale][routeKey];

  return createPageMetadata(locale, routeKey, {
    title: seo.title,
    description: seo.description,
    robots: seo.index ? undefined : { follow: true, index: false },
    languageAlternates: seo.index,
    languageCodes: { en: "en-GB", ru: "ru-RU" },
    socialImage: seo.socialImage,
    openGraphTitle: seo.openGraphTitle,
    openGraphDescription: seo.openGraphDescription,
    twitterTitle: seo.twitterTitle,
    twitterDescription: seo.twitterDescription,
  });
}
