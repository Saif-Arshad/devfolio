import type { Metadata } from "next";
import { Poppins } from 'next/font/google'; // Import Poppins from Google
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
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
        className={`${poppins.variable} antialiased bg-gray-900 text-white`}
      >
        <div className=" mx-auto relative flex items-center justify-center ">

          <div className=" max-w-[1440px] w-full">
            {children}

          </div>
        </div>

      </body>
    </html>
  );
}
