"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import s from "./site-footer.module.css";

export function FooterEmailCopy({ email, locale }: { email: string; locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const label = locale === "en" ? "Copy email address" : "Скопировать email";
  const message = status === "copied"
    ? (locale === "en" ? "Copied!" : "Скопировано!")
    : status === "error"
      ? (locale === "en" ? "Couldn’t copy. Select the address to copy it manually." : "Не удалось скопировать. Выделите адрес и скопируйте вручную.")
      : "";

  async function copyEmail() {
    if (timer.current) clearTimeout(timer.current);
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      timer.current = setTimeout(() => setStatus("idle"), 8000);
    }
  }

  return (
    <div className={s.emailRow}>
      <p className={s.emailAddress}>{email}</p>
      <button type="button" className={s.copyButton} onClick={copyEmail} disabled={status === "copying"} aria-label={label} title={label}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {status === "copied" ? <path d="m5 12 4 4L19 6" /> : <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>}
        </svg>
      </button>
      <span className={s.copyStatus} role="status" aria-live="polite" aria-atomic="true" data-visible={Boolean(message)}>{message}</span>
    </div>
  );
}
