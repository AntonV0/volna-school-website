import type { Metadata } from "next";

import type { RouteKey } from "@/lib/i18n/routing";

export type PageMetadataInput = Pick<
  Metadata,
  "description" | "robots" | "title"
>;

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
