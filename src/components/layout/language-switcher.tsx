"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/classnames";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { getAlternateLocalePath } from "@/lib/i18n/routing";

type LanguageSwitcherProps = {
  activeLocale: Locale;
  ariaLabel?: string;
  compact?: boolean;
};

export function LanguageSwitcher({
  activeLocale,
  ariaLabel = "Language",
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-10 items-center rounded-full border border-brand-teal/20 bg-white p-1 text-sm shadow-sm transition duration-200 hover:border-brand-teal/30 hover:shadow-[0_8px_20px_rgba(18,49,66,0.08)]",
        compact && "w-full justify-between",
      )}
    >
      {locales.map((locale) => (
        <Link
          aria-current={locale === activeLocale ? "page" : undefined}
          className={cn(
            "inline-flex h-8 items-center justify-center rounded-full px-3 font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal",
            locale === activeLocale
              ? "bg-brand-teal text-white shadow-sm"
              : "text-brand-teal hover:bg-brand-teal-soft hover:text-brand-teal-dark",
            compact && "flex-1 text-center",
          )}
          href={getAlternateLocalePath(pathname, locale)}
          key={locale}
        >
          {compact ? locale.toUpperCase() : localeLabels[locale]}
        </Link>
      ))}
    </nav>
  );
}
