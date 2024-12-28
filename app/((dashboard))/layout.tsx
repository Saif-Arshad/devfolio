import type { Metadata } from "next";
import "../globals.css";
import DashboardHeader from "../_components/shared/DashboardHeader";


export const metadata: Metadata = {
  title: "Dashboard - Software Engineer",
  description: "A software engineer with a passion for creating incredible web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-screen max-w-[98vw] overflow-x-hidden">
      <DashboardHeader />
      {children}
    </div>


  );
}
