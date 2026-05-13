# Volna School Website

A production-focused rebuild of the Volna School website: a bilingual online Russian school site for children, GCSE and A-Level students, and adult learners.

This repository is public so the build process, architecture, and implementation quality can be reviewed. It is not an open-source template and the contents are not licensed for reuse.

## Project Snapshot

- **Product:** Public marketing site with bilingual course routes, registration, legal pages, and private portal foundations.
- **Audience:** Families, exam students, adult learners, school staff, and site administrators.
- **Primary locales:** English and Russian.
- **Deployment target:** Vercel.
- **Data/auth target:** Supabase.
- **Status:** Active rebuild and launch preparation.

## What This Project Demonstrates

- Next.js App Router architecture with localized route groups.
- Type-safe content modules for public pages and course detail routes.
- Responsive, image-rich page composition using reviewed public assets.
- Trial registration flow with validation, Turnstile support, and Supabase integration.
- Private route foundations for admin, teacher, and student areas.
- Public-repo hygiene for a real business project with private source material kept out of Git.

## Portfolio Rebuild Notes

This rebuild is intentionally structured as a public portfolio project for a real school website. The goal is to show production judgment: how a rough legacy marketing site can be rebuilt into a warmer, bilingual, course-led experience while keeping private business material out of the repository.

The public work has been developed in focused passes rather than one broad redesign sweep:

- Home was rebuilt around course discovery, trust-building, trial guidance, and clearer route handoffs.
- Course pages were strengthened with route-specific hero context, study options, pricing, calendars, FAQs, and localized decision guidance.
- About was reshaped around school proof, welcome, mission, history, values, curriculum, and route links.
- Registration was polished as the main conversion surface, with clearer course handoff guidance, form support copy, process steps, and reassurance cards.
- Smaller QA passes covered Russian layout fit, anchor behavior, footer/nav consistency, and route smoke checks.

The source boundary is a core part of the engineering work. Private migration references, raw originals, staff/client/student material, secrets, and unreviewed source media stay ignored locally. Public pages only use reviewed derivatives and public-safe content.

## Image and Content Pipeline

Public image usage goes through a small approval pipeline:

- Reviewed derivatives live in `public/images/optimised/`.
- Image metadata, alt text, route groupings, and allowed usage are registered in `src/lib/volna-images.ts`.
- Public UI should render those assets through the approved image registry and shared media components, rather than referencing raw files directly.
- Unreviewed originals and migration screenshots remain outside the public build.

Content follows the same separation. Public-facing copy is typed in `src/content/`, while prices, exam results, testimonials, and legal text are treated as owner-review material before launch. The site may display structured draft content for portfolio review, but business-sensitive or legally binding claims should be checked before production use.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Supabase SSR/Auth
- Vercel Analytics and Speed Insights
- Cloudflare Turnstile support for registration protection

## Repository Map

```text
src/app/                  App Router routes, layouts, metadata, sitemap, robots
src/components/           Page sections, layout shell, forms, admin/private UI
src/content/              Typed bilingual page and course content
src/lib/                  Routing, metadata, env, Supabase, registration, assets
public/images/optimised/  Reviewed public image derivatives only
docs/                     Public-safe setup, launch, integration, and audit notes
.github/                  CI, Dependabot, and pull request template
```

Ignored folders such as `docs/source-screenshots/`, `docs/source-copy/`, `docs/assets/source/`, `docs/assets/private/`, and `public/images/original/` are used only for reviewed local migration material.

## Key Features

- Bilingual English/Russian routing.
- Course landing pages for children's classes, GCSE, A-Level, and adult Russian.
- Course detail pages for specific study routes.
- Free trial registration workflow.
- SEO metadata, structured data, sitemap, robots, manifest, and Open Graph route.
- Admin/private portal route shells with access-control foundations.
- Approved image registry for public-safe image usage.

## Local Development

Use Node.js `>=20.9.0`.

```bash
npm install
npm run dev
```

The dev server runs on:

```text
http://localhost:3001
```

Create `.env.local` from `.env.example` when working with Supabase, Turnstile, analytics, or private-route features. Real values must stay out of Git.

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run verify
```

`npm run verify` runs linting, TypeScript, and the production build.

## Environment Notes

Public-safe variable names are documented in `.env.example`. Real environment values belong only in local ignored files and deployment environment settings.

Important setup docs:

- `docs/deployment-setup.md`
- `docs/production-env-qa.md`
- `docs/private-portal-access-model.md`
- `docs/registration-abuse-protection.md`

## Public Repo Safety

Before pushing, review:

```text
docs/public-repo-checklist.md
```

Do not commit:

- `.env.local` or secret values
- Supabase service-role keys, Vercel tokens, Turnstile secrets, or admin allowlists
- Raw source screenshots or copied private migration content
- Private business records, invoices, analytics exports, or real submissions
- Raw staff/student/client material or unreviewed images

Only reviewed, public-safe derivatives should be placed under `public/images/optimised/`.

## Verification Before Pull Requests

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

GitHub Actions runs the same core checks on pull requests and pushes to protected branches.

Recommended route smoke checks for public-page work:

```text
/
/#courses
/about-us
/classes-for-children
/classes-for-children#study-options
/gcse-courses#exam-guide
/a-level-courses#exam-guide
/courses-for-adults
/registration?course=children
/registration#registration
/ru
/ru/classes-for-children
/ru/gcse-courses
/ru/registration?course=children
```

When running a production build locally, `next/font` may need network access to fetch Google Fonts. If the build environment blocks that request, rerun with network access or configure the font pipeline before treating the failure as an application regression.

## Launch Review Notes

The current public build is intended to be portfolio-reviewable, not a final legal/business launch artifact. Before production launch, review:

- Course prices and fee labels.
- GCSE and A-Level result claims.
- Testimonial-derived or parent/student outcome claims.
- Privacy, refund, and policy pages.
- Final Russian copy fit on small screens.

## Documentation Index

- `docs/launch-checklist.md` - launch QA and route checks.
- `docs/integration-status.md` - current integration state.
- `docs/asset-workflow.md` - image and media handling rules.
- `docs/image-audit-checklist.md` - public image review status.
- `docs/incoming-media-audit.md` - source media audit summary.
- `docs/legal-owner-review.md` - legal page review notes.
- `docs/public-repo-checklist.md` - safety checklist before public pushes.

## License

All rights reserved. See `LICENSE`.
