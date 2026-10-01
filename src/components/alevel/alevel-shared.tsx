import { CourseLinkIcon } from "@/components/ui/course-link-icon";
import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { alevelPaths } from "@/content/alevel-content";
import s from "./alevel.module.css";
import { ALevelNavigation } from "./alevel-navigation";

export function ALevelLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const Tag =
    href.startsWith("#") || href.startsWith("https:") || href.endsWith(".pdf")
      ? "a"
      : Link;
  return (
    <Tag
      className={s.textLink}
      href={href}
      download={href.startsWith("/downloads/") || undefined}
    >
      {children}
      <CourseLinkIcon href={href} />
    </Tag>
  );
}

export function ALevelSection({
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

export function ALevelHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className={s.sectionHead}>
      <div>
        <span className={s.eyebrow}>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}

export function ALevelBreadcrumb({ current }: { current?: string }) {
  return (
    <nav className={s.breadcrumb} aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">/</span>
      {current ? (
        <>
          <Link href={alevelPaths.main}>A Level courses</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{current}</span>
        </>
      ) : (
        <span aria-current="page">A Level courses</span>
      )}
    </nav>
  );
}

export function ALevelNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return <ALevelNavigation items={items} />;
}

export function ALevelQuestions({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <div className={s.questions}>
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function ALevelStart({
  compact = false,
  examGuide = false,
}: {
  compact?: boolean;
  examGuide?: boolean;
}) {
  if (compact)
    return (
      <ALevelSection id="start" aliases={["registration"]}>
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
          <ButtonLink href={alevelPaths.trial}>Request a free trial</ButtonLink>
        </div>
      </ALevelSection>
    );
  return (
    <ALevelSection id="start" aliases={["registration"]}>
      <div className={s.start}>
        <div>
          <span className={s.eyebrow}>Your next step</span>
          <h2>Find the right A Level course.</h2>
          <p>
            Share the student’s age, current Russian level and intended exam
            year, plus their school year if applicable. We’ll arrange a free
            trial and help you choose a suitable course.
          </p>
          <ButtonLink href={alevelPaths.trial}>Request a free trial</ButtonLink>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h3>Tell us about the student</h3>
              <p>Share their experience and the support they need.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Meet the teacher</h3>
              <p>Try a lesson and discuss the right starting point.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Decide how to continue</h3>
              <p>Review the recommendation before choosing paid lessons.</p>
            </div>
          </li>
        </ol>
      </div>
    </ALevelSection>
  );
}
