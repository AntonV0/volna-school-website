"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const markerSelector = [
  "#main-content section",
  "#main-content > * > aside[id]",
].join(", ");

function getSectionLabel(section: HTMLElement) {
  const heading = section.querySelector("h1, h2")?.textContent?.trim();
  const label = heading || section.getAttribute("aria-label") || section.id;

  return (label || "Section").replace(/\s+/g, " ").slice(0, 52);
}

export function SectionNumberMarkers() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV === "production" || pathname === "/" || pathname === "/ru") {
      return;
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>(markerSelector))
      .filter((section) => !section.closest("section section"));

    sections.forEach((section, index) => {
      section.dataset.devSectionNumber = String(index + 1).padStart(2, "0");
      section.dataset.devSectionLabel = getSectionLabel(section);
    });

    return () => {
      sections.forEach((section) => {
        delete section.dataset.devSectionNumber;
        delete section.dataset.devSectionLabel;
      });
    };
  }, [pathname]);

  return null;
}
