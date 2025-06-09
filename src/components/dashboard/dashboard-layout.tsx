import { ReactNode } from "react";
import DynamicdSidebar from "./dynamic-sidebar";

function DashboardBody({ children }: { children?: ReactNode }) {
  return (
    <div className="flex flex-1 pt-2 w-screen">
      <div className="flex flex-1 bg-linear-to-tl from-[#222641] from-80%  to-[#7E83A9] rounded-tl-2xl p-[1px]">
        <div className="flex-1 rounded-tl-2xl bg-linear-to-tl from-[#090B17] to-[#161825] px-8 py-6 text-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <div className="bg-[#12131B] h-dvh w-full flex">
      <DynamicdSidebar />
      <DashboardBody>{children}</DashboardBody>
    </div>
  );
}
