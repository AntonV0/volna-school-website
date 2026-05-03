# Analytics, Consent, and Paid Ads Plan

This plan keeps launch measurement useful without adding premature tracking risk. Keep it public-safe: document variable names and implementation decisions only, never account IDs, exports, audiences, pixels, or customer data.

## Approved Defaults

- Vercel Analytics is enabled by default through `AnalyticsProvider`.
- Vercel Speed Insights is enabled by default through `AnalyticsProvider`.
- GA4, Google Tag Manager, and Meta Pixel are disabled by default.
- Marketing analytics can only load when `NEXT_PUBLIC_ENABLE_MARKETING_ANALYTICS=true` and the matching public environment variable is present.
- Tracking account IDs belong in local or Vercel environment settings, not in source files, docs, screenshots, commits, or PR text.
- Trial registration conversion events must not include personal data such as names, email addresses, phone numbers, message text, learner age free text, or admin notes.

## Current Measurement

The current launch-safe baseline measures aggregate usage through Vercel Analytics and Speed Insights. Trial registration conversion events use `src/lib/analytics/conversions.ts` and are limited to public-safe properties:

- `event_category`
- `locale`
- `source_path`
- `course_interest`
- `preferred_contact`

The registration form currently tracks:

- `trial_registration_started`
- `trial_registration_attempted`
- `trial_registration_completed`

These events are meant to verify funnel behavior without sending personal registration details to analytics tools.

## Later Paid Ads Setup

Before enabling paid ads or remarketing, complete all of the following:

- Confirm final consent wording for analytics, ads measurement, and remarketing in English and Russian.
- Decide whether marketing analytics uses direct GA4 and Meta Pixel tags, GTM-managed tags, or a smaller first-party measurement setup.
- Add only environment variable values in Vercel or `.env.local`:
  - `NEXT_PUBLIC_ENABLE_MARKETING_ANALYTICS`
  - `NEXT_PUBLIC_GTM_ID`
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `NEXT_PUBLIC_META_PIXEL_ID`
- Configure GA4 conversions for trial registration events without sending personal data.
- Configure Meta custom conversions or standard events without sending personal data.
- QA Google Ads and Meta Ads conversion attribution with test traffic before spending real budget.
- Confirm cookie/consent behavior before loading any marketing scripts for normal visitors.

## Consent Requirements To Decide

- Whether Vercel Analytics and Speed Insights are covered by essential/site-improvement wording or require an opt-in banner for the launch jurisdiction and risk posture.
- Whether GA4 is analytics-only or linked to Google Ads audiences.
- Whether Meta Pixel is used only for conversion measurement or also for remarketing audiences.
- Whether GTM is allowed to load before consent, with tags blocked until consent, or delayed entirely until opt-in.
- How visitors can change or withdraw consent after their first choice.
- Whether Russian consent text should be a direct translation or separately reviewed legal wording.

## Public Repo Hygiene

- Do not commit real tracking IDs, ad account IDs, test lead data, analytics exports, screenshots of dashboards, or consent-tool credentials.
- Use environment variable names only in docs and code.
- Keep registration conversion properties coarse and enumerable.
- Do not use analytics events as a shadow copy of registration form submissions.
