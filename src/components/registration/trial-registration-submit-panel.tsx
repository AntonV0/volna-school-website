import type { RegistrationContent } from "@/content/registration-content";
import type { RegistrationSupportText } from "@/components/registration/trial-registration-form-config";
import { SubmitButton } from "@/components/registration/trial-registration-form-ui";
import { TurnstileWidget } from "@/components/registration/turnstile-widget";

type SubmitPanelProps = {
  content: RegistrationContent["form"];
  supportText: RegistrationSupportText;
};

export function TrialRegistrationSubmitPanel({
  content,
  supportText,
}: SubmitPanelProps) {
  return (
    <div className="rounded-lg border border-border-soft bg-white p-4 shadow-sm">
      <TurnstileWidget />
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <SubmitButton
          label={content.submitLabel}
          pendingLabel={content.pendingLabel}
        />
        {supportText.submitNote ? (
          <p className="text-sm leading-6 text-muted-foreground">
            {supportText.submitNote}
          </p>
        ) : null}
      </div>
    </div>
  );
}
