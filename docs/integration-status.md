# Integration Status

Use this file to track GitHub, Supabase, and Vercel setup without exposing private values.

## Current State

Last status review: 12 November 2026. Backend findings below remain dated observations, not a fresh database inspection.

| Area | Status | Notes |
| --- | --- | --- |
| GitHub remote | Ready | `origin` points to `AntonV0/volna-school-website`. |
| GitHub CI | Running on GitHub | Lint, typecheck and build passed for `5f8041f` on `dev`: [verified run](https://github.com/AntonV0/volna-school-website/actions/runs/43216396026). |
| Supabase project | Confirmed locally; schema deferred | Owner confirmed the configured project on 23 October 2026. Read-only inspection found an empty public schema. No tables or policies were created. |
| Supabase env vars | Present locally | Local configuration points to the confirmed project. Deployed configuration and permissions still need backend-phase verification; never copy credentials into this document. |
| Vercel project | Git-connected Preview verified | Preview for `5f8041f` was Ready and browser-tested. This does not verify production/backend configuration. Local CLI authentication is separate. |
| Vercel env vars | Not pulled | Pull only into `.env.local`, which is ignored. |
| Production QA checklist | Ready to use | `docs/production-env-qa.md` covers public-safe Supabase, Turnstile, Vercel env, and analytics checks. |
| Legal owner review checklist | Ready to use | `docs/legal-owner-review.md` tracks approval gates for privacy and refund pages without private terms. |

## Local CLI Preflight

On 12 November 2026, `gh` was available and authenticated for push/CI checks. The Vercel CLI was installed but not authenticated; its login prompt was cancelled and deployment status was checked through GitHub and the Vercel dashboard. Supabase CLI availability was not rechecked. Do not infer deployed configuration from local CLI availability.

## Next Integration Steps

**Decision — 23 October 2026:** finish public-page refinement before the database
and registration implementation phase. Existing enquiry forms are UI/integration
scaffolding, not launch-ready intake. See [the backend handoff](backend-phase-handoff.md)
for verified findings and outstanding work. Do not apply the early schema or
optional duplicate-index examples automatically.

1. Continue verifying GitHub CI and the exact Vercel Preview commit after approved pushes; the initial GitHub/Vercel connection is complete.
2. In the backend phase, review the confirmed Supabase project, finalise the enquiry schema and permissions, and verify local/deployed configuration.
3. Confirm production branch, domain and environment settings before launch; a successful Preview is not production sign-off.
4. Add the Supabase env vars to Vercel Production, Preview, and Development.
5. Configure both Turnstile keys together in Production before accepting real trial registrations.
6. Pull Vercel env vars locally into `.env.local`.
7. Run `docs/production-env-qa.md` with synthetic data only.
8. Complete `docs/legal-owner-review.md` before removing legal review notices or making draft legal pages indexable.
9. Re-run `npm run lint`, `npm run typecheck`, and `npm run build`.
