"use client";

import clsx from "clsx";
import RandomStars from "../landingPage/random-stars.tsx";
import Link from "next/link.js";
import { useNextSegmentAfter } from "@/hooks/useNextSegmentAfter";

type DashboardButtonProps = {
  label: string;
  active?: boolean;
  href: string;
};

const DashboardButton = ({
  label,
  href = "/dashboard/my-tasks/",
  active = false,
}: DashboardButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "p-[1px] text-[#969CB7] rounded-md",
        active && "bg-linear-to-b from-[#404875] to-[#546BE2] text-white"
      )}
    >
      <div
        className={clsx(
          "rounded-md px-[12px] py-[5px] text-sm overflow-hidden",
          active &&
            "relative bg-[linear-gradient(to_bottom,_#2F365C_0%,_#1A1E33_84%,_#2C3255_100%)]"
        )}
      >
        {label}
        {active && (
          <div className="absolute inset-0 opacity-50">
            <RandomStars count={15} width={100} height={30} />
          </div>
        )}
      </div>
    </Link>
  );
};

const tabsList = [
  {
    label: "Overview",
    href: "/dashboard/my-tasks/",
    segment: "",
  },
  {
    label: "Tasks",
    href: "/dashboard/my-tasks/tasks",
    segment: "tasks",
  },
  {
    label: "Discussions",
    href: "/dashboard/my-tasks/discussions",
    segment: "discussions",
  },
  {
    label: "Timeline",
    href: "/dashboard/my-tasks/timeline",
    segment: "timeline",
  },
];

export default function DashboardTab() {
  const segment = useNextSegmentAfter('my-tasks');
  return (
    <ul className="flex border-b border-[#252C52] pb-2 pt-4 mb-4">
      {tabsList.map((item, index) => {
        return (
          <DashboardButton
            key={item.label + index}
            href={item.href}
            label={item.label}
            active={segment===item.segment}
          />
        );
      })}
    </ul>
  );
}
