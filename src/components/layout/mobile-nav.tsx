"use client";


import { useEffect, useId, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { LocalizedNavLink } from "@/components/layout/localized-nav-link";
import { cn } from "@/lib/classnames";
import { type Locale } from "@/lib/i18n/config";
import {
  getLocalizedPath,
  legalRouteKeys,
} from "@/lib/i18n/routing";
import { siteContent } from "@/content/site-content";

type MobileNavProps = {
  locale: Locale;
};

export function MobileNav({ locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const readingPosition = useRef({ left: 0, top: 0 });
  const panelId = useId();
  const content = siteContent[locale];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    const previousGutter = document.documentElement.style.scrollbarGutter;
    const scrollPosition = readingPosition.current;
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

    document.documentElement.style.scrollbarGutter = "stable";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    // Moving focus into the fixed menu must preserve the reader's page position.
    const focusFrame = requestAnimationFrame(() => panelRef.current?.focus({ preventScroll: true }));

    return () => {
      cancelAnimationFrame(focusFrame);
      document.documentElement.style.overflow = previousOverflow;
      document.documentElement.style.scrollbarGutter = previousGutter;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus({ preventScroll: true });
      window.scrollTo({ ...scrollPosition, behavior: "instant" });
    };
  }, [isOpen]);

  const menuLabel = locale === "en" ? "Menu" : "Меню";
  const closeLabel = locale === "en" ? "Close" : "Закрыть";

  return (
    <div className="xl:hidden">
      <style>{`
        @keyframes mobile-nav-panel-enter {
          from {
            opacity: 0;
            transform: translateY(-0.75rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-panel {
          animation: mobile-nav-panel-enter 340ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-nav-panel {
            animation: none;
          }
        }
      `}</style>
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={
          isOpen
            ? content.navigation.closeMenuLabel
            : content.navigation.mobileMenuLabel
        }
        className={cn(
          "group inline-flex h-10 min-w-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-2.5 text-brand-teal shadow-[0_4px_16px_rgba(11,123,137,0.08)] transition-[color,background-color,border-color,box-shadow,transform] duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:border-brand-teal/35 hover:bg-brand-teal-soft/70 hover:shadow-[0_7px_18px_rgba(11,123,137,0.13)] active:translate-y-0 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal motion-reduce:transform-none sm:h-11 sm:min-w-11 md:px-3.5",
          isOpen
            ? "border-brand-teal/35 bg-brand-teal-soft/80"
            : "border-brand-teal/18 bg-white",
        )}
        onClick={() => {
          if (!isOpen) readingPosition.current = { left: window.scrollX, top: window.scrollY };
          setIsOpen((current) => !current);
        }}
        ref={buttonRef}
        type="button"
      >
        <span className="sr-only">
          {isOpen
            ? content.navigation.closeMenuLabel
            : content.navigation.mobileMenuLabel}
        </span>
        <span aria-hidden="true" className="relative block h-4 w-5 shrink-0">
          <span
            className={cn(
              "absolute left-0 top-1 block h-0.5 w-5 origin-center rounded-full bg-current transition-[top,transform] duration-[360ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-[0.01ms]",
              isOpen && "top-1/2 -translate-y-1/2 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute bottom-1 right-0 block h-0.5 w-3.5 origin-center rounded-full bg-current transition-[bottom,width,transform] duration-[360ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:w-5 motion-reduce:duration-[0.01ms]",
              isOpen && "bottom-1/2 w-5 translate-y-1/2 -rotate-45",
            )}
          />
        </span>
        <span className="hidden min-w-10 text-left text-sm font-semibold leading-5 md:inline">
          {isOpen ? closeLabel : menuLabel}
        </span>
      </button>

      {isOpen ? (
        <div
          aria-label={content.navigation.mobilePrimaryNavLabel}
          aria-modal="true"
          className="mobile-nav-panel absolute inset-x-0 top-full z-50 h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border-t border-white/20 bg-brand-teal-deep px-5 py-5 text-white shadow-2xl focus:outline-none sm:px-8 md:h-[calc(100dvh-4rem)]"
          id={panelId}
          ref={panelRef}
          role="dialog"
          tabIndex={-1}
        >
          <div className="mx-auto max-w-md space-y-5">
            <nav aria-label={content.navigation.mobilePrimaryNavLabel}>
              <ul className="grid divide-y divide-white/10 border-y border-white/10">
                {content.navigation.primary.map((routeKey) => (
                  <li key={routeKey}>
                    <LocalizedNavLink
                      activeClassName="text-accent-on-dark"
                      className="flex min-h-12 items-center px-1 py-3 text-base font-semibold leading-6 text-white transition hover:text-accent-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      locale={locale}
                      onClick={() => setIsOpen(false)}
                      routeKey={routeKey}
                    >
                      {content.routeLabels[routeKey]}
                    </LocalizedNavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label={content.footer.legalLabel}>
              <p className="px-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-on-dark">
                {content.footer.legalLabel}
              </p>
              <ul className="mt-2 grid gap-1 border-y border-white/15 py-3">
                {legalRouteKeys.map((routeKey) => (
                  <li key={routeKey}>
                    <LocalizedNavLink
                      activeClassName="text-accent-on-dark"
                      className="flex min-h-11 items-center px-1 py-2 text-sm font-semibold leading-5 text-white/85 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      locale={locale}
                      onClick={() => setIsOpen(false)}
                      routeKey={routeKey}
                    >
                      {content.routeLabels[routeKey]}
                    </LocalizedNavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ButtonLink
              className="min-h-12 w-full py-3 leading-5 focus-visible:outline-white"
              href={getLocalizedPath(locale, "registration")}
              onClick={() => setIsOpen(false)}
            >
              {content.navigation.ctaLabel}
            </ButtonLink>
            <LanguageSwitcher
              activeLocale={locale}
              ariaLabel={content.navigation.languageNavLabel}
              compact
            />
            <div className="space-y-1 rounded-md border border-white/15 bg-white/[0.06] p-4 text-sm leading-6 text-white/80">
              <p className="font-semibold text-white">
                {content.footer.contact.title}
              </p>
              <p>
                <a href="tel:+447881764892" onClick={() => setIsOpen(false)}>
                  {content.footer.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${content.footer.contact.email}`}
                  onClick={() => setIsOpen(false)}
                >
                  {content.footer.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
