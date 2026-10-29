"use client";

import { useId, useState, useSyncExternalStore, type ReactNode } from "react";
import s from "./foundation-route.module.css";

const mobileQuery = "(max-width: 767px)";
function subscribeMobile(listener: () => void) {
  const query = window.matchMedia(mobileQuery);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
}
const getMobile = () => window.matchMedia(mobileQuery).matches;
const getServerMobile = () => false;

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
  const mobile = useSyncExternalStore(subscribeMobile, getMobile, getServerMobile);
  const id = useId();
  return (
    <article className={s.route}>
      <h3 className={s.desktopTitle}>{title}</h3>
      <button
        className={s.toggle}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(previous => !previous)}
      >
        {mobileTitle}
        <span className={s.indicator} aria-hidden="true" />
      </button>
      <div id={id} className={s.content} data-open={open} inert={mobile && !open} aria-hidden={mobile ? !open : undefined}>
        <div className={s.clip}>
          <div className={s.body}>{children}</div>
        </div>
      </div>
    </article>
  );
}
