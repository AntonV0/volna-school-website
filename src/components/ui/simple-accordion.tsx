import type { ReactNode } from "react";

type SimpleAccordionProps = {
  children: ReactNode;
  title: string;
};

export function SimpleAccordion({ children, title }: SimpleAccordionProps) {
  return (
    <details className="group border-b border-white/20 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
        <span>{title}</span>
        <span
          aria-hidden="true"
          className="grid size-6 place-items-center rounded-full border border-white/30 text-base leading-none transition group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pt-3 text-sm leading-6 text-white/80">{children}</div>
    </details>
  );
}
