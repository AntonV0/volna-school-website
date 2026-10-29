"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gcsePaths } from "@/content/gcse-content";
import { useGcseScrollRestoration } from "./use-gcse-scroll-restoration";
import { announceGcseAnchor, gcseAnchorTarget, gcseAnchorTop } from "./gcse-anchor-geometry";

/** Feedback follows deliberate anchor navigation, never ordinary scrolling. */
export function GcseAnchorFeedback() {
  const pathname = usePathname();
  const requestedPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    // Settle the new hero before the browser measures transition snapshots.
    if (requestedPath.current === pathname && !window.location.hash) {
      const header = document.querySelector("header");
      // Resolve compact chrome before snapshot measurement, rather than
      // animating its height after the incoming hero has been captured.
      header?.setAttribute("data-navigation-reset", "true");
      window.scrollTo({ top: 0, behavior: "instant" });
      requestedPath.current = null;
      let frame = 0;
      let frames = 0;
      const release = () => {
        frames++;
        const transitioning = CSS.supports("selector(:active-view-transition)") &&
          document.documentElement.matches(":active-view-transition");
        if (frames < 2 || transitioning) frame = requestAnimationFrame(release);
        else header?.removeAttribute("data-navigation-reset");
      };
      frame = requestAnimationFrame(release);
      return () => {
        cancelAnimationFrame(frame);
        header?.removeAttribute("data-navigation-reset");
      };
    }
  }, [pathname]);

  useGcseScrollRestoration(pathname);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let animation: Animation | undefined;
    const cancel = () => {
      if (frame) window.scrollTo({ top: window.scrollY, left: window.scrollX, behavior: "instant" });
      cancelAnimationFrame(frame);
      frame = 0;
      animation?.cancel();
      announceGcseAnchor(null);
    };
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== pathname) {
        if (!url.hash && [gcsePaths.main, gcsePaths.curriculum, gcsePaths.exams, gcsePaths.resources].some(path => path === url.pathname)) {
          requestedPath.current = url.pathname;
        }
        return;
      }
      if (!url.hash || url.search !== window.location.search) return;
      let id: string;
      try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
      const target = gcseAnchorTarget(id);
      if (!target) return;
      const { heading, marker } = target;
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
      cancel();
      announceGcseAnchor(id);
      window.scrollTo({
        top: gcseAnchorTop(marker),
        behavior: preference.matches ? "instant" : "smooth",
      });
      const start = performance.now();
      let previousY = window.scrollY;
      let settled = 0;
      const check = () => {
        if (!heading.isConnected) { announceGcseAnchor(null); return; }
        settled = Math.abs(window.scrollY - previousY) < 1 ? settled + 1 : 0;
        previousY = window.scrollY;
        if ((performance.now() - start > 150 && settled >= 4) || performance.now() - start > 1800) {
          frame = 0;
          window.scrollTo({ top: gcseAnchorTop(marker), behavior: "instant" });
          announceGcseAnchor(null);
          const bounds = heading.getBoundingClientRect();
          if (!preference.matches && bounds.bottom > 0 && bounds.top < window.innerHeight && heading.animate) {
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
    const traversal = () => { requestedPath.current = null; cancel(); };
    window.addEventListener("popstate", traversal, true);
    const inputs = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    inputs.forEach(event => window.addEventListener(event, cancel, { passive: true }));
    document.addEventListener("click", click, true);
    preference.addEventListener("change", cancel);
    return () => {
      cancel();
      document.removeEventListener("click", click, true);
      window.removeEventListener("popstate", traversal, true);
      inputs.forEach(event => window.removeEventListener(event, cancel));
      preference.removeEventListener("change", cancel);
    };
  }, [pathname]);

  return null;
}
