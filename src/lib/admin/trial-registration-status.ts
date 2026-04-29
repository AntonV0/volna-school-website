import type { LeadStatus } from "@/types/admin";

export const manualTrialLeadStatuses = [
  "new",
  "contacted",
  "trial_scheduled",
  "trial_completed",
  "closed",
] as const satisfies readonly LeadStatus[];

export type ManualTrialLeadStatus = (typeof manualTrialLeadStatuses)[number];

export function isManualTrialLeadStatus(
  value: unknown,
): value is ManualTrialLeadStatus {
  return (
    typeof value === "string" &&
    manualTrialLeadStatuses.includes(value as ManualTrialLeadStatus)
  );
}
