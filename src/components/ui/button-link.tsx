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
    "bg-brand-red text-white shadow-[0_12px_24px_rgba(239,50,50,0.22)] hover:bg-brand-red-dark focus-visible:outline-brand-red",
  secondary:
    "border border-brand-teal/25 bg-white text-brand-teal shadow-sm hover:border-brand-teal/50 hover:bg-brand-teal-soft",
  ghost: "text-brand-teal hover:bg-brand-teal-soft hover:text-brand-teal-dark",
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
        "inline-flex min-h-11 max-w-full items-center justify-center whitespace-normal rounded-md px-5 py-2.5 text-center text-sm font-semibold leading-snug transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
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
