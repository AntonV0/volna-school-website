"use client";

import styles from "./legal-page.module.css";

export function LegalPrint() {
  return <button type="button" className={styles.topLink} onClick={() => window.print()}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4V9h16v8h-3M7 14h10v7H7z" /><path d="M16 11h1" /></svg>
    Print full policy / Save as PDF
  </button>;
}
