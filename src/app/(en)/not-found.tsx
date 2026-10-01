import { CourseCategoryIcon } from "@/components/ui/course-category-icon";
import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import s from "@/components/ui/recovery.module.css";

export const metadata: Metadata = {
  title: "Page not found | Volna School",
  description:
    "Find your way back to Volna School’s Russian courses and school calendars.",
  robots: { index: false, follow: true },
};

export default function EnglishNotFound() {
  return (
    <section className={s.page} aria-labelledby="not-found-title">
      <div className={s.hero}>
        <p className={s.eyebrow}>404 · Page not found</p>
        <h1 id="not-found-title">We couldn’t find that page.</h1>
        <p className={s.body}>
          The link may have changed, or the address may be incorrect. You can
          return home or choose a destination below.
        </p>
        <div className={s.actions}>
          <ButtonLink href="/">Return home</ButtonLink>
        </div>
      </div>
      <nav className={s.links} aria-labelledby="recovery-links-title">
        <h2 id="recovery-links-title">Find what you’re looking for</h2>
        <div className={s.grid}>
          {[
            ["Classes for children", "/classes-for-children", "children"],
            ["GCSE courses", "/gcse-courses", "exam"],
            ["A Level courses", "/a-level-courses", "advanced"],
            ["Courses for adults", "/courses-for-adults", "adult"],
            ["Term dates & calendars", "/term-dates", "school"],
          ].map(([label, href, theme]) => (
            <Link key={href} href={href} data-theme={theme}>
              <span>{label}</span>
              <span className={s.icon} aria-hidden="true">
                <CourseCategoryIcon theme={theme as "children" | "exam" | "advanced" | "adult" | "school"} idPrefix={`recovery-${theme}`} />
              </span>
            </Link>
          ))}
        </div>
      </nav>
      <p className={s.help}>
        Still can’t find what you need?{" "}
        <a href="mailto:info@volnaschool.com">Email the school</a>.
      </p>
    </section>
  );
}
