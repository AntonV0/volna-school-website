import Link from "next/link";

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
      className="group block rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-teal/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
      href={href}
    >
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      <span className="mt-5 inline-flex text-sm font-semibold text-brand-teal group-hover:text-brand-teal-dark">
        {actionLabel}
      </span>
    </Link>
  );
}
