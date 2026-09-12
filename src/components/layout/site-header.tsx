import { BrandLogo } from "@/components/brand/brand-logo";
import { HomeLogoLink } from "@/components/layout/home-logo-link";
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
  en: "Free trial lesson",
  ru: "Пробный урок",
} satisfies Record<Locale, string>;

export function SiteHeader({ locale }: SiteHeaderProps) {
  const content = siteContent[locale];

  return (
    <SiteHeaderFrame>
      <style>{`
        .site-header-nav-link {
          color: color-mix(in srgb, var(--brand-blue) 82%, var(--foreground));
        }

        .site-header-nav-link::before {
          position: absolute;
          right: 1rem;
          bottom: -0.25rem;
          left: 1rem;
          height: 1px;
          content: "";
          background: color-mix(in srgb, var(--brand-blue) 20%, transparent);
          border-radius: 999px;
          opacity: 1;
          transform: scaleX(0.5);
          transition: opacity 200ms ease;
        }

        .site-header-nav-link:hover,
        .site-header-nav-link[aria-current="page"] {
          color: var(--brand-blue);
        }

        .site-header-nav-link:hover::before,
        .site-header-nav-link[aria-current="page"]::before {
          opacity: 0;
        }

        @media (min-width: 80rem) {
          .site-header-inner,
          .site-header-logo {
            transition: height 260ms cubic-bezier(0.33, 1, 0.68, 1), width 260ms cubic-bezier(0.33, 1, 0.68, 1);
          }

          header[data-scrolled="true"] .site-header-inner {
            height: 3.75rem;
          }

          header[data-scrolled="true"] .site-header-logo {
            width: 9rem;
          }
        }

        .site-header-trial-cta {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          color: white;
          background: linear-gradient(115deg, #dc3438 0%, #ce3650 52%, #d63f3c 100%);
          background-position: left center;
          background-size: 180% 100%;
          border: 1px solid rgba(185, 44, 49, 0.22);
          box-shadow: 0 10px 24px rgba(198, 48, 54, 0.18);
          translate: 0 0;
          scale: 1;
          transition: translate 300ms ease, scale 300ms ease, box-shadow 300ms ease, background-position 700ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .site-header-trial-cta > span {
          position: relative;
          z-index: 1;
        }

        .site-header-trial-cta::before {
          position: absolute;
          top: -90%;
          bottom: -90%;
          left: -95%;
          z-index: 0;
          width: 100%;
          content: "";
          background: radial-gradient(ellipse, rgba(255, 255, 255, 0.12), transparent 68%);
          pointer-events: none;
          transform: rotate(-12deg);
          transition: left 1050ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .site-header-trial-cta:hover {
          background-position: right center;
          box-shadow: 0 16px 32px rgba(198, 48, 54, 0.29);
          translate: 0 -2px;
          scale: 1.015;
        }

        .site-header-trial-cta:hover::before {
          left: 95%;
        }

        .site-header-trial-cta:active {
          box-shadow: 0 8px 18px rgba(198, 48, 54, 0.2);
          translate: 0 0;
          scale: 0.985;
        }

        @media (prefers-reduced-motion: reduce) {
          .site-header-inner,
          .site-header-logo,
          .site-header-nav-link,
          .site-header-nav-link::before,
          .site-header-nav-link::after,
          .site-header-trial-cta,
          .site-header-trial-cta::before {
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }

          .site-header-trial-cta:hover {
            background-position: left center;
            translate: 0 0;
            scale: 1;
          }

          .site-header-trial-cta:hover::before {
            left: -95%;
          }
        }
      `}</style>
      <div className="px-5 sm:px-8 lg:px-12">
        <div className="site-header-inner mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 md:h-16 xl:h-20">
          <HomeLogoLink
            ariaLabel={content.navigation.brandLabel}
            className="logo-home-link relative flex min-w-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue xl:w-48"
            href={getLocalizedPath(locale, "home")}
          >
            <BrandLogo
              className="site-header-logo h-auto w-32 md:w-[11.25rem] xl:w-48"
              locale={locale}
              priority
              sizes="(min-width: 1280px) 192px, (min-width: 768px) 180px, 128px"
            />
            <span
              aria-hidden="true"
              className="logo-home-reveal pointer-events-none absolute inset-0 z-10 hidden items-center justify-center bg-white xl:flex"
            >
              <span className="logo-home-reveal-content">
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M17.5 17.5 6.5 6.5" />
                  <path d="M6.5 13V6.5H13" />
                </svg>
                <span>{locale === "en" ? "Home" : "Главная"}</span>
              </span>
            </span>
          </HomeLogoLink>

          <nav
            aria-label={content.navigation.primaryNavLabel}
            className="hidden items-center gap-1 xl:flex"
          >
            {content.navigation.primary.map((routeKey) => (
              <LocalizedNavLink
                activeClassName="text-brand-blue after:scale-x-100"
                className="site-header-nav-link relative whitespace-nowrap rounded-md px-3.5 py-2 text-sm font-semibold leading-5 transition duration-200 after:absolute after:inset-x-3 after:-bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-brand-blue after:transition-transform after:duration-200 hover:-translate-y-px hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:hover:translate-y-0"
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
              className="site-header-trial-cta min-h-10 whitespace-nowrap px-4 py-2 text-sm focus-visible:outline-brand-blue"
              href={getLocalizedPath(locale, "registration")}
              variant="unstyled"
            >
              <span>{headerCtaLabels[locale]}</span>
            </ButtonLink>
          </div>

          <div className="ml-auto flex items-center gap-2 xl:hidden">
            <div className="hidden sm:block">
              <LanguageSwitcher
                activeLocale={locale}
                ariaLabel={content.navigation.languageNavLabel}
              />
            </div>
            <div className="hidden md:block">
              <ButtonLink
                className="site-header-trial-cta min-h-10 whitespace-nowrap px-4 py-2 text-sm focus-visible:outline-brand-blue"
                href={getLocalizedPath(locale, "registration")}
                variant="unstyled"
              >
                <span>{headerCtaLabels[locale]}</span>
              </ButtonLink>
            </div>
            <MobileNav locale={locale} />
          </div>
        </div>
      </div>
    </SiteHeaderFrame>
  );
}
