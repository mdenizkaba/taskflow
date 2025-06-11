import clsx from "clsx";

const typeMap: Record<string, string> = {
  red: "bg-[#611E2A] text-red-50 border-2 border-[#FF5252]",
  green: "bg-[#2E612A] text-green-50 border-2 border-[#7FFF52]",
  yellow: "bg-[#5F462A] text-yellow-50 border-2 border-[#FFB052]",
  borderless: "bg-transparent text-white border-2 border-white/10",
};

export default function PriorityBadge({
  type,
  children,
  className = "",
}: {
  type?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const colorClasses = typeMap[type ?? "borderless"] || typeMap.borderless;
  return (
    <div
      className={clsx(
        "inline-flex items-center px-2.5 rounded-full text-[12px] font-medium",
        `bg-${type}-900 text-${type}-800`,
        colorClasses,
        className
      )}
    >
      {children}
    </div>
  );
}
