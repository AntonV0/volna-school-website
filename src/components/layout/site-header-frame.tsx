"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/classnames";

type SiteHeaderFrameProps = {
  children: ReactNode;
};

export function SiteHeaderFrame({ children }: SiteHeaderFrameProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/ru";

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled((currentlyScrolled) =>
        currentlyScrolled ? window.scrollY > 8 : window.scrollY > 40,
      );
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b backdrop-blur transition-[background-color,border-color,box-shadow] duration-[260ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-brand-teal/35 after:to-transparent after:transition-transform after:duration-[260ms] after:[transition-timing-function:cubic-bezier(0.33,1,0.68,1)]",
        isScrolled
          ? "border-brand-teal/25 bg-white/96 shadow-[var(--header-shadow)] after:scale-x-100"
          : cn(
              "border-brand-teal/8 shadow-none",
              isHomePage ? "bg-surface" : "bg-white/92",
            ),
      )}
      data-scrolled={isScrolled ? "true" : "false"}
    >
      {children}
    </header>
  );
}
