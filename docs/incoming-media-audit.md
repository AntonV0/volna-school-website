# Incoming Media Audit

Audit date: 2026-05-03

This began as a read-only audit of `docs/assets/source/incoming-images/`. No source files were moved, deleted, renamed, or copied into `public/`; later implementation work generated public-safe WebP derivatives from the clean ignored source library.

Phase 1 update: zip archives were extracted into ignored staging at `docs/assets/source/incoming-images/_extracted/`, and generated audit reports/contact sheets were written to ignored `docs/assets/source/incoming-images/_audit/`. These are working files only and should not be committed.

Phase 2 update: preferred source candidates were copied into an ignored clean library at `docs/assets/source/incoming-images/_library/`. The original incoming folders, extracted staging, and zip files were left untouched. The clean library is a working source library, not the final public image tree.

Phase 3 update: Pushkin images were copied from `pushkins/archive-unsorted/` into topical ignored shortlist folders. This is intentionally a review shortlist with overlap between categories; it does not delete or replace the archive-unsorted copies.

Phase 4 update: original-site image slots were mapped to the clean ignored library. The slot map covers 55 page/section image slots.

Phase 5 update: the 2026-05-04 missing-image intake was copied into ignored source folders. `Compressed Images (1).zip` was extracted into `manual-missing-2026-05-04/compressed-images-1/`; the supplied A-Level stock image was copied into `_library/exam-courses/`, and four supplied portrait images were copied into `_library/staff/`. No files were copied into `public/`.

Phase 6 update: public-safe WebP derivatives were generated under `public/images/optimised/` from the clean ignored source library and wired into the website for Home, About, the main course pages, course detail pages, and trial registration. The source-to-public manifest remains ignored at `docs/assets/source/incoming-images/_audit/public-derivatives-manifest.json`.

Phase 7 update: the clean ignored source library was deduplicated for browsing. Exact duplicate working-library copies were moved, not deleted, into `docs/assets/source/incoming-images/_library/_duplicates/exact/`. Raw incoming folders were left untouched as provenance. A local browsing index was generated at `docs/assets/source/incoming-images/_library/_catalog/library-index.md`.

Phase 8 update: exact-covered raw intake duplicates and generated extraction staging were safely deleted after the clean library was verified. This removed 457 ignored source/staging files, about 1.38 GB, and wrote the deletion log to `docs/assets/source/incoming-images/_audit/safe-delete-log-2026-05-04T15-32-39.csv`. No files from `_library/`, `public/`, code, or tracked docs were deleted.

Phase 9 update: remaining non-exact raw intake was classified against the organized library using dimensions, filename families, and perceptual image hashes. The 21 remaining `library-candidate-review` files were promoted into topical ignored library folders, hash-verified, and their raw intake originals were deleted. This added `pushkins/banner-crops/` for original-site-style Pushkin panoramic/banner crops. The post-promotion report is `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/remaining-intake-classification.md`.

Phase 10 update: the complete non-exact variant contact sheets were regenerated and reviewed. The 199 high-confidence raw variants in `safe-delete-candidate` and `likely-variant-review` were deleted, removing about 21.5 MB. The empty ignored raw folders `2/` and `random/` were removed. Less certain `possible-variant-review`, `wordpress-resize-review`, and `low-res-or-thumbnail-review` files were retained because the visual review showed some false matches and unique tiny crops.

Phase 11 update: remaining generated WordPress/thumbnail derivatives were deleted, possible variants were preserved under `_library/_review/possible-variants-2026-05-04/`, and six zip archives were moved under `_library/_provenance/archives/`. There are no loose raw intake folders left; `docs/assets/source/incoming-images/` now contains only `README.md`, `_library/`, and `_audit/`.

Phase 12 update: the six zip archive binaries were deleted after preserving their original grouping in archive provenance manifests. The manifest records archive filenames, original paths, entry lists, hashes, and exact `_library/` matches where available.

## Current Inventory

| Item | Count / size |
| --- | ---: |
| Total files before extraction | 723 |
| Total size before extraction | 1.49 GB |
| `.jpg` | 659 |
| `.jpeg` | 4 |
| `.png` | 34 |
| `.webp` | 1 |
| `.gif` | 5 |
| `.pdf` | 12 |
| `.doc` | 3 |
| `.zip` | 5 |

After extracting archives into `_extracted/`, the generated manifest covers 790 media/reference rows:

| Manifest group | Count |
| --- | ---: |
| `.jpg` | 694 |
| `.png` | 50 |
| `.webp` | 17 |
| `.pdf` | 12 |
| `.mp4` | 5 |
| `.gif` | 5 |
| `.jpeg` | 4 |
| `.doc` | 3 |

## Main Folders

| Folder / area | Count | Notes |
| --- | ---: | --- |
| `from website/` | 683 | Main added stock/site library plus Pushkin images and archives. |
| `from website/Pushkin Images/` | 606 | Historic Pushkin school media, including uploads by year/month plus location folders. |
| `2/` | 15 | Earlier uploaded Pushkin/school and stock set; many overlap with `from website/`. |
| `random/` | 5 | Earlier duplicate/resized homepage stock images. |
| root loose files | 20 | Earlier logo, stock, artboard, and homepage image uploads. |

## Pushkin Image Breakdown

| Pushkin area | Count | Notes |
| --- | ---: | --- |
| `uploads/` | 444 | WordPress-style year/month archive from 2012-2019. Contains many resized derivatives. |
| `Chelmsford/` | 54 | Location/event photos. |
| `Southend/` | 44 | Location/event photos. |
| `Wycombe/` | 40 | Location/event photos. |
| `Hemel/` | 15 | Location/event photos. |
| `Bracknell/` | 9 | Location/event photos. |

These existing folders are useful as provenance, but the clean working library should not be organised primarily by school location unless a later content plan needs that. For the rebuild, a smaller topical Pushkin library is easier to use: highlights, classroom learning, events/community, brand/history, and archive-unsorted.

## Archives Present

| Archive | Size | Contents summary |
| --- | ---: | --- |
| `Compressed Images.zip` | 2.6 MB | 30 compressed JPG/WebP derivatives of existing source images. |
| `Homepage.zip` | 17.6 MB | 13 homepage hero/collage assets and variants. |
| `Pushkin's School.zip` | 9.9 MB | 10 original Pushkin school photos. |
| `Site Files.zip` | 33.2 MB | 19 site files including hero/course images, logos, book/poster images, and PNG variants. |
| `Video Maker.zip` | 264.0 MB | 5 MP4 marketing/inspiration videos. |

Do not extract archives into tracked folders. When extraction starts, use a temporary ignored review folder and keep the zip as provenance until the collection is settled.

## Duplicate And Variant Notes

- Exact duplicate groups are present across root, `2/`, `random/`, and `from website/`.
- Some pairs are true byte-for-byte duplicates, such as `Back to School_edited.jpg`, several Pushkin location photos, and `IMG 2` through `IMG 5` variants.
- Many stock files have both high-quality and compressed versions, usually with names like `_edited (1).jpg`, `_edited (2).jpg`, or duplicated entries in `Compressed Images.zip`.
- Pushkin `uploads/` contains many WordPress resized derivatives such as `-150x150`, `-300x...`, `-450x...`, `-1000x...`, and original-looking base filenames.
- The generated manifest found 43 exact duplicate groups and 122 filename-family variant groups.

Recommended rule for now: keep all raw source files in place, but mark one highest-quality candidate per visual during the classification pass. Defer deletion until the library has a manifest and the owner has approved the chosen originals.

Generated ignored reports:

- `docs/assets/source/incoming-images/_audit/media-manifest.csv`
- `docs/assets/source/incoming-images/_audit/media-manifest.json`
- `docs/assets/source/incoming-images/_audit/duplicate-report.md`
- `docs/assets/source/incoming-images/_audit/summary.json`
- `docs/assets/source/incoming-images/_audit/contact-sheets/`

Generated ignored clean-library files:

- `docs/assets/source/incoming-images/_library/library-manifest.csv`
- `docs/assets/source/incoming-images/_library/library-manifest.json`
- `docs/assets/source/incoming-images/_library/library-summary.json`
- `docs/assets/source/incoming-images/_library/README.md`
- `docs/assets/source/incoming-images/_library/_catalog/library-index.md`
- `docs/assets/source/incoming-images/_library/_catalog/library-catalog.csv`
- `docs/assets/source/incoming-images/_library/_catalog/library-catalog.json`
- `docs/assets/source/incoming-images/_library/_duplicates/exact/`
- `docs/assets/source/incoming-images/_library/_review/pushkins-review-01.jpg` through `pushkins-review-06.jpg`
- `docs/assets/source/incoming-images/_library/pushkins/pushkins-shortlist-manifest.csv`
- `docs/assets/source/incoming-images/_library/pushkins/pushkins-shortlist-manifest.json`
- `docs/assets/source/incoming-images/_library/pushkins/pushkins-shortlist-summary.json`
- `docs/assets/source/incoming-images/_library/pushkins/_shortlist-review/`

Generated ignored original-site mapping files:

- `docs/assets/source/incoming-images/_audit/original-site-image-slot-map.csv`
- `docs/assets/source/incoming-images/_audit/original-site-image-slot-map.json`
- `docs/assets/source/incoming-images/_audit/original-site-image-slot-map.md`
- `docs/assets/source/incoming-images/_audit/original-site-image-slot-summary.json`
- `docs/assets/source/incoming-images/_audit/contact-sheets/original-site-slot-candidates.jpg`
- `docs/assets/source/incoming-images/_audit/contact-sheets/original-site-staff-assignment-needed.jpg`
- `docs/assets/source/incoming-images/_audit/contact-sheets/manual-missing-2026-05-04-review.jpg`

Generated ignored 2026-05-04 intake files:

- `docs/assets/source/incoming-images/README.md`
- `docs/assets/source/incoming-images/manual-missing-2026-05-04/Compressed Images (1).zip`
- `docs/assets/source/incoming-images/manual-missing-2026-05-04/compressed-images-1/`
- `docs/assets/source/incoming-images/manual-missing-2026-05-04/Teenage boy wearing headphones works at desk in his bedroom_edited (1).jpg`
- `docs/assets/source/incoming-images/manual-missing-2026-05-04/IMG-20230727-WA0002 (1) (1).webp`

Generated ignored cleanup files:

- `docs/assets/source/incoming-images/_audit/raw-intake-coverage-report.md`
- `docs/assets/source/incoming-images/_audit/raw-intake-coverage-report.json`
- `docs/assets/source/incoming-images/_audit/safe-delete-log-2026-05-04T15-32-39.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/remaining-intake-classification.md`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/remaining-intake-classification.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/remaining-intake-classification.json`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/remaining-intake-promotions-2026-05-04.csv`
- `docs/assets/source/incoming-images/_audit/remaining-intake-cleanup-2026-05-04/remaining-intake-promotions-2026-05-04.json`
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

## Post-Cleanup Source State

The clean ignored library remains intact after cleanup. The public derivatives manifest currently covers 41 optimized WebP files, and all 41 still have their source file present in `_library/`.

Removed:

- 385 raw intake files that were exact hash matches of files already preserved in the clean library.
- 72 files from generated `_extracted/` staging.
- Empty folders left behind in the cleaned raw intake locations.
- 199 reviewed non-exact raw variants in the `safe-delete-candidate` and `likely-variant-review` buckets.
- 93 generated WordPress resize/thumbnail derivatives.

Kept:

- `docs/assets/source/incoming-images/_library/`: the organized working source library, including exact duplicate copies moved under `_duplicates/exact/`.
- `docs/assets/source/incoming-images/_audit/`: generated reports, contact sheets, manifests, and deletion logs.
- 25 possible variants preserved under `_library/_review/possible-variants-2026-05-04/`.
- Original archive grouping metadata preserved under `_audit/remaining-intake-cleanup-2026-05-04/archive-provenance-manifest-before-zip-delete.*`.

Final incoming source layout after cleanup:

| Folder / area | Files | Size |
| --- | ---: | ---: |
| root loose files | 1 | 0.0 MB |
| `_library/` | 732 | 1.84 GB |
| `_audit/` | 117 | 47.5 MB |

Removed or reorganized in the final cleanup passes:

| Action | Files | Size |
| --- | ---: | ---: |
| `safe-delete-candidate` | 156 | 18.3 MB |
| `likely-variant-review` | 43 | 3.3 MB |
| `wordpress-resize-review` | 66 | 2.3 MB |
| `low-res-or-thumbnail-review` | 27 | 0.2 MB |
| Promoted possible variants to `_library/_review/possible-variants-2026-05-04/` | 25 | 4.1 MB |
| Moved archives to `_library/_provenance/archives/` | 6 | 312.2 MB |
| Deleted archive binaries after preserving grouping metadata | 6 | 312.2 MB |

There are no loose raw source files left in `from website/`, `manual-missing-2026-05-04/`, `2/`, or `random/`; those folders were removed after their contents were handled. The zip binaries are also gone; original archive grouping is kept only as lightweight metadata.

Clean-library contents after exact duplicate cleanup and remaining-intake promotion:

| Folder | Preferred candidates copied |
| --- | ---: |
| `adults/` | 11 |
| `brand/` | 10 |
| `children/` | 14 |
| `decorative/` | 21 |
| `exam-courses/` | 18 |
| `exams/` | 9 |
| `staff/` | 4 |
| `pushkins/archive-unsorted/` | 43 |
| `pushkins/banner-crops/` | 16 |
| `pushkins/brand-and-history/` | 47 |
| `pushkins/classroom-learning/` | 95 |
| `pushkins/events-and-community/` | 64 |
| `pushkins/highlights/` | 35 |
| `videos/inspiration/` | 5 |
| `_review/possible-variants-2026-05-04/` | 25 |
| `_duplicates/exact/` | 293 |

The clean browsing folders now contain 382 working-library files excluding `_duplicates/`, `_review/`, and `_catalog/`. Exact duplicate working copies are retained under `_duplicates/exact/` and can be deleted later only after owner approval.

Pushkin shortlist copies:

| Folder | Shortlist copies |
| --- | ---: |
| `pushkins/highlights/` | 35 |
| `pushkins/classroom-learning/` | 94 |
| `pushkins/events-and-community/` | 62 |
| `pushkins/brand-and-history/` | 46 |

The Pushkin shortlist no longer keeps exact duplicate working copies across topical folders. Removed duplicate working copies are preserved under `_library/_duplicates/exact/pushkins/`.

## Original-Site Coverage Update

The new stock library covers most previously missing original-site stock assets and many Pushkin/history visuals:

- Children hero and study-option style images are present.
- GCSE hero, study, exam-location, mock-writing, and results/student images are present.
- A-Level hero, study, results/high-five, exam-location, and mock-writing images are present.
- Adult hero, beginner, intermediate, and laptop-call images are present.
- Decorative/brand images are present, including blue stationery banners, artboards, logos, homepage backgrounds, and classroom/background composites.
- Home/About Pushkin history and collage candidates are present, but several need crop/content confirmation against the screenshots.

Current original-site slot map after the 2026-05-04 intake:

| Status | Count | Meaning |
| --- | ---: | --- |
| Matched | 41 | Strong source candidate found in the clean library. |
| Candidate | 14 | Usable source candidate found, but crop/context or final design fit should be checked. |
| Unresolved | 0 | No original-site image slot is currently missing a source candidate. |

Items that still need owner confirmation before implementation:

- Staff portraits from `Compressed Images (1).zip` have been mapped from the original Home screenshot order and portrait appearance: Marina is the red-headscarf portrait, Irina is the dark-haired portrait with glasses, and Anton is the male portrait. The ignored source filenames remain neutral, but public derivatives use the teacher names.
- The headteacher/Elena portrait supplied on 2026-05-04 is now mapped as a match and reused for the About headteacher slot.
- The A-Level 1-year study-option image supplied on 2026-05-04 is now mapped as a match.

## Proposed Library Categories

Use these categories for the next pass. This is a classification proposal only; no files have been moved.

| Proposed category | Intended contents |
| --- | --- |
| `brand/` | Volna logos, Pushkin logos/cards, artboards only if they are source assets rather than screenshots. |
| `decorative/` | Stationery banners, abstract classroom/background images, generic supporting visuals. |
| `children/` | Children class hero, online-learning, parent/child, young student, and children private/group study images. |
| `exam-courses/` | GCSE and A-Level shared teenager/student/laptop images. Split later only if the final design needs separate libraries. |
| `exams/` | Exam halls, exam desks, answer sheets, mock exam writing, and exam-result celebration images. |
| `adults/` | Adult learner, senior learner, business/professional, video-call, and adult private-tuition images. |
| `staff/` | Teacher/headteacher portraits kept as source candidates until names, crops, and final usage are confirmed. |
| `pushkins/highlights/` | Best candidates for public About/Home history sections after visual selection. |
| `pushkins/classroom-learning/` | Strong classroom, lesson, reading, writing, or student-work images from the historic school set. |
| `pushkins/events-and-community/` | Assemblies, celebrations, culture days, group events, and community moments. |
| `pushkins/brand-and-history/` | Pushkin school logos, signs, cards, building/context images, and history-supporting assets. |
| `pushkins/banner-crops/` | Original-site-style Pushkin panoramic crops and narrow banner variants retained as source references. |
| `pushkins/archive-unsorted/` | Everything retained for provenance or future review that is unlikely to be used immediately. Preserve original location/year/month metadata in the manifest rather than making it the folder structure. |
| `videos/inspiration/` | Old marketing videos from `Video Maker.zip` after extraction. |
| `duplicates-or-compressed/` | Known lower-resolution or compressed variants kept temporarily until the manifest is approved. |

## Suggested Work Breakdown

1. Done: extract archives into an ignored staging folder, preserving the original zip files.
2. Done: build a manifest with path, extension, bytes, dimensions, hash, and likely category.
3. Done: identify exact duplicate groups and filename-family variants.
4. Done: create contact sheets by category for owner review.
5. Done: create a clean ignored source-library tree using preferred original candidates, while preserving the original messy incoming folder.
6. Done: review contact sheets and copy a broad Pushkin shortlist into topical folders.
7. Done: map original-site page image slots to the clean library and choose first implementation candidates.
8. Done: copy and map the 2026-05-04 missing-image intake into the ignored source library.
9. Done: generate optimised public derivatives and wire first-pass images into the website, including course detail pages and registration.
10. Done: deduplicate the clean ignored source library for browsing while preserving duplicate copies under `_library/_duplicates/exact/`.
11. Done: safely delete exact-covered raw intake duplicates and generated `_extracted/` staging after verifying the clean library and public derivative sources.
12. Done: classify the remaining non-exact raw intake, promote useful source candidates into `_library/`, and delete only the promoted raw originals after hash verification.
13. Done: review full non-exact variant contact sheets and delete the high-confidence `safe-delete-candidate` and `likely-variant-review` raw files.
14. Done: delete remaining generated WordPress/thumbnail derivatives, preserve possible variants in `_library/_review/`, and move zip archives into `_library/_provenance/archives/`.
15. Done: preserve archive grouping metadata and delete the six zip archive binaries.
16. Next: refine or replace individual public derivatives after visual review; keep source files ignored.
