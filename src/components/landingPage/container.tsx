import React from 'react';

import { ReactNode, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Container = ({
  children,
  className = '',
  ...props
}: ContainerProps) => {
  return (
    <div
      className={`
        w-full mx-auto px-2
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-[1200px]
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;