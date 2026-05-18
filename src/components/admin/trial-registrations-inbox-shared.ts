import type { AdminTrialRegistrationLead } from "@/types/admin";

export const trialLeadStatusLabels: Record<
  AdminTrialRegistrationLead["status"],
  string
> = {
  closed: "Closed",
  contacted: "Contacted",
  converted: "Converted",
  duplicate: "Duplicate",
  new: "New",
  trial_completed: "Trial completed",
  trial_scheduled: "Trial scheduled",
};

export const conversionBlockedLabel =
  "Convert after student, guardian, and enrolment workflow is approved";

export function formatTrialLeadDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime()) || date.getTime() === 0) {
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}
