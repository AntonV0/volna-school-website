import Link from "next/link";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { siteContent } from "@/content/site-content";
import { VOLNA_FOOTER_LOGOS } from "@/lib/brand-assets";
import type { Locale } from "@/lib/i18n/config";
import {
  courseRouteKeys,
  getLocalizedPath,
  legalRouteKeys,
  type PageRouteKey,
} from "@/lib/i18n/routing";

type SiteFooterProps = {
  locale: Locale;
};

const usefulRouteKeys = [
  "about",
  "registration",
] as const satisfies PageRouteKey[];

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = siteContent[locale];
  const footerLogo = VOLNA_FOOTER_LOGOS[locale];
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden bg-brand-teal-deep text-white"
      id="site-footer"
    >
      <svg
        aria-hidden="true"
        className="absolute left-0 top-0 z-10 h-16 w-full -translate-y-px text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1440 72"
      >
        <path
          d="M0 0h1440v18c-235 48-502 55-761 23C420 9 200 16 0 52V0Z"
          fill="currentColor"
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_86%_32%,rgba(79,159,197,0.16),transparent_31%),linear-gradient(180deg,rgba(7,63,82,0)_0%,rgba(3,42,57,0.42)_100%)]" />

      <div className="relative z-20 mx-auto grid w-full max-w-7xl gap-10 px-5 pb-9 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.85fr_1.05fr] lg:px-12">
        <div>
          <Link
            aria-label={content.navigation.brandLabel}
            className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href={getLocalizedPath(locale, "home")}
          >
            <Image
              alt={footerLogo.alt}
              className="h-auto w-64 max-w-[calc(100vw-4rem)]"
              height={footerLogo.height}
              sizes="256px"
              src={footerLogo.src}
              width={footerLogo.width}
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/75">
            {content.footer.intro}
          </p>
          <dl className="mt-8 grid gap-5 border-l-2 border-accent-on-dark/65 pl-5 sm:grid-cols-2">
            <div>
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-on-dark">
                {content.footer.contact.phoneLabel}
              </dt>
              <dd className="mt-1.5">
                <a
                  className="text-sm font-medium text-white underline-offset-4 transition hover:text-accent-on-dark hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href="tel:+447881764892"
                >
                  {content.footer.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-on-dark">
                {content.footer.contact.emailLabel}
              </dt>
              <dd className="mt-1.5">
                <a
                  className="text-sm font-medium text-white underline-offset-4 transition hover:text-accent-on-dark hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href={`mailto:${content.footer.contact.email}`}
                >
                  {content.footer.contact.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <nav aria-label={content.footer.navLabel} className="grid gap-7">
          <div>
            <h2 className="text-sm font-semibold text-white">
              {content.footer.coursesTitle}
            </h2>
            <ul className="mt-4 grid gap-2">
              {courseRouteKeys.map((routeKey) => (
                <li key={routeKey}>
                  <Link
                    className="group inline-flex min-h-8 items-center gap-2 text-sm text-white/75 underline-offset-4 transition hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    href={getLocalizedPath(locale, routeKey)}
                  >
                    <span>{content.routeLabels[routeKey]}</span>
                    <span
                      aria-hidden="true"
                      className="translate-x-0 text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">
              {content.footer.usefulTitle}
            </h2>
            <ul className="mt-4 grid gap-2">
              {usefulRouteKeys.map((routeKey) => (
                <li key={routeKey}>
                  <Link
                    className="inline-flex min-h-8 items-center text-sm text-white/75 underline-offset-4 transition hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    href={getLocalizedPath(locale, routeKey)}
                  >
                    {content.routeLabels[routeKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <aside className="relative self-start overflow-hidden rounded-xl border border-white/15 bg-white/[0.075] p-7 shadow-[0_22px_55px_rgba(0,0,0,0.18)] backdrop-blur-sm">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-accent-on-dark/15"
          />
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-5 h-24 w-24 rounded-full border border-accent-on-dark/20"
          />
          <p className="relative text-xs font-bold uppercase tracking-[0.16em] text-accent-on-dark">
            {content.footer.ctaEyebrow}
          </p>
          <h2 className="relative mt-3 text-2xl font-semibold leading-tight">
            {content.footer.ctaTitle}
          </h2>
          <p className="relative mt-3 text-sm leading-6 text-white/75">
            {content.footer.ctaBody}
          </p>
          <ButtonLink
            className="relative mt-6 w-full border border-white/45 bg-white text-brand-teal-deep shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition-[background-color,border-color,box-shadow,color,transform] duration-[360ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-px hover:border-accent-on-dark/70 hover:bg-accent-soft hover:text-brand-blue hover:shadow-[0_13px_28px_rgba(0,0,0,0.18)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none"
            href={`mailto:${content.footer.contact.email}`}
            variant="unstyled"
          >
            {content.footer.ctaButtonLabel}
          </ButtonLink>
        </aside>

        <div className="border-t border-white/20 pt-6 text-xs text-white/65 lg:col-span-3">
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
            <span>
              © 2020{currentYear > 2020 ? `–${currentYear}` : ""} Volna School
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalRouteKeys.map((routeKey) => (
                <Link
                  className="underline-offset-4 hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href={getLocalizedPath(locale, routeKey)}
                  key={routeKey}
                >
                  {content.routeLabels[routeKey]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
