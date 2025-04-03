import type { Metadata } from "next";
import "../globals.css";
import Header from "../_components/shared/header";
import Footer from "../_components/shared/footer";
import { PageTransition } from "../_lib/changePage";
import { ShootingStars } from "../_components/ui/shooting-stars";
import { StarsBackground } from "../_components/ui/stars-background";
import BackTop from "../_components/buttons/BackTop";



export const metadata: Metadata = {
  title: "Saif Ur Rehman - Full Stack Web & Mobile Developer",
  description:
    "Saif Ur Rehman - Full-stack web and mobile app developer specializing in modern technologies like React, Next.js, Node.js, React Native, and more. Explore my portfolio today!",
  keywords: [
    "full stack developer",
    "web developer",
    "mobile app developer",
    "Next.js developer",
    "React developer",
    "React Native developer",
    "portfolio",
    "Saif ur Rehman",
    "freelance web developer",
    "freelance mobile app developer",
    "frontend developer",
    "backend developer",
    "JavaScript developer",
    "Node.js developer",
    "cross-platform app developer",
    "custom web development",
    "custom mobile app development",
    "software engineer portfolio",
    "modern web design",
    "responsive web development",
    "progressive web apps (PWA)",
    "UI/UX design services",
    "REST API development",
    "GraphQL developer",
    "MongoDB developer",
    "MERN stack developer",
    "web app development services",
    "mobile app design and development",
    "freelance software engineer",
    "React.js expert",
    "Next.js expert",
    "full stack web developer portfolio",
    "Saif ur Rehman developer",
    "e-commerce app development",
    "real-time app development",
    "single-page applications (SPA)",
    "cross-platform mobile app solutions",
    "modern JavaScript frameworks",
    "scalable backend development",
    "serverless architecture developer",
    "cloud-native app developer",
    "custom software solutions",
    "technology consultant",
    "freelance React Native developer",
    "mobile app prototyping",
    "startup app development",
    "business website developer",
    "enterprise application development",
    "end-to-end software development services",
    "high-performance mobile apps"
  ],
  openGraph: {
    url: "https://saifurrehman.info",
    type: "website",
    title: "Saif Ur Rehman - Full Stack Web & Mobile Developer",
    description:
      "Welcome to the portfolio of Saif Ur Rehman, a full-stack developer experienced in building scalable web and mobile apps with cutting-edge technologies like Next.js, React, Node.js, and Flutter.",
    images: [
      {
        url: "https://saifurrehman.info/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75",
        width: 128,
        height: 75,
        alt: "Saif Ur Rehman - Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Saif Ur Rehman - Full Stack Web & Mobile Developer",
    description:
      "Discover the work of Saif Ur Rehman, a full-stack developer specializing in web and mobile app development using technologies like React, Next.js, and Flutter. Check out my portfolio today!",
    creator: "@saifurrehman",
    site: "@saifurrehman",
    images: [
      {
        url: "https://saifurrehman.info/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75",
        width: 128,
        height: 75,
        alt: "Saif Ur Rehman - Logo"
      }
    ]
  },
  alternates: {
    canonical: "https://saifurrehman.info"
  }
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
