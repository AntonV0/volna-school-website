import Link from "next/link";

import { SimpleAccordion } from "@/components/ui/simple-accordion";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import {
  getLocalizedPath,
  type RouteKey,
} from "@/lib/i18n/routing";

type SiteFooterProps = {
  locale: Locale;
};

function linkWithAnchor(locale: Locale, routeKey: RouteKey, anchor?: string) {
  const path = getLocalizedPath(locale, routeKey);
  return anchor ? `${path}#${anchor}` : path;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = siteContent[locale];

  return (
    <footer className="bg-brand-teal text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_2fr] lg:px-12">
        <div className="space-y-4">
          <Link
            className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href={getLocalizedPath(locale, "home")}
          >
            <span className="grid size-11 place-items-center rounded-full bg-white text-lg font-bold text-brand-teal">
              V
            </span>
            <span className="text-lg font-semibold">
              {content.navigation.brandLabel}
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-6 text-white/80">
            {content.footer.intro}
          </p>
          <p className="text-sm text-white/70">
            {content.footer.contactPlaceholder}
          </p>
        </div>

        <div className="hidden grid-cols-4 gap-6 lg:grid">
          {content.footer.groups.map((group) => (
            <div key={group.routeKey}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {group.links.map((link) => (
                  <li key={`${link.routeKey}-${link.label}`}>
                    <Link
                      className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      href={linkWithAnchor(locale, link.routeKey, link.anchor)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          {content.footer.groups.map((group) => (
            <SimpleAccordion key={group.routeKey} title={group.title}>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={`${link.routeKey}-${link.label}`}>
                    <Link
                      className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      href={linkWithAnchor(locale, link.routeKey, link.anchor)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SimpleAccordion>
          ))}
        </div>

        <div className="border-t border-white/20 pt-6 text-sm text-white/70 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Copyright {new Date().getFullYear()} Volna School</span>
            <Link
              className="hover:text-white"
              href={getLocalizedPath(locale, "privacy")}
            >
              {content.routeLabels.privacy}
            </Link>
            <Link
              className="hover:text-white"
              href={getLocalizedPath(locale, "refund")}
            >
              {content.routeLabels.refund}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
