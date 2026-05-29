import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/classnames";

type BrandCardElement = "article" | "aside" | "div" | "li";
type BrandCardPadding = "none" | "sm" | "md" | "lg";
type BrandCardShadow = "none" | "sm" | "soft";
type BrandCardTone = "default" | "plain" | "wash" | "inverse";
type BrandCardAccent = "none" | "top" | "left";

type BrandCardProps = HTMLAttributes<HTMLElement> & {
  accent?: BrandCardAccent;
  accentClassName?: string;
  as?: BrandCardElement;
  children: ReactNode;
  hover?: boolean;
  padding?: BrandCardPadding;
  shadow?: BrandCardShadow;
  tone?: BrandCardTone;
};

const paddingClasses: Record<BrandCardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

const shadowClasses: Record<BrandCardShadow, string> = {
  none: "",
  sm: "shadow-[var(--card-shadow-sm)]",
  soft: "shadow-[var(--card-shadow-soft)]",
};

const toneClasses: Record<BrandCardTone, string> = {
  default: "border-border-soft bg-white text-foreground",
  plain: "border-border-soft text-foreground",
  wash: "border-accent-border bg-section-wash/70 text-foreground",
  inverse: "border-white/15 bg-white/[0.07] text-white",
};

const accentClasses: Record<BrandCardAccent, string> = {
  none: "",
  top: "border-t-4",
  left: "border-l-4",
};

export function BrandCard({
  accent = "none",
  accentClassName,
  as: Component = "article",
  children,
  className,
  hover = false,
  padding = "md",
  shadow = "sm",
  tone = "default",
  ...props
}: BrandCardProps) {
  return (
    <Component
      className={cn(
        "rounded-[var(--card-radius)] border",
        toneClasses[tone],
        paddingClasses[padding],
        shadowClasses[shadow],
        accentClasses[accent],
        accent !== "none" && (accentClassName ?? "border-t-accent"),
        hover &&
          "transition hover:-translate-y-0.5 hover:border-brand-teal/35 hover:shadow-[var(--card-shadow-soft)] motion-reduce:hover:translate-y-0",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
