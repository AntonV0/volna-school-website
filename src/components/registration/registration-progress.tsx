import { RegistrationIcon } from "./registration-icon";
import {
  registrationSteps,
  type RegistrationReviewRow,
} from "./registration-steps";

export function RegistrationProgress({
  step,
  onBack,
}: {
  step: number;
  onBack: (step: number) => void;
}) {
  return (
    <>
      <ol aria-label="Registration progress" className="grid grid-cols-3 gap-3">
        {registrationSteps.map((label, index) => (
          <li key={label} aria-current={index === step ? "step" : undefined}>
            <div
              className={`mb-1 h-1 rounded-full ${index === step ? "bg-brand-teal-deep" : index < step ? "bg-brand-teal/45" : "bg-border-soft"}`}
            />
            {index < step ? (
              <button
                type="button"
                onClick={() => onBack(index)}
                className="registration-control min-h-11 px-1 text-left text-xs font-semibold text-brand-teal underline-offset-4 hover:underline sm:text-sm"
              >
                <RegistrationIcon name="check" className="shrink-0" />
                <span className="sr-only">Edit </span>
                {label}
              </button>
            ) : (
              <span
                className={`flex min-h-11 items-center text-xs font-semibold sm:text-sm ${index === step ? "text-brand-teal-deep" : "text-muted-foreground"}`}
              >
                {label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <div
        id="registration-step-heading"
        tabIndex={-1}
        className="scroll-mt-28 outline-none"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
          Step {step + 1} of 3
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-brand-teal-deep">
          {registrationSteps[step]}
        </h3>
        {step === 2 && (
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Check your details below. We’ll contact you to agree a lesson time.
          </p>
        )}
      </div>
    </>
  );
}
export function RegistrationReview({
  rows,
  onEdit,
}: {
  rows: RegistrationReviewRow[][];
  onEdit: (step: number) => void;
}) {
  return (
    <div className="divide-y divide-border-soft rounded-lg bg-brand-teal-soft/30 px-4 sm:px-5">
      {rows.map((group, step) => (
        <section key={step} className="py-3 sm:py-4">
          <div className="mb-1 flex items-center justify-between gap-3">
            <h4 className="font-semibold text-brand-teal-deep">
              {registrationSteps[step]}
            </h4>
            <button
              type="button"
              className="registration-control min-h-11 px-2 text-sm font-semibold text-brand-teal underline underline-offset-4"
              onClick={() => onEdit(step)}
              aria-label={`Edit ${registrationSteps[step].toLowerCase()}`}
            >
              <RegistrationIcon name="edit" className="shrink-0" /> Edit
            </button>
          </div>
          <dl className="space-y-1.5 sm:space-y-2">
            {group.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-3 text-sm leading-6 sm:grid-cols-[8rem_1fr] sm:gap-x-4"
              >
                <dt className="text-muted-foreground">{row.label}</dt>
                <dd className="min-w-0 break-words font-medium [overflow-wrap:anywhere]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
