import type { Locale } from "@/lib/i18n/config";
import { VOLNA_IMAGES } from "@/lib/volna-images";

export type HomeCourseRouteKey = "children" | "gcse" | "alevel" | "adults";

export const courseSignalLabels: Record<
  Locale,
  Record<HomeCourseRouteKey, [string, string, string]>
> = {
  en: {
    children: ["Ages 3-16", "Small groups", "Homework"],
    gcse: ["Edexcel", "Mocks", "Exam plan"],
    alevel: ["Essays", "Speaking", "IRP"],
    adults: ["Flexible", "1-to-1", "Conversation"],
  },
  ru: {
    children: ["3-16 лет", "Группы", "Домашка"],
    gcse: ["Edexcel", "Mocks", "Экзамен"],
    alevel: ["Эссе", "Устная часть", "IRP"],
    adults: ["Гибко", "1-на-1", "Разговор"],
  },
};

export const staffImages = [
  VOLNA_IMAGES.staff.elena,
  VOLNA_IMAGES.staff.marina,
  VOLNA_IMAGES.staff.irina,
  VOLNA_IMAGES.staff.anton,
];

export const staffImageClasses = [
  "object-[58%_34%]",
  "object-[50%_24%]",
  "object-[50%_30%]",
  "object-[50%_34%]",
] as const;

export const courseAccentClasses: Record<HomeCourseRouteKey, string> = {
  children: "border-l-brand-blue",
  gcse: "border-l-route-exam",
  alevel: "border-l-route-advanced",
  adults: "border-l-accent",
};

export const routeNumbers: Record<HomeCourseRouteKey, string> = {
  children: "01",
  gcse: "02",
  alevel: "03",
  adults: "04",
};

export const englishFeedbackThemes = [
  {
    title: "Confidence first",
    body: "Learners are helped into speaking and writing without turning the first step into a high-pressure exam.",
  },
  {
    title: "Clear next step",
    body: "Families can see whether the next step is a children's group, exam preparation, or tailored private lessons.",
  },
  {
    title: "Teacher-led care",
    body: "The emphasis is on knowing the learner, adjusting the format, and keeping progress visible.",
  },
];
