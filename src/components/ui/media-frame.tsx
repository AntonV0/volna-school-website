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
  label = "Reviewed image pending",
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
        <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/88 px-4 py-3 text-sm font-semibold text-brand-teal shadow-sm backdrop-blur">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}
