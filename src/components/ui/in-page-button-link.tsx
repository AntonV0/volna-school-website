"use client";

import type { MouseEvent, ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";

type InPageButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: `#${string}`;
};

export function InPageButtonLink({
  children,
  className,
  href,
}: InPageButtonLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(href.slice(1));

    if (!target) {
      return;
    }

    event.preventDefault();

    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }

    const focusTarget = target.querySelector<HTMLElement>("h1, h2, h3") ?? target;
    if (!focusTarget.hasAttribute("tabindex")) {
      focusTarget.setAttribute("tabindex", "-1");
      focusTarget.addEventListener("blur", () => focusTarget.removeAttribute("tabindex"), {
        once: true,
      });
    }
    focusTarget.focus({ preventScroll: true });

    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }

  return (
    <ButtonLink
      className={className}
      href={href}
      onClick={handleClick}
      variant="secondary"
    >
      {children}
    </ButtonLink>
  );
}
