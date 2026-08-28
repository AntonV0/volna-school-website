import { VOLNA_IMAGES } from "@/lib/volna-images";

export type HomeCourseRouteKey = "children" | "gcse" | "alevel" | "adults";

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
