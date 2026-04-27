import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
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
    <header className="sticky top-0 z-30 border-b border-brand-teal/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
          href={getLocalizedPath(locale, "home")}
        >
          <span className="grid size-11 place-items-center rounded-full bg-brand-teal text-lg font-bold text-white">
            V
          </span>
          <span className="text-lg font-semibold text-foreground">
            {content.navigation.brandLabel}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {content.navigation.primary.map((routeKey) => (
            <Link
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-brand-teal-soft hover:text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
              href={getLocalizedPath(locale, routeKey)}
              key={routeKey}
            >
              {content.routeLabels[routeKey]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher activeLocale={locale} />
          <ButtonLink
            href={getLocalizedPath(locale, content.navigation.enrollRoutes[0])}
          >
            {content.navigation.ctaLabel}
          </ButtonLink>
        </div>

        <MobileNav locale={locale} />
      </div>
    </header>
  );
}
