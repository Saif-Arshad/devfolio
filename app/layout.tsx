import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

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
    "Flutter developer",
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
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} antialiased bg-[#0a0d0f] text-white`}
      >
        <GoogleAnalytics gaId="G-X83152KEJK" />
        <div className="mx-auto relative flex items-center justify-center">
          <div className="max-w-[1640px] w-full">
            {children}
          </div>
        </div>
        <script defer data-domain="saifurrehman.info" src="https://plausible.io/js/script.js"></script>
      </body>
    </html>
  );
}
