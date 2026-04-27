import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/classnames";

type ButtonLinkVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "href"
> & {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: ButtonLinkVariant;
};

const variants: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-brand-red text-white shadow-sm hover:bg-brand-red-dark focus-visible:outline-brand-red",
  secondary:
    "border border-brand-teal/25 bg-white text-brand-teal hover:border-brand-teal/50 hover:bg-brand-teal-soft",
  ghost: "text-brand-teal hover:bg-brand-teal-soft",
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
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
