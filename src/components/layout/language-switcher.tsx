"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { cn } from "@/lib/classnames";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { getAlternateLocalePath } from "@/lib/i18n/routing";

type LanguageSwitcherProps = {
  activeLocale: Locale;
  ariaLabel?: string;
  compact?: boolean;
};

const languageSectionSelector = "[data-language-section][id]";

function getCurrentLanguageSection() {
  if (window.scrollY < 120) {
    return undefined;
  }

  const headerBottom =
    document.querySelector<HTMLElement>("header")?.getBoundingClientRect()
      .bottom ?? 0;
  const activationLine = headerBottom + 220;
  let currentSection: string | undefined;

  document
    .querySelectorAll<HTMLElement>(languageSectionSelector)
    .forEach((section) => {
      const bounds = section.getBoundingClientRect();

      if (bounds.width > 0 && bounds.height > 0 && bounds.top <= activationLine) {
        currentSection = section.id;
      }
    });

  return currentSection;
}

export function LanguageSwitcher({
  activeLocale,
  ariaLabel = "Language",
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState<string>();

  const handleLanguageChange = (
    event: MouseEvent<HTMLAnchorElement>,
    locale: Locale,
  ) => {
    if (
      locale === activeLocale ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const destinationHref = event.currentTarget.getAttribute("href");

    if (!destinationHref?.includes("#")) {
      return;
    }

    event.preventDefault();
    router.push(destinationHref);
  };

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    const section = sectionId ? document.getElementById(sectionId) : null;

    if (!section?.matches(languageSectionSelector)) {
      return;
    }

    let secondAnimationFrame = 0;
    const firstAnimationFrame = window.requestAnimationFrame(() => {
      secondAnimationFrame = window.requestAnimationFrame(() => {
        section.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstAnimationFrame);
      window.cancelAnimationFrame(secondAnimationFrame);
    };
  }, [pathname]);

  useEffect(() => {
    let animationFrame = 0;

    const updateCurrentSection = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        setCurrentSection(getCurrentLanguageSection());
      });
    };

    updateCurrentSection();
    window.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("resize", updateCurrentSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateCurrentSection);
      window.removeEventListener("resize", updateCurrentSection);
    };
  }, [pathname]);

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        "relative grid grid-cols-2 items-center",
        compact ? "h-11 w-full" : "h-10 w-40",
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-2 h-0.5 w-[calc(50%-1rem)] rounded-full bg-brand-red transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{
          transform:
            activeLocale === "ru"
              ? "translateX(calc(100% + 1rem))"
              : "translateX(0)",
        }}
      />
      {locales.map((locale) => (
        <Link
          aria-current={locale === activeLocale ? "page" : undefined}
          className={cn(
            "relative z-10 inline-flex h-full w-full items-center justify-center rounded-md px-2 text-xs font-bold uppercase tracking-[0.08em] transition-[color,transform] duration-[280ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-2 focus-visible:outline-offset-1",
            compact
              ? "focus-visible:outline-white"
              : "focus-visible:outline-brand-blue",
            locale !== activeLocale &&
              "hover:scale-[1.04] focus-visible:scale-[1.04] motion-reduce:transform-none",
            compact &&
              (locale === activeLocale
                ? "text-white"
                : "text-white/48 hover:text-white/78"),
            !compact &&
              (locale === activeLocale
                ? "text-brand-blue"
                : "text-foreground/66 hover:text-brand-blue"),
          )}
          href={`${getAlternateLocalePath(pathname, locale)}${
            currentSection ? `#${encodeURIComponent(currentSection)}` : ""
          }`}
          key={locale}
          onClick={(event) => handleLanguageChange(event, locale)}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </nav>
  );
}
