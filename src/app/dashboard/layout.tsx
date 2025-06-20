import DashboardLayout from "@/components/dashboard/dashboard-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskflow - Dasboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
