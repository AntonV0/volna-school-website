# Launch QA Checklist

Use this checklist for the first public deployment review. Keep it public-safe: record status, decisions, and non-sensitive IDs only. Do not paste secrets, tokens, raw migration assets, private business records, or unpublished client/staff information into this file.

## Launch Decisions

- Hosting: Vercel.
- Database/auth backend: Supabase.
- First launch URL: Vercel-provided free domain.
- Intended canonical domain after cutover: `https://www.volnaschool.com`.
- Domain migration approach: keep Wix live until final launch QA passes, then transfer or cut DNS over near launch.
- Russian legacy subdomain behavior: `ru.volnaschool.com` should redirect into `/ru` routes.

## Current Readiness Notes

- `.env.example` documents the expected public Supabase variables and `NEXT_PUBLIC_SITE_URL` without real values.
- `.env.example` keeps Vercel Analytics and Speed Insights enabled without IDs, while GA4, GTM, and Meta Pixel stay disabled by default until consent and ads measurement are ready.
- `docs/analytics-consent-plan.md` records the public-safe analytics defaults, consent decisions to make, and later paid ads measurement plan.
- `.env.local`, `.vercel/`, TypeScript build info, source screenshots, copied source content, and unreviewed asset folders are ignored.
- `src/lib/site.ts` falls back to `https://www.volnaschool.com` when `NEXT_PUBLIC_SITE_URL` is unset or points to localhost.
- `src/app/sitemap.ts` emits every configured English and Russian route using the configured site URL.
- `src/app/robots.ts` currently allows all crawlers and points them to `${NEXT_PUBLIC_SITE_URL}/sitemap.xml`.
- `src/proxy.ts` redirects requests from `ru.volnaschool.com` into matching `/ru` paths with a 308 redirect, excluding framework assets and metadata files.
- `next.config.ts` currently has no custom deployment settings.

## Pre-Deployment Setup

- Confirm the GitHub default/production branch that Vercel should deploy from.
- Create or confirm the Supabase project for launch.
- Enable Supabase row-level security before storing user-generated or private data.
- Add Vercel environment variables for Production and Preview without pasting values into Git:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`, only if a server-only admin workflow truly needs it
  - `NEXT_PUBLIC_SITE_URL`
- Leave marketing analytics disabled unless the launch owner has approved consent wording and paid ads QA:
  - `NEXT_PUBLIC_ENABLE_MARKETING_ANALYTICS=false`
  - `NEXT_PUBLIC_GTM_ID`
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `NEXT_PUBLIC_META_PIXEL_ID`
- If Cloudflare Turnstile is added before launch, keep site keys and secret keys in local/Vercel env stores only, not in committed files.
- For the free-domain launch, decide whether `NEXT_PUBLIC_SITE_URL` should stay as `https://www.volnaschool.com` for canonical metadata or temporarily point to the Vercel deployment URL for QA. Record the decision in the PR or launch notes.
- Keep Preview data separate from Production data unless the launch owner explicitly chooses otherwise.

## Verification Commands

Run before opening a launch PR or promoting a deployment:

```bash
npm run lint
npm run typecheck
npm run build
```

If the change is documentation-only, these checks can be skipped, but note that in the PR or handoff.

## Vercel Preview QA

- Confirm the deployment builds successfully from a clean branch.
- Open the generated Vercel deployment URL and check the English homepage.
- Open `/ru` and confirm Russian routing works.
- Check representative pages in both locales:
  - `/about-us`
  - `/classes-for-children`
  - `/gcse-courses`
  - `/a-level-courses`
  - `/courses-for-adults`
  - `/privacy-policy`
  - `/refund-policy`
  - `/ru/about-us`
  - `/ru/classes-for-children`
  - `/ru/gcse-courses`
  - `/ru/a-level-courses`
  - `/ru/courses-for-adults`
  - `/ru/privacy-policy`
  - `/ru/refund-policy`
- Confirm unknown English and Russian paths show the intended not-found experience.
- Confirm `/robots.txt` is reachable and points to the expected sitemap URL.
- Confirm `/sitemap.xml` is reachable and contains both English and `/ru` routes.
- Confirm `/manifest.webmanifest`, `/icon`, `/apple-icon`, and `/og` routes work if they are part of launch QA.
- Review browser console errors on key pages.
- Check mobile and desktop layouts on the Vercel deployment URL.

## Analytics, Consent, and Conversion QA

- Confirm Vercel Analytics and Speed Insights load on the Vercel deployment without requiring tracking IDs in source code.
- Confirm GA4, Google Tag Manager, and Meta Pixel do not load while `NEXT_PUBLIC_ENABLE_MARKETING_ANALYTICS` is unset or `false`.
- Confirm no hardcoded GA4, GTM, Meta Pixel, Google Ads, or Meta Ads account IDs appear in committed files.
- Confirm trial registration start, submit, and completion events can be measured with test submissions.
- Confirm trial registration conversion event properties do not include names, email addresses, phone numbers, message text, learner age free text, or admin notes.
- Confirm test conversion events are clearly marked in the launch notes or analytics dashboard, not with personal data in event properties.
- Decide and approve English and Russian consent wording before enabling GA4, GTM, Meta Pixel, Google Ads conversion tracking, Meta Ads conversion tracking, or remarketing.
- If GTM is used, verify tags are blocked until the approved consent state allows them.
- If GA4 is enabled, verify registration conversions map to the intended GA4 event names and do not collect personal data.
- If Meta Pixel is enabled, verify custom conversion rules or events do not collect personal data.
- If Google Ads or Meta Ads campaigns are launched, run ad conversion QA with test traffic before real spend.
- Keep honeypot spam protection in place for launch; add and QA Turnstile before launch if practical.
- If Turnstile is added, verify registration submissions fail safely when the challenge token is missing or invalid and succeed for normal test users.

## Redirect QA

Before real DNS cutover, test redirects in a controlled environment or with host-header checks where possible:

- `https://ru.volnaschool.com/` should redirect to `/ru`.
- `https://ru.volnaschool.com/about-us` should redirect to `/ru/about-us`.
- Existing `/ru/...` paths on `ru.volnaschool.com` should not loop.
- Metadata files such as `/robots.txt` and `/sitemap.xml` should remain reachable.

After DNS cutover:

- `https://www.volnaschool.com` should serve the production deployment.
- Decide whether apex `https://volnaschool.com` redirects to `https://www.volnaschool.com`; configure this in Vercel or DNS if needed.
- Confirm `https://ru.volnaschool.com` is attached to the Vercel project if the legacy Russian subdomain redirect is required at launch.
- Confirm HTTPS certificates are issued for all attached domains.
- Confirm Wix is no longer serving the canonical production domain after cutover.

## Remaining Launch Blockers To Track

- Supabase project is not documented as linked yet.
- Vercel project is not documented as linked yet.
- Vercel environment variables are not documented as configured yet.
- Final `NEXT_PUBLIC_SITE_URL` behavior for the Vercel free-domain launch needs an explicit decision.
- Real domain transfer or DNS cutover from Wix still needs a dated owner-approved plan.
- Russian legacy subdomain DNS and redirect verification still need live-domain testing.
- Consent wording for analytics, ads measurement, and remarketing still needs owner/legal approval.
- GA4, GTM, Meta Pixel, Google Ads conversion tracking, and Meta Ads conversion tracking remain disabled until consent and QA are complete.
- Turnstile is not documented as implemented yet; honeypot remains the current launch-safe spam control.
