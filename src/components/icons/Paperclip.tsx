import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function Paperclip({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.6271 8.08291L9.11406 15.5959C7.40548 17.3044 4.63539 17.3044 2.92685 15.5959C1.21831 13.8873 1.21831 11.1172 2.92685 9.40866L10.4399 1.89568C11.5789 0.756656 13.4256 0.756656 14.5646 1.89568C15.7036 3.03471 15.7036 4.88145 14.5646 6.02047L7.34631 13.2388C6.77675 13.8084 5.85339 13.8084 5.28388 13.2388C4.71436 12.6693 4.71436 11.746 5.28388 11.1765L11.6184 4.84196"
        stroke={"currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
