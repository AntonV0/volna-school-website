import type { ReactNode } from "react";

import { cn } from "@/lib/classnames";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        "px-5 py-16 sm:px-8 lg:px-12",
        className,
      )}
    >
      <div
        className="mx-auto w-full max-w-6xl min-w-0"
        id={id}
        style={id ? { scrollMarginTop: "8.75rem" } : undefined}
      >
        {children}
      </div>
    </section>
  );
}
