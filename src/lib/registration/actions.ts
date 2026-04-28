"use server";

import { registrationContent } from "@/content/registration-content";
import { saveTrialRegistration } from "@/lib/registration/submission";
import { verifyTurnstileToken } from "@/lib/registration/turnstile";
import {
  parseTrialRegistrationForm,
  validateTrialRegistration,
  type TrialRegistrationActionState,
} from "@/lib/registration/validation";

export async function submitTrialRegistration(
  _previousState: TrialRegistrationActionState,
  formData: FormData,
): Promise<TrialRegistrationActionState> {
  const fields = parseTrialRegistrationForm(formData);
  const content = registrationContent[fields.locale].form;

  if (fields.website) {
    return {
      errors: {},
      message: content.successMessage,
      status: "success",
    };
  }

  const errors = validateTrialRegistration(fields, content.validation);

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      message: content.errorTitle,
      status: "validation-error",
    };
  }

  const turnstileResult = await verifyTurnstileToken(fields.turnstileToken);

  if (turnstileResult.status === "failed") {
    return {
      errors: {},
      message: content.submitError,
      status: "submit-error",
    };
  }

  const result = await saveTrialRegistration(fields);

  if (result.status === "success") {
    return {
      errors: {},
      message: content.successMessage,
      status: "success",
    };
  }

  return {
    errors: {},
    message:
      result.status === "config-error" ? content.configError : content.submitError,
    status: result.status,
  };
}
