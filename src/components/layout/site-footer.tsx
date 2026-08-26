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

  return (
    <footer
      className="border-t-4 border-accent bg-brand-teal-deep text-white"
      id="site-footer"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.9fr_1.05fr] lg:gap-10 lg:px-12">
        <div className="space-y-6">
          <Link
            aria-label={content.navigation.brandLabel}
            className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href={getLocalizedPath(locale, "home")}
          >
            <Image
              alt={footerLogo.alt}
              className="h-auto w-64 max-w-[calc(100vw-4rem)]"
              height={footerLogo.height}
              sizes="224px"
              src={footerLogo.src}
              width={footerLogo.width}
            />
          </Link>
          <p className="max-w-sm text-sm leading-6 text-white/80">
            {content.footer.intro}
          </p>
          <div className="max-w-sm rounded-lg border border-white/15 bg-white/[0.06] p-4 text-sm leading-6 text-white/75">
            <h2 className="font-semibold text-white">
              {content.footer.contact.title}
            </h2>
            <p className="mt-1 text-white/68">{content.footer.contactHelp}</p>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-on-dark">
                  {content.footer.contact.phoneLabel}
                </dt>
                <dd>
                  <a
                    className="inline-flex min-h-8 items-center text-white transition hover:text-accent-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    href="tel:+447881764892"
                  >
                    {content.footer.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-on-dark">
                  {content.footer.contact.emailLabel}
                </dt>
                <dd>
                  <a
                    className="inline-flex min-h-8 items-center text-white transition hover:text-accent-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    href={`mailto:${content.footer.contact.email}`}
                  >
                    {content.footer.contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <nav
          aria-label={content.footer.navLabel}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1"
        >
          <div>
            <h2 className="border-b border-white/15 pb-3 text-sm font-semibold text-white">
              {content.footer.coursesTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {courseRouteKeys.map((routeKey) => (
                <li key={routeKey}>
                  <Link
                    className="inline-flex min-h-8 items-center transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    href={getLocalizedPath(locale, routeKey)}
                  >
                    {content.routeLabels[routeKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="border-b border-white/15 pb-3 text-sm font-semibold text-white">
              {content.footer.usefulTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {usefulRouteKeys.map((routeKey) => (
                <li key={routeKey}>
                  <Link
                    className="inline-flex min-h-8 items-center transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    href={getLocalizedPath(locale, routeKey)}
                  >
                    {content.routeLabels[routeKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <aside className="self-start rounded-lg border border-white/15 bg-white/[0.07] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-on-dark">
            {content.footer.ctaEyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
            {content.footer.ctaTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/75">
            {content.footer.ctaBody}
          </p>
          <ButtonLink
            className="mt-5 w-full"
            href={getLocalizedPath(locale, "registration")}
          >
            {content.footer.ctaButtonLabel}
          </ButtonLink>
        </aside>

        <div className="border-t border-white/20 pt-6 text-sm text-white/70 lg:col-span-3">
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
            <span>Copyright {new Date().getFullYear()} Volna School</span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalRouteKeys.map((routeKey) => (
                <Link
                  className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
