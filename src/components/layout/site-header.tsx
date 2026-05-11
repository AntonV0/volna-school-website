import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
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
      <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 xl:min-h-20 xl:px-12">
        <Link
          aria-label={content.navigation.brandLabel}
          className="flex min-w-0 items-center rounded-md py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
          href={getLocalizedPath(locale, "home")}
        >
          <BrandLogo
            className="w-[min(58vw,13rem)] sm:w-56 xl:w-60"
            locale={locale}
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
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

        <div className="hidden items-center gap-3 xl:flex">
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
