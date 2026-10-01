"use client";

import Link from "next/link";
import { MobileSectionMenu } from "@/components/course/mobile-section-menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { gcsePaths } from "@/content/gcse-content";
import s from "./gcse.module.css";

export function GcseNavigation({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const ids = items.map((item) => item.id).join(",");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const line = window.innerWidth >= 1280 ? 190 : 140;
      const current = ids
        .split(",")
        .map((id) => document.getElementById(id))
        .filter((node): node is HTMLElement => Boolean(node))
        .filter((node) => {
          const bounds = node.getBoundingClientRect();
          return (
            bounds.top + parseFloat(getComputedStyle(node).paddingTop) <=
              line && bounds.bottom > line
          );
        })
        .at(-1);
      setActive(current?.id ?? "");
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
  }, [ids]);
  return (
    <>
      <nav className={s.pageNav} aria-label="GCSE pages">
        <div className={s.wrap}>
          <span>Explore GCSE</span>
          {[
            { href: gcsePaths.main, label: "Course overview" },
            { href: gcsePaths.curriculum, label: "Curriculum" },
            { href: gcsePaths.exams, label: "Exam guide" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <nav className={s.nav} aria-label="On this page">
        <div className={s.wrap}>
          <MobileSectionMenu items={items} active={active} />
          <div className={s.navLinks}>
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
          <Link className={s.navTrial} href={gcsePaths.trial}>
            Free trial <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
