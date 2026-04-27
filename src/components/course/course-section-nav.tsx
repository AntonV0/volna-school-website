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
      <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto">
        {items.map((item) => (
          <li className="shrink-0" key={item.id}>
            <a
              className="inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold text-brand-teal transition hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
