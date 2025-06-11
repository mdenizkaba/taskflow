import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function CalendarCheck({
  size = 20,
  className = "",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 6.66668H2.00003M14 8.33334V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2844 3.07641 12.908 2.88466C12.4802 2.66668 11.9202 2.66668 10.8 2.66668H5.20003C4.07992 2.66668 3.51987 2.66668 3.09205 2.88466C2.71572 3.07641 2.40976 3.38237 2.21802 3.7587C2.00003 4.18652 2.00003 4.74657 2.00003 5.86668V11.4667C2.00003 12.5868 2.00003 13.1468 2.21802 13.5747C2.40976 13.951 2.71572 14.2569 3.09205 14.4487C3.51987 14.6667 4.07992 14.6667 5.20003 14.6667H8.00003M10.6667 1.33334V4.00001M5.33336 1.33334V4.00001M9.6667 12.6667L11 14L14 11"
         stroke={"currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
