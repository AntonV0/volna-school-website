import { HomePage } from "@/components/home/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("ru", "home", {
  title: "Онлайн-школа русского языка в Великобритании | Volna School",
  description:
    "Онлайн-уроки русского языка для детей, учеников GCSE и A Level и взрослых в Великобритании: группы, индивидуальные занятия и бесплатный первый урок.",
});

export default function RussianHomePage() {
  return <HomePage locale="ru" />;
}
