
import DashboardTab from "@/components/dashboard/dashboard-tab";
import SmallTitle from "@/components/dashboard/small-title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskflow | Dasboard (My Task)",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <SmallTitle label="Tasks" />
      <div className="text-[24px] font-bold text-white mt-6">My Tasks</div>
      <DashboardTab/>
      {children}
    </div>
  );
}
