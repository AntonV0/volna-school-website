import type { Metadata } from "next";

import type { RouteKey } from "@/lib/i18n/routing";

export const draftLegalRouteKeys = new Set<RouteKey>(["privacy", "refund"]);

export const draftLegalRobots = {
  follow: true,
  index: false,
} satisfies Metadata["robots"];

