import Link from "next/link";

import { IconMark } from "@/components/brand/icon-mark";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { LocalizedNavLink } from "@/components/layout/localized-nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ButtonLink } from "@/components/ui/button-link";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const content = siteContent[locale];

  return (
    <header className="sticky top-0 z-30 border-b border-border-soft/70 bg-white/95 shadow-[0_8px_30px_rgba(18,49,66,0.06)] backdrop-blur">
      <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:min-h-20 lg:px-12">
        <Link
          className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
          href={getLocalizedPath(locale, "home")}
        >
          <span className="grid size-11 place-items-center rounded-full bg-white shadow-[0_0_0_2px_var(--brand-teal-soft),0_8px_24px_rgba(16,140,163,0.18)]">
            <IconMark />
          </span>
          <span className="grid leading-tight">
            <span className="text-base font-semibold text-foreground sm:text-lg">
              {content.navigation.brandLabel}
            </span>
            <span className="hidden text-xs font-medium text-brand-teal sm:block">
              Online Russian School
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {content.navigation.primary.map((routeKey) => (
            <LocalizedNavLink
              activeClassName="bg-brand-teal-soft text-brand-teal"
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-brand-teal-soft hover:text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
              key={routeKey}
              locale={locale}
              routeKey={routeKey}
            >
              {content.routeLabels[routeKey]}
            </LocalizedNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher activeLocale={locale} />
          <ButtonLink href={getLocalizedPath(locale, "registration")}>
            {content.navigation.ctaLabel}
          </ButtonLink>
        </div>

        <MobileNav locale={locale} />
      </div>
    </header>
  );
}
