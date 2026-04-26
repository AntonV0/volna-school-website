# Volna School Website

Next.js rebuild workspace for the Volna School website.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Local Setup

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` once the Supabase project is ready.
Keep real values out of Git. Vercel project metadata in `.vercel/` is ignored.

## Useful Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Migration Workflow

Add source material before building the final site:

- `docs/source-screenshots/` for screenshots of the existing site. This folder is ignored by Git by default.
- `docs/source-copy/` for copied page text. This folder is ignored by Git by default.
- `docs/assets/` for reviewed public references only. Put private/source material in ignored subfolders.
- `docs/site-audit/page-inventory.md` for the current page list.
- `docs/site-audit/content-map.md` for old-to-new content mapping.
- `docs/site-audit/brand-notes.md` for rebrand direction.

See `docs/public-repo-checklist.md` before pushing to the public repository.
See `docs/deployment-setup.md` for GitHub, Supabase, and Vercel setup notes.
See `docs/integration-status.md` for current integration status.

## Integration Notes

GitHub, Supabase, and Vercel should be linked after the content audit folders are filled enough to confirm the first route plan.

The pre-existing placeholder folders from before scaffolding were moved to `docs/setup-backup/`.
