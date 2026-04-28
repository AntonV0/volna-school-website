import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { CourseDetailPage } from "@/components/course/course-detail-page";
import { getCourseDetailContent } from "@/content/course-detail-content";
import type { Locale } from "@/lib/i18n/config";
import {
  courseDetailKeys,
  courseDetailParents,
  getCourseDetailKeyBySlug,
  getCourseDetailSlug,
  type CourseDetailKey,
} from "@/lib/i18n/routing";
import { createCourseDetailMetadata } from "@/lib/metadata";

type CourseParentKey = (typeof courseDetailParents)[CourseDetailKey];

type CourseDetailRouteProps = {
  params: Promise<{
    detail: string;
  }>;
};

async function resolveDetailKey(
  props: CourseDetailRouteProps,
  parentKey: CourseParentKey,
) {
  const { detail } = await props.params;
  const detailKey = getCourseDetailKeyBySlug(parentKey, detail);

  if (!detailKey) {
    notFound();
  }

  return detailKey;
}

export function createCourseDetailStaticParams(parentKey: CourseParentKey) {
  return courseDetailKeys
    .filter((detailKey) => courseDetailParents[detailKey] === parentKey)
    .map((detailKey) => ({
      detail: getCourseDetailSlug(detailKey),
    }));
}

export async function createLocalizedCourseDetailMetadata(
  props: CourseDetailRouteProps,
  locale: Locale,
  parentKey: CourseParentKey,
): Promise<Metadata> {
  const detailKey = await resolveDetailKey(props, parentKey);
  const content = getCourseDetailContent(locale, detailKey);

  return createCourseDetailMetadata(locale, detailKey, {
    title: `${content.hero.title} | Volna School`,
    description: content.hero.summary,
  });
}

export async function renderCourseDetailRoute(
  props: CourseDetailRouteProps,
  locale: Locale,
  parentKey: CourseParentKey,
): Promise<ReactNode> {
  const detailKey = await resolveDetailKey(props, parentKey);
  const content = getCourseDetailContent(locale, detailKey);

  return <CourseDetailPage content={content} locale={locale} />;
}
