# Homepage responsive audit

Reviewed 10 September 2026 against the current local homepage. Site header and footer are excluded. Existing unrelated working-tree changes were retained.

## Coverage

English `/` and Russian `/ru` were checked in the Codex browser at viewport widths of 320, 375, 640, 768, 820, 1024, 1120, 1200, 1280 and 1440 CSS pixels. The Windows scrollbar reduces the usable content width by approximately 15 pixels. Checks combined rendered content measurements, visual inspection and component review. This is browser viewport testing, not physical-device or cross-browser certification.

| Section | Finding and outcome |
| --- | --- |
| Hero | The 320px minimum image height dominated narrow screens. Use a 4:3 image below 640px; retain existing larger-screen sizing and desktop composition. |
| Course chooser | Between 640 and 767px, one-column cards with 4:3 photos were unnecessarily tall. Start two columns at 640px and update responsive image sizes. Keep the four-column breakpoint at 1200px. |
| Trust strip | Existing mobile stacking and three-column tablet/desktop layout fit. No changes needed. |
| Welcome | The Russian non-wrapping external-link caption forced the card wider than narrow phones, clipping following content. Allow the link and long heading words to wrap and constrain the content column. Use proportional images while stacked, a smaller mobile heading, and stacked milestones below 400px to accommodate the Russian year label. |
| Class details | At 1024px, fixed image/fee columns left only 303px for the description, including two columns of bullets. Use an image/text row with full-width fees and actions from 1024 to 1279px; the text column is now 655px at 1024px. Retain the existing three-column layout from 1280px. The Russian homepage currently does not render this section because its content has no course-depth data. |
| Teaching approach | The 400px image minimum was excessive on mobile. Use 4:3 on mobile and 16:9 on tablet; retain the desktop image height and card grid. |
| Team | Existing one-, two- and four-column layouts fit the tested widths. No changes needed. |
| Testimonials | At small desktop widths, fixed-width category controls and review links exceeded the panel and were clipped. Keep review links on a separate row below 1280px and allow category controls to fit their available width. Retain desktop paired cards and mobile single-card navigation. Russian static testimonials fit without changes. |
| Trial / placement | Existing responsive button grid and stacked/three-column steps fit. No changes needed. |

## Validation

- No visible text or control overflow found in the final English and Russian width sweeps. Measurements exclude intentional screen-reader-only content and inactive carousel slides.
- Visually reviewed mobile welcome image/caption wrapping, small-desktop class composition, tablet testimonials, and desktop teaching/team composition.
- Exercised the homepage class-details anchor and testimonial category/mobile navigation controls.
- `npm run lint`, `npm run typecheck`, `npm run build` and `git diff --check` passed.
- No shared UI styles, site-header or site-footer files were edited in this audit. No deployment or commit was made.

## Follow-up: mobile and tablet refinement

Implemented the approved section-by-section recommendations, with all new responsive styling confined below 1024px. The existing desktop layouts at 1024px and above remain unchanged.

- Hero: tighter phone spacing and a lighter secondary action.
- Course chooser: compact thumbnail cards on phones; summaries remain in the tablet/desktop cards and full course pages.
- Trust strip: slightly tighter mobile rows.
- Welcome: smaller mobile body text, reduced card padding and a compact vertical milestone timeline.
- Class details: accessible expandable study options and suitability bullets below 1024px, with prices and actions always visible. Tablet cards use an image/introduction row. Mobile fee rows and photos are more compact. Desktop details always remain visible regardless of the disclosure state.
- Teaching approach: reduced image zoom below 1024px, content-sized cards, smaller phone headings and tighter spacing.
- Team: smaller phone heading and introduction, with a reduced gap before the existing staff cards.
- Testimonials: a single card below 1024px; previous/next buttons, an on-screen counter and live announcements replace the small mobile selectors. Desktop paired cards and category selection remain available.
- Trial: compact numbered mobile steps with numbers alongside the text; existing actions retained.

Validation included English widths 320, 390, 639, 640, 768, 820 and 1023px, plus Russian widths 320, 390, 640, 768, 820 and 1023px. No visible text/control overflow was detected. Course disclosures were opened with a pointer and closed with Enter. Tablet testimonial navigation advanced the live announcement to “Testimonial 2 of 8”. Visual checks covered compact cards, image crops, the welcome timeline and trial steps.

Before/after desktop measurements at 1024px and 1440px matched exactly for every section height and all heading font sizes, widths and heights. At 390px, the hero/course chooser decreased from roughly 2,896px to 1,595px, and collapsed class details from 5,418px to 3,524px. Heights vary with content, fonts and local style settings.

Lint, typecheck and production build passed. Header/footer and shared UI styles were not edited for this refinement. No deployment or commit was made.

## Follow-up: gesture and accessibility hardening

The subsequent homepage passes added the following refinements:

- Touch and coarse-pointer layouts retain visible link cues, use larger targets for testimonial and school-story links, and provide pressed feedback. Expanded course disclosures have a persistent visual state.
- Testimonial selection is shared between the single-card and paired layouts, preserving the reader's position across breakpoint changes.
- The carousel waits for a horizontal drag before capturing the pointer. Ordinary link taps and vertical scrolling remain native; pinch zoom is allowed, and a second pointer cancels the current swipe. Drag-generated clicks are suppressed without blocking the next deliberate tap or keyboard activation.
- Previous/next controls use `aria-disabled` during transitions so keyboard focus remains on the activated button. The transition guard prevents repeated activation from starting overlapping transitions.
- Shared in-page actions update the fragment and focus the destination heading. Both these actions and button effects respect reduced-motion preferences.

Prior browser checks covered narrow phones, tablet widths, small desktops, landscape layout, expanded course disclosures, and keyboard carousel transitions. These checks were performed during implementation; the commit-packaging pass below did not repeat a visual or physical-device audit. Physical touch devices, assistive-technology combinations, large system text, and constrained networks still need dedicated verification.

## Commit packaging — 12 September 2026

The homepage changes were separated into section-specific commits, followed by interaction and accessibility fixes. Related branding, shared UI, navigation, footer, and legal-page changes were packaged separately; the earlier statements about audit scope describe those individual passes, not the scope of the complete commit series.

Batch checkpoints were checked using lint, TypeScript, and production builds in isolated copies of the staged trees. Pending source, documentation, image metadata, and file paths were reviewed for sensitive material. Environment files, private migration sources, raw source screenshots, and local audit/build working files are excluded from the commits. This packaging does not publish or deploy the site.
