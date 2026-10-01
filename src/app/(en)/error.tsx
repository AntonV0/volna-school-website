"use client";

import { useEffect, useRef, useTransition } from "react";
import {
  ButtonLink,
  buttonBaseClassName,
  buttonVariants,
} from "@/components/ui/button-link";
import s from "@/components/ui/recovery.module.css";

type EnglishErrorProps = { reset: () => void };

export default function EnglishError({ reset }: EnglishErrorProps) {
  const heading = useRef<HTMLHeadingElement>(null);
  const [pending, startTransition] = useTransition();
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, []);
  return (
    <section className={s.page} aria-labelledby="error-title">
      <div className={s.hero}>
        <p className={s.eyebrow}>Something went wrong</p>
        <h1 id="error-title" ref={heading} tabIndex={-1}>
          We couldn’t load this page.
        </h1>
        <p className={s.body}>
          Please try again. If the problem continues, return to the homepage or
          contact the school for help.
        </p>
        <div className={s.actions}>
          <button
            className={`${buttonBaseClassName} ${buttonVariants.primary}`}
            type="button"
            disabled={pending}
            onClick={() => startTransition(reset)}
            aria-live="polite"
          >
            {pending ? "Trying again…" : "Try again"}
          </button>
          <ButtonLink href="/" variant="ghost">
            Return home
          </ButtonLink>
        </div>
        <p className={s.help}>
          Need a hand?{" "}
          <a href="mailto:info@volnaschool.com">Email the school</a> and tell us
          which page you were trying to open.
        </p>
      </div>
    </section>
  );
}
