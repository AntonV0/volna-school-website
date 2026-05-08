# Image Audit Checklist

Audit date: 2026-05-03

Latest update: 2026-05-04

This checklist compares the ignored incoming image set with the original-site screenshot/reference maps. Source files remain ignored; only generated WebP derivatives should be placed in public folders.

Owner note: consent has been received for the original-site images. The remaining gates are source-file completeness, licence/source confirmation where relevant, public naming, alt text, image optimisation, and keeping raw/source files out of git until derivatives are ready.

## Source Locations Checked

- `.gitignore`
- `docs/asset-workflow.md`
- `docs/public-repo-checklist.md`
- `docs/site-audit/content-map.md`
- `docs/site-audit/page-inventory.md`
- `docs/site-audit/live-site-source-map.md`
- `docs/source-screenshots/`
- `docs/assets/source/incoming-images/`
- `docs/assets/source/incoming-images/manual-missing-2026-05-04/`

## Current Safety Status

- `docs/source-screenshots/` is ignored and contains original-site screenshot references.
- `docs/assets/source/incoming-images/` is ignored and contains uploaded source/review images.
- `source/incoming-images/` is not present; the active incoming folder is `docs/assets/source/incoming-images/`.
- `public/images/optimised/` now contains first-pass WebP derivatives generated from the clean ignored source library.
- `public/images/categorised/` and `public/images/original/` contain only `.gitkeep` placeholders.
- No uploaded raw/source images are currently public website assets.
- Exact-covered raw intake duplicates and generated `_extracted/` staging were deleted on 2026-05-04 after verification. The ignored cleanup log is `docs/assets/source/incoming-images/_audit/safe-delete-log-2026-05-04T15-32-39.csv`.
- Remaining raw intake files were kept because they are not exact hash-covered by the clean library and need later classification or provenance decisions.
- The remaining `library-candidate-review` files were later promoted into the ignored organized library, hash-verified, and their raw originals were deleted. The current post-promotion report is `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/remaining-intake-classification.md`.
- Full variant contact sheets were regenerated and reviewed. The high-confidence `safe-delete-candidate` and `likely-variant-review` raw files were deleted; less certain WordPress/thumbnail/possible-variant files were kept for owner or provenance review.
- Final cleanup pass deleted the remaining generated WordPress/thumbnail derivatives, preserved possible variants under `_library/_review/possible-variants-2026-05-04/`, and moved zip archives under `_library/_provenance/archives/`. No loose raw intake folders remain.
- The zip archive binaries were then deleted after preserving their original grouping in archive provenance manifests.

## Uploaded And Matched

- Volna logo variants are present and match header/footer/logo needs, pending final brand approval.
- Home course-card/course-summary stock images are present for children, GCSE, A-Level, and adults.
- Home teaching approach / About mission online-learning image is present.
- Home first-lesson CTA child-with-laptop image is present.
- Children class overview online-class laptop image is present.
- GCSE private tuition / home GCSE stock study image is present.
- A-Level course-summary / A-Level study-option image is present.
- Adult course-summary / adult private-tuition stock image is present.
- Several original school-history/collage photos used on Home/About appear to be present in the nested incoming set, but they remain review-only because they show real children, classes, or events.

The current ignored slot map covers 55 original-site page/section image slots: 41 matched, 14 candidate matches, and 0 unresolved after the 2026-05-04 missing-image intake and screenshot-based staff mapping.

## Uploaded But Needs Source/Implementation Review

- Any image showing identifiable minors, classroom groups, school events, or families: consent is assumed received, but still confirm intended page/section and alt text before publishing derivatives.
- Any real historic school photo used in Home hero collage, Home welcome collage, About hero/history, or footer background.
- Any staff portrait or headteacher portrait, even if visible on the current site.
- Stock-like images until source/licence rights are confirmed.
- Logo exports until final public brand files, dimensions, alt text, and usage context are approved.
- Duplicate or resized `IMG` files in nested folders; confirm which version is the original and which is a derivative before creating public web assets.
- Broad design exports such as artboards or composite images; do not use them directly unless their contents and source layers are reviewed.

## Original-Site Slots Still Needing Owner Assignment

No original-site image slot is currently missing a source candidate. These items still need visual review before launch:

- `home-team-elena`: mapped to the supplied headteacher-style portrait and reused for the About headteacher slot.
- `home-team-marina`: mapped from the original Home screenshot to the red-headscarf portrait.
- `home-team-irina`: mapped from the original Home screenshot to the dark-haired portrait with glasses.
- `home-team-anton`: mapped from the original Home screenshot to the male portrait.
- `about-headteacher-portrait`: mapped to the supplied headteacher-style portrait; confirm round crop/signature treatment.
- `alevel-study-one-year`: now mapped to the supplied teenage boy with headphones/laptop stock image.

## Original-Site Slots Now Covered By Uploads

These were previously likely missing but now have matched or candidate source-library images:

- About history video/social-card thumbnail: candidate source exists.
- About Pushkin school logo/social-card asset: candidate source exists.
- About curriculum student laptop and online-lesson images: candidate sources exist.
- Children hero and study-option images: matched/candidate sources exist.
- GCSE hero, results, 1-year, 2-year, private tuition, exam-location, and mock-exam images: matched/candidate sources exist.
- A-Level hero, results, 1-year, 2-year, private tuition, exam-location, and mock-exam images: matched/candidate sources exist.
- Adult hero, beginner, intermediate, and customised-course images: matched/candidate sources exist.
- Course detail and registration pages reuse approved first-pass derivatives from the matching parent course image set.
- Staff/headteacher portraits: source candidates exist, but the unassigned compressed portraits need owner name assignment before implementation.

Generated ignored review files for this pass:

- `docs/assets/source/incoming-images/_audit/original-site-image-slot-map.md`
- `docs/assets/source/incoming-images/_audit/contact-sheets/original-site-slot-candidates.jpg`
- `docs/assets/source/incoming-images/_audit/contact-sheets/original-site-staff-assignment-needed.jpg`
- `docs/assets/source/incoming-images/_audit/contact-sheets/manual-missing-2026-05-04-review.jpg`
- `docs/assets/source/incoming-images/_audit/public-derivatives-manifest.json`
- `docs/assets/source/incoming-images/_audit/library-deduplication-report.md`
- `docs/assets/source/incoming-images/_audit/raw-intake-coverage-report.md`
- `docs/assets/source/incoming-images/_audit/safe-delete-log-2026-05-04T15-32-39.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/remaining-intake-classification.md`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/remaining-intake-promotions-2026-05-04.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/promoted-raw-delete-log-2026-05-04T16-05-30.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/reviewed-variant-delete-log-2026-05-04T16-22-03.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/wordpress-thumbnail-delete-log-2026-05-04T16-41-53.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/possible-variant-promotions-2026-05-04.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/possible-variant-raw-delete-log-2026-05-04T16-44-51.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/archive-provenance-move-log-2026-05-04T16-45-34.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/archive-provenance-manifest-before-zip-delete.md`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/archive-provenance-manifest-before-zip-delete.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/archive-provenance-manifest-before-zip-delete.json`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/archive-binary-delete-log-2026-05-04T17-40-40.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/contact-sheets/full-variant-review/`
- `docs/assets/source/incoming-images/_library/_catalog/library-index.md`
- `docs/assets/source/incoming-images/_library/_duplicates/exact/`

## Remaining Source Cleanup

Already cleaned:

- Exact duplicate raw intake files that were safely covered by `_library/`.
- Generated extraction staging under `_extracted/`.
- 21 remaining useful source candidates promoted into `_library/`, then deleted from raw intake after hash verification.
- 199 high-confidence non-exact variants deleted after full contact-sheet review.
- Empty ignored raw intake folders `2/` and `random/` removed.
- 93 generated WordPress resize/thumbnail derivatives deleted.
- 25 possible variants preserved under `_library/_review/possible-variants-2026-05-04/`, then removed from raw intake.
- 6 zip archives moved under `_library/_provenance/archives/`.
- 6 zip archive binaries deleted after archive grouping metadata was preserved.
- Empty ignored raw intake folders `from website/` and `manual-missing-2026-05-04/` removed.

Still kept for now:

- No loose raw intake image/archive folders remain.
- Original zip grouping is kept as ignored provenance metadata under `_audit/remaining-intake-cleanup-2026-05-04/archive-provenance-manifest-before-zip-delete.*`.
- 25 possible variants are kept under `_library/_review/possible-variants-2026-05-04/`.
- Clean-library duplicate copies under `_library/_duplicates/exact/`, retained as reviewable duplicates rather than deleted.
- Generated audit reports/contact sheets/manifests under `_audit/`.

Current remaining cleanup decision: none for incoming raw media. There are no remaining unpromoted library candidates, high-confidence raw duplicate buckets, WordPress derivative buckets, loose raw intake folders, or archive binaries.

## Should Not Be Committed Or Made Public Without Approval

- Raw screenshots in `docs/source-screenshots/`.
- Anything in `docs/assets/source/incoming-images/` or other ignored source folders.
- Raw original school/class/event photos.
- Raw staff portraits.
- Unreviewed stock images or generated drafts.
- Composite artboards or screenshots from the existing Wix/live site.
- Any image with uncertain licence, source, privacy status, alt text, or claim context.

## Owner Checklist Before Any Image Moves To `public/`

- Confirm source ownership or licence.
- Confirm privacy clearance, especially for minors and staff.
- Confirm that the image does not imply an unverified real Volna class, facility, staff member, or outcome.
- Choose the intended page/section and write concise alt text.
- Export a resized, compressed derivative under an approved public image folder.
- Register image metadata in code only after approval.
- Re-check `git status --short` before staging to make sure no source images are included.
