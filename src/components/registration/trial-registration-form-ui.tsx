import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";

import { buttonBaseClassName, buttonVariants } from "@/components/ui/button-link";
import { cn } from "@/lib/classnames";
import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";

type FieldShellProps = {
  children: ReactNode;
  error?: string;
  hint?: string;
  htmlFor: string;
  label: string;
  optionalLabel?: string;
  requiredLabel?: string;
};

export function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      aria-live="polite"
      className={cn(
        buttonBaseClassName,
        buttonVariants.primary,
        "min-h-12 w-full py-3 leading-5 disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-72 sm:w-auto",
      )}
      disabled={pending}
      type="submit"
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

export function FormSection({
  children,
  description,
  title,
}: {
  children: ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <div className="rounded-lg border border-border-soft border-l-4 border-l-accent bg-section-wash/70 p-4 sm:p-5">
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal">
        {title}
      </h3>
      {description ? (
        <p className="-mt-3 mb-5 max-w-2xl text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function FieldShell({
  children,
  error,
  hint,
  htmlFor,
  label,
  optionalLabel,
  requiredLabel,
}: FieldShellProps) {
  const badgeLabel = requiredLabel ?? optionalLabel;

  return (
    <div className="grid min-w-0 gap-2">
      <label
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-foreground"
        htmlFor={htmlFor}
      >
        <span>{label}</span>
        {badgeLabel ? (
          <span
            className={cn(
              "rounded-sm px-2 py-0.5 text-xs font-semibold",
              requiredLabel
                ? "bg-error-soft text-error"
                : "bg-white text-muted-foreground ring-1 ring-border-soft",
            )}
          >
            {badgeLabel}
          </span>
        ) : null}
      </label>
      {hint ? (
        <p className="text-sm leading-5 text-muted-foreground">{hint}</p>
      ) : null}
      {children}
      {error ? (
        <p className="text-sm font-medium leading-5 text-error" id={`${htmlFor}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function errorProps(errors: TrialRegistrationFieldErrors, name: string) {
  const error = errors[name as keyof TrialRegistrationFieldErrors];

  return {
    "aria-describedby": error ? `${name}-error` : undefined,
    "aria-invalid": error ? true : undefined,
  };
}

export const inputClassName =
  "min-h-12 w-full min-w-0 rounded-md border border-border-soft bg-white px-3 py-2 text-base text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 aria-invalid:border-error aria-invalid:ring-3 aria-invalid:ring-error/10";
