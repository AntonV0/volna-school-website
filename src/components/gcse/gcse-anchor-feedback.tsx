"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gcsePaths } from "@/content/gcse-content";

/** Feedback follows deliberate anchor navigation, never ordinary scrolling. */
export function GcseAnchorFeedback() {
  const pathname = usePathname();
  const requestedPath = useRef<{ path: string; resetScroll: boolean } | null>(null);

  useLayoutEffect(() => {
    // Settle the new hero before the browser measures transition snapshots.
    if (requestedPath.current?.path === pathname && requestedPath.current.resetScroll && !window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    requestedPath.current = null;
  }, [pathname]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let animation: Animation | undefined;
    const cancel = () => {
      cancelAnimationFrame(frame);
      animation?.cancel();
    };
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== pathname) {
        if (!url.hash && [gcsePaths.main, gcsePaths.curriculum, gcsePaths.exams, gcsePaths.resources].some(path => path === url.pathname)) {
          const headingBottom = document.querySelector("h1")?.getBoundingClientRect().bottom ?? 0;
          const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
          requestedPath.current = { path: url.pathname, resetScroll: headingBottom <= headerBottom };
        }
        return;
      }
      if (!url.hash || url.search !== window.location.search) return;
      let id: string;
      try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      const heading = target?.matches("h1, h2, h3") ? target : target?.querySelector<HTMLElement>("h1, h2, h3");
      if (!heading) return;
      // Native hash entries can have no Next router state. Use its patched
      // history API so Back restores both the URL and the matching page.
      event.preventDefault();
      const menu = link.closest<HTMLDetailsElement>('nav[aria-label="GCSE navigation"] details');
      if (menu) menu.open = false;
      if (window.location.hash !== url.hash) window.history.pushState(null, "", url.hash);
      if (!heading.hasAttribute("tabindex")) {
        heading.setAttribute("tabindex", "-1");
        heading.addEventListener("blur", () => heading.removeAttribute("tabindex"), { once: true });
      }
      heading.focus({ preventScroll: true });
      const offset = Array.from(document.querySelectorAll("header, [data-gcse-navigation]"))
        .reduce((height, element) => height + element.getBoundingClientRect().height, 16);
      window.scrollTo({
        top: Math.max(0, window.scrollY + heading.getBoundingClientRect().top - offset),
        behavior: preference.matches ? "instant" : "smooth",
      });
      cancel();
      if (preference.matches) return;
      const start = performance.now();
      let previousY = window.scrollY;
      let settled = 0;
      const check = () => {
        if (preference.matches || !heading.isConnected) return;
        settled = Math.abs(window.scrollY - previousY) < 1 ? settled + 1 : 0;
        previousY = window.scrollY;
        if ((performance.now() - start > 150 && settled >= 4) || performance.now() - start > 1800) {
          const bounds = heading.getBoundingClientRect();
          if (bounds.bottom > 0 && bounds.top < window.innerHeight && heading.animate) {
            animation = heading.animate([
              { backgroundColor: "transparent", boxShadow: "inset 0 -2px transparent" },
              { backgroundColor: "rgba(36,122,74,.08)", boxShadow: "inset 0 -2px rgba(36,122,74,.5)", offset: .3 },
              { backgroundColor: "transparent", boxShadow: "inset 0 -2px transparent" },
            ], { duration: 700, easing: "ease-out" });
          }
          return;
        }
        frame = requestAnimationFrame(check);
      };
      frame = requestAnimationFrame(check);
    };
    document.addEventListener("click", click, true);
    preference.addEventListener("change", cancel);
    return () => {
      cancel();
      document.removeEventListener("click", click, true);
      preference.removeEventListener("change", cancel);
    };
  }, [pathname]);

  return null;
}
