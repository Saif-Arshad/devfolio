"use client"
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogContainer,
} from '@/app/_components/ui/morphing-dialog';

import { TextLoop } from '@/app/_components/shared/loopText'
import React, { useEffect, useState } from 'react'
import { STACKS } from '@/app/_lib/stack';
import Skills from '../about-us/_components/Skills';
import { ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ScrollArea } from '@/app/_components/ui/scroll-area';


function page() {



    const myServices = [


        {
            title: "Full Stack Development",
            image: "/full stack.png",
            discription:
                "I build comprehensive solutions that encompass both frontend and backend development. I deliver end-to-end services tailored to your business needs.",
            Detail:
                "Full-stack development is about integrating frontend and backend technologies to deliver seamless and fully functional applications. My full-stack expertise includes building complete web and mobile solutions that cater to diverse industries, from e-commerce to SaaS platforms.\n\n" +
                "On the frontend, I leverage frameworks like React.js and Next.js to create user-friendly interfaces. For the backend, I specialize in Node.js, Express.js, and database systems like MongoDB, MySQL, and PostgreSQL to handle server-side logic and data management.\n\n" +
                "One of my core strengths is creating secure and scalable applications. I use modern DevOps practices, such as CI/CD pipelines, containerization with Docker, and cloud platforms like AWS and Firebase, to ensure your application is robust and easy to maintain. \n\n" +
                "I also integrate third-party services like payment gateways, email notifications, and APIs to enhance the functionality of the applications. Whether it’s real-time chat, advanced analytics, or AI-driven personalization, I provide solutions that go beyond basic functionality.\n\n" +
                "As a full-stack developer, my goal is to streamline your development process, reduce costs, and deliver a product that exceeds your expectations.",

        },
        {
            title: "Backend APIs Development",
            image: "/backend.png",
            discription:
                "I provide professional backend development services and Backend-as-a-Service (BaaS) solutions. From building scalable APIs to integrating AI, I specialize in creating robust server-side systems for modern applications.",
            Detail:
                "Backend development is the backbone of any successful digital application. It powers the logic, database interactions, and integration with third-party systems to ensure seamless functionality. With years of experience in JavaScript, TypeScript, and frameworks like Node.js and Express.js, I specialize in building backend solutions tailored to meet the unique needs of businesses. \n\n" +
                "My expertise includes designing RESTful and GraphQL APIs, which offer efficient, flexible, and scalable data communication between the client and server. I integrate advanced database systems like MongoDB, MySQL, PostgreSQL, and Prisma to handle complex data structures and optimize query performance. By leveraging tools like Firebase, Supabase, and Appwrite, I provide backend-as-a-service (BaaS) solutions to accelerate development cycles and reduce infrastructure costs.\n\n" +
                "Incorporating AI capabilities and real-time functionalities using WebSockets, I build applications that can handle high traffic, process large data volumes, and ensure reliable performance. Security is at the forefront of my development process, ensuring proper authentication, authorization, and data protection.\n\n" +
                "Whether you need to integrate a third-party payment gateway, manage real-time notifications, or build a complex e-commerce backend, I provide end-to-end backend solutions. My services ensure your application remains scalable, secure, and efficient in any business scenario.",

        },
        {
            title: "Mobile App Development",
            image: "/mobile.png",
            discription:
                "I create high-quality mobile applications for iOS and Android platforms, ensuring smooth performance, intuitive interfaces, and cutting-edge features.",
            Detail:
                "Mobile app development is at the heart of modern digital solutions. I specialize in creating feature-rich and high-performance mobile applications for both iOS and Android platforms. By using frameworks like React Native and Flutter, I deliver apps with native-like performance and seamless user experiences.\n\n" +
                "My development process begins with understanding your business goals and target audience. This allows me to design and implement user-centric interfaces that are both functional and visually appealing. From social media apps to enterprise solutions, I have experience building a wide range of mobile applications.\n\n" +
                "I ensure that the applications are optimized for performance, with fast loading times, efficient memory usage, and minimal battery consumption. Security is a top priority, and I implement advanced measures such as encryption, secure authentication, and data protection to safeguard user information.\n\n" +
                "Incorporating cutting-edge technologies like AI and IoT, I build apps that provide personalized experiences and innovative features. Whether it’s integrating real-time chat, payment gateways, or geolocation services, I deliver mobile solutions that align with your vision and enhance your brand’s digital presence.",

        },
        {
            title: "Frontend Development",
            image: "/frontend.png",
            discription:
                "I offer top-notch frontend development services to create responsive, user-friendly, and visually appealing interfaces. Using cutting-edge technologies, I ensure a seamless user experience.",
            Detail:
                "Frontend development is the art of bringing designs to life and creating a dynamic user experience. I specialize in building interfaces that are both visually appealing and highly interactive. By leveraging technologies like React.js, Next.js, and TypeScript, I craft components and layouts that are reusable, scalable, and efficient.\n\n" +
                "My development process starts with understanding your target audience and user behavior. Using this insight, I design intuitive navigation systems, smooth animations, and fast-loading pages. With expertise in CSS frameworks like Tailwind CSS and Bootstrap, I ensure your application is both modern and responsive, adapting seamlessly to all devices and screen sizes.\n\n" +
                "Accessibility and performance are key priorities in my frontend work. I follow WCAG guidelines to ensure that the applications are usable by everyone, including users with disabilities. I also optimize assets, reduce loading times, and implement lazy loading to enhance the overall user experience.\n\n" +
                "Whether you need a single-page application, a complex dashboard, or an interactive e-commerce site, I deliver frontend solutions that align with your vision and goals. My focus is on creating interfaces that captivate users and drive engagement.",

        },
    ];


    return (
        <div className="flex items-center flex-col px-4 lg:px-10 xl:px-20 my-7 w-full">
            <div className="border-b w-full border-white border-dashed mb-5 pb-7">

                <div className='w-full'>


                    <h1 className="text-4xl font-bold text-start mb-1">Explore My Services</h1>
                    <p className='inline-flex whitespace-pre-wrap text-primaryColor'>
                        Looking for{' '}
                        <TextLoop
                            className='overflow-y-clip'
                            transition={{
                                type: 'spring',
                                stiffness: 1400,
                                damping: 80,
                                mass: 10,
                            }}
                            variants={{
                                initial: {
                                    y: 20,
                                    rotateX: 90,
                                    opacity: 0,
                                    filter: 'blur(4px)',
                                },
                                animate: {
                                    y: 0,
                                    rotateX: 0,
                                    opacity: 1,
                                    filter: 'blur(0px)',
                                },
                                exit: {
                                    y: -20,
                                    rotateX: -90,
                                    opacity: 0,
                                    filter: 'blur(4px)',
                                },
                            }}
                        >
                            <span>a Web App?</span>
                            <span>a Mobile App?</span>
                            <span>Backend Services?</span>
                            <span>Database Management?</span>
                            <span>Frontend Development?</span>
                            <span>Full Stack Services?</span>
                        </TextLoop>
                    </p>

                </div>

                <p className='max-w-5xl mt-4'>
                    Whether you're a startup looking to build your first app
                    <span className="text-primaryColor font-semibold px-1.5">
                        (Web or Mobile)
                    </span>
                    or an established company aiming to optimize your digital presence, I offer a wide range of services designed to help you succeed. From
                    <span className="text-primaryColor font-semibold px-1.5">
                        web development
                    </span>
                    ,
                    <span className="text-primaryColor font-semibold px-1.5">
                        mobile App development
                    </span>
                    and
                    <span className="text-primaryColor font-semibold px-1.5">
                        AI solutions
                    </span>
                    to cloud infrastructure and beyond, I’m here to provide innovative, custom solutions that fit your unique needs. Ready to take your project to the
                    <span className="text-primaryColor font-semibold px-1.5">
                        next level?
                    </span>
                    Let’s collaborate and turn your vision into reality.
                </p>
            </div>



            <div className="space-y-2 w-full mt-10 ">
                <div className="grid gap-8 md:grid-cols-2 relative">
                    {myServices.map((service, index) => (

                        <MorphingDialog
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 24,
                            }}
                        >
                            <MorphingDialogTrigger
                                className='h-full'
                            >
                                <div
                                    key={index}
                                    className={` border bg-neutral-900  border-neutral-700 text-white overflow-hidden rounded-xl 
                `}
                                >
                                    <MorphingDialogImage
                                        src={service.image}
                                        alt={service.title}
                                        className={` h-60 mb-4 w-full md:h-72`}
                                    />
                                    <div className='flex flex-col p-6 pb-4   justify-between'>
                                        <div >
                                            <MorphingDialogTitle className="text-2xl lg:text-3xl font-semibold">{service.title}</MorphingDialogTitle>
                                            <MorphingDialogSubtitle className="text-sm text-gray-400 mt-2">{service.discription}</MorphingDialogSubtitle>
                                        </div>
                                        <div className='flex items-center justify-between mt-6 '>
                                            <div className='flex items-center gap-3'>
                                                <svg
                                                    fill="#1DBF73"
                                                    viewBox="-2.5 -2 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    preserveAspectRatio="xMinYMin"
                                                    className="sm:h-8  sm:w-8 h-6 w-6 hover:animate-shake"
                                                >
                                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                    <g
                                                        id="SVGRepo_tracerCarrier"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"></path>
                                                        <circle cx="14.375" cy="1.875" r="1.875"></circle>
                                                    </g>
                                                </svg>
                                                <FaWhatsapp className="sm:h-8 text-[#108e42]  sm:w-8 h-6 w-6 hover:animate-shake" />
                                                <SiGmail className="sm:h-8 text-[#D14836]  sm:w-8 h-6 w-6 hover:animate-shake" />
                                            </div>

                                            <button className='bg-primaryColor items-center flex text-black p-2 rounded-full px-5 group'>
                                                Detail
                                                <ChevronRight className='h-5 w-5 me-2 group-hover:animate-shake' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </MorphingDialogTrigger>
                            <MorphingDialogContainer>
                                <MorphingDialogContent
                                    style={{
                                        borderRadius: '12px',
                                        maxHeight: '98vh',
                                        overflowY: "auto"
                                    }}
                                    className="relative w-full sm:w-[500px] border border-neutral-700 bg-neutral-900"
                                >
                                    <div className="relative p-6">
                                        <MorphingDialogImage
                                            src={service.image}
                                            alt={service.title}
                                            className="h-60 mb-4 w-full md:h-72"
                                        />
                                        <div >
                                            <MorphingDialogTitle className="text-white font-semibold text-3xl">
                                                {service.title}
                                            </MorphingDialogTitle>
                                            <MorphingDialogSubtitle className="font-light text-gray-200 mt-3">
                                                {service.discription}
                                            </MorphingDialogSubtitle>
                                            <div className="font-light text-gray-200 mt-1">
                                                {service.Detail}
                                            </div>
                                        </div>
                                    </div>
                                    <MorphingDialogClose className="text-zinc-100" />
                                </MorphingDialogContent>


                            </MorphingDialogContainer>
                        </MorphingDialog>
                    ))}
                </div>
            </div >

            <h2
                className="font-display text-4xl text-start w-full font-bold mt-20  text-black dark:text-gray-100 sm:text-6xl mb-10"

            >
                I help founders turn{' '}
                <TextLoop
                    className="inline text-primaryColor"
                    transition={{
                        type: 'spring',
                        stiffness: 2400,
                        damping: 140,
                        interval: 5,
                        duration: 0.5,
                        mass: 10,
                    }}
                    variants={{
                        initial: {
                            y: 20,
                            rotateX: 90,
                            opacity: 0,
                            filter: 'blur(4px)',
                        },
                        animate: {
                            y: 0,
                            rotateX: 0,
                            opacity: 1,
                            filter: 'blur(0px)',
                        },
                        exit: {
                            y: -20,
                            rotateX: -90,
                            opacity: 0,
                            filter: 'blur(4px)',
                        },
                    }}
                >
                    <span>ideas</span>
                    <span>visions</span>
                    <span>dreams</span>
                </TextLoop>{' '}
                into business-focused digital products.

            </h2>
            <div className='flex items-center flex-col   w-full'>
                <Skills />
            </div>





        </div >
    )
}

export default page