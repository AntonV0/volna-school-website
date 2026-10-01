"use client";

import { useEffect, useRef, useState } from "react";
import s from "./about-editorial.module.css";

const sections = [
  ["welcome", "Headteacher"],
  ["approach", "Our approach"],
  ["team", "Our people"],
  ["history", "Our story"],
  ["classes", "Find a course"],
] as const;

export function AboutEditorialNav() {
  const [active, setActive] = useState("");
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const line =
        window.innerWidth >= 1280
          ? Math.min(nav.current?.getBoundingClientRect().bottom ?? 144, 144) + 24
          : 112;
      setActive(
        sections.find(([id]) => {
          const bounds = document.getElementById(id)?.getBoundingClientRect();
          return bounds && bounds.top <= line && bounds.bottom > line;
        })?.[0] ?? "",
      );
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return (
    <nav ref={nav} className={s.nav} aria-label="About sections">
      <div className={s.wrap}>
        {sections.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "location" : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
