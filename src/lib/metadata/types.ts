import type { Metadata } from "next";

import type { RouteKey } from "@/lib/i18n/routing";
import type { Locale } from "@/lib/i18n/config";

export type PageMetadataInput = Pick<
  Metadata,
  "description" | "robots" | "title"
> & {
  socialImage?: string;
  languageAlternates?: boolean;
  languageCodes?: Partial<Record<Locale, string>>;
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

export type JsonLdObject = Record<string, unknown>;

export type HomeStructuredDataContent = {
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
