import type { ReactNode } from "react";

type SimpleAccordionProps = {
  children: ReactNode;
  title: string;
};

export function SimpleAccordion({ children, title }: SimpleAccordionProps) {
  return (
    <details className="group border-b border-white/20 py-4 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-sm font-semibold leading-6 text-white [overflow-wrap:anywhere] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <span>{title}</span>
        <span
          aria-hidden="true"
          className="grid size-6 shrink-0 place-items-center rounded-full border border-accent-on-dark/45 bg-accent-on-dark/10 text-base leading-none text-accent-on-dark transition group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pt-3 text-sm leading-6 text-white/80">{children}</div>
    </details>
  );
}
