import type { ReactNode } from "react";
import { GcseAnchorFeedback } from "@/components/gcse/gcse-anchor-feedback";
import "@/components/gcse/gcse-motion.css";

export default function GcseLayout({ children }: { children: ReactNode }) {
  return <>{children}<GcseAnchorFeedback /></>;
}
