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
    SiSocketdotio,
    SiStrapi,
    SiPython,
    SiKlarna,
    SiNestjs,
    SiRedis,
    SiElasticsearch,
    SiLangchain,
    SiDocker,
    SiKubernetes,
    SiJenkins,
    SiCircleci,
    SiTravisci,
    SiVercel,
    SiNetlify,
    SiRabbitmq,
    SiAmazon,
    SiGraphql
} from "react-icons/si";
import { GiClaymoreExplosive } from "react-icons/gi";
import { MdAnimation, MdDevicesOther } from "react-icons/md";
import { FaCode, FaLaptopCode, FaNodeJs } from "react-icons/fa";
import { Database, GitBranchPlusIcon, Workflow } from "lucide-react";

const toolIcons: any = {
    HTML: SiHtml5,
    CSS: SiCss3,
    SCSS: SiSass,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    "C++": SiCplusplus,
    Python: SiPython,
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
    NestJs: SiNestjs,
    Sockets: SiSocketdotio,
    GraphQL: SiGraphql,
    LangChain: SiLangchain,
    Appwrite: SiAppwrite,
    Firebase: SiFirebase,
    Supabase: SiSupabase,
    Stripe: SiStripe,
    Klarna: SiKlarna,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    SQLite: SiSqlite,
    Redis: SiRedis,
    Elasticsearch: SiElasticsearch,
    RabbitMQ: SiRabbitmq,
    Git: GitBranchPlusIcon,
    GitHub: SiGithub,
    Jest: SiJest,
    Postman: SiPostman,
    Prisma: SiPrisma,
    "Strapi CMS": SiStrapi,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    Jenkins: SiJenkins,
    CircleCI: SiCircleci,
    TravisCI: SiTravisci,
    Vercel: SiVercel,
    Netlify: SiNetlify,
    AWS: SiAmazon
};

const toolCategoryIcons = [
    MdDevicesOther,
    FaCode,
    Database,
    Workflow,
    GiClaymoreExplosive,
]

const iconColors: any = {
    HTML: "text-orange-500",
    CSS: "text-blue-500",
    SCSS: "text-pink-500",
    JavaScript: "text-yellow-400",
    TypeScript: "text-blue-600",
    "C++": "text-blue-700",
    Python: "text-blue-500",
    EJS: "text-green-500",
    React: "text-cyan-400",
    Redux: "text-purple-500",
    "Redux Toolkit": "text-purple-500",
    "Tailwind CSS": "text-cyan-400",
    "Next.js": "text-white",
    "Vue.js": "text-green-500",
    GSAP: "text-green-400",
    "Ant Design": "text-blue-600",
    Bootstrap: "text-purple-600",
    "Material UI": "text-blue-500",
    Shadcn: "text-cyan-400",
    "Next UI": "text-white",
    NodeJs: "text-green-600",
    ExpressJs: "text-gray-200",
    NestJs: "text-red-600",
    Sockets: "text-black dark:text-white",
    GraphQL: "text-pink-600",
    LangChain: "text-purple-400",
    Appwrite: "text-red-500",
    Firebase: "text-orange-500",
    Supabase: "text-green-500",
    Stripe: "text-blue-600",
    Klarna: "text-pink-600",
    MySQL: "text-blue-600",
    PostgreSQL: "text-blue-800",
    MongoDB: "text-green-600",
    SQLite: "text-blue-400",
    Redis: "text-red-600",
    Elasticsearch: "text-yellow-500",
    RabbitMQ: "text-orange-600",
    Git: "text-orange-600",
    GitHub: "text-white",
    Jest: "text-red-500",
    Postman: "text-orange-500",
    Prisma: "text-blue-700",
    "Strapi CMS": "text-purple-600",
    Docker: "text-blue-500",
    Kubernetes: "text-blue-600",
    Jenkins: "text-blue-800",
    CircleCI: "text-black dark:text-white",
    TravisCI: "text-blue-500",
    Vercel: "text-white",
    Netlify: "text-green-600",
    AWS: "text-orange-500"
};

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
                "Python",
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
                "NestJs",
                "Python",
                "Sockets",
                "GraphQL",
                "LangChain",
                "Appwrite",
                "Prisma",
                "Firebase",
                "Supabase",
                "Strapi CMS",
                "Stripe",
                "Klarna",
            ],
        },
        {
            category: "Database Management",
            tools: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Elasticsearch"],
        },
        {
            category: "CI/CD & DevOps",
            tools: ["Docker", "Kubernetes", "Jenkins",  "Vercel", "Netlify", "AWS", "RabbitMQ"],
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
                                        const iconColor = iconColors[tool] || "text-gray-400";
                                        return (
                                            <li
                                                key={toolIndex}
                                                className="flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[12px] sm:text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50"
                                            >
                                                {IconComponent && <IconComponent size={20} className={iconColor} />}
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
