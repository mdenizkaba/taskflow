interface ChatIconProps {
  className?: string;
}

export default function ChatIcon({ className }: ChatIconProps) {
  return (
    <svg
      className={className}
      width="30" 
      height="30"
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.221 29.525a19.8 19.8 0 0 0 17.755-10.463C33.575 11.54 28.218 4.026 20.012 2.282 11.806.538 3.856 5.223 2.257 12.745c-.738 3.474.007 6.944 1.83 9.845.556.89.856 1.977.391 2.915-.465.938-1.2 1.835-2.106 2.535.558.228 1.134.404 1.724.529 2.117.45 4.219.203 6.069-.586 1.26.648 2.636 1.142 4.1 1.453Z"
        stroke="url(#chatGradient)"
        strokeWidth="3.09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient 
          id="chatGradient" 
          x1="20.012" 
          y1="2.282" 
          x2="13.958" 
          y2="30.763" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
    </svg>
  );
}