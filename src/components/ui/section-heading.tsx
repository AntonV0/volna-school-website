import type { ReactNode } from "react";

import { cn } from "@/lib/classnames";

type SectionHeadingProps = {
  eyebrow?: string;
  level?: 1 | 2;
  tone?: "default" | "inverse";
  title: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  level = 1,
  tone = "default",
  title,
  children,
}: SectionHeadingProps) {
  const HeadingTag = level === 1 ? "h1" : "h2";
  const isInverse = tone === "inverse";

  return (
    <div className="min-w-0 max-w-3xl space-y-4">
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.16em]",
            isInverse ? "text-white/80" : "text-brand-teal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={cn(
          "max-w-full whitespace-normal break-words text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl",
          isInverse ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </HeadingTag>
      {children ? (
        <div
          className={cn(
            "[overflow-wrap:anywhere] text-lg leading-8",
            isInverse ? "text-white/80" : "text-muted-foreground",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
