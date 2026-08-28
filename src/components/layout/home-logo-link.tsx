"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent, type ReactNode } from "react";

type HomeLogoLinkProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  href: string;
};

export function HomeLogoLink({
  ariaLabel,
  children,
  className,
  href,
}: HomeLogoLinkProps) {
  const pathname = usePathname();
  const [isRevealSuppressed, setIsRevealSuppressed] = useState(false);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const isStandardClick =
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey;

    if (!event.defaultPrevented && isStandardClick) {
      setIsRevealSuppressed(true);
    }

    if (!event.defaultPrevented && isStandardClick && pathname === href) {
      event.preventDefault();
      window.scrollTo({ top: 0 });
    }
  }

  return (
    <Link
      aria-label={ariaLabel}
      className={className}
      data-reveal-suppressed={isRevealSuppressed || undefined}
      href={href}
      onBlur={() => setIsRevealSuppressed(false)}
      onClick={handleClick}
      onPointerLeave={() => setIsRevealSuppressed(false)}
    >
      {children}
    </Link>
  );
}
