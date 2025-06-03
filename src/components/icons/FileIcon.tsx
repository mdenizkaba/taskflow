// components/ui/InfoIcon.tsx
import React from "react";

interface InfoIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const FileIcon: React.FC<InfoIconProps> = ({ size = 20, className = "" }) => {
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
        d="M10.8333 4.83333L9.90376 2.9741C9.63617 2.439 9.50242 2.17144 9.30284 1.97597C9.12634 1.80311 8.91359 1.67164 8.68009 1.59109C8.41601 1.5 8.11685 1.5 7.51858 1.5H4.33334C3.39992 1.5 2.93321 1.5 2.57669 1.68166C2.26308 1.84144 2.00811 2.09641 1.84833 2.41002C1.66667 2.76653 1.66667 3.23325 1.66667 4.16667V4.83333M1.66667 4.83333H14.3333C15.7335 4.83333 16.4335 4.83333 16.9683 5.10582C17.4388 5.3455 17.8212 5.72795 18.0608 6.19836C18.3333 6.73313 18.3333 7.43317 18.3333 8.83333V12.5C18.3333 13.9002 18.3333 14.6002 18.0608 15.135C17.8212 15.6054 17.4388 15.9878 16.9683 16.2275C16.4335 16.5 15.7335 16.5 14.3333 16.5H5.66667C4.26654 16.5 3.56647 16.5 3.0317 16.2275C2.56129 15.9878 2.17884 15.6054 1.93916 15.135C1.66667 14.6002 1.66667 13.9002 1.66667 12.5V4.83333Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FileIcon;
