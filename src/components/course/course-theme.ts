import type { CourseContent } from "@/content/course-content";

export type CourseRouteKey = CourseContent["routeKey"];

export const courseThemeClasses: Record<
  CourseRouteKey,
  {
    bg: string;
    border: string;
    borderLeft: string;
    borderTop: string;
    focus: string;
    ring: string;
    softBg: string;
    text: string;
  }
> = {
  children: {
    bg: "bg-brand-blue",
    border: "border-brand-blue/25",
    borderLeft: "border-l-brand-blue",
    borderTop: "border-t-brand-blue",
    focus: "focus-visible:outline-brand-blue",
    ring: "ring-brand-blue/20",
    softBg: "bg-brand-blue-soft",
    text: "text-brand-blue",
  },
  gcse: {
    bg: "bg-route-exam",
    border: "border-route-exam/25",
    borderLeft: "border-l-route-exam",
    borderTop: "border-t-route-exam",
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
    focus: "focus-visible:outline-route-advanced",
    ring: "ring-route-advanced/20",
    softBg: "bg-route-advanced-soft",
    text: "text-route-advanced",
  },
  adults: {
    bg: "bg-accent",
    border: "border-accent-border",
    borderLeft: "border-l-accent",
    borderTop: "border-t-accent",
    focus: "focus-visible:outline-accent",
    ring: "ring-accent-border",
    softBg: "bg-accent-soft",
    text: "text-accent-strong",
  },
};
