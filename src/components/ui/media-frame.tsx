import type { CSSProperties, ReactNode } from "react";

import { ApprovedImage } from "@/components/ui/approved-image";
import type { ApprovedPublicImage } from "@/lib/assets";
import { cn } from "@/lib/classnames";

type MediaFrameProps = {
  children?: ReactNode;
  className?: string;
  image?: ApprovedPublicImage;
  imageClassName?: string;
  imageStyle?: CSSProperties;
  contentClassName?: string;
  label?: string;
  priority?: boolean;
  showImageOverlay?: boolean;
  showLabel?: boolean;
  sizes?: string;
  variant?: "photo" | "online" | "community";
};

const variantClasses = {
  photo:
    "bg-[linear-gradient(135deg,#dff3f6,#ffffff_48%,var(--accent-soft))]",
  online:
    "bg-[linear-gradient(135deg,var(--brand-blue-soft),#ffffff_52%,color-mix(in_oklab,var(--brand-teal)_20%,transparent))]",
  community:
    "bg-[linear-gradient(135deg,var(--brand-teal-soft),#ffffff_45%,color-mix(in_oklab,var(--brand-red)_16%,transparent))]",
};

export function MediaFrame({
  children,
  className,
  contentClassName,
  image,
  imageClassName,
  imageStyle,
  label = "Online Russian learning",
  priority = false,
  showImageOverlay = true,
  showLabel = true,
  sizes,
  variant = "photo",
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border-soft bg-white shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative min-h-56",
          image ? "bg-white" : variantClasses[variant],
          contentClassName,
        )}
      >
        {image ? (
          <>
            <ApprovedImage
              className={imageClassName}
              image={image}
              priority={priority}
              sizes={sizes}
              style={imageStyle}
            />
            {showImageOverlay ? (
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep/45 via-transparent to-transparent" />
            ) : null}
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--brand-teal)_20%,transparent),transparent_28%)]" />
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
                  <span className="block h-3 rounded-full bg-accent/30" />
                  <span className="block h-3 rounded-full bg-brand-teal/20" />
                </div>
              </div>
            </div>
          </>
        )}
        {showLabel ? (
          <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/90 px-4 py-3 text-sm font-semibold text-brand-teal shadow-sm backdrop-blur [overflow-wrap:anywhere]">
            {label}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
