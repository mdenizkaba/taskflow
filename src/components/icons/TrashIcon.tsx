import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const TrashIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => {
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
        d="M12.3333 4.99999V4.33332C12.3333 3.39991 12.3333 2.93319 12.1517 2.57667C11.9919 2.26306 11.7369 2.0081 11.4233 1.84831C11.0668 1.66666 10.6001 1.66666 9.66667 1.66666H8.33333C7.39992 1.66666 6.9332 1.66666 6.57668 1.84831C6.26307 2.0081 6.00811 2.26306 5.84832 2.57667C5.66667 2.93319 5.66667 3.39991 5.66667 4.33332V4.99999M7.33333 9.58332V13.75M10.6667 9.58332V13.75M1.5 4.99999H16.5M14.8333 4.99999V14.3333C14.8333 15.7335 14.8333 16.4335 14.5608 16.9683C14.3212 17.4387 13.9387 17.8212 13.4683 18.0608C12.9335 18.3333 12.2335 18.3333 10.8333 18.3333H7.16667C5.76653 18.3333 5.06647 18.3333 4.53169 18.0608C4.06128 17.8212 3.67883 17.4387 3.43915 16.9683C3.16667 16.4335 3.16667 15.7335 3.16667 14.3333V4.99999"
        stroke={"currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
