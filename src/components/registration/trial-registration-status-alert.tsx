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
      id="registration-status"
      tabIndex={-1}
      className={cn(
        "scroll-mt-28 rounded-md border p-4 text-sm leading-6 outline-none",
        isSuccess && "border-success/30 bg-success-soft text-success",
        isError && "border-error/25 bg-error-soft text-error",
      )}
      aria-live="polite"
      role={isError ? "alert" : "status"}
    >
      <p className="font-semibold">
        {isSuccess ? content.successTitle : state.status === "validation-error" && content.requiredLabel === "Required" ? "Check your answers" : content.errorTitle}
      </p>
      <p>{state.message}</p>
      {isError && Object.keys(state.errors).length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {Object.entries(state.errors).map(([name, message]) => (
            <li key={name}>
              <a
                href={`#${name}`}
                className="underline underline-offset-4"
                onClick={(event) => {
                  const input = document.getElementById(name);
                  if (!input) return;
                  event.preventDefault();
                  const disclosure = input.closest("details");
                  if (disclosure) disclosure.open = true;
                  input.focus();
                  input.scrollIntoView({
                    block: "center",
                    behavior: "instant",
                  });
                }}
              >
                {(name === "consent" && content.requiredLabel === "Required" ? "Contact permission" : content.fields[name as keyof typeof content.fields]) ??
                  (
                    {
                      enquiryFor: "Who are the lessons for?",
                      childrenFocus: "Preferred class type",
                      adultFocus: "Learning focus",
                      examYear: "Intended exam year",
                    } as Record<string, string>
                  )[name] ??
                  name}
                : {message}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : null;
}
