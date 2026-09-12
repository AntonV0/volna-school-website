# Development Style Lab

The Style Lab is a development-only tool for comparing Volna School brand and UI directions on the real local site before final design tokens are locked.

It is rendered from `src/components/dev/style-lab-toggle.tsx` through the shared site shell. The component returns `null` in production, and production HTML should not contain `Style Lab`, `Open Style Lab`, or `volna-style-lab`.

## What It Controls

The Style Lab applies preview settings to the `<html>` element with data attributes:

- `data-palette`
- `data-font-pair`
- `data-density`
- `data-radius`
- `data-shadow`
- `data-cta`
- `data-show-section-numbers`

Those attributes drive CSS variables in `src/app/globals.css`. Shared primitives such as buttons, brand cards, and section containers consume those variables so the preview affects real page surfaces.

The section-number control is off by default. When enabled, it adds `data-show-section-numbers` to the `<html>` element and reveals the development-only labels around homepage sections.

## Persistence

Selections are stored in browser `localStorage` under:

```text
volna-style-lab
```

Older local palette choices from `volna-palette-preview` and `volna-accent-preview` are migrated for preview continuity. The reset control clears the Style Lab key and legacy preview keys.

## Font Loading

The default site font remains the existing `next/font` Geist setup. Alternate font pairings are loaded only in development when selected by the Style Lab, using a runtime Google Fonts stylesheet link with the id:

```text
volna-style-lab-fonts
```

Do not treat these runtime-loaded fonts as production decisions until a final pairing has been chosen and promoted into the permanent font pipeline.

## QA Expectations

Before relying on a Style Lab change, check:

- collapsed launcher does not block footer, pricing, registration, or mobile Russian content
- expanded panel has no horizontal overflow on desktop, tablet, or mobile
- choices persist after refresh
- reset restores the default look and clears localStorage preview keys
- production build output does not include Style Lab text

When a final visual direction is chosen, copy the winning values into the permanent CSS variables and document the selected palette, font pairing, density, radius, shadow, and CTA treatment in the brand notes.
