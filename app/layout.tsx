import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/shared/header";
import Footer from "./_components/shared/footer";
import LenisInitializer from './_lib/LenisInitializer';
const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <div className="relative h-full min-h-screen">
          <div className="fixed bottom-0 z-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <Header />
          <LenisInitializer />
          <div className="pt-6 px-3 mx-auto z-50">
            {children}
            {/* <div className="min-h-[300vh]">
            </div> */}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
