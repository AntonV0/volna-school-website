import { CourseLinkIcon } from "@/components/ui/course-link-icon";
import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { adultPaths } from "@/content/adults-content";
import { adultTrialPath } from "@/lib/registration/adult-focus";
import s from "./adults.module.css";
import { AdultNavigation } from "./adults-navigation";

export function AdultLink({
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

export function AdultSection({
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

export function AdultHeading({
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

export function AdultBreadcrumb({ current }: { current?: string }) {
  return (
    <nav className={s.breadcrumb} aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">/</span>
      {current ? (
        <>
          <Link href={adultPaths.main}>Courses for adults</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{current}</span>
        </>
      ) : (
        <span aria-current="page">Courses for adults</span>
      )}
    </nav>
  );
}

export function AdultNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return <AdultNavigation items={items} />;
}

export function AdultQuestions({
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

export function AdultStart({ focus }: { focus?: string }) {
  if (focus)
    return (
      <AdultSection id="start">
        <div className={s.compactStart}>
          <div>
            <span className={s.eyebrow}>Your next step</span>
            <h2>
              {focus === "russian-foundations"
                ? "Take your first step in Russian."
                : focus === "intermediate-russian"
                  ? "Build on the Russian you know."
                  : "Bring your goal to a trial lesson."}
            </h2>
            <p>
              Meet your teacher, try the approach and agree a starting point
              before choosing paid lessons.
            </p>
          </div>
          <ButtonLink href={adultTrialPath(focus)}>
            Request a free trial
          </ButtonLink>
        </div>
      </AdultSection>
    );
  return (
    <AdultSection id="start" aliases={["registration"]}>
      <div className={s.start}>
        <div>
          <span className={s.eyebrow}>Your next step</span>
          <h2>Make Russian part of your life.</h2>
          <p>
            Tell us about your Russian, what you want to learn and when you are
            available. We’ll arrange a free trial and discuss a plan that fits
            your goals.
          </p>
          <ButtonLink href={adultTrialPath(focus)}>
            Request a free trial
          </ButtonLink>
        </div>
        <div className={s.closingNote}>
          <h3>A practical question?</h3>
          <p>
            Contact the school about lesson times, online access or payment
            arrangements before requesting a trial.
          </p>
          <AdultLink href="mailto:info@volnaschool.com">
            Email the school
          </AdultLink>
        </div>
      </div>
    </AdultSection>
  );
}
