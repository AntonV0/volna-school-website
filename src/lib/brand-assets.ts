import type { Locale } from "@/lib/i18n/config";

type BrandImage = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

export const VOLNA_BRAND_LOGOS = {
  en: {
    alt: "Volna Online Russian School",
    height: 119,
    src: "/images/optimised/volna-online-russian-school-logo.png",
    width: 476,
  },
  ru: {
    alt: "Volna Online Russian School",
    height: 238,
    src: "/images/optimised/volna-online-russian-school-logo-centered-ru.png",
    width: 1070,
  },
} satisfies Record<Locale, BrandImage>;
