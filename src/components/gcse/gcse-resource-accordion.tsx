"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import r from "./gcse-resources.module.css";

export function GcseResourceAccordion({ items }: {
  items: { year: number; title: string; subtitle: string; children: ReactNode }[];
}) {
  const [openYear, setOpenYear] = useState<number | null>(items[0]?.year ?? null);
  const interacted = useRef(false);

  useEffect(() => {
    if (!interacted.current || openYear === null) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Collapsing a long preceding year can move the selected heading above
    // the sticky navigation. Restore it only if it has left the reading area.
    const timer = window.setTimeout(() => {
      const trigger = document.getElementById(`series-trigger-${openYear}`);
      if (!trigger || document.activeElement !== trigger) return;
      const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
      const navBottom = document.querySelector('[aria-label="GCSE navigation"]')?.getBoundingClientRect().bottom ?? 0;
      const readingTop = Math.max(headerBottom, navBottom) + 16;
      const rect = trigger.getBoundingClientRect();
      if (rect.top < readingTop || rect.bottom > window.innerHeight) {
        window.scrollTo({ top: window.scrollY + rect.top - readingTop, behavior: reducedMotion ? "instant" : "smooth" });
      }
    }, reducedMotion ? 0 : 380);
    return () => window.clearTimeout(timer);
  }, [openYear]);

  return (
    <div className={r.library}>
      {items.map((item) => {
        const open = openYear === item.year;
        const triggerId = `series-trigger-${item.year}`;
        const panelId = `series-panel-${item.year}`;
        return (
          <section className={`${r.series} ${open ? r.seriesOpen : ""}`} key={item.year} id={`series-${item.year}`}>
            <h3 className={r.seriesHeading}>
              <button className={r.seriesTrigger} id={triggerId} type="button" aria-expanded={open} aria-controls={panelId} onClick={() => { interacted.current = true; setOpenYear(open ? null : item.year); }}>
                <span>{item.title}<small>{item.subtitle}</small></span>
                <span className={r.indicator} aria-hidden="true" />
              </button>
            </h3>
            <div className={r.seriesPanel} id={panelId} aria-labelledby={triggerId} role="region" aria-hidden={!open} inert={!open}>
              <div className={r.seriesClip}>{item.children}</div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
