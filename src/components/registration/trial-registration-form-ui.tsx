import { RegistrationIcon } from "./registration-icon";
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
  type ReactElement,
} from "react";
import { useFormStatus } from "react-dom";

import {
  buttonBaseClassName,
  buttonVariants,
} from "@/components/ui/button-link";
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
  reveal?: boolean;
};

export function SubmitButton({
  label,
  pendingLabel,
  isPending,
  disabled,
}: {
  label: string;
  pendingLabel: string;
  isPending?: boolean;
  disabled?: boolean;
}) {
  const status = useFormStatus();
  const pending = isPending ?? status.pending;

  return (
    <button
      aria-live="polite"
      className={cn(
        buttonBaseClassName,
        buttonVariants.primary,
        "mt-auto min-h-12 w-full py-3 leading-5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
      )}
      disabled={pending || disabled}
      type="submit"
    >
      {pending && (
        <RegistrationIcon
          name="spinner"
          className="mr-2 shrink-0 motion-safe:animate-spin"
        />
      )}
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
    <div className="border-b border-border-soft pb-6">
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
  reveal,
}: FieldShellProps) {
  const badgeLabel = requiredLabel ?? optionalLabel;

  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-2",
        reveal && "registration-reveal",
      )}
    >
      <label
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-foreground"
        id={`${htmlFor}-label`}
        htmlFor={htmlFor}
      >
        <span>{label}</span>
        {badgeLabel ? (
          <span className="text-xs font-normal text-muted-foreground">
            {badgeLabel}
          </span>
        ) : null}
      </label>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        const field = child as ReactElement<{
          id?: string;
          "aria-describedby"?: string;
        }>;
        if (field.props.id !== htmlFor) return child;
        return cloneElement(field, {
          "aria-describedby":
            [hint ? `${htmlFor}-hint` : "", field.props["aria-describedby"]]
              .filter(Boolean)
              .join(" ") || undefined,
        });
      })}
      {hint ? (
        <p
          id={`${htmlFor}-hint`}
          className="text-sm leading-5 text-muted-foreground"
        >
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          className="text-sm font-medium leading-5 text-error"
          id={`${htmlFor}-error`}
        >
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
  "min-h-12 w-full min-w-0 rounded-md border border-border-soft bg-white px-3 py-2 text-base text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground/70 hover:border-brand-teal/50 focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 aria-invalid:border-error aria-invalid:ring-3 aria-invalid:ring-error/10";
