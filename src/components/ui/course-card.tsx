import Link from "next/link";

import { BrandCard } from "@/components/ui/brand-card";

type CourseCardProps = {
  actionLabel: string;
  description: string;
  href: string;
  title: string;
};

export function CourseCard({
  actionLabel,
  description,
  href,
  title,
}: CourseCardProps) {
  return (
    <Link
      className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
      href={href}
    >
      <BrandCard accent="top" as="div" hover>
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
        <span className="mt-5 inline-flex text-sm font-semibold text-brand-teal group-hover:text-brand-teal-dark">
          {actionLabel}
        </span>
      </BrandCard>
    </Link>
  );
}
