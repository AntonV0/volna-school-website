"use client";

import { useEffect, useState, type ReactNode } from "react";
import { MobileSectionMenu } from "@/components/course/mobile-section-menu";
import s from "./children.module.css";

export function ChildrenSectionNav({
  items,
  ariaLabel,
  className,
  children,
}: {
  items: { id: string; label: string }[];
  ariaLabel: string;
  className: string;
  children: ReactNode;
}) {
  const [active, setActive] = useState("");
  const ids = items.map((item) => item.id).join(",");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const targets = ids
        .split(",")
        .map((id) => document.getElementById(id))
        .filter((node): node is HTMLElement => Boolean(node));
      const page = targets[0]?.closest("[data-children-locale]");
      const english = page?.getAttribute("data-children-locale") === "en";
      const activationLine =
        english && page
          ? parseFloat(
              getComputedStyle(page).getPropertyValue("--child-anchor-offset"),
            ) *
              parseFloat(getComputedStyle(document.documentElement).fontSize) +
            24
          : 220;
      const current = targets
        .filter((node) => {
          const contentInset =
            english && node.tagName === "SECTION"
              ? parseFloat(getComputedStyle(node).paddingTop)
              : 0;
          return (
            node.getBoundingClientRect().top + contentInset <= activationLine &&
            (!english || node.getBoundingClientRect().bottom > activationLine)
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
    <nav aria-label={ariaLabel} className={className}>
      <div className={`${s.wrap} ${s.navInner}`}>
        {ariaLabel === "On this page" && <MobileSectionMenu items={items} active={active} />}
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
        {children}
      </div>
    </nav>
  );
}
