"use client";

import React, { useState } from "react";
import { TransitionPanel } from "@/app/_components/ui/Tabs";

import {
    SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiCplusplus, SiEjs,
    SiReact, SiRedux, SiTailwindcss, SiNextdotjs, SiVuedotjs,
    SiAntdesign, SiBootstrap, SiGithub, SiGitlab, SiJest,
    SiPostman, SiExpress, SiFirebase, SiSupabase, SiStripe,
    SiMysql, SiPostgresql, SiMongodb, SiSqlite,
    SiAppwrite,
    SiMaterialformkdocs,
    SiPrisma,
    SiSocketdotio
} from "react-icons/si";
import { GiClaymoreExplosive } from "react-icons/gi";
import { MdAnimation, MdDevicesOther } from "react-icons/md";
import { FaCode, FaLaptopCode, FaNodeJs } from "react-icons/fa";
import { Database, GitBranchPlusIcon } from "lucide-react";

const toolIcons: any = {
    HTML: SiHtml5,
    CSS: SiCss3,
    SCSS: SiSass,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    "C++": SiCplusplus,
    EJS: SiEjs,
    React: SiReact,
    Redux: SiRedux,
    "Tailwind CSS": SiTailwindcss,
    "Next.js": SiNextdotjs,
    "Vue.js": SiVuedotjs,
    GSAP: MdAnimation,
    "Redux Toolkit": SiRedux,
    "Ant Design": SiAntdesign,
    Bootstrap: SiBootstrap,
    "Material UI": SiMaterialformkdocs,
    Shadcn: SiReact,
    "Next UI": SiNextdotjs,
    NodeJs: FaNodeJs,
    ExpressJs: SiExpress,
    Sockets: SiSocketdotio,
    Appwrite: SiAppwrite,
    Firebase: SiFirebase,
    Supabase: SiSupabase,
    Stripe: SiStripe,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    SQLite: SiSqlite,
    Git: GitBranchPlusIcon,
    GitHub: SiGithub,
    Jest: SiJest,
    Postman: SiPostman,
    Prisma: SiPrisma,
};

const toolCategoryIcons = [
    MdDevicesOther,
    FaCode,
    Database,
    GiClaymoreExplosive,
]

function Tools() {
    const [activeIndex, setActiveIndex] = useState(0);
    const TOOLS_DATA = [
        {
            category: "Frontend Development",
            tools: [
                "HTML",
                "CSS",
                "SCSS",
                "JavaScript",
                "TypeScript",
                "C++",
                "EJS",
                "React",
                "Redux",
                "Tailwind CSS",
                "Next.js",
                "Vue.js",
                "GSAP",
                "Redux Toolkit",
                "Ant Design",
                "Bootstrap",
                "Material UI",
                "Shadcn",
                "Next UI",
            ],
        },
        {
            category: "Backend Development",
            tools: [
                "NodeJs",
                "ExpressJs",
                "Sockets",
                "Appwrite",
                "Prisma",
                "Firebase",
                "Supabase",
                "Stripe",
            ],
        },
        {
            category: "Database Management",
            tools: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        },
        {
            category: "Others",
            tools: ["Git", "GitHub", "Jest", "Postman"],
        },
    ];

    return (
        <div className="flex flex-col w-full mt-10 px-4 lg:px-10 xl:px-20 text-gray-200">
            <div className="mb-6 border-b border-neutral-500 border-dashed pb-4">
                <h3 className="text-xl sm:text-2xl font-semibold">
                    Tools that I have used.
                </h3>
                <span className="block text-sm text-primaryColor font-normal">
                    Here's a curated list of tools and technologies that I have utilized
                    in my projects to build innovative solutions.
                </span>
            </div>

            <div className="flex flex-col md:flex-row w-full mt-7">
                <div className="md:w-1/4 mb-4 sm:mb-0">
                    {TOOLS_DATA.map((item, index) => {
                        const IconComponent = toolCategoryIcons[index];

                        return (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-full text-base flex items-center gap-1  justify-center text-left px-4 py-2 mx-1 sm:mx-0 mb-4 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? "bg-emerald-900 text-white"
                                    : "dark:border-neutral-700 dark:bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                                    }`}
                            >
                                {IconComponent && <IconComponent size={20} />}
                                {item.category}
                            </button>
                        );
                    })}
                </div>

                <div className="md:w-3/4 pl-0 sm:pl-6">
                    <TransitionPanel
                        activeIndex={activeIndex}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        variants={{
                            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
                            center: { opacity: 1, y: 0, filter: "blur(0px)" },
                            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
                        }}
                    >
                        {TOOLS_DATA.map((item, index) => (
                            <div key={index} className="py-2">
                                <ul className="flex items-center gap-4 flex-wrap">
                                    {item.tools.map((tool, toolIndex) => {
                                        const IconComponent = toolIcons[tool];
                                        return (
                                            <li
                                                key={toolIndex}
                                                className="flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[12px] sm:text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50"
                                            >
                                                {IconComponent && <IconComponent size={20} />}
                                                <span>{tool}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </TransitionPanel>
                </div>
            </div>
        </div>
    );
}

export default Tools;
