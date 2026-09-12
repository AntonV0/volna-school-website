import type { ReactNode } from "react";
import styles from "./editorial-section-heading.module.css";

type EditorialSectionHeadingProps = {
  introduction: string;
  title: string;
  variant?: "plain" | "wave";
  children?: ReactNode;
};

export function EditorialSectionHeading({
  introduction,
  title,
  variant = "plain",
  children,
}: EditorialSectionHeadingProps) {
  return (
    <div className={variant === "wave" ? styles.panel : undefined}>
      {variant === "wave" ? (
        <svg aria-hidden="true" focusable="false" viewBox="0 0 600 260" preserveAspectRatio="none" className={styles.wave}>
          <path d="M120 280C300 255 290 67 440 56C506 51 554 81 620 39V280Z" fill="var(--accent)" opacity=".12" />
          <path d="M210 280C385 238 348 120 478 116C544 114 576 143 620 99V280Z" fill="var(--brand-blue)" opacity=".10" />
          <path d="M310 280C456 228 411 185 514 180C558 178 595 198 620 174V280Z" fill="var(--brand-blue)" opacity=".08" />
        </svg>
      ) : null}
      <h2 className={styles.heading}>
        <span className={styles.introduction}>{introduction}{" "}</span>
        {title}
      </h2>
      {children ? <div className={styles.description}>{children}</div> : null}
    </div>
  );
}
