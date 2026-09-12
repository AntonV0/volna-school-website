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
    panelBg: string;
    ring: string;
    softBg: string;
    testimonialBg: string;
    text: string;
    washBg: string;
  }
> = {
  children: {
    bg: "bg-route-children",
    border: "border-route-children/25",
    borderLeft: "border-l-route-children",
    borderTop: "border-t-route-children",
    button:
      "border border-route-children bg-route-children text-white shadow-[0_6px_16px_rgba(18,49,66,0.10)] transition-[transform,background-color,border-color,box-shadow,color] duration-[360ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-0.5 hover:bg-route-children-hover hover:shadow-[0_11px_24px_rgba(18,49,66,0.18)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-route-children motion-reduce:transform-none motion-reduce:transition-none",
    connector:
      "bg-gradient-to-r from-route-children/10 via-route-children/35 to-route-children/65",
    focus: "focus-visible:outline-route-children",
    panelBg:
      "[background-color:color-mix(in_srgb,var(--route-children-soft)_42%,white)]",
    ring: "ring-route-children/20",
    softBg: "bg-route-children-soft",
    testimonialBg:
      "md:[background-color:color-mix(in_srgb,var(--route-children-soft)_35%,white)]",
    text: "text-route-children",
    washBg:
      "[background-color:color-mix(in_srgb,var(--route-children-soft)_26%,white)]",
  },
  gcse: {
    bg: "bg-route-exam",
    border: "border-route-exam/25",
    borderLeft: "border-l-route-exam",
    borderTop: "border-t-route-exam",
    button:
      "border border-route-exam bg-route-exam text-white shadow-[0_6px_16px_rgba(18,49,66,0.10)] transition-[transform,background-color,border-color,box-shadow,color] duration-[360ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-0.5 hover:bg-route-exam-hover hover:shadow-[0_11px_24px_rgba(18,49,66,0.18)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-route-exam motion-reduce:transform-none motion-reduce:transition-none",
    connector:
      "bg-gradient-to-r from-route-exam/10 via-route-exam/35 to-route-exam/65",
    focus: "focus-visible:outline-route-exam",
    panelBg:
      "[background-color:color-mix(in_srgb,var(--route-exam-soft)_42%,white)]",
    ring: "ring-route-exam/20",
    softBg: "bg-route-exam-soft",
    testimonialBg:
      "md:[background-color:color-mix(in_srgb,var(--route-exam-soft)_35%,white)]",
    text: "text-route-exam",
    washBg:
      "[background-color:color-mix(in_srgb,var(--route-exam-soft)_26%,white)]",
  },
  alevel: {
    bg: "bg-route-advanced",
    border: "border-route-advanced/25",
    borderLeft: "border-l-route-advanced",
    borderTop: "border-t-route-advanced",
    button:
      "border border-route-advanced bg-route-advanced text-white shadow-[0_6px_16px_rgba(18,49,66,0.10)] transition-[transform,background-color,border-color,box-shadow,color] duration-[360ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-0.5 hover:bg-route-advanced-hover hover:shadow-[0_11px_24px_rgba(18,49,66,0.18)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-route-advanced motion-reduce:transform-none motion-reduce:transition-none",
    connector:
      "bg-gradient-to-r from-route-advanced/10 via-route-advanced/35 to-route-advanced/65",
    focus: "focus-visible:outline-route-advanced",
    panelBg:
      "[background-color:color-mix(in_srgb,var(--route-advanced-soft)_42%,white)]",
    ring: "ring-route-advanced/20",
    softBg: "bg-route-advanced-soft",
    testimonialBg:
      "md:[background-color:color-mix(in_srgb,var(--route-advanced-soft)_35%,white)]",
    text: "text-route-advanced",
    washBg:
      "[background-color:color-mix(in_srgb,var(--route-advanced-soft)_26%,white)]",
  },
  adults: {
    bg: "bg-route-adult",
    border: "border-route-adult/25",
    borderLeft: "border-l-route-adult",
    borderTop: "border-t-route-adult",
    button:
      "border border-route-adult bg-route-adult text-white shadow-[0_6px_16px_rgba(18,49,66,0.10)] transition-[transform,background-color,border-color,box-shadow,color] duration-[360ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-0.5 hover:bg-route-adult-hover hover:shadow-[0_11px_24px_rgba(18,49,66,0.18)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-route-adult motion-reduce:transform-none motion-reduce:transition-none",
    connector:
      "bg-gradient-to-r from-route-adult/10 via-route-adult/35 to-route-adult/65",
    focus: "focus-visible:outline-route-adult",
    panelBg:
      "[background-color:color-mix(in_srgb,var(--route-adult-soft)_42%,white)]",
    ring: "ring-route-adult/20",
    softBg: "bg-route-adult-soft",
    testimonialBg:
      "md:[background-color:color-mix(in_srgb,var(--route-adult-soft)_35%,white)]",
    text: "text-route-adult",
    washBg:
      "[background-color:color-mix(in_srgb,var(--route-adult-soft)_26%,white)]",
  },
};
