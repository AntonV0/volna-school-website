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
        "relative grid grid-cols-2 items-center",
        compact ? "h-11 w-full" : "h-10 w-40",
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-2 h-0.5 w-[calc(50%-1rem)] rounded-full bg-brand-red transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{
          transform:
            activeLocale === "ru"
              ? "translateX(calc(100% + 1rem))"
              : "translateX(0)",
        }}
      />
      {locales.map((locale) => (
        <Link
          aria-current={locale === activeLocale ? "page" : undefined}
          className={cn(
            "relative z-10 inline-flex h-full w-full items-center justify-center rounded-md px-2 text-xs font-bold uppercase tracking-[0.08em] transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-offset-1",
            compact
              ? "focus-visible:outline-white"
              : "focus-visible:outline-brand-teal",
            compact &&
              (locale === activeLocale
                ? "text-white"
                : "text-white/48 hover:text-white/78"),
            !compact &&
              (locale === activeLocale
                ? "text-brand-teal-dark"
                : "text-foreground/66 hover:text-foreground/82"),
          )}
          href={getAlternateLocalePath(pathname, locale)}
          key={locale}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </nav>
  );
}
