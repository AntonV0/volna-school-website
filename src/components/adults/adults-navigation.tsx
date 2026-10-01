"use client";

import Link from "next/link";
import { MobileSectionMenu } from "@/components/course/mobile-section-menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { adultPaths } from "@/content/adults-content";
import { adultTrialPath } from "@/lib/registration/adult-focus";
import s from "./adults.module.css";

export function AdultNavigation({
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
      <nav className={s.pageNav} aria-label="Adult course pages">
        <div className={s.wrap}>
          <span>Explore courses for adults</span>
          {[
            { href: adultPaths.main, label: "Course overview" },
            { href: adultPaths.beginner, label: "Beginner" },
            { href: adultPaths.intermediate, label: "Intermediate" },
            { href: adultPaths.personalised, label: "Your goals" },
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
          <Link
            className={s.navTrial}
            href={adultTrialPath(pathname.split("/").at(-1))}
          >
            Free trial <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
