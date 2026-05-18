import { aboutContent } from "@/content/about-content";
import type { Locale } from "@/lib/i18n/config";

export function AboutSectionNav({ locale }: { locale: Locale }) {
  const anchors = aboutContent[locale].anchors;

  return (
      <nav
        aria-label="About sections"
        className="sticky top-[73px] z-20 border-y border-white/30 bg-brand-teal text-white lg:top-20"
      >
        <div className="mx-auto max-w-6xl overflow-x-auto px-5 [scrollbar-width:none] sm:px-8 lg:px-12 [&::-webkit-scrollbar]:hidden">
          <ul className="flex min-w-max divide-x divide-white/30 lg:min-w-0">
            {anchors.map((anchor) => (
              <li className="shrink-0 lg:flex-1" key={anchor.id}>
                <a
                  className="flex min-h-12 items-center justify-center px-5 text-xs font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white sm:text-sm lg:px-3"
                  href={`#${anchor.id}`}
                >
                  {anchor.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
  );
}
