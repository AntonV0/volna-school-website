import type { LeadStatus } from "@/types/admin";

export const manualTrialLeadStatuses = [
  "new",
  "contacted",
  "trial_scheduled",
  "trial_completed",
  "duplicate",
  "closed",
] as const satisfies readonly LeadStatus[];

export type ManualTrialLeadStatus = (typeof manualTrialLeadStatuses)[number];

const terminalTrialLeadStatuses = new Set<LeadStatus>([
  "closed",
  "converted",
  "duplicate",
]);

export function isManualTrialLeadStatus(
  value: unknown,
): value is ManualTrialLeadStatus {
  return (
    typeof value === "string" &&
    manualTrialLeadStatuses.includes(value as ManualTrialLeadStatus)
  );
}

export function isOpenTrialLeadStatus(status: LeadStatus) {
  return !terminalTrialLeadStatuses.has(status);
}
