import { RegistrationPage } from "@/components/registration/registration-page";
import { registrationContent } from "@/content/registration-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "ru",
  "registration",
  registrationContent.ru.metadata,
);

type RussianRegistrationPageProps = {
  searchParams: Promise<{
    course?: string;
  }>;
};

export default async function RussianRegistrationPage({
  searchParams,
}: RussianRegistrationPageProps) {
  const params = await searchParams;

  return <RegistrationPage initialCourseInterest={params.course} locale="ru" />;
}
