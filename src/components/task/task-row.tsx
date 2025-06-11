import clsx from "clsx";
import CirclePlusIcon from "../icons/CirclePlusIcon";
import VerticalDots from "../icons/VerticalDots";

const RowHeader = ({ label, badge }: { label: string; badge: number }) => {
  return (
    <div className="px-4 h-12 flex justify-between items-center sticky top-0 z-10 backdrop-blur-xs">
      <div className="flex gap-2 justify-center">
        <div className="text-white font-medium text-base">{label}</div>
        {badge > 0 && (
          <div className="flex justify-center items-center rounded-lg bg-[#5B72EF]/15 px-2 text-xs">
            {badge}
          </div>
        )}
      </div>
      <div className="flex gap-2 h-full justify-center items-center">
        <div className="cursor-pointer">
          <CirclePlusIcon />
        </div>
        <div className="cursor-pointer">
          <VerticalDots size={20} />
        </div>
      </div>
    </div>
  );
};

export default function Row ({
  children,
  className = "",
  label,
  badge = 0,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
  badge?: number;
}) {
  // Todo: genişlik buluğu alanın genişliğine ulaşıp ordan hesaplanmalı ve min-w ile sabitlenmeli
  return (
    <div className={clsx(
      "min-w-[315px] w-[calc(((((100vw)-280px)-3rem)-(4.5rem+18px))/4)] ",
      className
    )}>
      <RowHeader label={label} badge={badge} />
      <div className="rounded-2xl bg-[#12131B] mt-3 p-3 gap-3 flex flex-col">
        {children}
      </div>
    </div>
  );
};