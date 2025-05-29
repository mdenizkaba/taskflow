interface CheckIconProps {
  className?: string;
}

export default function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12L10 20L28 2"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}