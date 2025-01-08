"use client"
import React from 'react';
import Link from 'next/link';
import { Facebook, Github, Linkedin } from 'lucide-react';
import Magnet from "./megenet";
import { usePathname } from "next/navigation";

function Footer() {
    const links = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about-us"
        },
        {
            title: "Contact",
            link: "/contact-us"
        },
        {
            title: "Portfolio",
            link: "/work"
        },
        {
            title: "Articles",
            link: "/articles"
        },
        {
            title: "Services",
            link: "/services"
        },
        // {
        //     title: "Resume",
        //     link: "/resume"
        // },
    ]
    const currentPath = usePathname()
    return (
        <footer className="relative flex flex-col z-20 md:flex-row justify-evenly items-end w-full  my-6 p-5 sm:p-20 md:p-[5rem_2vw]">
            <div className="flex flex-col items-start justify-start  w-full md:w-[28%]">
                <div className="flex gap-4">
                    <Link href="http://github.com/Saif-Arshad/" target="_blank" className="flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-white/10 rounded-[0.4rem] hover:scale-105 transition-all">
                        <Github />
                    </Link>
                    <Link href="https://www.linkedin.com/in/saif-rehman-professional/" target="_blank" className="flex hover:scale-105 transition-all justify-center items-center w-[3.2rem] h-[3.2rem] bg-white/10 rounded-[0.4rem]">
                        <Linkedin />
                    </Link>
                    <Link href="https://web.facebook.com/people/Saif-Ur-Rehman/pfbid02q6ZGZtrjSpcQkGtcLpccSVxc12BNcS2rUPHwB5FkvYF33de2thQGbeL66SmCVMw9l/" target="_blank" className="flex hover:scale-105 transition-all justify-center items-center w-[3.2rem] h-[3.2rem] bg-white/10 rounded-[0.4rem]">
                        <Facebook />
                    </Link>
                </div>
                <div className="mt-10">

                    <Magnet padding={50} disabled={false}>
                        <Link href={"mailto:saifarshad3344@gmail.com"}>
                            <p className="mb-3">
                                Made with <span className="">❤️</span> by
                                <span className="text-primaryColor mx-2 font-semibold">
                                    Saif Ur Rehman
                                </span>
                            </p>
                        </Link>
                    </Magnet>
                </div>
            </div>

            <div className="flex flex-col gap-3 items-start my-10 sm:my-0 justify-start p-[1.2rem_3.2rem] w-full md:w-[28%] bg-[#121212] rounded-[1.8rem]">

                {
                    links.slice(0, 3).map((item: any, index: number) => (
                        <Link className={`capitalize ${currentPath == item.link ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110 transition-all"}`} key={index} href={item.link}>{item.title}</Link>
                    ))
                }



            </div>

            <div className="flex flex-col gap-3 items-start justify-start p-[1.2rem_3.2rem] w-full md:w-[28%] bg-[#121212] rounded-[1.8rem]">
                {
                    links.slice(3).map((item: any, index: number) => (
                        <Link className={`capitalize ${currentPath == item.link ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110 transition-all"}`} key={index} href={item.link}>{item.title}</Link>
                    ))
                }
            </div>

            <div className="absolute inset-0 backdrop-blur-[40px] z-[-5] mask-image-linear-gradient"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black z-[-7]"></div>
        </footer>
    );
}

export default Footer;
