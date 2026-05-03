"use client";

import { track } from "@vercel/analytics";

export const conversionEvents = {
  trialRegistrationStarted: "trial_registration_started",
  trialRegistrationAttempted: "trial_registration_attempted",
  trialRegistrationCompleted: "trial_registration_completed",
} as const;

type ConversionEventName =
  (typeof conversionEvents)[keyof typeof conversionEvents];

type ConversionEventValue = string | number | boolean | null | undefined;

type ConversionEventPropertyKey =
  | "course_interest"
  | "event_category"
  | "locale"
  | "preferred_contact"
  | "source_path";

type ConversionEventProperties = Partial<
  Record<ConversionEventPropertyKey, ConversionEventValue>
>;

const allowedConversionPropertyKeys = new Set<ConversionEventPropertyKey>([
  "course_interest",
  "event_category",
  "locale",
  "preferred_contact",
  "source_path",
]);

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function getSafeConversionProperties(properties: ConversionEventProperties) {
  return Object.fromEntries(
    Object.entries(properties).filter(
      ([key, value]) =>
        value !== undefined &&
        allowedConversionPropertyKeys.has(key as ConversionEventPropertyKey),
    ),
  ) as Record<string, Exclude<ConversionEventValue, undefined>>;
}

export function trackConversionEvent(
  eventName: ConversionEventName,
  properties: ConversionEventProperties = {},
) {
  const eventProperties = getSafeConversionProperties({
    event_category: "conversion",
    ...properties,
  });

  track(eventName, eventProperties);

  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer?.push({
    event: eventName,
    ...eventProperties,
  });
  window.gtag?.("event", eventName, eventProperties);
  window.fbq?.("trackCustom", eventName, eventProperties);
}
