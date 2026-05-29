import { buttonBaseClassName, buttonVariants } from "@/components/ui/button-link";
import { updateTrialRegistrationLeadStatus } from "@/lib/admin/trial-registration-actions";
import { manualTrialLeadStatuses } from "@/lib/admin/trial-registration-status";
import {
  getCourseInterestLabel,
  getPreferredContactLabel,
} from "@/lib/admin/trial-registrations";
import type { AdminTrialRegistrationLead } from "@/types/admin";
import {
  conversionBlockedLabel,
  formatTrialLeadDate,
  trialLeadStatusLabels,
} from "@/components/admin/trial-registrations-inbox-shared";

export function TrialRegistrationLeadCard({
  lead,
}: {
  lead: AdminTrialRegistrationLead;
}) {
  const selectedLeadStatus = manualTrialLeadStatuses.some(
    (status) => status === lead.status,
  )
    ? lead.status
    : "closed";

  return (
    <article className="overflow-hidden rounded-md border border-white/10 bg-[var(--portal-surface-subtle)] p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="break-words text-xl font-semibold tracking-normal text-white">
              {lead.studentDisplayName}
            </h2>
            <span className="rounded-sm bg-[var(--portal-accent)]/14 px-2 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--portal-accent-soft)]">
              {trialLeadStatusLabels[lead.status]}
            </span>
          </div>
          <p className="mt-2 text-sm text-[var(--portal-subtle)]">
            Received {formatTrialLeadDate(lead.createdAt)}
          </p>
        </div>

        <div className="grid gap-2 text-sm text-[var(--portal-accent-soft)] sm:grid-cols-2 lg:min-w-80">
          <span className="rounded-md border border-white/10 bg-[var(--portal-panel)] px-3 py-2 leading-5">
            {getCourseInterestLabel(lead.courseInterest)}
          </span>
          <span className="rounded-md border border-white/10 bg-[var(--portal-panel)] px-3 py-2 leading-5">
            Contact by {getPreferredContactLabel(lead.preferredContact)}
          </span>
        </div>
      </div>

      <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-[var(--portal-label)]">Parent or guardian</dt>
          <dd className="mt-1 font-medium text-white">
            {lead.guardianName || "Not provided"}
          </dd>
        </div>
        <div>
          <dt className="text-[var(--portal-label)]">Learner age/year</dt>
          <dd className="mt-1 font-medium text-white">
            {lead.learnerAge || "Not provided"}
          </dd>
        </div>
        <div>
          <dt className="text-[var(--portal-label)]">Email</dt>
          <dd className="mt-1 break-words font-medium text-white">
            {lead.email || "Not provided"}
          </dd>
        </div>
        <div>
          <dt className="text-[var(--portal-label)]">Phone</dt>
          <dd className="mt-1 break-words font-medium text-white">
            {lead.phone || "Not provided"}
          </dd>
        </div>
      </dl>

      {lead.message ? (
        <div className="mt-5 rounded-md border border-white/10 bg-[var(--portal-panel)] p-4">
          <p className="text-sm font-semibold text-[var(--portal-accent-soft)]">Message</p>
          <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-[var(--portal-muted)]">
            {lead.message}
          </p>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2 text-xs text-[var(--portal-label)]">
        <span>Locale: {lead.locale.toUpperCase()}</span>
        <span aria-hidden="true">/</span>
        <span>
          Consent: {lead.consentToContact === true ? "recorded" : "not recorded"}
        </span>
        {lead.sourcePath ? (
          <>
            <span aria-hidden="true">/</span>
            <span className="break-all">Source: {lead.sourcePath}</span>
          </>
        ) : null}
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <form
          action={updateTrialRegistrationLeadStatus}
          className="grid gap-3 rounded-md border border-white/10 bg-[var(--portal-panel)] p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"
        >
          <input name="lead_id" type="hidden" value={lead.id} />
          <div>
            <label
              className="text-sm font-semibold text-[var(--portal-accent-soft)]"
              htmlFor={`lead-status-${lead.id}`}
            >
              Lead status
            </label>
            <select
              className="mt-2 min-h-11 w-full rounded-md border border-white/15 bg-white px-3 py-2 text-sm font-medium text-[var(--portal-bg)] outline-none focus:border-[var(--portal-accent)] focus:ring-2 focus:ring-[var(--portal-accent)]/30"
              defaultValue={selectedLeadStatus}
              id={`lead-status-${lead.id}`}
              name="lead_status"
            >
              {manualTrialLeadStatuses.map((status) => (
                <option key={status} value={status}>
                  {trialLeadStatusLabels[status]}
                </option>
              ))}
            </select>
          </div>
          <button
            className={`${buttonBaseClassName} ${buttonVariants.primary} px-4 py-2`}
            type="submit"
          >
            Update status
          </button>
          <p className="text-sm text-[var(--portal-accent-soft)] sm:col-span-2">
            {lead.status === "converted"
              ? conversionBlockedLabel
              : "Lead-to-student conversion is intentionally not enabled yet."}
          </p>
        </form>
      </div>
    </article>
  );
}
