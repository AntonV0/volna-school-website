# Public Repository Checklist

Use this before every public push.

## Safe to Commit

- Source code, configuration, and tests.
- `.env.example` with variable names only.
- Polished public assets approved for the live site.
- High-level planning docs that do not expose private business details.
- Asset workflow notes that describe conventions without including private source material.
- Launch QA notes that record statuses, route names, and decisions without screenshots of private tools or real submissions.

## Do Not Commit

- `.env.local`, Supabase keys, Vercel tokens, database URLs, or service-role keys.
- Raw source screenshots or copied site content before review.
- Private business records, unpublished staff/client details, invoices, analytics exports, or credentials.
- Large unoptimized originals unless they are intentionally public website assets.
- Live class photos, identifiable minors, generated drafts, unreviewed stock images, or private source assets.
- Real trial registrations, admin inbox screenshots, Supabase table exports, role allowlists with staff emails, or test submissions containing personal data.
- Turnstile secret keys, tracking IDs, ad account IDs, consent-tool exports, or Vercel/Supabase project identifiers beyond public-safe variable names.

## Pre-Push Commands

```bash
npm run lint
npm run typecheck
npm run build
```

## Asset Safety

Follow `docs/asset-workflow.md` before adding anything under `public/images/`. Raw originals stay ignored in `public/images/original/`; only reviewed, public-safe derivatives should move into tracked public image folders.

## Content Safety

Before wiring final page content, confirm the English and Russian copy is rewritten or explicitly approved for public reuse. Keep extracted source copy, migration notes, and owner-only review comments in ignored local folders until they are safe for portfolio history.

## Useful Git Check

```bash
git status --short
git diff --cached --stat
```
