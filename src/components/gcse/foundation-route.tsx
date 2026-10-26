"use client";

import { useId, useState, type ReactNode } from "react";
import s from "./foundation-route.module.css";

export function FoundationRoute({
  title,
  mobileTitle,
  children,
}: {
  title: string;
  mobileTitle: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <article className={s.route}>
      <h3 className={s.desktopTitle}>{title}</h3>
      <button
        className={s.toggle}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {mobileTitle}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={id} className={s.content} data-open={open}>
        {children}
      </div>
    </article>
  );
}
