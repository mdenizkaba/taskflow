'use client';

import ArchiveIcon from "@/components/icons/ArchiveIcon";
import BellIcon from "@/components/icons/BellIcon";
import FileIcon from "@/components/icons/FileIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import PieIcon from "@/components/icons/PieIcon";
import SupportIcon from "@/components/icons/SupportIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import Image from "next/image";
import Link from "next/link";
import SideButton from "./side-button";
import { useNextSegmentAfter } from "@/hooks/useNextSegmentAfter";

const dashboardLinks = [
  {
    label: "Dashboard",
    icon: <HomeIcon size={20} />,
    badge: 0,
    href:"/dashboard/",
    segment:""
  },
  {
    label: "My Tasks",
    icon: <FileIcon size={20} />,
    badge: 5,
    href:"/dashboard/my-tasks/tasks",
    segment:"my-tasks"
  },
  {
    label: "Messages",
    icon: <MessageIcon size={20} />,
    badge: 16,
    href:"/dashboard/message",
    segment:"message"
  },
  {
    label: "Analytics",
    icon: <PieIcon size={20} />,
    badge: 0,
    href:"/dashboard/analytics",
    segment:"analytics"
  },
  {
    label: "Team",
    icon: <TeamIcon size={20} />,
    badge: 0,
    href:"/dashboard/team",
    segment:"team"
  },
  {
    label: "Notifications",
    icon: <BellIcon size={20} />,
    badge: 0,
    href:"/dashboard/notifications",
    segment:"notifications"
  },
];

export default function DynamicdSidebar() {
  const segment = useNextSegmentAfter('dashboard');
  return (
    <div className="h-full w-[280px] px-[18px] relative border-r flex flex-col">
      <Image
        src="/dashboard/dashboard-light.png"
        fill={true}
        alt={"Taskflow Dashboard Logo Openned"}
        className="object-contain object-left-top min-w-[280px] max-w-[280px] opacity-50 z-0 pointer-events-none"
      />
      <div className="relative h-[48px] w-[133px] mt-[28px] mb-[50px] z-10 pointer-events-none">
        <Image
          src="/dashboard/logo-open.png"
          fill={true}
          alt={"Taskflow Dashboard Logo Openned"}
          className="pointer-events-none"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col gap-[16px]">
        {dashboardLinks.map((item, index) => {
          return (
            <SideButton
              key={item.label+index}
              label={item.label}
              icon={item.icon}
              badge={item.badge}
              href={item.href}
              active={segment===item.segment}
            />
          );
        })}

        <div className="w-full overflow-hidden tracking-[5px] mb-1 -mt-3 text-[#5E6DB2] opacity-40">
          .................................
        </div>

        <SideButton
          label={"Archive"}
          icon={<ArchiveIcon size={20} />}
          badge={0}
          href=""
        />
        <SideButton label={"Trash"} icon={<TrashIcon size={20} />} badge={0}  href=""/>
      </div>
      <div className=" w-full py-[18px]">
        <Link
          href="/dashboard"
          className="flex bg-[#1b1d2a] px-[12px] py-[10px] items-center gap-[8px] rounded-xl text-[#B5BBD7] hover:text-white transition-colors duration-300 border-2 border-[#222436]"
        >
          <SupportIcon size={22} className="-mb-1" />
          <span className="text-base">Help & Support</span>
        </Link>
      </div>
    </div>
  );
}
