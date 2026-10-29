"use client";

import { useId, useState, useSyncExternalStore, type ReactNode } from "react";
import s from "./course-details-disclosure.module.css";

const query = "(max-width: 639px)";
function subscribe(listener: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
}
const getCompact = () => window.matchMedia(query).matches;
const getServerCompact = () => false;

export function CourseDetailsDisclosure({
  children,
  introduction,
  locale,
  title,
}: {
  children: ReactNode;
  introduction: ReactNode;
  locale: "en" | "ru";
  title: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const compact = useSyncExternalStore(subscribe, getCompact, getServerCompact);
  const id = useId();
  const label = locale === "en"
    ? expanded ? "Hide course details" : "See course details"
    : expanded ? "Скрыть подробности" : "Подробнее о курсе";

  return (
    <div data-course-disclosure="" className="p-5 sm:p-6 lg:px-7 lg:py-6 xl:px-8">
      <div data-course-introduction="">
        {introduction}
        <button
          aria-controls={id}
          aria-expanded={expanded}
          aria-label={`${label}: ${title}`}
          className="mt-3 flex min-h-11 w-full items-center justify-between gap-3 rounded-md border border-brand-teal/20 px-3 py-2 text-left text-sm font-semibold text-brand-blue hover:bg-brand-blue-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue xl:hidden"
          onClick={() => setExpanded(previous => !previous)}
          type="button"
        >
          {label}
          {locale === "en" ? <span aria-hidden="true" className={s.indicator} /> : <span aria-hidden="true" className="text-xl">{expanded ? "−" : "+"}</span>}
        </button>
      </div>
      {locale === "en" ? (
        <div className={s.motion} data-expanded={expanded} id={id} inert={compact && !expanded} aria-hidden={compact ? !expanded : undefined}>
          <div className={s.clip}>
            <div data-course-details="" className="block">{children}</div>
          </div>
        </div>
      ) : <div data-course-details="" className={expanded ? "block" : "hidden xl:block"} id={id}>{children}</div>}
    </div>
  );
}
