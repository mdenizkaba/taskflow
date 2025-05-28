interface TimeIconProps {
  className?: string;
}

export default function TimeIcon({ className }: TimeIconProps) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clock hand */}
      <path
        d="M20.121 13.601L23.735 27.087L34.693 24.151"
        stroke="url(#clockHandGradient)"
        strokeWidth="3.443"
        strokeLinecap="round"
      />
      
      {/* Clock circle */}
      <circle
        cx="23.998"
        cy="24.146"
        r="17.215"
        transform="rotate(-15 23.998 24.146)"
        stroke="url(#clockFaceGradient)"
        strokeWidth="3.443"
      />
      
      <defs>
        {/* Hand gradient */}
        <linearGradient
          id="clockHandGradient"
          x1="32.814"
          y1="18.414"
          x2="26.788"
          y2="28.85"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E5E9FF" />
        </linearGradient>
        
        {/* Face gradient */}
        <linearGradient
          id="clockFaceGradient"
          x1="23.998"
          y1="5.209"
          x2="23.998"
          y2="43.083"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E5EAFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}