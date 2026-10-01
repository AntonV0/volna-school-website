export const adultFocusOptions = [
  { value: "russian-foundations", label: "Beginner Russian" },
  { value: "intermediate-russian", label: "Intermediate Russian" },
  { value: "personalised-lessons", label: "Russian for Your Goals" },
  { value: "not_sure", label: "Not sure yet" },
] as const;

export function safeAdultFocus(value?: string) {
  return adultFocusOptions.some((option) => option.value === value)
    ? value!
    : "";
}

export function adultTrialPath(focus?: string) {
  const safeFocus = safeAdultFocus(focus);
  return `/registration?course=adults&format=private${safeFocus ? `&focus=${safeFocus}` : ""}`;
}
