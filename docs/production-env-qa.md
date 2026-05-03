# Production Environment QA

Public-safe checklist for verifying Supabase, Turnstile, analytics, and Vercel
environment readiness. Do not paste real values, project IDs, secrets, tokens,
dashboard screenshots, submitted form data, or private staff/client details into
this file or PR notes.

## Scope

Use this checklist before promoting a production deployment or sending paid
traffic to the registration form. Record only status, dates, reviewer initials if
approved for public use, and non-sensitive decisions.

## Environment Variables

Confirm these are configured in the target Vercel environment without recording
their values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY`, if Turnstile is enabled
- `CLOUDFLARE_TURNSTILE_SECRET_KEY`, if Turnstile is enabled
- `ADMIN_ALLOWED_EMAILS`, only as a temporary approved fallback
- `NEXT_PUBLIC_ENABLE_MARKETING_ANALYTICS`
- `NEXT_PUBLIC_GTM_ID`, only if approved
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`, only if approved
- `NEXT_PUBLIC_META_PIXEL_ID`, only if approved

Keep `SUPABASE_SERVICE_ROLE_KEY` unset unless a reviewed server-only workflow
requires it. It must never be used by browser code or public form submissions.

## Supabase Production QA

- Confirm the project is intended for Production and not a shared Preview test
  database unless the owner explicitly approved that setup.
- Confirm row-level security is enabled before accepting real registrations.
- Apply the private role helper functions before enabling owner/admin read or
  update policies.
- Confirm anonymous users can insert valid `trial_registrations` rows only.
- Confirm anonymous users cannot read, update, or delete registrations.
- Confirm authenticated non-admin users cannot read or update registrations.
- Confirm owner/admin role claims work before relying on them for real private
  data.
- Confirm `ADMIN_ALLOWED_EMAILS`, if used, contains only owner-approved emails
  stored in Vercel env settings.
- Decide whether duplicate leads are reviewed manually or collapsed with the
  optional Supabase unique index in `docs/supabase-trial-registrations.md`.
- If duplicate leads are reviewed manually, confirm an admin can mark a
  synthetic repeat lead as `duplicate` without adding private note text.
- If the duplicate index is enabled, verify repeat synthetic submissions create
  only one active row and still show the generic success state.

## Turnstile Production QA

- Configure the public site key and server secret together.
- Confirm Vercel Production has `CLOUDFLARE_TURNSTILE_SECRET_KEY` configured;
  Production submissions should fail closed with a config error if it is missing.
- If Vercel Preview intentionally omits the secret, treat that deployment as
  fail-open for synthetic QA only and do not use it for real leads.
- Submit without a Turnstile token and confirm no Supabase row is created.
- Submit with an invalid, expired, malformed, or reused token and confirm no row
  is created.
- Submit with a fresh valid token and confirm one synthetic row is created.
- Confirm visitors see generic failure messaging for Turnstile or provider
  failures.
- Confirm logs do not include raw Turnstile tokens, secrets, names, emails,
  phone numbers, messages, or private admin notes.
- Confirm local test bypasses or debug-only keys are not enabled in Production.

## Vercel And Domain QA

- Confirm Production deploys from the intended branch.
- Confirm `NEXT_PUBLIC_SITE_URL` matches the approved canonical URL decision.
- Confirm Preview and Production env values do not accidentally point to the
  wrong Supabase project.
- Confirm `/robots.txt` and `/sitemap.xml` use the expected production host.
- Confirm draft legal pages are omitted from `/sitemap.xml` while owner review
  is required.
- Confirm private routes redirect logged-out visitors and remain `noindex`.
- Confirm `ru.volnaschool.com` redirect behavior only after the domain is
  attached and DNS is ready for launch testing.

## Analytics And Consent QA

- Keep marketing analytics disabled until consent wording and paid ads QA are
  approved.
- Confirm GA4, GTM, and Meta Pixel IDs are stored only in env settings when
  approved.
- Confirm registration conversion events do not include names, emails, phone
  numbers, messages, learner age free text, parent or guardian details, or admin
  notes.
- Confirm test conversions are marked in dashboards or launch notes without
  personal data.
- Confirm consent choices and withdrawal behavior are approved before remarketing
  or ads measurement is enabled.

## Evidence To Record Publicly

Safe:

- checklist status
- route names
- environment variable names
- dates
- generic decisions such as "Turnstile enabled in Production"

Unsafe:

- actual env values
- Supabase URLs or keys
- account, pixel, project, or dashboard IDs
- screenshots from private dashboards
- real registration submissions
- staff/client emails or private names
