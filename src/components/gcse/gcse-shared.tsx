import { AnimatedDisclosure } from "./animated-disclosure";
import { CourseLinkIcon } from "@/components/ui/course-link-icon";

import Link from "next/link";

import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";

import { gcsePaths } from "@/content/gcse-content";

import s from "./gcse.module.css";

import { GcseNavigation } from "./gcse-navigation";

export function GcseLink({
  href,

  children,
  ariaLabel,
}: {
  href: string;

  children: ReactNode;
  ariaLabel?: string;
}) {
  const Tag =
    href.startsWith("#") || href.startsWith("https:") || href.endsWith(".pdf")
      ? "a"
      : Link;

  return (
    <Tag
      className={s.textLink}
      href={href}
      aria-label={ariaLabel}
      download={href.startsWith("/downloads/") || undefined}
      target={href.startsWith("https:") ? "_blank" : undefined}
      rel={href.startsWith("https:") ? "noreferrer" : undefined}
    >
      {children}

      <CourseLinkIcon href={href} modern />
    </Tag>
  );
}

export function GcseSection({
  id,

  wash = false,

  aliases = [],

  children,
}: {
  id: string;

  wash?: boolean;

  aliases?: string[];

  children: ReactNode;
}) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className={`${s.section} ${wash ? s.wash : ""}`}
    >
      <div className={s.wrap}>
        {aliases.map((alias) => (
          <span
            className={s.anchor}
            id={alias}
            key={alias}
            aria-hidden="true"
          />
        ))}

        {children}
      </div>
    </section>
  );
}

export function GcseHeading({
  eyebrow,

  title,

  children,
}: {
  eyebrow?: string;

  title: string;

  children?: ReactNode;
}) {
  return (
    <div className={s.sectionHead}>
      <div>
        {eyebrow && <span className={s.eyebrow}>{eyebrow}</span>}

        <h2>{title}</h2>
      </div>

      {children && <p>{children}</p>}
    </div>
  );
}

export function GcseBreadcrumb({ current }: { current?: string }) {
  return (
    <nav className={s.breadcrumb} aria-label="Breadcrumb">
      <Link href="/">Home</Link>

      <span aria-hidden="true">/</span>

      {current ? (
        <>
          <Link href={gcsePaths.main}>GCSE courses</Link>

          <span aria-hidden="true">/</span>

          <span aria-current="page">{current}</span>
        </>
      ) : (
        <span aria-current="page">GCSE courses</span>
      )}
    </nav>
  );
}

export function GcseNav({ items }: { items: { id: string; label: string }[] }) {
  return <GcseNavigation items={items} />;
}

export function GcseQuestions({
  items,
}: {
  items: readonly {
    question: string;
    answer: string;
    link?: { href: string; label: string };
  }[];
}) {
  return (
    <div className={s.questions}>
      {items.map((item) => (
        <AnimatedDisclosure key={item.question}>
          <summary>{item.question}</summary>

          {item.answer.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {item.link && (
            <p><GcseLink href={item.link.href}>{item.link.label}</GcseLink></p>
          )}
        </AnimatedDisclosure>
      ))}
    </div>
  );
}

export function GcseStart({
  compact = false,
  examGuide = false,
}: {
  compact?: boolean;
  examGuide?: boolean;
}) {
  if (compact)
    return (
      <GcseSection id="start" aliases={["registration"]}>
        <div className={s.compactStart}>
          <div>
            <span className={s.eyebrow}>Your next step</span>

            <h2>
              {examGuide
                ? "Ready to plan your preparation?"
                : "Put your learning into practice."}
            </h2>

            <p>
              {examGuide
                ? "Tell us your intended exam year and where you would like support. We'll discuss a suitable tuition plan."
                : "Try a lesson and discuss which course suits your current Russian and goals."}
            </p>
          </div>

          <ButtonLink variant="exam" href={gcsePaths.trial}>
            Request a free trial lesson
          </ButtonLink>
        </div>
      </GcseSection>
    );

  return (
    <GcseSection id="start" aliases={["registration"]}>
      <div className={s.start}>
        <div>
          <span className={s.eyebrow}>Your next step</span>

          <h2>Find the right GCSE course.</h2>

          <p>
            Complete our registration form and we’ll contact you to discuss
            the student’s Russian, recommend a suitable course and arrange a
            free trial lesson.
          </p>

          <ButtonLink variant="exam" href={gcsePaths.trial}>
            Request a free trial lesson
          </ButtonLink>
        </div>

        <ol>
          <li>
            <span aria-hidden="true">1</span>

            <div>
              <h3>Tell us about the student</h3>

              <p>Complete the form with their Russian experience and goals.</p>
            </div>
          </li>

          <li>
            <span aria-hidden="true">2</span>

            <div>
              <h3>Discuss a suitable course</h3>

              <p>We’ll discuss the options by phone or email and arrange a trial.</p>
            </div>
          </li>

          <li>
            <span aria-hidden="true">3</span>

            <div>
              <h3>Try a lesson before deciding</h3>

              <p>Meet the teacher and try a lesson before deciding whether to continue.</p>
            </div>
          </li>
        </ol>
      </div>
    </GcseSection>
  );
}
