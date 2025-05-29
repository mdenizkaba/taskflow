import { ReactNode } from "react";
import CirclesBg from "@/components/icons/CirclesBg";
import clsx from "clsx";

export default function IconBox({children}: { children: ReactNode }) {
  return (
    <div
      className={clsx(
        "relative flex justify-center items-center 2xl:size-[60px] lg:size-[50px] size-[40px] text-slate-50",
        "border-[1px] border-slate-600  text-slate-50 lg:rounded-2xl rounded-xl overflow-hidden",
        "bg-linear-to-b from-slate-950 to-[#94A6FF]/20"
      )}
    >
      <CirclesBg />
      <div className="absolute inset-0 flex items-center justify-center  ">
        {children}
      </div>
    </div>
  );
}
