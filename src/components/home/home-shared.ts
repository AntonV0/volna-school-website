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
  children: "border-l-route-children",
  gcse: "border-l-route-exam",
  alevel: "border-l-route-advanced",
  adults: "border-l-route-adult",
};

export const routeNumbers: Record<HomeCourseRouteKey, string> = {
  children: "01",
  gcse: "02",
  alevel: "03",
  adults: "04",
};
