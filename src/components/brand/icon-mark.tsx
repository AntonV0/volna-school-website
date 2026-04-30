type IconMarkProps = {
  size?: number;
};

export function IconMark({ size = 32 }: IconMarkProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 48 48"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#108CA3" height="48" rx="24" width="48" />
      <path
        d="M13 18.5C16.8 15.2 20.7 15.2 24.5 18.5C28.3 21.8 32.2 21.8 36 18.5"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="3.2"
      />
      <path
        d="M14.5 25.5C18.3 22.2 21.9 22.2 25.7 25.5C29.5 28.8 33.2 28.8 37 25.5"
        stroke="white"
        strokeLinecap="round"
        strokeOpacity="0.78"
        strokeWidth="3.2"
      />
      <path
        d="M16.5 32.5C20.2 30.35 23.85 30.35 27.5 32.5C30.15 30.95 32.8 30.55 35.5 31.35V35.25C32.65 34.4 29.98 34.8 27.5 36.45C23.85 34.3 20.18 34.3 16.5 36.45V32.5Z"
        fill="white"
      />
      <circle cx="34.5" cy="13.5" fill="#EF3232" r="3.5" />
    </svg>
  );
}
