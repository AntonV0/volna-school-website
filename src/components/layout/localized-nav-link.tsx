"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import {
  getLocalizedPath,
  getRouteKeyFromPathname,
  type RouteKey,
} from "@/lib/i18n/routing";

type LocalizedNavLinkProps = {
  activeClassName?: string;
  children: ReactNode;
  className?: string;
  locale: Locale;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  routeKey: RouteKey;
};

export function LocalizedNavLink({
  activeClassName,
  children,
  className,
  locale,
  onClick,
  routeKey,
}: LocalizedNavLinkProps) {
  const pathname = usePathname();
  const isActive = getRouteKeyFromPathname(pathname) === routeKey;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    const isStandardClick =
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey;

    if (!event.defaultPrevented && isStandardClick && isActive) {
      event.preventDefault();
      window.scrollTo({ top: 0 });
    }
  }

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(className, isActive && activeClassName)}
      href={getLocalizedPath(locale, routeKey)}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
