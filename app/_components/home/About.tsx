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

        <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start sm:text-center">
            Hey there! I'm <span className="text-primaryColor font-semibold">Saif Ur Rehman</span>, and I've been fascinated by computers since I was young.
            I’ve been working in <span className="text-primaryColor font-semibold">web development</span> for over 2 years
            (<span className="text-primaryColor font-semibold">and if you count the sleepless nights, it’s easily 3! 😄</span>).
            <br /><br />
            My expertise spans both <span className="text-primaryColor font-semibold">frontend</span>
            (the stuff you see on the screen) and <span className="text-primaryColor font-semibold">backend</span>
            (the stuff that happens behind the scenes).
            <br /><br />
            I pride myself on being a strong <span className="text-primaryColor font-semibold">communicator</span>,
            capable of effectively collaborating with clients and team members to understand their needs and translate them
            into functional specifications. I am confident in my ability to deliver
            <span className="text-primaryColor font-semibold"> high-quality solutions</span> that meet and exceed expectations.
            <br /><br />
            I love experimenting with <span className="text-primaryColor font-semibold">the latest web technologies</span> and continuously strive to improve my skills and knowledge.
            When I'm not coding, you'll find me gaming with friends or binge-watching Netflix shows.
            <br /><br />
            Let’s join forces to shape a brighter future in <span className="text-primaryColor font-semibold">technology</span> together! 🚀
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


function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    const TAB_ITEMS = [
        {
            title: "Intro",
            block: <Intro />,
            icon: <FaUserAlt className="mr-2 flex" />,
        },
        {
            title: "Career",
            block: <Career />,
            icon: <FaBriefcase className="mr-2 flex" />,
        },
        {
            title: "Education",
            block: <Education />,
            icon: <FaGraduationCap className="mr-2 flex" />,
        },

    ];

    return (
        <section className="py-14 px-2 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5 mr-0">
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
                            <div className="mb-4 bg-neutral-900 w-full grid grid-cols-3 sm:grid-cols-4 p-2 gap-x-2 sm:gap-x-3">
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

                                <Link href={"/resume"} className='hidden sm:flex'>
                                    <button
                                        className={`transition-all duration-300 text-sm sm:text-base w-full py-3 rounded-lg flex items-center justify-center 
                                            bg-neutral-800 text-gray-300 hover:bg-neutral-600
                                            `}
                                    >
                                        <FaFileAlt className="mr-2 hidden sm:flex" />
                                        Resume
                                    </button>
                                </Link>
                            </div>

                            <div className="w-full p-2 sm:p-3">
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
                                            {item.block && item.block}
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
