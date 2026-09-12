import Image from "next/image";

import { cn } from "@/lib/classnames";
import { VOLNA_BRAND_LOGOS } from "@/lib/brand-assets";
import type { Locale } from "@/lib/i18n/config";

type BrandLogoProps = {
  className?: string;
  locale: Locale;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  className,
  locale,
  priority = false,
  sizes = "(min-width: 1280px) 240px, (min-width: 640px) 224px, 58vw",
}: BrandLogoProps) {
  const logo = VOLNA_BRAND_LOGOS[locale];

  return (
    <Image
      alt={logo.alt}
      className={cn("block", className ?? "h-auto w-full")}
      height={logo.height}
      priority={priority}
      sizes={sizes}
      src={logo.src}
      // Align visible artwork to the shared container edge, not the image canvas.
      // Percentages scale with the logo, including the compact scrolling header.
      style={{ transform: `translateX(-${(logo.opticalInsetLeft / logo.width) * 100}%)` }}
      width={logo.width}
    />
  );
}
