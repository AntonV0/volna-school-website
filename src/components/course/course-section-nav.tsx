import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";

type CourseSectionNavProps = {
  items: CourseContent["sectionNav"];
  locale: Locale;
};

const sectionNavLabels = {
  en: "Course sections",
  ru: "Разделы курса",
} satisfies Record<Locale, string>;

export function CourseSectionNav({ items, locale }: CourseSectionNavProps) {
  return (
    <nav
      aria-label={sectionNavLabels[locale]}
      className="z-20 border-y border-white/30 bg-brand-teal text-white shadow-[0_10px_24px_color-mix(in_oklab,var(--brand-teal)_14%,transparent)] md:sticky md:top-[73px] lg:top-20"
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-brand-teal to-transparent lg:hidden"
        />
        <div className="overflow-x-auto px-5 [scrollbar-width:none] sm:px-8 lg:px-12 [&::-webkit-scrollbar]:hidden">
          <ul className="flex min-w-max snap-x snap-mandatory divide-x divide-white/30 lg:min-w-0">
            {items.map((item) => (
              <li className="shrink-0 snap-start lg:flex-1" key={item.id}>
                <a
                  className="flex min-h-11 items-center justify-center whitespace-nowrap px-4 text-xs font-semibold leading-5 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white sm:min-h-12 sm:px-5 sm:text-sm lg:px-3"
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
