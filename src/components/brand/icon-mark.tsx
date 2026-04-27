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
        d="M15.5 15.25H21L24 28.5L27.05 15.25H32.5L27.15 33H20.9L15.5 15.25Z"
        fill="white"
      />
    </svg>
  );
}
