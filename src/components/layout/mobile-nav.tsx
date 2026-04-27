"use client";

import Link from "next/link";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { cn } from "@/lib/classnames";
import { type Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { siteContent } from "@/content/site-content";

type MobileNavProps = {
  locale: Locale;
};

export function MobileNav({ locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const content = siteContent[locale];

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={isOpen}
        aria-label={
          isOpen
            ? content.navigation.closeMenuLabel
            : content.navigation.mobileMenuLabel
        }
        className="grid size-11 place-items-center rounded-md border border-brand-teal/20 bg-white text-brand-teal shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="sr-only">
          {isOpen
            ? content.navigation.closeMenuLabel
            : content.navigation.mobileMenuLabel}
        </span>
        <span aria-hidden="true" className="grid gap-1.5">
          <span
            className={cn(
              "block h-0.5 w-5 rounded-full bg-current transition",
              isOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 rounded-full bg-current transition",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 rounded-full bg-current transition",
              isOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </span>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 top-[73px] z-40 bg-foreground/18 backdrop-blur-[2px] sm:top-[81px]">
          <div className="ml-auto h-full w-full max-w-sm bg-brand-teal-deep p-5 text-white shadow-2xl">
            <div className="space-y-5">
              <LanguageSwitcher activeLocale={locale} compact />
              <nav aria-label="Mobile primary">
                <ul className="grid gap-1">
                  {content.navigation.primary.map((routeKey) => (
                    <li key={routeKey}>
                      <Link
                        className="flex min-h-11 items-center justify-between rounded-md border-b border-white/10 px-3 py-3 text-base font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        href={getLocalizedPath(locale, routeKey)}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{content.routeLabels[routeKey]}</span>
                        <span aria-hidden="true">+</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link
                className="block rounded-md bg-brand-red px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href={getLocalizedPath(locale, content.navigation.enrollRoutes[0])}
                onClick={() => setIsOpen(false)}
              >
                {content.navigation.ctaLabel}
              </Link>
              <div className="rounded-md border border-white/15 p-3 text-sm leading-6 text-white/80">
                {content.footer.contactPlaceholder}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
