# Volna School Rebuild Design Plan

This plan guides the public rebuild in small, reviewable batches. It is intentionally safe for the public repository: no private source screenshots, copied live-site text, unpublished staff details, client notes, or unapproved business assets are included here.

## Design Direction

- Keep the existing school identity recognizable: teal and blue foundations, red primary calls to action, generous white space, and a clean educational tone.
- Preserve the bilingual structure with English at `/` and Russian at `/ru`, using language-neutral route and content keys in code.
- Build reusable page systems first, then replace placeholders with approved copy and assets later.
- Use responsive layouts from the start, with mobile navigation, footer accordions, and sticky section navigation treated as core shared behavior.
- Prefer restrained, practical UI over a heavy redesign. The site should feel approachable for families and adult learners while still being structured enough for exam pathways.

## Build Phases

### Phase 1: Architecture Foundation

- Establish localized route groups for English and Russian.
- Centralize route definitions, locale helpers, navigation labels, and footer structure.
- Create typed content models with safe placeholders only.
- Build the shared shell: root layout, header, footer, language switcher, mobile navigation, and responsive containers.
- Add foundational UI primitives: button links, section containers, headings, accordions, course cards, and media placeholders.

### Phase 2: Page System Scaffolds

- Create reusable templates for course pages with shared sections for overview, options, prices, calendar, FAQ, and registration.
- Add home and about page structures that mirror the current site flow without publishing unreviewed copy.
- Add legal placeholders with clear warnings that final wording requires review.
- Keep placeholder content concise so the eventual approved copy can be swapped into typed content files.

### Phase 3: Visual System Passes

- Tune spacing, typography, card density, and section rhythm across mobile, tablet, and desktop.
- Polish sticky section navigation and mobile menu behavior.
- Keep color usage balanced: teal for identity and structure, red for decisive CTAs, pale blue for section contrast, and white for readability.
- Use screenshot-informed layout decisions without committing the source screenshots or private audit notes.

### Phase 4: Content Replacement

- Replace placeholder copy only after each content group has been reviewed for public use.
- Add approved photography and business assets through tracked public asset folders only.
- Keep extracted live copy and audit notes in ignored local folders until explicitly cleared.
- Preserve bilingual parity by updating English and Russian content models together whenever possible.

### Phase 5: Production Readiness

- Add final metadata, social preview assets, sitemap, robots policy, and analytics only after deployment requirements are confirmed.
- Connect forms only after approved field labels, privacy wording, spam protection, and submission handling are defined.
- Run route-level visual QA across key viewports before each release batch.
- Run `npm run lint`, `npm run typecheck`, and `npm run build` before commits that change code or configuration.

## Current Batch Order

1. Shared architecture and localized content scaffolding.
2. Course page template system.
3. Home page scaffold and visual rhythm.
4. About page scaffold and class-selection flow.
5. Legal placeholders and obsolete scaffold cleanup.
6. Responsive visual QA polish.
7. Content replacement once copy is approved.
8. Asset integration once public-safe imagery is approved.
9. Form and deployment readiness.

## QA Checklist

- English and Russian routes return 200.
- No document-level horizontal overflow on mobile, tablet, or desktop.
- Mobile menu opens as a drawer and closes from the same control.
- Sticky section navigation remains usable on narrow screens.
- Footer links and accordions remain accessible on mobile.
- Placeholder copy does not contain private notes, copied live text, or unapproved business details.
- Ignored local audit, source-copy, and source-screenshot folders remain unstaged.
