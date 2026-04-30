import type { ReactNode } from "react";

import { cn } from "@/lib/classnames";

type MediaFrameProps = {
  children?: ReactNode;
  className?: string;
  label?: string;
  variant?: "photo" | "online" | "community";
};

const variantClasses = {
  photo:
    "bg-[linear-gradient(135deg,#dff3f6,#ffffff_48%,rgba(242,184,75,0.22))]",
  online:
    "bg-[linear-gradient(135deg,#e8f4fb,#ffffff_52%,rgba(16,140,163,0.2))]",
  community:
    "bg-[linear-gradient(135deg,#dff3f6,#ffffff_45%,rgba(239,50,50,0.16))]",
};

export function MediaFrame({
  children,
  className,
  label = "Online Russian learning",
  variant = "photo",
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border-soft bg-white shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <div className={cn("min-h-56", variantClasses[variant])}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(16,140,163,0.2),transparent_28%)]" />
        <div className="absolute inset-x-5 top-5 grid grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="rounded-md border border-white/70 bg-white/80 p-3 shadow-sm backdrop-blur">
            <div className="mb-3 h-2 w-20 rounded-full bg-brand-teal/25" />
            <div className="grid grid-cols-3 gap-2">
              <span className="h-12 rounded bg-brand-teal/20" />
              <span className="h-12 rounded bg-brand-blue/15" />
              <span className="h-12 rounded bg-brand-red/15" />
            </div>
            <div className="mt-3 space-y-2">
              <span className="block h-2 rounded-full bg-brand-teal/20" />
              <span className="block h-2 w-3/4 rounded-full bg-brand-teal/15" />
            </div>
          </div>
          <div className="rounded-md border border-white/70 bg-white/75 p-3 shadow-sm backdrop-blur">
            <div className="mb-3 h-2 w-16 rounded-full bg-brand-red/25" />
            <div className="space-y-2">
              <span className="block h-3 rounded-full bg-brand-blue/20" />
              <span className="block h-3 rounded-full bg-brand-gold/30" />
              <span className="block h-3 rounded-full bg-brand-teal/20" />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/88 px-4 py-3 text-sm font-semibold text-brand-teal shadow-sm backdrop-blur">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}
