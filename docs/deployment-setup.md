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
- Enable row-level security before adding user-generated or private data.
- Keep preview and production data separate unless there is a clear reason to share a database.

## Vercel

- Import the GitHub repo into Vercel after the repo has a clean setup commit.
- Set the production branch intentionally, likely `main` after the setup branch is merged.
- Add Supabase env vars in Vercel for Production, Preview, and Development as needed.
- Use separate Preview env values if preview deployments should not touch production data.
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

See `docs/integration-status.md` for the current setup state.
