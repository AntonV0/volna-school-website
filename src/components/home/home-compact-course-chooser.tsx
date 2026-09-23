import Link from "next/link";
import type { CSSProperties } from "react";

import { ApprovedImage } from "@/components/ui/approved-image";
import { homeContent } from "@/content/home-content";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

import styles from "./home-compact-course-chooser.module.css";

const courseDetails = {
  children: { eyebrow: "10 classes · Ages 3–16", color: "children" },
  gcse: { eyebrow: "Pearson Edexcel · 1RU0", color: "exam" },
  alevel: { eyebrow: "Pearson Edexcel · 9RU0", color: "advanced" },
  adults: { eyebrow: "1-to-1 · Practical Russian", color: "adult" },
};

export function HomeCompactCourseChooser() {
  const content = homeContent.en.courseChooser;
  const idPrefix = "compact-course";

  return (
    <nav className={styles.grid} aria-label={content.title} data-compact-course-chooser>
      {content.courses.map((course) => {
        const detail = courseDetails[course.routeKey];
        const photo = VOLNA_IMAGES.home.courseCards[course.routeKey];
        const cta = (
          <span className={styles.cta}>
            <span>View {course.routeKey === "children" ? "classes" : "courses"}</span>
            <span className={styles.arrow} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 10h10.2M11.2 6.4l3.6 3.6-3.6 3.6" />
              </svg>
            </span>
          </span>
        );
        return (
          <Link
            aria-labelledby={`${idPrefix}-title-${course.routeKey}`}
            aria-describedby={`${idPrefix}-summary-${course.routeKey}`}
            className={styles.card}
            href={getLocalizedPath("en", course.routeKey)}
            key={course.routeKey}
            style={{
              "--course-color": `var(--route-${detail.color})`,
              "--course-soft": `var(--route-${detail.color}-soft)`,
            } as CSSProperties}
          >
            <span className={styles.body}>
              <span className={styles.header}>
                <span className={styles.photo} aria-hidden="true">
                  <ApprovedImage image={photo} sizes="175px" />
                </span>
                <span className={styles.heading}>
                  <span className={styles.eyebrow}>{detail.eyebrow}</span>
                  <span className={styles.title} id={`${idPrefix}-title-${course.routeKey}`}>{course.title}</span>
                  <span className={styles.headerCta}>{cta}</span>
                </span>
              </span>
              <span className={styles.summary} id={`${idPrefix}-summary-${course.routeKey}`}>{course.summary}</span>
            </span>
            <span className={styles.footerCta}>{cta}</span>
          </Link>
        );
      })}
    </nav>
  );
}
