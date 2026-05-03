# Registration Abuse Protection Plan

Public-safe planning notes for protecting the trial lesson registration flow. Do
not add secrets, project identifiers, raw lead data, analytics exports, account
IDs, IP addresses tied to people, or screenshots from private dashboards to this
file.

## Current Protection Layers

The registration form is designed to reduce low-effort spam while keeping the
launch setup simple and public-safe:

- Hidden honeypot field: the form includes a hidden `website` field. If it is
  filled, the server action returns the normal success state without saving a
  lead. This avoids confirming to basic bots that they were blocked.
- Server-side validation: required fields, accepted option values, consent, email
  shape, phone shape, and length limits are checked on the server before any
  Supabase insert runs.
- Turnstile challenge: Cloudflare Turnstile is scaffolded. Local development and
  intentional synthetic-only Vercel Preview deployments stay fail-open when
  `CLOUDFLARE_TURNSTILE_SECRET_KEY` is not configured. Vercel Production fails
  closed if the server secret is missing. Once the server secret is present,
  submissions without a valid `cf-turnstile-response` token fail before the
  Supabase insert.
- Generic user-facing errors: Turnstile failures and Supabase insert failures
  return the same generic submit-error experience. Provider details, database
  errors, and validation internals should not be shown to visitors.
- Supabase boundaries: anonymous users should only be allowed to insert valid
  `trial_registrations` rows through Row Level Security. They must not be able to
  read, update, or delete leads.
- Duplicate policy hook: the application treats a Supabase duplicate-key
  rejection as the same generic success state. This supports a future durable
  unique-index policy without confirming to visitors whether a matching lead
  already exists.
- Analytics safety: registration conversion events are intentionally coarse.
  They must not include names, emails, phone numbers, message text, learner age
  free text, parent or guardian details, admin notes, or other personal data.

These layers do not replace durable rate limiting. They are the launch baseline
that should remain in place while platform-level controls are configured.

## Long-Term Rate Limiting Direction

Durable rate limiting should be enforced outside single serverless function
memory. In-memory counters are not reliable across Vercel regions, cold starts,
parallel instances, or redeploys, so this repo should not add local-only rate
limit state.

Preferred order:

1. Vercel Firewall or Cloudflare controls at the edge. Use platform rules to
   protect the registration route and submission traffic by request rate,
   suspicious patterns, bot signals, country or ASN if approved, and campaign
   traffic risk. This is the first choice before high-volume public or paid ads
   traffic because it blocks abuse before application work and database writes.
2. Cloudflare Turnstile tuning. Confirm the production site key and secret are
   configured together and review challenge behavior after real traffic starts.
3. Shared-store application limits only if needed. If edge controls are not
   enough, add an app-level limiter backed by a shared store such as a managed
   Redis or database table. Track only the minimum public-safe operational data
   needed for abuse prevention, define retention, and avoid storing form content
   as rate-limit metadata.

No vendor or rule should be documented as configured until it has been enabled
and QA'd in the live deployment environment.

## Duplicate Lead Policy Options

Duplicate handling is an owner-approved operational decision, not a hidden
in-memory rule. Before enabling a durable duplicate policy, decide whether the
school wants to:

- accept repeat enquiries and review duplicates manually in the admin inbox
- collapse exact active duplicates in Supabase with a unique index
- use platform rate limits only and leave lead deduplication to admin review

If the owner approves collapsing exact active duplicates, prefer a Supabase
unique index over application memory. A conservative starting point is one active
lead per normalized email, learner name, and course while the lead is still new,
contacted, or trial-scheduled. This may suppress a repeated valid submission if
the same household submits the same learner and course again, so it needs owner
approval and QA before Production.

The public form already handles a duplicate-key insert rejection generically: the
visitor sees the normal success state and no duplicate status is revealed.

## Paid Traffic Readiness

Before paid campaigns or high-volume public announcements, confirm:

- Turnstile is configured with both public site key and server secret in the
  target Vercel environment.
- Submissions without a valid Turnstile token are rejected before Supabase
  insert attempts.
- Platform-level rate limits or firewall rules are approved, configured, and
  tested for the registration route.
- Rate-limit behavior does not block normal test users completing the form once.
- Analytics and ad conversion events remain free of personal registration data.
- Test conversion events are marked in launch notes or dashboards without using
  personal data in event properties.
- Operational logs and events do not contain submitted names, emails, phone
  numbers, messages, parent or guardian details, raw Turnstile tokens, secrets,
  or account IDs.

## QA Checks

Run these checks on Preview before launch and repeat on Production after enabling
live environment values. Use synthetic test data only.

### Turnstile

- With `CLOUDFLARE_TURNSTILE_SECRET_KEY` configured, submit without
  `cf-turnstile-response`; the form should show a generic submission error and
  no Supabase row should be created.
- Submit with an invalid, expired, malformed, or reused token; the form should
  show the same generic submission error and no Supabase row should be created.
- Submit with a fresh valid token; one valid lead row should be created.
- Confirm local-only test keys, bypasses, or debug notes are not enabled in
  Production.

### Repeated Submissions

- Submit the same synthetic lead multiple times at normal human speed; document
  whether duplicate handling is manual or protected by an approved platform rule.
- If a Supabase duplicate unique index is enabled, repeat the same synthetic
  lead and confirm only one active row exists while the visitor still receives
  the generic success state.
- Confirm a legitimately different synthetic learner from the same household is
  not blocked by the approved duplicate policy.
- Send a short burst of synthetic submissions to the registration endpoint after
  edge controls are configured; the platform should throttle or block the burst
  without exposing private implementation details to the visitor.
- Confirm throttled requests do not create Supabase rows.
- Confirm any operational alert or dashboard records only public-safe metadata.

### Honeypot And Validation

- Submit with the hidden `website` honeypot filled; the visitor should see the
  generic success state and no lead row should be created.
- Submit missing required fields; field validation should happen before
  Turnstile or Supabase persistence is treated as successful.
- Submit unsupported course or contact option values; the server should reject
  the request even if the browser UI is bypassed.

### Logs, Events, And Analytics

- Inspect Vercel logs, browser analytics events, and any campaign conversion
  debugger using synthetic submissions.
- Confirm events are limited to coarse properties such as locale, route, course
  interest, and preferred contact method.
- Confirm logs and analytics do not contain names, emails, phone numbers,
  messages, learner age free text, parent or guardian details, raw Turnstile
  tokens, Supabase keys, project IDs, ad account IDs, or private admin notes.
- Confirm generic error messages do not reveal whether Turnstile, Supabase, RLS,
  or another provider caused the failure.

## Related Docs

- `docs/supabase-trial-registrations.md` for the trial lead table, RLS, form
  contract, and Turnstile setup notes.
- `docs/analytics-consent-plan.md` for conversion event safety and paid ads
  measurement planning.
- `docs/launch-checklist.md` for deployment and launch QA.
- `docs/deployment-setup.md` for public-safe environment and Vercel setup notes.
