import { RegistrationIcon } from "./registration-icon";
import type { RegistrationContent } from "@/content/registration-content";
import type { RegistrationSupportText } from "@/components/registration/trial-registration-form-config";
import { SubmitButton } from "@/components/registration/trial-registration-form-ui";
import { TurnstileWidget } from "@/components/registration/turnstile-widget";

type SubmitPanelProps = {
  pending?: boolean;
  onBack?: () => void;
  disabled: boolean;
  verificationAttempt: number;
  onVerificationChange: (ready: boolean) => void;
  content: RegistrationContent["form"];
  supportText: RegistrationSupportText;
};

export function TrialRegistrationSubmitPanel({
  pending,
  onBack,
  disabled,
  verificationAttempt,
  onVerificationChange,
  content,
  supportText,
}: SubmitPanelProps) {
  return (
    <div className="border-t border-border-soft pt-5">
      <TurnstileWidget
        key={verificationAttempt}
        attempt={verificationAttempt}
        onReadyChange={onVerificationChange}
      />
      <div
        className={
          onBack
            ? "mt-4 flex flex-wrap items-center justify-between gap-3 [&>button[type=submit]]:w-auto"
            : "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
        }
      >
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="registration-control min-h-12 rounded-md px-3 text-sm font-semibold text-brand-teal hover:bg-brand-teal-soft"
          >
            <RegistrationIcon name="back" /> Back
          </button>
        )}
        <SubmitButton
          isPending={pending}
          disabled={disabled}
          label={content.submitLabel}
          pendingLabel={content.pendingLabel}
        />
      </div>
      {supportText.submitNote ? (
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {supportText.submitNote}
        </p>
      ) : null}
    </div>
  );
}
