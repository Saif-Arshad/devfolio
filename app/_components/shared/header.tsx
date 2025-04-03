"use client"

import React from 'react';
import Link from 'next/link';
import LetsTalk from '../buttons/LetsTalk';
import { usePathname } from 'next/navigation';

import {
    DrawerContent, DrawerFooter,
    DrawerClose,
    DrawerHeader, Drawer, DrawerTrigger
} from '../ui/drawer';
import Image from 'next/image';
import { BriefcaseBusiness, FileUser, Globe, Home, Menu, MessageCircleHeart, NotebookPen, UserRound } from 'lucide-react';

const ResponsiveNavbar = () => {

    const currentPath = usePathname();

    const links = [
        { title: "Home", link: "/", icon: <Home className='h-5 w-5' /> },
        { title: "About", link: "/about-us", icon: < UserRound className='h-5 w-5' /> },
        { title: "Portfolio", link: "/work", icon: <BriefcaseBusiness className='h-5 w-5' /> },
        { title: "Services", link: "/services", icon: <Globe className='h-5 w-5' /> },
        { title: "Articles", link: "/articles", icon: <NotebookPen className='h-5 w-5' /> },
    ];

    return (
        <nav className="w-full bg-black relative shadow-lg z-50 flex items-center justify-between p-4">
            <Link href={"/"}>
                <Image
                    src={"/images/logo.png"}
                    alt="Saif Ur Rehman"
                    height={50}
                    width={50}
                />
                {/* <div className="flex items-center pl-4 mt-3 group -rotate-90">
                    <svg className="group-hover:stroke-[#3ccf91]" width="35" height="35" viewBox="0 0 43 35" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41 35V0" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                        <path d="M2.44827 35V-9.53674e-07" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                        <path d="M41 13.5625L22.1724 28L2 13.5625" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                    </svg>
                </div> */}
            </Link>

            <ul className="hidden md:flex space-x-7 items-center z-50">
                {links.map((item: any, index: number) => (
                    <Link href={item.link} key={index}>
                        <li className={`capitalize ${currentPath == item.link ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110 transition-all"}`}>
                            {item.title}
                        </li>
                    </Link>
                ))}
                <LetsTalk />
            </ul>
            <div className="md:hidden">

                <Drawer direction="left" >
                    <DrawerTrigger >
                        <Menu size={35} className="text-white z-50" />
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
                                    <DrawerClose >

                                        <span className={`capitalize ${currentPath == item.link ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110  transition-all"} text-xl flex items-center `}>
                                            <span className="mr-2">{item.icon}</span>
                                            {item.title}
                                        </span>
                                    </DrawerClose>
                                </Link>
                            ))}
                            <Link href="/resume" >
                                <DrawerClose >
                                    <span className={`capitalize ${currentPath == "/resume" ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110  transition-all"} text-xl flex items-center gap-2 `}>
                                        <FileUser className='h-5 w-5' />
                                        My Resume
                                    </span>
                                </DrawerClose>
                            </Link>
                            <Link href="/contact-us" >
                                <DrawerClose >
                                    <span className={`capitalize ${currentPath == "/contact-us" ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110  transition-all"} text-xl flex items-center gap-2 `}>
                                        <MessageCircleHeart className='h-5 w-5' />
                                        Let's Talk
                                    </span>
                                </DrawerClose>
                            </Link>
                           


                        </div>


                    </DrawerContent>
                </Drawer>
            </div>

        </nav>
    );
};

export default ResponsiveNavbar;
