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
    <section className={cn("px-5 py-14 sm:px-8 lg:px-12", className)} id={id}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
