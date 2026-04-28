type TurnstileVerificationResult =
  | { status: "skipped" }
  | { status: "success" }
  | { status: "failed" };

type TurnstileSiteverifyResponse = {
  success?: boolean;
};

const TURNSTILE_SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstileToken(
  token: string,
): Promise<TurnstileVerificationResult> {
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    return { status: "skipped" };
  }

  if (!token) {
    return { status: "failed" };
  }

  try {
    const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
      body: new URLSearchParams({
        response: token,
        secret: secretKey,
      }),
      method: "POST",
    });

    if (!response.ok) {
      return { status: "failed" };
    }

    const result = (await response.json()) as TurnstileSiteverifyResponse;

    return result.success ? { status: "success" } : { status: "failed" };
  } catch {
    return { status: "failed" };
  }
}
