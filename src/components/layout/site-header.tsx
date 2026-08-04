import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { LocalizedNavLink } from "@/components/layout/localized-nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteHeaderFrame } from "@/components/layout/site-header-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";

type SiteHeaderProps = {
  locale: Locale;
};

const headerCtaLabels = {
  en: "Free trial",
  ru: "Пробный урок",
} satisfies Record<Locale, string>;

export function SiteHeader({ locale }: SiteHeaderProps) {
  const content = siteContent[locale];

  return (
    <SiteHeaderFrame>
      <div className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 md:h-16 xl:h-20">
          <Link
            aria-label={content.navigation.brandLabel}
            className="flex min-w-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
            href={getLocalizedPath(locale, "home")}
          >
            <BrandLogo
              className="h-8 w-auto sm:h-8 md:h-10 xl:h-12"
              locale={locale}
              priority
              sizes="(min-width: 1280px) 192px, (min-width: 768px) 180px, 128px"
            />
          </Link>

          <nav
            aria-label={content.navigation.primaryNavLabel}
            className="hidden items-center gap-1 xl:flex"
          >
            {content.navigation.primary.map((routeKey) => (
              <LocalizedNavLink
                activeClassName="bg-brand-teal-soft text-brand-teal shadow-sm after:scale-x-100"
                className="relative whitespace-nowrap rounded-md px-3.5 py-2 text-sm font-semibold leading-5 text-foreground transition duration-200 after:absolute after:inset-x-3 after:-bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-200 hover:-translate-y-px hover:text-brand-teal hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal motion-reduce:hover:translate-y-0"
                key={routeKey}
                locale={locale}
                routeKey={routeKey}
              >
                {content.routeLabels[routeKey]}
              </LocalizedNavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <LanguageSwitcher
              activeLocale={locale}
              ariaLabel={content.navigation.languageNavLabel}
            />
            <ButtonLink
              className="min-h-10 whitespace-nowrap px-4 py-2 text-sm shadow-[0_10px_22px_rgba(217,54,54,0.18)] hover:-translate-y-px hover:shadow-[0_14px_28px_rgba(217,54,54,0.24)] motion-reduce:hover:translate-y-0"
              href={getLocalizedPath(locale, "registration")}
            >
              {headerCtaLabels[locale]}
            </ButtonLink>
          </div>

          <MobileNav locale={locale} />
        </div>
      </div>
    </SiteHeaderFrame>
  );
}
