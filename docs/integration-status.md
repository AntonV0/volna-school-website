# Integration Status

Use this file to track GitHub, Supabase, and Vercel setup without exposing private values.

## Current State

| Area | Status | Notes |
| --- | --- | --- |
| GitHub remote | Ready | `origin` points to `AntonV0/volna-school-website`. |
| GitHub CI | Ready locally | `.github/workflows/ci.yml` runs lint, typecheck, and build on PRs plus `dev` and `main` pushes. |
| Supabase project | Confirmed locally; schema deferred | Owner confirmed the configured project on 23 October 2026. Read-only inspection found an empty public schema. No tables or policies were created. |
| Supabase env vars | Present locally | Local configuration points to the confirmed project. Deployed configuration and permissions still need backend-phase verification; never copy credentials into this document. |
| Vercel project | Not linked locally | `.vercel/` is ignored; link through the Vercel dashboard or CLI after auth. |
| Vercel env vars | Not pulled | Pull only into `.env.local`, which is ignored. |
| Production QA checklist | Ready to use | `docs/production-env-qa.md` covers public-safe Supabase, Turnstile, Vercel env, and analytics checks. |
| Legal owner review checklist | Ready to use | `docs/legal-owner-review.md` tracks approval gates for privacy and refund pages without private terms. |

## Local CLI Preflight

These CLIs were not found on PATH during setup:

```text
gh
vercel
supabase
```

Install or authenticate them only when live linking is needed. Dashboard setup is also fine.

## Next Integration Steps

**Decision — 23 October 2026:** finish public-page refinement before the database
and registration implementation phase. Existing enquiry forms are UI/integration
scaffolding, not launch-ready intake. See [the backend handoff](backend-phase-handoff.md)
for verified findings and outstanding work. Do not apply the early schema or
optional duplicate-index examples automatically.

1. Push the setup branch to GitHub so CI can run in Actions.
2. In the backend phase, review the confirmed Supabase project, finalise the enquiry schema and permissions, and verify local/deployed configuration.
3. Import the GitHub repo into Vercel.
4. Add the Supabase env vars to Vercel Production, Preview, and Development.
5. Configure both Turnstile keys together in Production before accepting real trial registrations.
6. Pull Vercel env vars locally into `.env.local`.
7. Run `docs/production-env-qa.md` with synthetic data only.
8. Complete `docs/legal-owner-review.md` before removing legal review notices or making draft legal pages indexable.
9. Re-run `npm run lint`, `npm run typecheck`, and `npm run build`.
