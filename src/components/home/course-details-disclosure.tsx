"use client";

import { useId, useState, type ReactNode } from "react";

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
          onClick={() => setExpanded(!expanded)}
          type="button"
        >
          {label}
          <span aria-hidden="true" className="text-xl">{expanded ? "−" : "+"}</span>
        </button>
      </div>
      <div data-course-details="" className={expanded ? "block" : "hidden xl:block"} id={id}>
        {children}
      </div>
    </div>
  );
}
