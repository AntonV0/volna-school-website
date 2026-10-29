"use client";

import s from "./calendar-view.module.css";
import { setDisclosureOpen } from "@/components/ui/animated-disclosure";
import { focusAnchorHeading, highlightAnchorArrival } from "@/components/ui/anchor-arrival";

function reveal(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const heading = focusAnchorHeading(target);
  target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  highlightAnchorArrival(heading);
}

export function CalendarPreviewButton() {
  return <button type="button" onClick={() => {
    const preview = document.getElementById("full-year-preview");
    if (preview instanceof HTMLDetailsElement) setDisclosureOpen(preview, true);
    reveal("calendar-preview");
  }}>Preview calendar <span aria-hidden="true">↓</span></button>;
}

export function CalendarMonthJump({ months }: { months: { id: string; label: string }[] }) {
  return <div className={s.monthJump}><label htmlFor="calendar-month">Jump to month</label><select id="calendar-month" defaultValue="" onChange={event => { if (event.target.value) reveal(event.target.value); }}><option value="" disabled>Choose a month</option>{months.map(month => <option key={month.id} value={month.id}>{month.label}</option>)}</select></div>;
}
