import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/classnames";

type ButtonLinkVariant =
  | "primary"
  | "teal"
  | "secondary"
  | "ghost"
  | "inverse"
  | "inverseTeal"
  | "soft"
  | "unstyled";

type ButtonLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "href"
> & {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: ButtonLinkVariant;
};

export const buttonBaseClassName =
  "inline-flex min-h-11 max-w-full items-center justify-center whitespace-normal rounded-[var(--button-radius)] px-5 py-2.5 text-center text-sm font-semibold leading-snug transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

export const buttonVariants: Record<ButtonLinkVariant, string> = {
  primary: "button-primary",
  teal:
    "border border-brand-teal bg-brand-teal text-white shadow-sm hover:border-brand-teal-dark hover:bg-brand-teal-dark focus-visible:outline-brand-teal",
  secondary:
    "group gap-2.5 border border-brand-blue bg-brand-blue text-white shadow-[0_7px_18px_rgba(13,111,153,0.18)] transition-[transform,background-color,border-color,box-shadow,color] duration-[360ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-0.5 hover:border-brand-teal-deep hover:bg-brand-teal-deep hover:text-white hover:shadow-[0_12px_28px_rgba(7,63,82,0.24)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none",
  ghost: "text-brand-teal hover:bg-brand-teal-soft hover:text-brand-teal-dark",
  inverse:
    "bg-white text-brand-red shadow-[var(--button-inverse-shadow)] hover:bg-white/92 focus-visible:outline-white",
  inverseTeal:
    "bg-white text-brand-teal-deep shadow-[var(--button-inverse-shadow)] hover:bg-white/92 focus-visible:outline-white",
  soft:
    "border border-brand-teal/25 bg-brand-teal-soft text-brand-teal shadow-sm hover:border-brand-teal/50 hover:bg-brand-teal/10",
  unstyled: "",
};

function SecondaryArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="shrink-0 transition-transform duration-[360ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
    >
      <path
        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        buttonBaseClassName,
        buttonVariants[variant],
        className,
      )}
      href={href}
      {...props}
    >
      {variant === "primary" ? (
        <span className="relative z-[1] inline-flex items-center justify-center gap-2">
          {children}
        </span>
      ) : (
        children
      )}
      {variant === "secondary" ? <SecondaryArrowIcon /> : null}
    </Link>
  );
}
