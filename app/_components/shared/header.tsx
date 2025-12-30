"use client"

import { useEffect, useState } from "react";

import Link from 'next/link';
import LetsTalk from '../buttons/LetsTalk';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";

import {
    DrawerContent, DrawerFooter,
    DrawerClose,
    DrawerHeader, Drawer, DrawerTrigger
} from '../ui/drawer';
import Image from 'next/image';
import { BriefcaseBusiness, FileUser, Globe, Home, Menu, MessageCircleHeart, NotebookPen, UserRound } from 'lucide-react';

const ResponsiveNavbar = () => {

    const currentPath = usePathname();
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setSticky(window.scrollY >= 80);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const links = [
        { title: "Home", link: "/", icon: <Home className='h-5 w-5' /> },
        { title: "About", link: "/about-us", icon: < UserRound className='h-5 w-5' /> },
        { title: "My Previous Work", link: "/work", icon: <BriefcaseBusiness className='h-5 w-5' /> },
        // { title: "What I Do", link: "/services", icon: <Globe className='h-5 w-5' /> },
        { title: "Articles", link: "/articles", icon: <NotebookPen className='h-5 w-5' /> },
    ];

    return (
        <div className=" w-full z-[10000] relative flex items-center justify-center">

        <header className="sm:fixed top-3 z-50 w-full flex items-center justify-center">
        <div className=" w-full flex items-center justify-center">
          <nav
            className={`flex items-center  justify-center flex-col transition-all duration-300 ${
              sticky
                ? "mx-4 rounded-xl shadow-lg sm:bg-neutral-800 backdrop-blur-md md:w-fit w-full sm:w-[80%]   "
                : "w-full"
            }`}
          >
            {/* Animated Row */}
            <motion.div
              className="container w-full mx-auto sm:px-6 px-2 py-3 flex items-center flex-wrap"
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                justifyContent: sticky ? "center" : "space-between",
                gap: sticky ? "62px" : "32px",
              }}
            >
              {/* Logo */}
              <motion.div layout>
                <Link href="/" className="flex items-center gap-2 shrink-0">
                  <img
                      src={"/images/logo.png"}
                    alt={"logho"}
                    className="h-14  w-auto object-contain"
                  />
                </Link>
              </motion.div>
  
              {/* Nav */}
              <motion.nav className="hidden md:flex gap-4 items-center" layout>
                <ul className="flex items-center gap-6">
                {links.map((item, index) => (
                   <Link href={item.link} key={index}>
                                    <li className={` cursor-pointer capitalize ${currentPath == item.link ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110 transition-all"}`}>
                                        {item.title}
                                    </li>
                                </Link>
                ))}
                </ul>
              </motion.nav>
  
              {/* CTA */}
              <motion.div className="gap-3 flex items-center " layout>
                <div className={` flex items-center gap-3`}>

              <LetsTalk />
              </div>

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
              </motion.div>
  
              {/* Mobile menu toggle */}
              {/* <button
                aria-label="Toggle menu"
                className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <motion.div
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                 
                </motion.div>
              </button> */}
            </motion.div>
  
         
          </nav>
        </div>
      </header>
      </div>

        // <nav className="w-full bg-black relative shadow-lg z-50 flex items-center justify-between p-4">
        //     <Link href={"/"}>
        //         <Image
        //             src={"/images/logo.png"}
        //             alt="Saif Ur Rehman"
        //             height={50}
        //             width={50}
        //         />
               
        //     </Link>

        //     <ul className="hidden md:flex space-x-7 items-center z-50">
        //         {links.map((item: any, index: number) => (
        //             <Link href={item.link} key={index}>
        //                 <li className={`capitalize ${currentPath == item.link ? "text-primaryColor" : "text-white hover:text-primaryColor hover:scale-x-110 transition-all"}`}>
        //                     {item.title}
        //                 </li>
        //             </Link>
        //         ))}
        //         <LetsTalk />
        //     </ul>
       

        // </nav>
    );
};

export default ResponsiveNavbar;
