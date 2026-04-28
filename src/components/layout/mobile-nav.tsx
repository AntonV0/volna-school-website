"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { LocalizedNavLink } from "@/components/layout/localized-nav-link";
import { cn } from "@/lib/classnames";
import { type Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { siteContent } from "@/content/site-content";

type MobileNavProps = {
  locale: Locale;
};

export function MobileNav({ locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const content = siteContent[locale];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    function getFocusableElements() {
      return Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => getFocusableElements()[0]?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus();
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={
          isOpen
            ? content.navigation.closeMenuLabel
            : content.navigation.mobileMenuLabel
        }
        className="grid size-11 place-items-center rounded-md border border-brand-teal/20 bg-white text-brand-teal shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
        onClick={() => setIsOpen((current) => !current)}
        ref={buttonRef}
        type="button"
      >
        <span className="sr-only">
          {isOpen
            ? content.navigation.closeMenuLabel
            : content.navigation.mobileMenuLabel}
        </span>
        <span aria-hidden="true" className="relative block size-5">
          <span
            className={cn(
              "absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition",
              isOpen && "top-1/2 -translate-y-1/2 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-1 left-0 block h-0.5 w-5 rounded-full bg-current transition",
              isOpen && "bottom-auto top-1/2 -translate-y-1/2 -rotate-45",
            )}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          className="absolute left-0 right-0 top-full z-40 bg-foreground/18 backdrop-blur-[2px]"
          id={panelId}
          ref={panelRef}
          role="dialog"
          aria-label={
            isOpen
              ? content.navigation.closeMenuLabel
              : content.navigation.mobileMenuLabel
          }
          aria-modal="true"
        >
          <div className="ml-auto min-h-[calc(100dvh-73px)] w-full max-w-sm bg-brand-teal-deep p-5 text-white shadow-2xl sm:min-h-[calc(100dvh-81px)]">
            <div className="space-y-5">
              <LanguageSwitcher activeLocale={locale} compact />
              <nav aria-label="Mobile primary">
                <ul className="grid gap-1">
                  {content.navigation.primary.map((routeKey) => (
                    <li key={routeKey}>
                      <LocalizedNavLink
                        activeClassName="bg-white/10 text-white"
                        className="flex min-h-11 items-center justify-between rounded-md border-b border-white/10 px-3 py-3 text-base font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        locale={locale}
                        onClick={() => setIsOpen(false)}
                        routeKey={routeKey}
                      >
                        <span>{content.routeLabels[routeKey]}</span>
                        <span aria-hidden="true">+</span>
                      </LocalizedNavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link
                className="block rounded-md bg-brand-red px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href={getLocalizedPath(locale, "registration")}
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
