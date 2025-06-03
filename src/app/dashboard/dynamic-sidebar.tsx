import SideButton from "@/components/dashboard/SideButton";
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

export default function DynamicdSidebar(){
  return (
    <div className="h-full w-[280px] px-[22px] relative border-r flex flex-col">
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
        <SideButton
          label={"Dashboard"}
          icon={<HomeIcon size={20} />}
          badge={0}
        />
        <SideButton
          label={"My Tasks"}
          icon={<FileIcon size={20} />}
          badge={5}
          active
        />
        <SideButton
          label={"Messages"}
          icon={<MessageIcon size={20} />}
          badge={16}
        />
        <SideButton
          label={"Analytics"}
          icon={<PieIcon size={20} />}
          badge={0}
        />
        <SideButton label={"Team"} icon={<TeamIcon size={20} />} badge={0} />
        <SideButton
          label={"Notifications"}
          icon={<BellIcon size={20} />}
          badge={12}
        />

        <div className="w-full overflow-hidden tracking-[5px] mb-3 text-[#5E6DB2] opacity-40">
          .................................
        </div>

        <SideButton
          label={"Archive"}
          icon={<ArchiveIcon size={20} />}
          badge={0}
        />
        <SideButton label={"Trash"} icon={<TrashIcon size={20} />} badge={0} />
      </div>
      <div className=" w-full py-[22px]">
        <Link href="/dashboard" className="flex bg-[#1b1d2a] px-[12px] py-[10px] items-center gap-[8px] rounded-xl text-[#B5BBD7] hover:text-white transition-colors duration-300 border-2 border-[#222436]">
          <SupportIcon size={22} className="-mb-1"/>
          <span className="text-base">Help & Support</span>
        </Link>
      </div>
    </div>
  );
};