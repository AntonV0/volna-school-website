"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/classnames";

type PaletteChoice = "sea" | "current" | "lagoon" | "baltic" | "deep";
type FontPairChoice =
  | "geist"
  | "inter"
  | "manrope"
  | "nunito"
  | "plex"
  | "pt"
  | "noto"
  | "golos-lora";
type DensityChoice = "compact" | "balanced" | "airy";
type RadiusChoice = "crisp" | "current" | "soft";
type ShadowChoice = "flat" | "subtle" | "elevated";
type CtaChoice = "red" | "teal" | "soft";

type StyleLabSettings = {
  cta: CtaChoice;
  density: DensityChoice;
  fontPair: FontPairChoice;
  palette: PaletteChoice;
  radius: RadiusChoice;
  sectionNumbers: boolean;
  shadow: ShadowChoice;
};

type Choice<Value extends string> = {
  description: string;
  fontHref?: string;
  label: string;
  value: Value;
};

const legacyAccentStorageKey = "volna-accent-preview";
const legacyPaletteStorageKey = "volna-palette-preview";
const storageKey = "volna-style-lab";
const styleLabEvent = "volna-style-lab-change";
const styleLabFontLinkId = "volna-style-lab-fonts";

const defaultSettings: StyleLabSettings = {
  cta: "red",
  density: "balanced",
  fontPair: "geist",
  palette: "sea",
  radius: "current",
  sectionNumbers: false,
  shadow: "subtle",
};

const defaultSettingsSnapshot = JSON.stringify(defaultSettings);

const paletteChoices: Array<Choice<PaletteChoice>> = [
  {
    description: "Refined Volna wave baseline",
    label: "Sea",
    value: "sea",
  },
  {
    description: "Bright online-school blue",
    label: "Current",
    value: "current",
  },
  {
    description: "Fresh aqua and warmer family feel",
    label: "Lagoon",
    value: "lagoon",
  },
  {
    description: "Cool structured exam-school look",
    label: "Baltic",
    value: "baltic",
  },
  {
    description: "Academic navy with violet depth",
    label: "Deep",
    value: "deep",
  },
];

const fontPairChoices: Array<Choice<FontPairChoice>> = [
  {
    description: "Current clean digital baseline",
    label: "Geist / Geist",
    value: "geist",
  },
  {
    description: "Neutral and familiar product feel",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
    label: "Inter / Inter",
    value: "inter",
  },
  {
    description: "Modern, rounded, and confident",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
    label: "Manrope / Manrope",
    value: "manrope",
  },
  {
    description: "Warm and parent-friendly",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap",
    label: "Nunito Sans / Nunito",
    value: "nunito",
  },
  {
    description: "Structured bilingual academic tone",
    fontHref:
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700;800&family=IBM+Plex+Serif:wght@500;600;700&display=swap",
    label: "IBM Plex Sans / Serif",
    value: "plex",
  },
  {
    description: "Classic Russian school character",
    fontHref:
      "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=PT+Serif:wght@400;700&display=swap",
    label: "PT Sans / PT Serif",
    value: "pt",
  },
  {
    description: "Highly legible multilingual system",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&family=Noto+Serif:wght@500;600;700&display=swap",
    label: "Noto Sans / Serif",
    value: "noto",
  },
  {
    description: "Contemporary Cyrillic body with editorial headings",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800&family=Lora:wght@500;600;700&display=swap",
    label: "Golos Text / Lora",
    value: "golos-lora",
  },
];

const densityChoices: Array<Choice<DensityChoice>> = [
  {
    description: "Tighter vertical rhythm",
    label: "Compact",
    value: "compact",
  },
  {
    description: "Current balanced spacing",
    label: "Balanced",
    value: "balanced",
  },
  {
    description: "More editorial breathing room",
    label: "Airy",
    value: "airy",
  },
];

const radiusChoices: Array<Choice<RadiusChoice>> = [
  {
    description: "Sharper academic surfaces",
    label: "Crisp",
    value: "crisp",
  },
  {
    description: "Current soft rectangle",
    label: "Current",
    value: "current",
  },
  {
    description: "Friendlier rounded surfaces",
    label: "Soft",
    value: "soft",
  },
];

const shadowChoices: Array<Choice<ShadowChoice>> = [
  {
    description: "Flat, quiet, and practical",
    label: "Flat",
    value: "flat",
  },
  {
    description: "Current restrained depth",
    label: "Subtle",
    value: "subtle",
  },
  {
    description: "More lifted card hierarchy",
    label: "Elevated",
    value: "elevated",
  },
];

const ctaChoices: Array<Choice<CtaChoice>> = [
  {
    description: "Current strong conversion red",
    label: "Red",
    value: "red",
  },
  {
    description: "More brand-led teal action",
    label: "Teal",
    value: "teal",
  },
  {
    description: "Calmer, lower-pressure action",
    label: "Soft",
    value: "soft",
  },
];

function isPaletteChoice(value: unknown): value is PaletteChoice {
  return (
    value === "sea" ||
    value === "current" ||
    value === "lagoon" ||
    value === "baltic" ||
    value === "deep"
  );
}

function isFontPairChoice(value: unknown): value is FontPairChoice {
  return (
    value === "geist" ||
    value === "inter" ||
    value === "manrope" ||
    value === "nunito" ||
    value === "plex" ||
    value === "pt" ||
    value === "noto" ||
    value === "golos-lora"
  );
}

function isDensityChoice(value: unknown): value is DensityChoice {
  return value === "compact" || value === "balanced" || value === "airy";
}

function isRadiusChoice(value: unknown): value is RadiusChoice {
  return value === "crisp" || value === "current" || value === "soft";
}

function isShadowChoice(value: unknown): value is ShadowChoice {
  return value === "flat" || value === "subtle" || value === "elevated";
}

function isCtaChoice(value: unknown): value is CtaChoice {
  return value === "red" || value === "teal" || value === "soft";
}

function normalizeSettings(value: unknown): StyleLabSettings {
  if (!value || typeof value !== "object") {
    return defaultSettings;
  }

  const candidate = value as Partial<StyleLabSettings>;

  return {
    cta: isCtaChoice(candidate.cta) ? candidate.cta : defaultSettings.cta,
    density: isDensityChoice(candidate.density)
      ? candidate.density
      : defaultSettings.density,
    fontPair: isFontPairChoice(candidate.fontPair)
      ? candidate.fontPair
      : defaultSettings.fontPair,
    palette: isPaletteChoice(candidate.palette)
      ? candidate.palette
      : defaultSettings.palette,
    radius: isRadiusChoice(candidate.radius)
      ? candidate.radius
      : defaultSettings.radius,
    sectionNumbers: candidate.sectionNumbers === true,
    shadow: isShadowChoice(candidate.shadow)
      ? candidate.shadow
      : defaultSettings.shadow,
  };
}

function getLegacyPalette(): PaletteChoice {
  const storedPalette = window.localStorage.getItem(legacyPaletteStorageKey);

  if (isPaletteChoice(storedPalette)) {
    return storedPalette;
  }

  const legacyAccent = window.localStorage.getItem(legacyAccentStorageKey);

  if (legacyAccent === "coral") {
    return "current";
  }

  if (legacyAccent === "violet") {
    return "deep";
  }

  return defaultSettings.palette;
}

function getStoredSettingsSnapshot() {
  if (typeof window === "undefined") {
    return defaultSettingsSnapshot;
  }

  const stored = window.localStorage.getItem(storageKey);

  if (stored) {
    try {
      return JSON.stringify(normalizeSettings(JSON.parse(stored)));
    } catch {
      return defaultSettingsSnapshot;
    }
  }

  return JSON.stringify({
    ...defaultSettings,
    palette: getLegacyPalette(),
  });
}

function parseSettingsSnapshot(snapshot: string): StyleLabSettings {
  try {
    return normalizeSettings(JSON.parse(snapshot));
  } catch {
    return defaultSettings;
  }
}

function subscribeToStyleLabChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(styleLabEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(styleLabEvent, onStoreChange);
  };
}

function setOptionalDataAttribute(
  root: HTMLElement,
  name: string,
  value: string,
  defaultValue: string,
) {
  if (value === defaultValue) {
    root.removeAttribute(name);
    return;
  }

  root.setAttribute(name, value);
}

function updateStoredSettings(settings: StyleLabSettings) {
  window.localStorage.setItem(storageKey, JSON.stringify(settings));
  window.dispatchEvent(new Event(styleLabEvent));
}

function resetStoredSettings() {
  window.localStorage.removeItem(storageKey);
  window.localStorage.removeItem(legacyPaletteStorageKey);
  window.localStorage.removeItem(legacyAccentStorageKey);
  window.dispatchEvent(new Event(styleLabEvent));
}

function StyleLabControl<Value extends string>({
  currentValue,
  label,
  options,
  onSelect,
}: {
  currentValue: Value;
  label: string;
  onSelect: (value: Value) => void;
  options: Array<Choice<Value>>;
}) {
  return (
    <fieldset className="grid gap-2">
      <legend className="text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
        {label}
      </legend>
      <div className="grid gap-1.5 sm:grid-cols-2">
        {options.map((choice) => (
          <button
            aria-label={`${label}: ${choice.label}. ${choice.description}`}
            aria-pressed={currentValue === choice.value}
            className="grid min-h-14 gap-0.5 rounded-[var(--button-radius)] border border-border-soft bg-white px-3 py-2 text-left text-brand-teal transition hover:border-accent hover:bg-accent-soft aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white"
            key={choice.value}
            onClick={() => onSelect(choice.value)}
            type="button"
          >
            <span className="text-sm font-bold leading-tight">
              {choice.label}
            </span>
            <span className="text-xs leading-snug opacity-80">
              {choice.description}
            </span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function StyleLabToggleInner() {
  const [isOpen, setIsOpen] = useState(false);
  const snapshot = useSyncExternalStore(
    subscribeToStyleLabChanges,
    getStoredSettingsSnapshot,
    () => defaultSettingsSnapshot,
  );
  const settings = useMemo(() => parseSettingsSnapshot(snapshot), [snapshot]);
  const selectedFontPair = fontPairChoices.find(
    (choice) => choice.value === settings.fontPair,
  );

  useEffect(() => {
    const root = document.documentElement;

    setOptionalDataAttribute(
      root,
      "data-palette",
      settings.palette,
      defaultSettings.palette,
    );
    setOptionalDataAttribute(
      root,
      "data-font-pair",
      settings.fontPair,
      defaultSettings.fontPair,
    );
    setOptionalDataAttribute(
      root,
      "data-density",
      settings.density,
      defaultSettings.density,
    );
    setOptionalDataAttribute(
      root,
      "data-radius",
      settings.radius,
      defaultSettings.radius,
    );
    setOptionalDataAttribute(
      root,
      "data-shadow",
      settings.shadow,
      defaultSettings.shadow,
    );
    setOptionalDataAttribute(
      root,
      "data-cta",
      settings.cta,
      defaultSettings.cta,
    );
    root.toggleAttribute("data-show-section-numbers", settings.sectionNumbers);

    root.removeAttribute("data-accent");
  }, [settings]);

  useEffect(() => {
    const existingLink = document.getElementById(
      styleLabFontLinkId,
    ) as HTMLLinkElement | null;

    if (!selectedFontPair?.fontHref) {
      existingLink?.remove();
      return;
    }

    if (existingLink) {
      existingLink.href = selectedFontPair.fontHref;
      return;
    }

    const link = document.createElement("link");

    link.href = selectedFontPair.fontHref;
    link.id = styleLabFontLinkId;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, [selectedFontPair]);

  function updateSetting<Key extends keyof StyleLabSettings>(
    key: Key,
    value: StyleLabSettings[Key],
  ) {
    const currentSettings = parseSettingsSnapshot(getStoredSettingsSnapshot());

    updateStoredSettings({
      ...currentSettings,
      [key]: value,
    });
  }

  function resetSettings() {
    resetStoredSettings();
    setIsOpen(false);
  }

  if (!isOpen) {
    return (
      <button
        aria-label="Open Style Lab"
        data-style-lab
        className="fixed bottom-4 right-4 z-50 rounded-[var(--button-radius)] border border-brand-teal/25 bg-white/95 px-4 py-2 text-sm font-bold text-brand-teal shadow-[0_12px_28px_rgba(18,49,66,0.16)] backdrop-blur transition hover:border-accent hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        Style
      </button>
    );
  }

  return (
    <aside
      aria-label="Style Lab"
      data-style-lab
      className="fixed bottom-3 left-3 right-3 z-50 max-h-[min(42rem,calc(100vh-1.5rem))] overflow-y-auto rounded-[var(--card-radius)] border border-brand-teal/20 bg-white/96 p-4 text-xs text-foreground shadow-[0_18px_50px_rgba(18,49,66,0.2)] backdrop-blur sm:left-auto sm:bottom-4 sm:right-4 sm:w-[min(44rem,calc(100vw-2rem))]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-bold text-brand-teal-deep">
            Style Lab
          </p>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-muted-foreground">
            Development-only controls for choosing the site theme.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            className="rounded-[var(--button-radius)] border border-border-soft bg-white px-3 py-2 font-bold text-brand-teal transition hover:border-brand-teal hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onClick={resetSettings}
            type="button"
          >
            Reset
          </button>
          <button
            aria-label="Collapse Style Lab"
            className="rounded-[var(--button-radius)] border border-border-soft bg-white px-3 py-2 font-bold text-brand-teal transition hover:border-brand-teal hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            Close
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4">
        <StyleLabControl
          currentValue={settings.palette}
          label="Palette"
          onSelect={(value) => updateSetting("palette", value)}
          options={paletteChoices}
        />
        <StyleLabControl
          currentValue={settings.fontPair}
          label="Font pairing"
          onSelect={(value) => updateSetting("fontPair", value)}
          options={fontPairChoices}
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <StyleLabControl
            currentValue={settings.density}
            label="Density"
            onSelect={(value) => updateSetting("density", value)}
            options={densityChoices}
          />
          <StyleLabControl
            currentValue={settings.radius}
            label="Radius"
            onSelect={(value) => updateSetting("radius", value)}
            options={radiusChoices}
          />
          <StyleLabControl
            currentValue={settings.shadow}
            label="Shadow"
            onSelect={(value) => updateSetting("shadow", value)}
            options={shadowChoices}
          />
          <StyleLabControl
            currentValue={settings.cta}
            label="CTA style"
            onSelect={(value) => updateSetting("cta", value)}
            options={ctaChoices}
          />
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[var(--card-radius)] border border-border-soft bg-white p-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
              Section numbers
            </p>
            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              Show developer labels for main sections.
            </p>
          </div>
          <button
            aria-checked={settings.sectionNumbers}
            aria-label="Show section numbers"
            className={cn(
              "relative h-7 w-12 shrink-0 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal",
              settings.sectionNumbers
                ? "border-brand-teal bg-brand-teal"
                : "border-border-soft bg-section-wash",
            )}
            onClick={() =>
              updateSetting("sectionNumbers", !settings.sectionNumbers)
            }
            role="switch"
            type="button"
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute top-1/2 size-5 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform",
                settings.sectionNumbers
                  ? "translate-x-[1.55rem]"
                  : "translate-x-1",
              )}
            />
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-[var(--card-radius)] border border-accent-border bg-accent-soft/60 p-3">
        <p className="font-bold text-brand-teal-deep">Current selection</p>
        <p className="mt-1 leading-5 text-muted-foreground">
          {[
            settings.palette,
            selectedFontPair?.label ?? settings.fontPair,
            settings.density,
            settings.radius,
            settings.shadow,
            settings.cta,
            settings.sectionNumbers
              ? "section numbers on"
              : "section numbers off",
          ].join(" / ")}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-brand-teal px-3 py-1 font-bold text-white">
            Brand
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1 font-bold",
              "border border-[var(--button-primary-border)]",
              "bg-[var(--button-primary-bg)] text-[var(--button-primary-text)]",
            )}
          >
            Trial CTA
          </span>
          <span className="rounded-[var(--card-radius)] border border-border-soft bg-white px-3 py-1 font-bold text-brand-teal shadow-[var(--card-shadow-sm)]">
            Card
          </span>
        </div>
      </div>
    </aside>
  );
}

export function StyleLabToggle() {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return <StyleLabToggleInner />;
}
