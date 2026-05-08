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
        "scroll-mt-32 px-5 py-16 sm:px-8 lg:scroll-mt-36 lg:px-12",
        className,
      )}
      id={id}
    >
      <div className="mx-auto w-full max-w-6xl min-w-0">{children}</div>
    </section>
  );
}
