import type { CourseContent } from "@/content/course-content";

export type CourseRouteKey = CourseContent["routeKey"];

export const courseThemeClasses: Record<
  CourseRouteKey,
  {
    bg: string;
    border: string;
    borderLeft: string;
    borderTop: string;
    button: string;
    connector: string;
    focus: string;
    ring: string;
    softBg: string;
    text: string;
  }
> = {
  children: {
    bg: "bg-route-children",
    border: "border-route-children/25",
    borderLeft: "border-l-route-children",
    borderTop: "border-t-route-children",
    button:
      "border border-route-children bg-route-children text-white shadow-sm hover:bg-route-children/90 focus-visible:outline-route-children",
    connector:
      "bg-gradient-to-r from-route-children/10 via-route-children/35 to-route-children/65",
    focus: "focus-visible:outline-route-children",
    ring: "ring-route-children/20",
    softBg: "bg-route-children-soft",
    text: "text-route-children",
  },
  gcse: {
    bg: "bg-route-exam",
    border: "border-route-exam/25",
    borderLeft: "border-l-route-exam",
    borderTop: "border-t-route-exam",
    button:
      "border border-route-exam bg-route-exam text-white shadow-sm hover:bg-route-exam/90 focus-visible:outline-route-exam",
    connector:
      "bg-gradient-to-r from-route-exam/10 via-route-exam/35 to-route-exam/65",
    focus: "focus-visible:outline-route-exam",
    ring: "ring-route-exam/20",
    softBg: "bg-route-exam-soft",
    text: "text-route-exam",
  },
  alevel: {
    bg: "bg-route-advanced",
    border: "border-route-advanced/25",
    borderLeft: "border-l-route-advanced",
    borderTop: "border-t-route-advanced",
    button:
      "border border-route-advanced bg-route-advanced text-white shadow-sm hover:bg-route-advanced/90 focus-visible:outline-route-advanced",
    connector:
      "bg-gradient-to-r from-route-advanced/10 via-route-advanced/35 to-route-advanced/65",
    focus: "focus-visible:outline-route-advanced",
    ring: "ring-route-advanced/20",
    softBg: "bg-route-advanced-soft",
    text: "text-route-advanced",
  },
  adults: {
    bg: "bg-route-adult",
    border: "border-route-adult/25",
    borderLeft: "border-l-route-adult",
    borderTop: "border-t-route-adult",
    button:
      "border border-route-adult bg-route-adult text-white shadow-sm hover:bg-route-adult/90 focus-visible:outline-route-adult",
    connector:
      "bg-gradient-to-r from-route-adult/10 via-route-adult/35 to-route-adult/65",
    focus: "focus-visible:outline-route-adult",
    ring: "ring-route-adult/20",
    softBg: "bg-route-adult-soft",
    text: "text-route-adult",
  },
};
