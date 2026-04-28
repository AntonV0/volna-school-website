# Public Asset Workflow

This workflow keeps the rebuild safe for a public portfolio repository while leaving a clear path for approved photography and supporting media later.

## Folder Conventions

- `docs/source-screenshots/` is ignored. Keep migration screenshots and visual audit captures here only.
- `docs/source-copy/` is ignored. Keep extracted or copied source text here until it has been rewritten and approved.
- `docs/assets/source/` is ignored. Keep unreviewed stock searches, generated drafts, source exports, and working notes here.
- `docs/assets/private/` is ignored. Keep business-only reference material here when it must exist locally.
- `public/images/original/` is ignored. Keep raw originals here until they are resized, compressed, and approved for public use.
- `public/images/categorised/` is tracked for reviewed public-safe images grouped by page, audience, or use case.
- `public/images/optimised/` is tracked for final web-ready derivatives used by the app.

Do not add real image assets until the owner has approved the file, usage context, licence, alt text, and whether it is safe for public portfolio history.

## Approval Gates

1. Source check: confirm the image is owned, licensed, or generated for this project.
2. Privacy check: reject live class photos, private staff/client information, raw screenshots, unpublished business material, and anything with identifiable minors.
3. Truthfulness check: avoid images that imply real Volna classes, staff, facilities, or outcomes unless that claim is verified.
4. Brand check: prefer a clean educational feel with teal/blue identity support and red only for primary action emphasis.
5. Accessibility check: write concise alt text before wiring the asset into a component.
6. Technical check: export a web-ready derivative, keep raw originals ignored, and use stable dimensions to avoid layout shift.
7. Launch check: confirm the asset is still accurate for the live page, SEO preview, and any social card where it appears.

## Naming

Use lowercase kebab-case names that describe the asset and intended placement:

```text
public/images/optimised/home-hero-learning-table.webp
public/images/optimised/course-gcse-online-study.webp
public/images/categorised/supporting-teal-stationery.webp
```

Avoid names that expose private people, clients, source vendors, internal notes, or unapproved claims.

## Component Contract

Until approved images exist, use `MediaFrame` for layout-safe placeholders. When an image is approved, register its public metadata in code with:

- public path from `getApprovedImagePath`
- visible usage area or page
- alt text
- intrinsic width and height
- public-safe source type
- approval date

Only paths under `/images/categorised/` and `/images/optimised/` should be used by UI components. Keep `/images/original/`, `docs/assets/source/`, and `docs/assets/private/` out of page code.

## SEO and Social Preview Assets

Treat Open Graph, favicon, manifest, and social preview imagery as public launch assets. They need the same source, privacy, licence, alt/context, and claim checks as in-page images. Do not use raw screenshots, identifiable minors, dashboard captures, or unreviewed generated drafts for previews.

## Open Questions

- Which stock images are already approved for this public rebuild?
- Should generated supporting images be marked in captions, metadata only, or both?
- Who gives final approval for alt text and claims implied by non-literal supporting images?
- Should final assets use only WebP, or should JPEG/PNG fallbacks be kept for any specific channels?
