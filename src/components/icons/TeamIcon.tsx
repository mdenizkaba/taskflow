import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const TeamIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => {
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
        d="M13.3333 2.8898C14.5681 3.50343 15.4167 4.77762 15.4167 6.25C15.4167 7.72238 14.5681 8.99658 13.3333 9.61017M15 13.972C16.2596 14.5419 17.3938 15.4708 18.3333 16.6667M1.66667 16.6667C3.28875 14.6022 5.49099 13.3333 7.91667 13.3333C10.3423 13.3333 12.5446 14.6022 14.1667 16.6667M11.6667 6.25C11.6667 8.32107 9.98776 10 7.91667 10C5.84561 10 4.16667 8.32107 4.16667 6.25C4.16667 4.17893 5.84561 2.5 7.91667 2.5C9.98776 2.5 11.6667 4.17893 11.6667 6.25Z"
        stroke={"currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TeamIcon;
