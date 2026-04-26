# Integration Status

Use this file to track GitHub, Supabase, and Vercel setup without exposing private values.

## Current State

| Area | Status | Notes |
| --- | --- | --- |
| GitHub remote | Ready | `origin` points to `AntonV0/volna-school-website`. |
| GitHub CI | Ready locally | `.github/workflows/ci.yml` runs lint, typecheck, and build on PRs plus `dev` and `main` pushes. |
| Supabase project | Not linked | Create the project before filling `.env.local` or Vercel env vars. |
| Supabase env vars | Template only | `.env.example` lists required names without values. |
| Vercel project | Not linked locally | `.vercel/` is ignored; link through the Vercel dashboard or CLI after auth. |
| Vercel env vars | Not pulled | Pull only into `.env.local`, which is ignored. |

## Local CLI Preflight

These CLIs were not found on PATH during setup:

```text
gh
vercel
supabase
```

Install or authenticate them only when live linking is needed. Dashboard setup is also fine.

## Next Integration Steps

1. Push the setup branch to GitHub so CI can run in Actions.
2. Create the Supabase project and copy only public anon values plus server-only secrets into local/Vercel env stores.
3. Import the GitHub repo into Vercel.
4. Add the Supabase env vars to Vercel Production, Preview, and Development.
5. Pull Vercel env vars locally into `.env.local`.
6. Re-run `npm run lint`, `npm run typecheck`, and `npm run build`.
