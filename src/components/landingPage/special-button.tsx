import React from "react";

type HeroButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  light?:boolean;
};

export default function SpecialButton({ children, light=false, ...props }: HeroButtonProps) {
  return (
    <div
    {...props}
     className="text-sm group relative p-[2px] rounded-full overflow-hidden font-semibold cursor-pointer">
      {
        light?<div className="relative bg-radial-[at_50%_75%] from-[#DBE1FF] via-[#CBD4FF] to-[#A6B5FF] to-90% px-7 py-2 rounded-full inset-shadow-[0_5px_5px_#728AFF80] border border-[#c9d1f8] text-[#303A69] z-20 min-w-[130px] text-center">
        {children}
      </div>:<div className="relative bg-radial-[at_50%_75%] from-[#728AFF] via-[#4766FF] to-[#2C4FFF] to-90% px-7 py-2 rounded-full inset-shadow-[0_5px_5px_#728AFF80] border border-[#7D8ACF] text-white z-20 min-w-[130px] text-center">
        {children}
      </div>
      }
      <div className="absolute top-0 left-2 group-hover:left-7 group-hover:w-30 w-14 h-7 bg-white z-10 blur-[2px] transition-all duration-300"/>
    </div>
  );
}
