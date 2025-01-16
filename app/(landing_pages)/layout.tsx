import type { Metadata } from "next";
import "../globals.css";
import Header from "../_components/shared/header";
import Footer from "../_components/shared/footer";
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
        <div className="relative h-full z-0">
          <Header />
          <div className=" h-full relative  w-full z-50">
            {children}
          </div>

          <div className="fixed bottom-4  right-4 z-50">
            <BackTop />
          </div>

          {/* <div className="z-0 relative h-full w-full"> */}
          <ShootingStars />
          <StarsBackground />
          {/* </div> */}
          <Footer />

        </div>
      </PageTransition>
    </>

  );
}
