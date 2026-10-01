"use client";

import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { adultTrialPath } from "@/lib/registration/adult-focus";
import { getTrialRegistrationPath } from "@/lib/registration/routing";

export function HeaderTrialLink({
  locale,
  ...props
}: Omit<ComponentProps<typeof ButtonLink>, "href"> & { locale: Locale }) {
  const pathname = usePathname();
  const childrenPath = getLocalizedPath(locale, "children");
  const isChildren =
    pathname === childrenPath || pathname.startsWith(`${childrenPath}/`);
  const isEnglishGcse =
    locale === "en" &&
    (pathname === "/gcse-courses" || pathname.startsWith("/gcse-courses/"));
  const isEnglishALevel =
    locale === "en" &&
    (pathname === "/a-level-courses" ||
      pathname.startsWith("/a-level-courses/"));
  const isEnglishAdult =
    locale === "en" &&
    (pathname === "/courses-for-adults" ||
      pathname.startsWith("/courses-for-adults/"));
  return (
    <ButtonLink
      {...props}
      href={
        isEnglishAdult
          ? adultTrialPath(pathname.split("/").at(-1))
          : isChildren
            ? getTrialRegistrationPath(
                locale,
                "children",
                locale === "en" && pathname.endsWith("/private-tuition")
                  ? "private"
                  : undefined,
                pathname.split("/").at(-1),
              )
            : `${getLocalizedPath(locale, "registration")}${isEnglishGcse ? "?course=gcse" : isEnglishALevel ? "?course=alevel" : ""}`
      }
    >
      {locale === "en" &&
      (isChildren || isEnglishGcse || isEnglishALevel || isEnglishAdult) ? (
        <span>Free trial lesson</span>
      ) : (
        props.children
      )}
    </ButtonLink>
  );
}
