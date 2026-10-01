import type { Locale } from "@/lib/i18n/config";

type BrandImage = {
  alt: string;
  height: number;
  /** Left inset of the visible artwork, in source-image pixels. */
  opticalInsetLeft?: number;
  src: string;
  width: number;
};

export const VOLNA_BRAND_LOGOS = {
  en: {
    alt: "Volna Online Russian School",
    height: 119,
    opticalInsetLeft: 26,
    src: "/images/optimised/volna-online-russian-school-logo-school-blue-v6.png",
    width: 476,
  },
  ru: {
    alt: "Volna Online Russian School",
    height: 238,
    opticalInsetLeft: 52,
    src: "/images/optimised/volna-online-russian-school-logo-centered-ru-school-blue-v6.png",
    width: 1070,
  },
} satisfies Record<Locale, BrandImage>;

export const VOLNA_FOOTER_LOGOS = {
  en: {
    alt: "Volna Online Russian School",
    height: 238,
    opticalInsetLeft: 51,
    src: "/images/optimised/volna-online-russian-school-logo-header-white.png",
    width: 952,
  },
  ru: {
    alt: "Volna Online Russian School",
    height: 119,
    opticalInsetLeft: 26,
    src: "/images/optimised/volna-online-russian-school-logo-white-ru.png",
    width: 535,
  },
} satisfies Record<Locale, BrandImage>;
