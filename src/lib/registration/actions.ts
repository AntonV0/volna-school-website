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
  const successMessage = fields.mockInterest
    ? "Your mock-exam enquiry has been received. We’ll contact you about the available options and next steps. This does not confirm a booking."
    : content.successMessage;

  if (fields.website) {
    return {
      errors: {},
      message: successMessage,
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

  if (turnstileResult.status === "config-error") {
    return {
      errors: {},
      message: content.configError,
      status: "config-error",
    };
  }

  const result = await saveTrialRegistration(fields);

  if (result.status === "success") {
    return {
      errors: {},
      message: successMessage,
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
