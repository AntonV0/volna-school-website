import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";

const courseInterestByRouteKey: Record<CourseContent["routeKey"], string> = {
  adults: "adults",
  alevel: "alevel",
  children: "children",
  gcse: "gcse",
};

export function getTrialRegistrationPath(
  locale: Locale,
  courseKey?: CourseContent["routeKey"],
) {
  const path = getLocalizedPath(locale, "registration");

  if (!courseKey) {
    return path;
  }

  const params = new URLSearchParams({
    course: courseInterestByRouteKey[courseKey],
  });

  return `${path}?${params.toString()}`;
}
