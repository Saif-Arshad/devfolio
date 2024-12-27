"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import React from 'react'
import { logoutUser } from '../../_lib/auth';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

function DashboardHeader() {
    const links: any = [
        { title: "Dashboard", link: "/dashboard" },
        { title: "Articles", link: "/dashboard/articles" },
        { title: "Projects", link: "/dashboard/work" },
    ];
    const router = useRouter()
    const logoutCurrentUser = () => {
        logoutUser();
        document.cookie = 'admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        router.push("/")

    }
    return (
        <nav className="w-full shadow-lg z-20 flex items-center justify-between px-4">
            <Link href={"/dashboard"}>
                <div className="hidden sm:flex items-center pl-4 mt-3 group -rotate-90">
                    <svg className="group-hover:stroke-[#3ccf91]" width="35" height="35" viewBox="0 0 43 35" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41 35V0" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                        <path d="M2.44827 35V-9.53674e-07" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                        <path d="M41 13.5625L22.1724 28L2 13.5625" stroke="white" strokeWidth="4" className="group-hover:stroke-[#3ccf91]" />
                    </svg>
                </div>
            </Link>
            <ul className=" flex gap-x-3 sm:space-x-8 items-center z-50">
                {links.map((item: any, index: number) => (
                    <Link href={item.link} key={index}>
                        <li className={`capitalize ${false == item.link ? "text-primaryColor" : "text-white text-sm sm:text-base hover:text-primaryColor hover:scale-x-110 transition-all"}`}>
                            {item.title}
                        </li>
                    </Link>
                ))}
            </ul>
            <div
                onClick={logoutCurrentUser}
                className="flex items-center text-sm sm:text-base gap-x-2 group text-white hover:text-primaryColor cursor-pointer" >
                <LogOut className="text-white group-hover:text-primaryColor" /> Logout
            </div>
        </nav>
    )
}

export default DashboardHeader