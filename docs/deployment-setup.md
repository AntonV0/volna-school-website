# GitHub, Supabase, and Vercel Setup

This repo is in setup and content-audit mode. Do not build production pages until screenshots, copy, assets, and rebrand notes have been reviewed for public use.

## GitHub

- Keep work on feature branches from `dev`.
- Do not commit `.env.local`, raw screenshots, copied private content, unpublished business assets, or credentials.
- GitHub Actions runs the same verification commands on pull requests and pushes to `dev` or `main`.
- Before opening a PR, run:

```bash
npm run lint
npm run typecheck
npm run build
```

- Review `docs/public-repo-checklist.md` before each public push.
- Use the pull request template to call out hygiene checks, verification, and whether any assets/copy are included.

## Supabase

- Create one Supabase project for this rebuild before connecting production traffic.
- Store real Supabase values in `.env.local` for local development and in Vercel environment variables for deployments.
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are browser-exposed public project values.
- `SUPABASE_SERVICE_ROLE_KEY` is server-only and should stay unused until a server-only admin workflow needs it.
- `ADMIN_ALLOWED_EMAILS` is a temporary server-only fallback for approved owner/admin email addresses, comma-separated. Keep real emails only in `.env.local` and Vercel environment variables.
- Enable row-level security before adding user-generated or private data.
- Keep anonymous form inserts constrained to the expected trial registration fields.
- Private routes require a valid Supabase session plus a server-controlled role claim. Admin routes also support `ADMIN_ALLOWED_EMAILS` as an early fallback while roles are being configured.
- Apply the RLS helpers in `docs/supabase-private-portal-rls.md` before storing real private records.
- Keep preview and production data separate unless there is a clear reason to share a database.
- Configure Supabase Auth email link redirects for each deployed origin that should support private sign-in:
  - `https://<preview-or-production-origin>/auth/callback`
  - local development origin if private auth is tested locally

## Vercel

- Import the GitHub repo into Vercel after the repo has a clean setup commit.
- Set the production branch intentionally, likely `main` after the setup branch is merged.
- Add Supabase env vars in Vercel for Production, Preview, and Development as needed.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical public URL, currently `https://www.volnaschool.com`, so metadata, sitemap, manifest, and social preview URLs stay consistent.
- Use separate Preview env values if preview deployments should not touch production data.
- Keep Turnstile, analytics, and admin secrets in Vercel environment variables only. Docs and PR text should mention variable names, not values.
- Use `docs/production-env-qa.md` for the public-safe Production Supabase,
  Turnstile, Vercel env, and analytics checks.
- Review `docs/registration-abuse-protection.md` before paid traffic. Prefer
  Vercel Firewall or Cloudflare edge controls for durable registration rate
  limiting before adding app-level shared-store limits.
- Pull env vars locally only into ignored files:

```bash
vercel env pull .env.local
```

- Keep `.vercel/` ignored. It can identify the linked project and should not be committed.

## Local Bootstrap

```bash
npm install
cp .env.example .env.local
npm run lint
npm run typecheck
npm run build
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env.local
```

Fill `.env.local` with Supabase values only after the Supabase project exists.

## Route Probe Notes

After `npm run build`, use a local production server or Vercel Preview URL to probe:

- `/`, `/ru`, `/registration`, and `/ru/registration`
- the English and Russian course, legal, and about pages listed in `docs/launch-checklist.md`
- `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/icon`, `/apple-icon`, and `/og`
- `/login`, `/admin`, `/admin/trial-registrations`, `/teacher`, and `/student` while logged out

Public routes should load or show the intended not-found state. Private routes should not expose private screens, teaching data, student data, or lead data to logged-out visitors.

See `docs/integration-status.md` for the current setup state.
See `docs/launch-checklist.md` for launch QA, redirect checks, and domain cutover notes.
See `docs/legal-owner-review.md` before treating privacy or refund pages as final.
