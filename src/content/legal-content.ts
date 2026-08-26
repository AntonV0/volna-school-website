import type { Locale } from "@/lib/i18n/config";

import legalContentData from "./legal-content.json";

export type LegalRouteKey = "privacy" | "refund" | "safeguarding";

export type LegalInlineLink = {
  text: string;
  href: string;
};

export type LegalBlock = {
  type: "paragraph" | "list-item";
  text: string;
  links: LegalInlineLink[];
};

export type LegalSection = {
  id: string;
  title: string | null;
  blocks: LegalBlock[];
};

export type LegalContent = {
  routeKey: LegalRouteKey;
  title: string;
  seo: {
    title: string;
    description: string;
    index: boolean;
    socialImage: string;
    openGraphTitle: string;
    openGraphDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  sections: LegalSection[];
};

export const legalContent = legalContentData as Record<
  Locale,
  Record<LegalRouteKey, LegalContent>
>;

const businessAddressToken = "{{BUSINESS_ADDRESS}}";
const missingBusinessAddress =
  "Please email info@volnaschool.com for our correspondence address.";

export function getLegalContent(locale: Locale, routeKey: LegalRouteKey) {
  const content = legalContent[locale][routeKey];
  const businessAddress =
    process.env.BUSINESS_CORRESPONDENCE_ADDRESS?.trim() ||
    missingBusinessAddress;

  return {
    ...content,
    sections: content.sections.map((section) => ({
      ...section,
      blocks: section.blocks.map((block) => ({
        ...block,
        text: block.text.replaceAll(businessAddressToken, businessAddress),
      })),
    })),
  } satisfies LegalContent;
}
