import type { ReactNode } from "react";

type HomeSectionMarkerProps = {
  children: ReactNode;
  label: string;
  number: number;
};

export function HomeSectionMarker({
  children,
  label,
  number,
}: HomeSectionMarkerProps) {
  if (process.env.NODE_ENV === "production") {
    return children;
  }

  const sectionNumber = String(number).padStart(2, "0");

  return (
    <div
      className="relative"
      data-home-section={sectionNumber}
      data-home-section-label={label}
    >
      {children}
      <div
        aria-hidden="true"
        data-home-section-marker
        className="pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center overflow-hidden rounded-full border border-brand-teal/20 bg-white/95 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-brand-teal-deep shadow-[0_8px_24px_rgba(18,49,66,0.14)] backdrop-blur sm:right-5 sm:top-5"
      >
        <span className="bg-brand-teal px-2.5 py-1.5 text-white">
          {sectionNumber}
        </span>
        <span className="px-2.5 py-1.5">{label}</span>
      </div>
    </div>
  );
}
