"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

function getViewportWidth() {
  return window.innerWidth;
}

function getViewportHeight() {
  return window.innerHeight;
}

function getServerWidth() {
  return null;
}

const breakpoints = [
  { min: 0, label: "Small phone", range: "< 360px" },
  { min: 360, label: "Phone", range: "360–639px" },
  { min: 640, label: "Large phone / small tablet", range: "640–767px" },
  { min: 768, label: "Tablet", range: "768–1023px" },
  { min: 1024, label: "Compact desktop", range: "1024–1199px" },
  { min: 1200, label: "Compact desktop", range: "1200–1279px" },
  { min: 1280, label: "Desktop", range: "1280–1535px" },
  { min: 1536, label: "Wide desktop", range: "1536px+" },
];

export function ViewportIndicator() {
  const width = useSyncExternalStore(subscribe, getViewportWidth, getServerWidth);
  const height = useSyncExternalStore(subscribe, getViewportHeight, getServerWidth);

  const breakpoint = breakpoints.findLast((item) => width !== null && width >= item.min);

  return (
    <aside
      aria-label="Development viewport information"
      data-dev-viewport

      className="relative border-b border-brand-teal/15 bg-brand-teal-soft px-5 py-2 text-xs leading-5 text-brand-teal-deep sm:px-8 lg:px-12 print:hidden"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-1">
        <span className="rounded bg-brand-teal px-2 py-0.5 text-[0.625rem] font-bold tracking-wider text-white">
          DEV
        </span>
        <span className="tabular-nums">
          <strong>{width === null ? "—" : `${width}px`}</strong> viewport · {height ?? "—"}px tall
        </span>
        <span>{breakpoint ? `${breakpoint.label} · ${breakpoint.range}` : "Measuring viewport…"}</span>
        {width !== null && (
          <span>{width >= 1280 ? "Full navigation" : "Compact navigation"}</span>
        )}

      </div>
    </aside>
  );
}
