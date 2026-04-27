"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/classnames";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { getAlternateLocalePath } from "@/lib/i18n/routing";

type LanguageSwitcherProps = {
  activeLocale: Locale;
  compact?: boolean;
};

export function LanguageSwitcher({
  activeLocale,
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border border-brand-teal/20 bg-white p-1 text-sm shadow-sm",
        compact && "w-full justify-between",
      )}
    >
      {locales.map((locale) => (
        <Link
          aria-current={locale === activeLocale ? "page" : undefined}
          className={cn(
            "rounded-full px-3 py-1.5 font-semibold transition",
            locale === activeLocale
              ? "bg-brand-teal text-white"
              : "text-brand-teal hover:bg-brand-teal-soft",
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
