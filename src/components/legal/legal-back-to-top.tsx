"use client";

import styles from "./legal-page.module.css";

export function LegalBackToTop({ label }: { label: string }) {
  return (
    <a
      className={styles.topLink}
      href="#top"
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const target = document.getElementById("top");
        if (!target) return;
        event.preventDefault();
        target.focus({ preventScroll: true });
        if (window.location.hash !== "#top") window.history.pushState(null, "", "#top");
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
      }}
    >
      {label}<span aria-hidden="true">↑</span>
    </a>
  );
}
