import type { Metadata } from "next";
import "../globals.css";
import Header from "../_components/shared/header";
import Footer from "../_components/shared/footer";
import LenisInitializer from '../_lib/LenisInitializer';
import { PageTransition } from "../_lib/changePage";
import { ShootingStars } from "../_components/ui/shooting-stars";
import { StarsBackground } from "../_components/ui/stars-background";
import BackTop from "../_components/buttons/BackTop";



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
      <PageTransition>
        <div className="relative h-full min-h-screen">
          <div className="fixed bottom-0 z-0 font-poppins left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <Header />
          <LenisInitializer />
          {children}

          <div className="fixed bottom-4  right-4 z-50">
            <BackTop />
          </div>

          <div className="z-0 ">

            <ShootingStars />
            <StarsBackground />
          </div>
          <Footer />

        </div>
      </PageTransition>
    </>

  );
}
