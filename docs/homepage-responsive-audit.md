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

## Welcome section refinements — 14 September 2026

Implemented the eight approved welcome-section recommendations. Existing homepage edits and all copy were preserved. English layout rules live in `home-welcome-section.module.css`; Russian translation and visual redesign remain deferred. No commit, push or deployment was made.

- The group photograph retains its complete 3:2 frame, independently of text-column height. Tablet images have an inset frame capped at 600px wide, with a further viewport-height limit on short screens. Two columns begin at 1024px for English.
- Caption arrangement responds to the figure's width, with the external link below the caption when space is limited. The location icon aligns with the caption and the external target is at least 44px tall.
- Phone, tablet and compact-desktop headings use gentler sizing and balanced wrapping. The temporary Expanded page heading increment is smaller; the comparison remains temporary. Tablet milestone padding is reduced.
- Reduced-motion rules explicitly reset independent translate and scale properties within the welcome section. Historical years have datetime values; Today is plain text, and the section is associated with its heading.
- Lazy image sizes use auto where supported to follow the actual image width in either comparison mode. The fallback accounts for the tablet frame and expanded desktop width; browsers without auto support can conservatively over-request in Original width mode.

Browser measurements covered 320–3440px, including boundaries around 360, 400, 640, 768, 1024, 1120, 1200, 1280 and 1600px. Representative visual checks covered phones, tablets, compact desktop, desktop and expanded large desktop; Original width and Expanded page were compared at 1920x700. The final tablet adjustment was visually checked at 640px. Every measured English image retained a 3:2 ratio and no horizontal content/control overflow was detected. Both welcome links retained visible keyboard focus. Historical datetime attributes and the section label were verified in the rendered DOM.

At 1024px, section height decreased from approximately 1337px to 849px. At 844x390, image height decreased from about 429px to 234px. Preserving the complete photograph makes some desktop compositions taller than the previously cropped version; this is an intentional tradeoff. Heights include section padding and depend on fonts and the browser scrollbar.

Final lint, typecheck, production build and diff whitespace checks passed. Physical touch/gesture behaviour, text-only enlargement, assistive technology, constrained networks, other browsers and runtime reduced-motion preference testing remain unverified. No pointer handlers or shared button styles were changed; the reduced-motion correction was checked in implementation rather than preference emulation.

### Subsequent approved tablet composition

The 640–1023px English layout now uses a full-width 2.3:1 photograph with a lower focal position, replacing the inset 600px image and short-screen width cap described above. The story block is centred with approximately 680px of reading width and regular-weight body text. Caption placement, the single-line external link with its 44px target, reading order and milestones are retained. The image sizes fallback reflects the new tablet width.

Rendered measurements covered 639, 640, 767, 768, 820, 986, 1023, 1024 and 1279px with no measured text overflow. Visual checks covered 640px, 986px, the 1024px desktop transition and 844×390 landscape. The crop preserves the group in the inspected views; short screens still require scrolling rather than more aggressive cropping. Physical-device and assistive-technology checks were not repeated. The desktop heading scale and approved desktop composition remain unchanged by this tablet pass.

### Subsequent approved phone refinement

Phone headings now scale from 24–28px and the description uses regular weight. The caption icon column and gap are narrower, preserving its single-line external link and 44px target. Between 480 and 639px, the photograph gradually shortens toward the tablet panorama while keeping its lower focal position. Reading order, milestones, semantics and reduced-motion rules are retained.

Measurements at 320, 375, 390, 430, 479, 480, 560, 639, 640, 768, 1023 and 1024px found no text overflow; both links remained 44px high. Visual checks covered 390 and 560px. At 390px the heading now occupies four lines; at 320px it still wraps naturally to six. Both links displayed a 2px keyboard focus outline. Lint and whitespace checks passed. Physical touch, assistive technology, text-only enlargement and runtime reduced-motion emulation remain unverified.

### Tablet story-first order — 16 September 2026

At 640–1023px, the English story introduction and CTA now precede the photograph, caption and milestones, with 32px between the CTA and photograph. A shared copy component supplies two responsive positions; CSS exposes only one, so the accessible reading and keyboard order follows the visible layout without JavaScript reordering. Each heading has a unique ID and the English section retains its accessible name from the unchanged title. Phone, desktop and Russian compositions are preserved.

Browser checks at 390, 639, 640, 768, 820, 1023, 1024 and 1440px found exactly one visible copy panel and no visible text overflow. Visual checks covered 640 and 820px; Tab from the story CTA reached the external school link with a visible focus outline. Lint, typecheck and whitespace checks passed after regenerating a malformed local Next.js route-types cache. No physical-device or screen-reader testing was performed.

### Mobile story-first extension — 16 September 2026

The English story-first composition now covers all widths below 1024px. Phones retain their existing typography, photo crops and vertical timeline, with 24px between the CTA and image; tablets retain 32px. The responsive copy variant is named `stacked` to reflect both layouts. Measurements at 320, 390, 639, 640, 1023 and 1024px confirmed one visible copy panel, the intended order and gaps, and no text overflow. The 390px layout was visually reviewed, and Tab from the story CTA reached the external school link with visible focus. Lint and typecheck passed; physical-device and assistive-technology limitations remain as above.

### Section 3 approved responsive refinements — 16 September 2026

Course comparison cards now retain their disclosure layout through 1279px. Fees, results and both filled CTAs remain visible; course exploration comes first below 1280px. The existing large-desktop structure is retained. Responsive rules were moved into the section's own CSS module, with tighter phone spacing, 15px summary text, a smaller phone section heading and less decorative clutter. Tablet image columns use 160px at 640–767px and 192px at 768–1279px. Phone photographs grow with available width rather than using a fixed 160px strip.

The children's photograph now uses the existing approved stock private-tuition image, removing the repeated chooser image. Responsive focal positions protect faces; the A Level desktop crop favours the learner. Image sizes match the new columns and lazy loading remains enabled. Short course links and trial links have course-specific accessible names. Reduced-motion CSS explicitly resets independent translate/scale properties on links and their arrows.

Browser measurements covered 320, 360, 390, 430, 639, 640, 767, 768, 820, 1023, 1024, 1199, 1279, 1280, 1440, 1920 and 2560px without page or card horizontal overflow. Visual checks included phone, narrow tablet, 820px, 1024px, 1280x720 and 1920x1080 layouts, including the four image subjects. The original-width preview was checked at 1920px and Expanded page restored. At 1024px the collapsed section decreased from approximately 2862px to 1997px; the 1023/1024 transition now differs by about 12px rather than over 600px. At 390px the children's card decreased from approximately 807px to 782px while its photograph and summary text became larger.

Pointer expansion, Enter collapse and Space expansion worked. At 320px, links were 44px high and disclosures 46px, with a 2px keyboard focus outline. Course and course-specific registration destinations were inspected; no registration was submitted. All four images loaded successfully in the existing browser session. Lint, typecheck and production build passed. Physical touch/scroll gestures, screen readers, other browser engines, text-only enlargement, cold-network loading and runtime reduced-motion preference emulation remain unverified. The final phone focal-position adjustment was checked in source after the build.

### Section 3 children's photograph follow-up — 16 September 2026

At the user's request, the children's card now uses the approved stock image of a girl seated with her hand raised (`children-option-bilingual.webp`), replacing the green-hoodie photo trialled above. Its portrait focal position is 40% horizontally; the phone strip is top-aligned to retain the raised hand. Visual checks at 390, 639, 640 and 1440px confirmed the face and raised hand remain visible. The asset's existing descriptive alt text is retained; other cards and section layouts are unchanged.

### Homepage image-resolution pass — 16 September 2026

Responsive image hints now account for the full bitmap needed by object-cover, not only the visible frame width. Section 3 portrait crops request an 820px source-width budget above 1280px (828px selected at DPR 1), 380px at 768–1279px and 450px at 640–767px; phone strips continue to follow available width. This corrects enlargement of low-resolution landscape sources inside tall portrait frames without altering focal points or layout.

The English hero budgets for its taller crops and the expanded preview. Welcome no longer uses native auto sizing, which only accounts for frame width; its compact-desktop hint includes a 560px floor. Chooser hints include crop enlargement and the existing thumbnail hover scale. The teaching-approach hint includes its existing 1.58x zoom, with a desktop budget of 1050px (1080px selected). Original staff portraits and branding dimensions were inspected and retained. No images, visible copy, crops, animation or section geometry were changed during this pass.

Initial measurements covered 320, 390, 639, 640, 820, 1024, 1199, 1200, 1280, 1440, 1920 and 2560px. Fresh reload checks verified selected sources at 320, 640, 768, 1024, 1280, 1920 and 2560px, avoiding misleading results from browsers retaining larger images after resizing. The desktop course photographs were visually reviewed at 1440px. Original width and Expanded page were checked at 1920px; Expanded page and the normal browser viewport were restored. Lint and typecheck passed.

The available browser reports DPR 1; physical Retina/high-density screen appearance was not directly tested. Width-descriptor srcsets remain enabled so browsers can select larger sources for their density. Existing stock files are mostly 1600px wide and the teaching-approach source is 1448px: sizing cannot recover detail beyond those originals, especially under substantial zoom or on very high-density displays. Network-constrained selection and text-only enlargement remain unverified.

### Homepage team portrait framing trial — 16 September 2026

The English team cards retain their 88px containers and original image files. Elena now has a closer face-focused crop (static 1.7x scale); Marina's vertical framing preserves the head accessory; Irina and Anton have a modest 1.08x crop. Removed the conflicting object-contain class, retaining explicit object-cover behaviour. These adjustments are local to the English homepage and do not change shared portrait assets or other pages. This improves face visibility, not original photo detail; no sharpening or AI reconstruction was applied. Visual checks covered the four-column desktop, two-column compact desktop and 390px stacked phone layouts. No horizontal overflow was observed on the phone. Lint and typecheck passed; high-density physical screens remain unverified.

### Section 3 second responsive polish pass — 16 September 2026

Applied the five approved refinements: at 1280–1439px, image columns scale from 288px toward 320px to give text more room, returning to 352px at 1440px. Below 640px, fees and actions share a background with a softer divider and tighter spacing. At 390–639px, cards with results place group/private fees in two columns with results spanning beneath; adult pricing remains stacked. Below 1280px, pricing and detail labels use 12px type with reduced tracking. Disclosures retain their full-width target, keyboard behaviour and focus styling while dropping the visible box border and horizontal inset. Both filled CTAs and all copy remain unchanged.

Measurements at 320, 389, 390, 639, 640, 768, 1024, 1279, 1280, 1439, 1440 and 1920px found no page horizontal overflow. Visual checks covered 390px and 1280px. The children's card at 1280px decreased from approximately 505px to 465px. Enter expanded and Space collapsed the disclosure; its measured target was 46px high with a 2px keyboard outline. Lint, typecheck and whitespace checks passed. Physical-device, screen-reader and text-enlargement limitations remain as recorded above.

### Approved compact-desktop course layout — 18 September 2026

Promoted the temporary Section 3 comparison into the English homepage at 1024–1279px and removed its duplicate section, preview props and development notice. Course details remain visible beside wider photographs, with study-option pills below their label. The information strip uses inline uppercase labels and values with equal gaps; supporting notes and CTA prompts are hidden only within this range. Both filled CTAs remain visible on white, with matching subtle shadows. Image source sizing now budgets 820px from 1024px for the taller crops. Existing phone/tablet disclosure and 1280px+ desktop layouts remain in place.

Browser measurements at 390, 1023, 1024, 1090, 1279, 1280 and 1920px confirmed four course cards, no duplicate preview, expected detail visibility and no page horizontal overflow. Compact-desktop strips measured 49px across all four courses. The promoted layout was visually checked at 1090px. Lint, typecheck, production build and diff whitespace checks passed. Physical devices, other browser engines, assistive technology and text-only enlargement were not re-tested.

### Approved study-option links — 18 September 2026

English Section 3 now uses the approved D pill treatment: white outlined links in each course colour, a filled hover state, then a white underline after the 180ms colour transition. Links keep 26px height and 12px text, visible keyboard focus, touch press feedback and reduced-motion overrides. Both development comparisons were removed. Children's options link to matching existing detail pages; GCSE, A Level and adult links currently target each course's existing study-options section pending final per-option destinations. Russian pills are unchanged.

Browser checks at 390, 1023, 1024, 1279, 1280 and 1592px found no page overflow and confirmed the previews were removed. Visible pills measured 26px. The phone disclosure was opened and visually checked; keyboard focus showed a 2px outline. Lint, typecheck and production build passed. Added arrows can cause additional pill-row wrapping at narrow widths. Physical touch and runtime reduced-motion emulation remain unverified.

### Section 3 tablet comparison refinement — 19 September 2026

English Section 3 now keeps course details visible from 640–1023px. The disclosure control remains below 640px only. Tablet cards retain the image/introduction row, show the study options and suitability information below it, use a two-column suitability list, and keep the two filled actions together beneath the results/pricing strip. The strip uses a centred three-column treatment with fine dividers; at the narrow tablet boundary the results item can span above the two fee items to preserve legibility.

Browser checks at 640px and 768px found complete course details without the disclosure control, no visible horizontal overflow, and intact primary/trial actions. The normal browser viewport was restored afterwards. Lint and whitespace checks passed. Physical tablets, other browser engines, assistive technology, large text and runtime reduced-motion preference testing remain outstanding.

### Section 3 tablet audit — 19 September 2026

The visible-details tablet composition was reviewed at 640px, 768px and 1023px. At 640px, the results item forms a readable first row above the two fee items; at 768px and 1023px, the three-part strip is balanced. Study-option rows, two-column suitability content and paired actions remained readable. No horizontal overflow was measured: the document widths were 625px, 753px and 1008px respectively, accounting for the browser scrollbar.

Follow-up completed: the existing 68ch summary measure now begins at 640px rather than 1024px, eliminating the short 1023px orphan line while leaving phone layouts unchanged. Lint and whitespace checks passed; the normal browser viewport was restored. No interaction, physical-device, assistive-technology, large-text, other-engine or runtime reduced-motion checks were added in this audit.

### Section 3 large phone / small tablet audit — 19 September 2026

The English course comparison was reviewed at 640px, 704px and 767px. Course details remain visible, suitability content stays in two columns, results/pricing use consistent label-over-value groups, and paired primary/trial actions remain legible. No horizontal overflow was measured: document widths were 625px, 689px and 752px respectively, accounting for the browser scrollbar.

Study options now form a full-width row below the image and course summary through this range, leaving all four course sets on one line without reducing the approved 12px/26px pill specification. Images now end with the course summary, with a 12px breathing space before the study-options text. The results/pricing strip uses three equal horizontal groups at 640px and above. The 768px boundary was also checked: it retains one-line pills and no overflow. Lint and whitespace checks passed; TypeScript checking remains blocked by a malformed generated `.next/dev/types/routes.d.ts` file. Physical-device, assistive-technology, large-text, other-engine and runtime reduced-motion checks remain outstanding.

### Section 3 phone hierarchy refinement — 21 September 2026

Below 640px, course summaries remain visible above the disclosure; the unrelated compact chooser alone hides its duplicate summaries. Each course photograph has a slightly lower focal point, while retaining headroom for the learner. Disclosure text, hover/press wash and focus outline inherit the individual course colour rather than the generic blue. Where a results/proof item precedes fees, a subtle horizontal divider separates the two concepts; adult pricing remains undivided because every item is a fee. The course page stays the filled primary action, with the trial route a quieter 44px text link.

Lint, typecheck and whitespace checks passed. Visual device and other-browser verification remains outstanding.

### Section 3 touch and motion refinement — 21 September 2026

Phone and tablet CTAs, the disclosure control and the quieter trial link retain 44px minimum targets. Study-option pills retain their approved 26px visual height to keep tablet option rows on one line; this remains above the 24px minimum target size. Pill hover effects are restricted to fine hover-capable pointers, and all pills, actions and disclosure controls opt into direct tap handling. Coarse pointers no longer retain a lifted or darkened hover state on course CTAs; active disclosure feedback uses its course-specific colour. Reduced-motion overrides continue to remove link/pill transitions and transforms.

Lint, typecheck and whitespace checks passed. Physical-device touch/scroll, screen-reader, text-enlargement, other-engine and runtime reduced-motion checks remain outstanding.

### Section 3 responsive heading waves — 21 September 2026

Below 1024px, the original three desktop wave paths are rendered through a slightly lowered `xMidYMax slice` frame rather than being stretched into the changing heading aspect ratio. This preserves their curve geometry while cropping the same illustration to the lower right; the phone frame is wider so the curve enters low and continues naturally before rising through its crest, while tablet remains more restrained. The approved desktop full-height rendering is unchanged. Live checks at 320px and 986px confirmed clear heading text and no horizontal overflow. Lint, typecheck and whitespace checks passed.

### Header, hero and story touch refinement — 21 September 2026

The compact header menu, logo, language switcher and visible trial CTA now have 44px minimum targets. Mobile menu primary routes remain 48px, legal routes and contact links are 44px, and the existing focus trap, Escape close and focus restoration are retained. Header hover motion, including the logo reveal and trial-CTA lift, is now restricted to hover-capable pointers; the menu icon’s short-line flourish follows the same rule.

Hero CTAs retain 48px targets and direct tap handling. The in-page comparison CTA preserves focus transfer and uses instant scrolling under reduced motion. The Section 2 story CTA and external school link retain 44px targets; their touch states do not lift or rely on hover. Existing reduced-motion rules continue to disable the mobile-nav entrance and decorative button/link motion.

Lint, typecheck and whitespace checks passed. Physical-device touch/scroll, screen-reader, text-enlargement, other-engine and runtime reduced-motion checks remain outstanding.

### Section 4 tablet media refinement — 22 September 2026

The English teaching-approach photograph is intentionally hidden from 640–1023px. At those tablet widths, treating the image and four teaching points as five square-like tiles created an unbalanced composition. The section now presents the heading followed by a clear two-by-two teaching-point grid. Phone 4:3 framing and the approved 1024px+ desktop split layout remain unchanged. Source-size hints avoid a large image request while it is hidden.

The low-contrast wave ornament was subsequently removed as visually out of place. On tablet, cards use content-led row heights with a reduced 168px minimum: each two-card row aligns internally, while rows no longer stretch to match one another. The blue rule remains above each title. Live checks at 640px and 768px found the heading and four teaching points readable, with no page horizontal overflow. Physical-device, assistive-technology, other-engine, text-enlargement and runtime reduced-motion checks remain outstanding.

Below 640px, cards no longer retain the former 192px minimum height; each stacked card now closes around its own title and description. Phone measurements at 360px, 390px and 639px found no horizontal overflow.
