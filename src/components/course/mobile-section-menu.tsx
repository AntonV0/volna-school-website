"use client";

import { useRef } from "react";
import s from "./mobile-section-menu.module.css";

export function MobileSectionMenu({ items, active }: { items: { id: string; label: string }[]; active: string }) {
  const menu = useRef<HTMLDetailsElement>(null);
  return <details ref={menu} className={s.menu}>
    <summary>On this page <span>{items.find(item => item.id === active)?.label ?? "Explore sections"}</span></summary>
    <div>{items.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = document.getElementById(item.id);
      if (!target) return;
      if (menu.current) menu.current.open = false;
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      // Let the anchor perform native fragment navigation and maintain history.
    }}>{item.label}</a>)}</div>
  </details>;
}
