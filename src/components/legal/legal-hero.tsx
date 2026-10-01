"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./legal-page.module.css";

export function LegalHero({ children }: { children: ReactNode }) {
  const hero = useRef<HTMLElement>(null);
  const spacer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = hero.current;
    const gap = spacer.current;
    if (!element || !gap) return;
    const root = element.closest<HTMLElement>("[data-policy-page]");
    const desktop = window.matchMedia("(min-width: 1280px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let expandedHeight = 0;
    let width = 0;
    let frame = 0;
    let anchorJump = false;

    const measureExpanded = () => {
      element.style.setProperty("--policy-collapse", "0");
      expandedHeight = element.getBoundingClientRect().height;
      width = element.getBoundingClientRect().width;
    };
    const applyProgress = (progress: number) => {
      element.style.setProperty("--policy-collapse", String(progress));
      element.dataset.minimized = String(progress >= .5);
      const height = element.getBoundingClientRect().height;
      // Keep the document still while the sticky header changes size.
      gap.style.height = desktop.matches ? `${Math.max(0, expandedHeight - height)}px` : "0px";
      root?.style.setProperty("--policy-hero-height", desktop.matches ? `${height}px` : "0px");
    };
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (window.scrollY >= 240) anchorJump = false;
        const progress = !desktop.matches ? 0 : anchorJump ? 1
          : reducedMotion.matches ? Number(window.scrollY > 120)
          : Math.min(1, Math.max(0, window.scrollY / 240));
        applyProgress(progress);
      });
    };
    const resize = () => {
      measureExpanded();
      update();
    };
    const compactForAnchor = () => {
      if (!desktop.matches) return;
      // Anchor destinations must use the final header height, even at page top.
      anchorJump = true;
      applyProgress(1);
    };
    const prepareAnchor = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      const href = link?.getAttribute("href");
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !href?.startsWith("#section-")) return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      event.preventDefault();
      compactForAnchor();
      if (window.location.hash !== href) window.history.pushState(null, "", href);
      if (event.detail === 0) target.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start", behavior: reducedMotion.matches ? "instant" : "smooth" });
    };
    measureExpanded();
    const observer = new ResizeObserver(() => {
      if (element.getBoundingClientRect().width !== width) resize();
    });
    observer.observe(element);
    update();
    const initialAnchorFrame = requestAnimationFrame(() => {
      if (!desktop.matches || !/^#section-(?:\d+|quick-guide)$/.test(window.location.hash)) return;
      const target = document.getElementById(window.location.hash.slice(1));
      if (!target) return;
      compactForAnchor();
      target.scrollIntoView({ block: "start", behavior: "instant" });
    });
    element.addEventListener("policy:compact", compactForAnchor);
    root?.addEventListener("click", prepareAnchor);
    window.addEventListener("scroll", update, { passive: true });
    desktop.addEventListener("change", resize);
    reducedMotion.addEventListener("change", update);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(initialAnchorFrame);
      element.removeEventListener("policy:compact", compactForAnchor);
      root?.removeEventListener("click", prepareAnchor);
      window.removeEventListener("scroll", update);
      desktop.removeEventListener("change", resize);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <>
      <section className={styles.hero} ref={hero} data-policy-hero>
        {children}
      </section>
      <div className={styles.heroSpacer} ref={spacer} aria-hidden="true" />
    </>
  );
}
