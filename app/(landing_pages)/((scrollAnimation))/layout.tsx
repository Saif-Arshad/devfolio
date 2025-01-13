import type { Metadata } from "next";
import "../../globals.css";
import LenisInitializer from "@/app/_lib/LenisInitializer";



export const metadata: Metadata = {
  title: "Saif Ur Rehman - Software Engineer",
  description: "A software engineer with a passion for creating incredible web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <LenisInitializer />
      {children}


    </>

  );
}
