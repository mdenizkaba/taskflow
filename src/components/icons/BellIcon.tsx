import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const BellIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => {
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
        d="M7.79516 17.5C8.38275 18.0187 9.15467 18.3333 10 18.3333C10.8454 18.3333 11.6172 18.0187 12.2048 17.5M15 6.66666C15 5.34057 14.4733 4.06881 13.5356 3.13112C12.5978 2.19344 11.3261 1.66666 10 1.66666C8.67392 1.66666 7.40216 2.19344 6.46448 3.13112C5.5268 4.06881 5.00001 5.34057 5.00001 6.66666C5.00001 9.24182 4.35041 11.005 3.62473 12.1712C3.01262 13.1549 2.70656 13.6467 2.71778 13.784C2.73021 13.9359 2.7624 13.9938 2.88482 14.0847C2.9954 14.1667 3.49384 14.1667 4.49072 14.1667H15.5093C16.5062 14.1667 17.0047 14.1667 17.1152 14.0847C17.2377 13.9938 17.2698 13.9359 17.2823 13.784C17.2935 13.6467 16.9874 13.1549 16.3753 12.1712C15.6496 11.005 15 9.24182 15 6.66666Z"
        stroke={"currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BellIcon;
