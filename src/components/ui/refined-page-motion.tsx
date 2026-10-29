"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { cancelAnchorArrival, focusAnchorHeading, highlightAnchorArrival } from "./anchor-arrival";

const pages = new Set(["/", "/about-us", "/privacy-policy", "/refund-policy", "/safeguarding-policy", "/term-dates"]);

export function RefinedPageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pages.has(pathname) && !pathname.startsWith("/calendars/")) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== location.origin || url.pathname !== pathname || url.search !== location.search || !url.hash || url.hash === "#main-content") return;
      let id: string;
      try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target) return;
      // Existing policy/home handlers retain their own geometry and scrolling.
      const handled = event.defaultPrevented;
      if (!handled) {
        event.preventDefault();
        if (location.hash !== url.hash) window.history.pushState(null, "", url.hash);
      }
      const heading = focusAnchorHeading(target);
      if (!handled) target.scrollIntoView({ block: "start", behavior: preference.matches ? "instant" : "smooth" });
      highlightAnchorArrival(heading);
    };
    document.addEventListener("click", click);
    preference.addEventListener("change", cancelAnchorArrival);
    return () => {
      document.removeEventListener("click", click);
      preference.removeEventListener("change", cancelAnchorArrival);
      cancelAnchorArrival();
    };
  }, [pathname]);
  return null;
}
