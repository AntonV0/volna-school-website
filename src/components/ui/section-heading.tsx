import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {children ? (
        <div className="text-lg leading-8 text-muted-foreground">{children}</div>
      ) : null}
    </div>
  );
}
