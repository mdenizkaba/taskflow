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
        md:max-w-[500px]
        lg:max-w-[650px]
        xl:max-w-[1000px]
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