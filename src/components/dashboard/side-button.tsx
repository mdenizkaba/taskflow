import Link from "next/link";
import RandomStars from "../landingPage/random-stars.tsx";
import clsx from "clsx";

type BadgeProps = {
  count: number;
  active: boolean;
};

const Badge = ({ count, active }: BadgeProps) => {
  if (count === 0) return null;
  return (
    <div
      className={clsx(
        "relative z-10 p-[1px] rounded-lg bg-[#1b1d2a]",
        active &&
          "bg-linear-to-tl from-[#444A6D] from-20% via-[#57608E] to-[#7F8BCA]"
      )}
    >
      <div
        className={clsx(
          "text-white font-medium px-2.5 py-1 rounded-lg text-xs tracking-wider",
          active && "bg-linear-to-b from-[#283050] to-[#40435d]"
        )}
      >
        {count}
      </div>
    </div>
  );
};

type SideButtonProps = {
  label: string;
  icon: React.ReactNode;
  badge?: number;
  active?: boolean;
  href:string
};

export default function SideButton({
  label,
  icon,
  badge = 0,
  active = false,
  href
}: SideButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex w-full h-[36px] p-[1px] rounded-lg bg-linear-to-tl from-transparent from-20% via-transparent to-transparent",
        active &&
          "bg-linear-to-tl from-[#242C56] from-20% via-[#242C56] to-[#7C92FF]"
      )}
    >
      <div
        className={clsx(
          "relative w-full h-full items-center px-[12px] rounded-lg flex text-[#969CB7] hover:text-white transition-colors duration-200",
          active &&
            "bg-linear-to-r from-[#2A3364] from-10% via-[#1C2346] via-20% to-[#13172E] text-white"
        )}
      >
        <div className="flex gap-2 w-full items-center relative z-10">
          {icon}
          <div className="font-normal text-sm tracking-wide">{label}</div>
        </div>

        <Badge count={badge} active={active} />
        {active && (
          <div className="absolute inset-0 left-1/3  overflow-hidden z-0 blur-[1px] opacity-90">
            <RandomStars count={20} width={170} height={50} />
          </div>
        )}
      </div>
    </Link>
  );
}
