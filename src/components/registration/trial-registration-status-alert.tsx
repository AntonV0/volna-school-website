import type { RegistrationContent } from "@/content/registration-content";
import { cn } from "@/lib/classnames";
import type { TrialRegistrationActionState } from "@/lib/registration/validation";

type StatusAlertProps = {
  content: RegistrationContent["form"];
  isError: boolean;
  isSuccess: boolean;
  state: TrialRegistrationActionState;
};

export function TrialRegistrationStatusAlert({
  content,
  isError,
  isSuccess,
  state,
}: StatusAlertProps) {
  return state.message ? (
    <div
      className={cn(
        "rounded-md border p-4 text-sm leading-6",
        isSuccess &&
          "border-brand-teal/30 bg-brand-teal-soft text-brand-teal-deep",
        isError && "border-brand-red/25 bg-red-50 text-brand-red-dark",
      )}
      aria-live="polite"
      role={isError ? "alert" : "status"}
    >
      <p className="font-semibold">
        {isSuccess ? content.successTitle : content.errorTitle}
      </p>
      <p>{state.message}</p>
    </div>
  ) : null;
}
