import Link from "next/link";
import styles from "./study-option-link.module.css";

export function StudyOptionLink({ theme, href, label }: {
  theme: "children" | "gcse" | "alevel" | "adults";
  href: string;
  label: string;
}) {
  return (
    <Link className={styles.pill} data-theme={theme} href={href}>
      <span>{label}</span>
    </Link>
  );
}
