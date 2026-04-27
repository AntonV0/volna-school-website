"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEventHandler, ReactNode } from "react";

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

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(className, isActive && activeClassName)}
      href={getLocalizedPath(locale, routeKey)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
