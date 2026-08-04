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
    const updateScrolled = () => setIsScrolled(window.scrollY > 8);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b backdrop-blur transition-[background-color,border-color,box-shadow] duration-300",
        isScrolled
          ? "border-brand-teal/20 bg-white/98 shadow-[0_12px_34px_rgba(18,49,66,0.09)]"
          : cn(
              "border-brand-teal/12 shadow-[0_8px_30px_rgba(18,49,66,0.045)]",
              isHomePage ? "bg-surface" : "bg-white/92",
            ),
      )}
    >
      {children}
    </header>
  );
}
