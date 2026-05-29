import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/classnames";

type ButtonLinkVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "inverse"
  | "inverseTeal"
  | "soft";

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
  primary:
    "border border-[var(--button-primary-border)] bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] shadow-[var(--button-primary-shadow)] hover:bg-[var(--button-primary-hover)] focus-visible:[outline-color:var(--button-primary-focus)]",
  secondary:
    "border border-brand-teal/25 bg-white text-brand-teal shadow-sm hover:border-brand-teal/50 hover:bg-brand-teal-soft",
  ghost: "text-brand-teal hover:bg-brand-teal-soft hover:text-brand-teal-dark",
  inverse:
    "bg-white text-brand-red shadow-[var(--button-inverse-shadow)] hover:bg-white/92 focus-visible:outline-white",
  inverseTeal:
    "bg-white text-brand-teal-deep shadow-[var(--button-inverse-shadow)] hover:bg-white/92 focus-visible:outline-white",
  soft:
    "border border-brand-teal/25 bg-brand-teal-soft text-brand-teal shadow-sm hover:border-brand-teal/50 hover:bg-brand-teal/10",
};

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
      {children}
    </Link>
  );
}
