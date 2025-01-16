"use client";

import React, { useState } from 'react';
import { TransitionPanel } from "@/app/_components/ui/Tabs"; // Adjust the import path as needed
import { FaUserAlt, FaBriefcase, FaGraduationCap, FaFileAlt } from "react-icons/fa";
import { FileUser } from 'lucide-react';
import Link from 'next/link';
import { ScrollArea } from '../ui/scroll-area';


const experiences = [
    {
        role: "Full Stack Developer",
        location: "Faisalabad, Pakistan - Full Time",
        startDate: "2024-11-01",
        endDate: "Present",
        image: "/company/fuzion_dev.png",
    },
    {
        role: "MERN Stack Developer",
        location: "Faisalabad, Pakistan - Full Time",
        startDate: "2024-03-01",
        endDate: "2024-11-01",
        image: "/company/devshine_logo.jpeg",
    },
    {
        role: "Junior MERN Stack Developer",
        location: "Faisalabad, Pakistan - Full Time",
        startDate: "2023-07-01",
        endDate: "2024-02-01",
        image: "/company/devontix.jpg",
    },
    {
        role: "Web Developer",
        location: "Faisalabad, Pakistan - Training & Internship",
        startDate: "2022-06-01",
        endDate: "2023-07-01",
        image: "/company/weversity.png",
    },
];
const calculateDuration = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
        return `${years} year${years > 1 ? "s" : ""} ${remainingMonths}+ month${remainingMonths > 1 ? "s" : ""}`;
    } else if (years > 0) {
        return `${years}+ year${years > 1 ? "s" : ""}`;
    } else {
        return `${remainingMonths}+ month${remainingMonths > 1 ? "s" : ""}`;
    }
};

const experiencesResume = [
    {
        title: "Full Stack Developer",
        company: "Fuziondev",

        date: "2/2025 – Present",
        location: "Faisalabad, Pakistan"
    },
    {
        title: "MERN Developer",
        company: "DevShine",

        date: "10/2024 – 2/2025",
        location: "Faisalabad, Pakistan"
    },
    {
        title: "Junior MERN Developer",
        company: "Devontix Solutions",

        date: "10/2023 – 10/2024",
        location: "Faisalabad, Pakistan"
    },
    {
        title: "MERN Stack Internship",
        company: "Weversity",

        date: "05/2023 – 9/2023",
        location: "Faisalabad, Pakistan"
    }
];

const qualifications = [
    {
        degree: "Bachelor in Computer Science",
        institution: "GC University Of Faisalabad",
        location: "Faisalabad, Pakistan",
        image: "/GC.png",
        duration: "2022 - 2026",
    },
    {
        degree: "Intermediate in Computer Science",
        institution: "Dhariwal College",
        image: "/dhariwal.jpg",
        location: "Faisalabad, Pakistan",
        duration: "2020 - 2022",
    },
    {
        degree: "Secondary School Certificate (SSC) in Computer Science",
        institution: "Dhariwal College",
        image: "/dhariwal.jpg",
        location: "Faisalabad, Pakistan",
        duration: "2018 - 2020",
    },
];


function Intro() {
    return (

        <p
            className="text-gray-300 text-base font-normal leading-relaxed lg:text-start sm:text-center">
            I&apos;m Saif Ur Rehman I&lsquo;ve been working in web development for over 2 years (and if you count the sleepless nights,
            <span className="text-primaryColor font-semibold px-1.5">
                it’s easily 3!
            </span>
            ) doing both

            <span className="text-primaryColor font-semibold px-1.5">

                frontend
            </span>
            (The stuff you see on the screen)
            and
            <span className="text-primaryColor font-semibold px-1.5">
                backend
            </span>
            (The stuff that happens behind the scenes)



            I focus on building practical and reliable solutions that help businesses solve problems and achieve their goals. I am a firm believer in the
            <span className="text-primaryColor font-semibold px-1.5">
                power of technology
            </span>
            to transform businesses and lives.
        </p>
    )
}

function Education() {
    return (

        <div className="">
            {qualifications.map((qualification, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`w-full rounded-xl flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 p-3 sm:p-5 bg-[#1C1C1C] ${index === 0 ? "border border-dashed border-green-500" : ""
                            }`}
                    >
                        <div className="flex flex-col sm:flex-row justify-between w-full">
                            <div className="h-[60px] w-[60px]">
                                <img
                                    src={qualification.image}
                                    alt={qualification.degree}
                                    className="h-full w-full object-cover rounded-md"
                                />
                            </div>
                            <div className="flex flex-col gap-1 w-[70%]">
                                <h4 className="text-white font-medium">{qualification.degree}</h4>
                                <p className="text-gray-500 text-sm">{qualification.institution}</p>
                                <p className="text-gray-500 text-sm">{qualification.location}</p>
                            </div>
                            {qualification.duration && (
                                <div className="flex flex-col items-end gap-1">
                                    <h4 className="text-white font-medium">{qualification.duration}</h4>
                                </div>
                            )}
                        </div>
                    </div>
                    {index < qualifications.length - 1 && (
                        <div className="px-12">
                            <svg
                                width="2"
                                height="27"
                                viewBox="0 0 2 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 0L1 27"
                                    stroke="#0EC86E"
                                    strokeWidth="2"
                                    strokeDasharray="4 4"
                                />
                            </svg>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}
function Career() {
    return (
        <div className="flex flex-col w-full md:w-11/12 mx-auto">
            {experiences.map((experience, index) => {
                const duration = calculateDuration(experience.startDate, experience.endDate);
                return (
                    <React.Fragment key={index}>
                        <div
                            className={`w-full rounded-xl flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 p-3 sm:p-5 bg-[#1C1C1C] ${index === 0 ? "border border-dashed border-green-500" : ""
                                }`}
                        >
                            <div className="h-[50px] w-[60px]">
                                <img
                                    src={experience.image}
                                    alt={experience.role}
                                    className="h-full w-full object-cover rounded-md"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between w-full">
                                <div className="flex flex-col gap-1 w-[70%]">
                                    <h4 className="text-white font-medium">{experience.role}</h4>
                                    <p className="text-gray-500 text-sm">{experience.location}</p>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <h4 className="text-white font-medium">{duration}</h4>
                                    <p className="text-gray-500 text-sm">
                                        {new Date(experience.startDate).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                        })}{" "}
                                        - {experience.endDate === "Present" ? "Present" :
                                            new Date(experience.endDate).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                            })}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {index < experiences.length - 1 && (
                            <div className="px-12">
                                <svg
                                    width="2"
                                    height="27"
                                    viewBox="0 0 2 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 0L1 27"
                                        stroke="#0EC86E"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                    />
                                </svg>
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    )
}
function Resume() {
    return (

        <div className="  w-full px-2  lg:px-5">

            <Link href={`/resume`}>
                <button className='bg-emerald-700 hover:bg-emerald-800 mb-4 items-center flex text-white p-2 rounded-full px-5 group'>
                    <FileUser className='h-5 w-5 me-2 group-hover:animate-shake' />
                    View Full Resume</button>
            </Link>
            <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-700 rounded-lg shadow-md overflow-hidden">
                <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-semibold">Saif Ur Rehman</h2>
                            <p className="text-sm text-gray-300">Full Stack Developer</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-300">Phone: +92 3491797803</p>
                            <p className="text-sm text-gray-300">Email: Saifarshad3344@gmail.com</p>
                            <p className="text-sm text-gray-300">Location: Faisalabad, Pakistan</p>
                        </div>
                    </div>
                    <hr className="my-4 bg-neutral-500" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Summary</h3>
                        <p className="text-sm leading-relaxed">I am a full-stack web developer specializing in the MERN stack, Next.js, and React Native, with expertise in Tailwind CSS and TypeScript. With a proven track record of delivering robust web applications, I aim to contribute to innovative projects that challenge my skills and foster professional growth.</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Experience</h3>
                        {
                            experiencesResume.map((item, index) => (
                                <div key={index}>
                                    <h4 className="text-md font-semibold">{item.company}</h4>
                                    <p className="text-sm text-gray-300">{item.title} | {item.date}</p>
                                </div>

                            ))
                        }

                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Skills</h3>
                        <ul className="list-disc list-inside text-sm">
                            <li><strong>Languages:</strong> JavaScript, TypeScript, C++, HTML, EJS</li>
                            <li><strong>Styles:</strong> CSS, SCSS, BootStrap, TailwindCSS, MUI, ShadCN</li>
                            <li><strong>Libraries:</strong> ReactJs, Vue.js, GSAP, Redux Toolkit, ExpressJs</li>
                            <li><strong>Runtime:</strong> NodeJs</li>
                            <li><strong>Frameworks:</strong> NextJs</li>
                            <li><strong>Database:</strong> MongoDB, PostgreSQL, SQLite</li>
                            <li><strong>Cloud & Backend:</strong> Supabase, Firebase, Appwrite</li>
                            <li><strong>Payments:</strong> Stripe</li>
                            <li><strong>DevTools:</strong> Git, GitHub, Postman</li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    const TAB_ITEMS = [
        {
            title: "Intro",
            block: <Intro />,
            icon: <FaUserAlt className="mr-2 hidden sm:flex" />,
        },
        {
            title: "Career",
            block: <Career />,
            icon: <FaBriefcase className="mr-2 hidden sm:flex" />,
        },
        {
            title: "Education",
            block: <Education />,
            icon: <FaGraduationCap className="mr-2 hidden sm:flex" />,
        },
        {
            title: "Resume",
            block: <Resume />,

            icon: <FaFileAlt className="mr-2 hidden sm:flex" />,
        },
    ];

    return (
        <section className="py-14 px-4 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid xl:grid-cols-7 grid-cols-1">
                    <div className="w-full xl:sticky top-0 justify-center items-start xl:flex hidden  xl:row-span-3 xl:col-span-3">
                        <div className="w-full h-full relative">
                            <img
                                className="sm:mt-5 w-full h-full rounded-3xl object-cover"
                                src="/Robot arm-cuate.png"
                                alt="About Us image"
                            />
                        </div>
                    </div>

                    <div className="w-full flex-col justify-center xl:row-span-4 xl:col-span-4 lg:items-start items-center gap-5 inline-flex">
                        <div>
                            <h6 className="text-base font-normal leading-relaxed">About Me</h6>
                            <p className='text-sm text-gray-400 '>
                                A meaningful insight into my essence – as every small detail shapes the broader story of my life.
                            </p>
                        </div>
                        <div className="w-full bg-neutral-800 border border-neutral-600 overflow-hidden rounded-xl flex-col justify-center items-start flex">
                            <div className="mb-4 bg-neutral-900 w-full grid grid-cols-4 p-2 gap-x-2 sm:gap-x-3">
                                {TAB_ITEMS.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`transition-all duration-300 text-sm sm:text-base w-full py-3 rounded-lg flex items-center justify-center ${activeIndex === index
                                            ? "bg-emerald-700 text-white"
                                            : "bg-neutral-800 text-gray-300 hover:bg-neutral-600"
                                            }`}
                                    >
                                        {item.icon}
                                        {item.title}
                                    </button>
                                ))}
                            </div>

                            <div className="w-full p-1 sm:p-3">
                                <TransitionPanel
                                    activeIndex={activeIndex}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    variants={{
                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                    }}
                                >
                                    {TAB_ITEMS.map((item, index) => (
                                        <div key={index} className="py-2 min-h-[80vh] 2xl:min-h-[50vh]">
                                            {item.block}
                                        </div>
                                    ))}
                                </TransitionPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
