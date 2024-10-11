"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ResponsiveNavbar = () => {
    const [navOpen, setNavOpen] = useState(true);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setNavOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className=" w-full bg-[#131418] shadow-lg z-10 flex items-center justify-between h-24 px-4">
            {/* Logo */}
            <div className="flex items-center pl-4">
                <Image src="/logo.svg" alt="Logo Image" width={80} height={80} className="h-20 w-20" />
            </div>

            {/* Hamburger Icon */}
            <div className="sm:hidden cursor-pointer" onClick={toggleNav}>
                <div className={`w-8 h-0.5 bg-gray-200 my-1 transition-all duration-300 ${navOpen ? 'transform rotate-45 translate-y-2' : ''}`} />
                <div className={`w-8 h-0.5 bg-gray-200 my-1 transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`} />
                <div className={`w-8 h-0.5 bg-gray-200 my-1 transition-all duration-300 ${navOpen ? 'transform -rotate-45 -translate-y-2' : ''}`} />
            </div>

            {/* Navigation Links */}
            <ul
                className={`fixed top-0 left-0 z-50 w-full h-screen bg-[#131418] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out sm:static sm:h-auto sm:flex sm:flex-row sm:justify-evenly sm:items-center sm:w-auto sm:bg-transparent ${navOpen ? 'clip-path-open' : 'clip-path-close'
                    } sm:clip-path-none`}
            >
                <li className="transition-all hover:text-[#61DAFB]">
                    <a href="#">Home</a>
                </li>
                <li className="transition-all hover:text-[#61DAFB]">
                    <a href="#">Solutions</a>
                </li>
                <li className="transition-all hover:text-[#61DAFB]">
                    <a href="#">Products</a>
                </li>
                <li className="transition-all hover:text-[#61DAFB]">
                    <a href="#">Services</a>
                </li>
                <li className="transition-all hover:text-[#61DAFB]">
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <button className="bg-transparent border-2 border-gray-200 text-gray-200 py-2 px-4 rounded-full hover:bg-gray-200 hover:text-[#131418] transition-all">
                        Login
                    </button>
                </li>
                <li>
                    <button className="bg-[#61DAFB] text-[#131418] border-2 border-[#61DAFB] py-2 px-4 rounded-full hover:bg-transparent hover:text-gray-200 transition-all">
                        Join
                    </button>
                </li>
                <div className="absolute top-5 right-5 sm:hidden z-[100] cursor-pointer" onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </ul>

        </nav>
    );
};

export default ResponsiveNavbar;
