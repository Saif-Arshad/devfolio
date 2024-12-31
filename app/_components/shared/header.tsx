/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import LetsTalk from '../buttons/LetsTalk';
import { usePathname } from 'next/navigation';

const ResponsiveNavbar = () => {
    const [navOpen, setNavOpen] = useState(false); // State only for mobile

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const currentPath = usePathname();

    const links = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about-us" },
        { title: "Portfolio", link: "/work" },
        { title: "Services", link: "/services" },
        { title: "Articles", link: "/articles" }
    ];

    return (
        <nav className="w-full bg-black shadow-lg z-20 flex items-center justify-between p-4">
            {/* Logo */}
            <Link href={"/"}>
                <div className="flex items-center pl-4 mt-3 group -rotate-90">
                    <svg className="group-hover:stroke-[#3ccf91]" width="35" height="35" viewBox="0 0 43 35" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41 35V0" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                        <path d="M2.44827 35V-9.53674e-07" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                        <path d="M41 13.5625L22.1724 28L2 13.5625" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                    </svg>
                </div>
            </Link>

            <ul className="hidden sm:flex space-x-8 items-center z-50">
                {links.map((item: any, index: number) => (
                    <Link href={item.link} key={index}>
                        <li className={`capitalize ${currentPath == item.link ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110 transition-all"}`}>
                            {item.title}
                        </li>
                    </Link>
                ))}
                <LetsTalk />
            </ul>

            {/* Hamburger Icon for Mobile */}
            <div className="sm:hidden cursor-pointer z-50" onClick={toggleNav}>
                <div className={`w-8 h-0.5 bg-gray-200 my-1 transition-transform duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-8 h-0.5 bg-gray-200 my-1 transition-opacity duration-300 ${navOpen ? 'opacity-0' : ''}`} />
                <div className={`w-8 h-0.5 bg-gray-200 my-1 transition-transform duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>

            <ul
                className={`fixed top-0 left-0 z-40 w-full h-screen bg-[#131418] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out sm:hidden ${navOpen ? 'clip-path-open' : 'clip-path-close'}`}
            >
                {links.map((item: any, index: number) => (
                    <Link href={item.link} key={index}>
                        <li className={`capitalize ${currentPath.startsWith(item.link) ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110 transition-all"}`}>
                            {item.title}
                        </li>
                    </Link>
                ))}
                <LetsTalk />
                {/* Close (X) Button */}
                {/* <div className="absolute top-5 right-5 sm:hidden z-[100] cursor-pointer" onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div> */}
            </ul>
        </nav>
    );
};

export default ResponsiveNavbar;
