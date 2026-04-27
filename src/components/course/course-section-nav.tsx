import type { CourseContent } from "@/content/course-content";

type CourseSectionNavProps = {
  items: CourseContent["sectionNav"];
};

export function CourseSectionNav({ items }: CourseSectionNavProps) {
  return (
    <nav
      aria-label="Course sections"
      className="sticky top-[73px] z-20 border-y border-border-soft bg-white/95 px-5 py-3 shadow-sm backdrop-blur sm:px-8 lg:top-20 lg:px-12"
    >
      <div className="relative mx-auto max-w-6xl">
        <ul className="flex gap-1.5 overflow-x-auto pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2 sm:pr-10">
          {items.map((item) => (
            <li className="shrink-0" key={item.id}>
              <a
                className="inline-flex min-h-10 items-center rounded-full px-3 text-xs font-semibold text-brand-teal transition hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal sm:px-4 sm:text-sm"
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/95 to-transparent sm:w-10" />
      </div>
    </nav>
  );
}
