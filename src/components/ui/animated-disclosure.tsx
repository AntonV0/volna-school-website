"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, type ComponentPropsWithoutRef, type MouseEvent } from "react";

/** Use the same reversible interaction for clicks and deliberate programmatic reveals. */
export function setDisclosureOpen(element: HTMLDetailsElement, open: boolean, options?: { immediate: boolean }) {
  const expanded = element.open && !element.hasAttribute("data-closing");
  if (expanded !== open) element.querySelector<HTMLElement>(":scope > summary")?.click();
  if (options?.immediate) element.dispatchEvent(new Event("volna:disclosure-finish"));
}

export const AnimatedDisclosure = forwardRef<HTMLDetailsElement, ComponentPropsWithoutRef<"details">>(function AnimatedDisclosure(props, ref) {
  const element = useRef<HTMLDetailsElement>(null);
  useImperativeHandle(ref, () => element.current!, []);
  const animation = useRef<Animation | null>(null);
  const expanded = useRef(false);
  const finish = useRef<(() => void) | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => { if (preference.matches) finish.current?.(); };
    const settle = () => finish.current?.();
    const details = element.current;
    details?.addEventListener("volna:disclosure-finish", settle);
    preference.addEventListener("change", onChange);
    return () => {
      preference.removeEventListener("change", onChange);
      details?.removeEventListener("volna:disclosure-finish", settle);
      animation.current?.cancel();
    };
  }, []);

  function toggle(event: MouseEvent<HTMLDetailsElement>) {
    props.onClick?.(event);
    const element = event.currentTarget;
    const summary = (event.target as Element).closest("summary");
    if (event.defaultPrevented || !summary || summary.parentElement !== element) return;
    event.preventDefault();
    const opening = animation.current ? !expanded.current : !element.open;
    expanded.current = opening;
    const start = element.getBoundingClientRect().height;
    if (animation.current) {
      animation.current.onfinish = null;
      animation.current.cancel();
      animation.current = null;
    }
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
  // Native opening (or browser restoration) can precede hydration. `open` is
  // deliberately DOM-owned; toggle reads its current value instead of resetting it.
  return <details {...props} suppressHydrationWarning ref={element} onClick={toggle} />;
});
