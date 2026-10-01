export const childrenFocusOptions = [
  { value: "bilingual-classes", label: "Bilingual classes" },
  { value: "russian-for-beginners", label: "Russian for beginners" },
  { value: "early-years", label: "Early years" },
  { value: "private-tuition", label: "Private tuition" },
  { value: "not_sure", label: "Not sure yet" },
] as const;
export function safeChildrenFocus(value?: string) {
  return childrenFocusOptions.some((option) => option.value === value)
    ? value!
    : "";
}
