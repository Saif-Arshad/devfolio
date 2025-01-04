"use client"

import React from 'react';
import Link from 'next/link';
import LetsTalk from '../buttons/LetsTalk';
import { usePathname } from 'next/navigation';
import { DrawerContent, DrawerFooter, DrawerHeader, Drawer, DrawerTrigger } from '../ui/drawer';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const ResponsiveNavbar = () => {

    const currentPath = usePathname();

    const links = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about-us" },
        { title: "Projects", link: "/work" },
        { title: "Services", link: "/services" },
        { title: "Articles", link: "/articles" }
    ];

    return (
        <nav className="w-full bg-black shadow-lg z-20 flex items-center justify-between p-4">
            <Link href={"/"}>
                <div className="flex items-center pl-4 mt-3 group -rotate-90">
                    <svg className="group-hover:stroke-[#3ccf91]" width="35" height="35" viewBox="0 0 43 35" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41 35V0" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                        <path d="M2.44827 35V-9.53674e-07" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                        <path d="M41 13.5625L22.1724 28L2 13.5625" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                    </svg>
                </div>
            </Link>

            <ul className="hidden md:flex space-x-4 items-center z-50">
                {links.map((item: any, index: number) => (
                    <Link href={item.link} key={index}>
                        <li className={`capitalize ${currentPath == item.link ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110 transition-all"}`}>
                            {item.title}
                        </li>
                    </Link>
                ))}
                <div className='pr-7 ' >
                    <LetsTalk />
                </div>
            </ul>
            <div className="md:hidden">

                <Drawer direction="left" >
                    <DrawerTrigger >
                        <Menu size={35} className="text-white" />
                    </DrawerTrigger>
                    <DrawerContent className='min-w-[300px]  h-full bg-black'>
                        <DrawerHeader>
                            <Image
                                src="/images/icon.jpg"
                                alt="Author Avatar"
                                height={100}
                                width={100}
                                className="w-14 h-14 rounded-full object-cover"
                            />
                        </DrawerHeader>

                        <div className='flex h-full mt-12 items-start flex-col ml-5 gap-6'>
                            {links.map((item: any, index: number) => (
                                <Link href={item.link} key={index}>
                                    <span className={`capitalize ${currentPath == item.link ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110  transition-all"} text-xl font-medium`}>
                                        {item.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <DrawerFooter>

                            <LetsTalk width="70%" />

                        </DrawerFooter>

                    </DrawerContent>
                </Drawer>
            </div>

        </nav>
    );
};

export default ResponsiveNavbar;
