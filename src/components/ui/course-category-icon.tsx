type CourseIconTheme = "children" | "exam" | "advanced" | "adult" | "school";

export function CourseCategoryIcon({ theme, idPrefix }: { theme: CourseIconTheme; idPrefix: string }) {
  return (<svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {theme === "school" ? (
                    <>
                      <path d="M5 12V8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4Z" fill="currentColor" fillOpacity="0.15" stroke="none" />
                      <rect x="5" y="5" width="22" height="23" rx="3" />
                      <path d="M11 3v5m10-5v5M5 12h22" />
                      <path d="M10 17h2m4 0h2m4 0h1m-13 6h2m4-1 2 2 5-5" />
                    </>
                  ) : theme === "children" ? (
                    <>
                      <path d="M7 12V10C7 1 25 1 25 10v2l-4-4-4 2-4-2-6 4Z" fill="currentColor" fillOpacity="0.16" />
                      <path d="M8 12v4a8 8 0 0 0 16 0v-4M8 14c-3-2-3 4 0 4m16-4c3-2 3 4 0 4M5 30c0-4 4-6 8-6m6 0c4 0 8 2 8 6m-14-6q3 4 6 0" />
                      <circle cx="12.5" cy="14.5" r="0.9" fill="currentColor" stroke="none" />
                      <circle cx="19.5" cy="14.5" r="0.9" fill="currentColor" stroke="none" />
                      <path d="M13 19q3 2.5 6 0" />
                    </>
                  ) : theme === "exam" ? (
                    <>
                      <defs><path id={`${idPrefix}-grade-curve`} d="M-7 23 1 15Q16 0 31 15L39 23" /></defs>
                      <text fill="currentColor" fontSize="8.5" fontFamily="Arial, sans-serif" fontWeight="900" letterSpacing="0.4" strokeWidth="0.18">
                        <textPath href={`#${idPrefix}-grade-curve`} startOffset="50%" textAnchor="middle">GRADE</textPath>
                      </text>
                      <text x="16" y="25.5" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fontStyle="italic">9</text>
                    </>
                  ) : theme === "advanced" ? (
                    <>
                      <text x="2" y="27" fill="currentColor" stroke="none" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fontStyle="italic">A</text>
                      <path d="m25 3.5 1.9 3.9 4.3.6-3.1 3 .7 4.3-3.8-2-3.8 2 .7-4.3-3.1-3 4.3-.6Z" fill="currentColor" strokeWidth="0.4" />
                    </>
                  ) : (
                    <>
                      <path d="M8 11V9c0-8 16-8 16 0v2l-6-5c-2 3-6 4-10 5Z" fill="currentColor" fillOpacity="0.16" />
                      <path d="M8 11v4a8 8 0 0 0 16 0v-4M12 22v2l-5 2q-3 1-3 4m16-8v2l5 2q3 1 3 4m-16-6 4 4 4-4" />
                      <circle cx="12.5" cy="13.5" r="0.85" fill="currentColor" stroke="none" />
                      <circle cx="19.5" cy="13.5" r="0.85" fill="currentColor" stroke="none" />
                      <path d="M13.5 18q2.5 1.5 5 0" />
                    </>
                  )}
                </svg>);
}
