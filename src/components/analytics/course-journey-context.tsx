"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

let currentPath: string | undefined;
let previousCourse: string | undefined;
const coursePaths = new Set([
  "/classes-for-children", "/classes-for-children/bilingual-classes",
  "/classes-for-children/russian-for-beginners", "/classes-for-children/early-years",
  "/classes-for-children/private-tuition",
  ...["gcse-courses", "a-level-courses"].flatMap(base => ["", "/curriculum", "/exam-guide", "/exam-preparation", "/faq"].map(detail => `/${base}${detail}`)),
  "/courses-for-adults", "/courses-for-adults/russian-foundations",
  "/courses-for-adults/intermediate-russian", "/courses-for-adults/personalised-lessons",
]);
export function safeCoursePath(path: string) {
  return coursePaths.has(path) ? path : undefined;
}
export function registrationOrigin() {
  return currentPath === "/registration"
    ? previousCourse
    : safeCoursePath(currentPath || "");
}
export function CourseJourneyContext() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === currentPath) return;
    previousCourse = safeCoursePath(currentPath || "");
    currentPath = pathname;
  }, [pathname]);
  return null;
}
