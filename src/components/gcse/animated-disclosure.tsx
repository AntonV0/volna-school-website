"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type MouseEvent } from "react";

/** Native disclosure semantics, enhanced with reversible natural-height motion. */
export function AnimatedDisclosure({ mobileOnly = false, restorationKey, ...props }: ComponentPropsWithoutRef<"details"> & { mobileOnly?: boolean; restorationKey?: string }) {
  const details = useRef<HTMLDetailsElement>(null);
  const animation = useRef<Animation | null>(null);
  const expanded = useRef(false);
  const finish = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!mobileOnly) return;
    const media = window.matchMedia("(min-width: 768px)");
    const update = (initial = false) => {
      finish.current?.();
      const element = details.current;
      if (!element) return;
      const summary = element.querySelector("summary");
      if (!media.matches && element.contains(document.activeElement)) summary?.focus();
      // The GCSE history handler restores opted-in disclosures before scroll alignment.
      element.open = media.matches || (initial && Boolean(restorationKey) && element.open);
      if (summary) summary.tabIndex = media.matches ? -1 : 0;
    };
    update(true);
    const onChange = () => update();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [mobileOnly, restorationKey]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => { if (preference.matches) finish.current?.(); };
    preference.addEventListener("change", onChange);
    return () => {
      preference.removeEventListener("change", onChange);
      animation.current?.cancel();
    };
  }, []);

  function toggle(event: MouseEvent<HTMLDetailsElement>) {
    props.onClick?.(event);
    const element = event.currentTarget;
    const summary = (event.target as Element).closest("summary");
    if (event.defaultPrevented || !summary || summary.parentElement !== element) return;
    event.preventDefault();
    if (mobileOnly && window.matchMedia("(min-width: 768px)").matches) return;

    const opening = animation.current ? !expanded.current : !element.open;
    expanded.current = opening;
    const start = element.getBoundingClientRect().height;
    if (animation.current) {
      animation.current.onfinish = null;
      animation.current.cancel();
      animation.current = null;
    }

    // Measure the destination using the existing CSS, including padding/borders.
    element.open = opening;
    const end = element.getBoundingClientRect().height;
    element.open = true;
    summary.setAttribute("aria-expanded", String(opening));
    element.toggleAttribute("data-closing", !opening);
    for (const child of element.children) {
      if (child !== summary && child instanceof HTMLElement) child.inert = !opening;
    }

    const complete = () => {
      element.open = opening;
      summary.removeAttribute("aria-expanded");
      element.removeAttribute("data-closing");
      for (const child of element.children) {
        if (child instanceof HTMLElement) child.inert = false;
      }
      animation.current?.cancel();
      animation.current = null;
      finish.current = null;
    };
    finish.current = complete;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !element.animate) {
      complete();
      return;
    }
    animation.current = element.animate(
      [{ height: `${start}px`, overflow: "hidden" }, { height: `${end}px`, overflow: "hidden" }],
      { duration: 280, easing: "cubic-bezier(.22, 1, .36, 1)", fill: "both" },
    );
    animation.current.onfinish = complete;
  }

  // Preserve native opening/restoration before hydration; toggle reads `open`.
  return <details {...props} data-gcse-restore={restorationKey} ref={details} suppressHydrationWarning onClick={toggle} />;
}
