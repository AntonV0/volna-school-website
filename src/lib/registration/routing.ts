import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { safeChildrenFocus } from "@/lib/registration/children-focus";

const courseInterestByRouteKey: Record<CourseContent["routeKey"], string> = {
  adults: "adults",
  alevel: "alevel",
  children: "children",
  gcse: "gcse",
};

export function getTrialRegistrationPath(
  locale: Locale,
  courseKey?: CourseContent["routeKey"],
  classPreference?: "private",
  childrenFocus?: string,
) {
  const path = getLocalizedPath(locale, "registration");

  if (!courseKey) {
    return path;
  }

  const params = new URLSearchParams({
    course: courseInterestByRouteKey[courseKey],
  });

  if (classPreference) params.set("format", classPreference);
  if (
    locale === "en" &&
    courseKey === "children" &&
    safeChildrenFocus(childrenFocus)
  )
    params.set("focus", safeChildrenFocus(childrenFocus));
  return `${path}?${params.toString()}`;
}
