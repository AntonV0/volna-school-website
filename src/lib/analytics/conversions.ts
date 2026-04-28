"use client";

import { track } from "@vercel/analytics";

export const conversionEvents = {
  trialRegistrationStarted: "trial_registration_started",
  trialRegistrationSubmitted: "trial_registration_submitted",
  trialRegistrationCompleted: "trial_registration_completed",
} as const;

type ConversionEventName =
  (typeof conversionEvents)[keyof typeof conversionEvents];

type ConversionEventValue = string | number | boolean | null | undefined;

type ConversionEventProperties = Record<string, ConversionEventValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function omitUndefinedProperties(properties: ConversionEventProperties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined),
  ) as Record<string, Exclude<ConversionEventValue, undefined>>;
}

export function trackConversionEvent(
  eventName: ConversionEventName,
  properties: ConversionEventProperties = {},
) {
  const eventProperties = omitUndefinedProperties({
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
