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
import React from 'react'
import { STACKS } from '@/app/_lib/stack';
import { ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import Faqs from '@/app/_components/home/Faqs';
import { useRouter } from 'next/navigation';
import Skills from '../((scrollAnimation))/about-us/_components/Skills';
import Link from 'next/link';


function page() {

    const myServices = [
        {
            title: 'Full Stack Development',
            image: '/full stack.png',
            fiverrLink: "https://www.fiverr.com/s/BR09blz",
            message: 'Hi, I am interested in Full Stack Development services.',
            discription:
                'I create complete web and mobile applications by combining frontend and backend technologies. My goal is to deliver solutions that work seamlessly for both users and businesses.',
            detail: (
                <>
                    Full-stack development means I handle everything—frontend, backend, and databases. I use technologies like{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS['React Js']}
                    </span>
                    React,{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS['Next Js']}
                    </span>
                    Next.js,{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS['Node Js']}
                    </span>
                    Node.js,{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.Express}
                    </span>
                    Express, and databases like{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.MongoDB}
                    </span>
                    MongoDB and{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.MySQL}
                    </span>
                    MySQL.
                    <br />
                    <br />
                    You get fast, secure, and scalable applications. I also make sure your app is modern by integrating payment
                    systems, email notifications, and APIs. Whether it's real-time chat or analytics, I’ve got you covered.
                    <br />
                    <br />
                    Plus, with cloud services like{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.Firebase}
                    </span>
                    Firebase and tools like Docker, your app will be easy to maintain and deploy.
                </>
            ),
            subheading: 'Why Full-Stack?',
            moreInfo: `Full-stack development keeps everything in sync and makes communication easier. It’s cost-effective because one person (me) manages the entire process, from frontend to backend.`,
            skills: [
                'React Js',
                'Next Js',
                'Node Js',
                'Express',
                'MongoDB',
                'AWS',
                'Firebase',
            ],
        },
        {
            title: 'Backend APIs Development',
            image: '/backend.png',
            fiverrLink: "https://www.fiverr.com/s/YRQGLal",
            message: 'Hi, I am interested in Backend APIs Development services.',
            discription:
                'I build the backbone of applications with reliable, secure, and scalable APIs to ensure everything runs smoothly behind the scenes.',
            detail: (
                <>
                    Backend development is all about making your app work. I specialize in creating{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.GraphQL}
                    </span>
                    GraphQL and REST APIs using{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS['Node Js']}
                    </span>
                    Node.js,{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.Express}
                    </span>
                    Express, and databases like{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.MongoDB}
                    </span>
                    MongoDB and{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.Postgresql}
                    </span>
                    PostgreSQL.
                    <br />
                    <br />
                    Need something faster? I also use{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.Prima}
                    </span>
                    Prisma to optimize database performance. If you're looking for quick deployment, tools like{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.Firebase}
                    </span>
                    Firebase{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.AppWrite}
                    </span>
                    AppWrite and{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.Supabase}
                    </span>
                    Supabase get the job done.
                    <br />
                    <br />
                    Real-time chat? Payments? Notifications? I can integrate all of that while making sure your app is secure and
                    handles high traffic.
                </>
            ),
            subheading: 'Why a Solid Backend?',
            moreInfo: `A strong backend means smooth performance and happy users. I focus on scalability, so your app grows with your business.`,
            skills: [
                'Node Js',
                'Express',
                'GraphQL',
                'MongoDB',
                'Postgresql',
                'Prisma',
                'Firebase',
            ],
        },
        {
            title: 'Mobile App Development',
            image: '/mobile.png',
            fiverrLink: 'https://www.fiverr.com/s/3807AYk',
            message: 'Hi, I am interested in Mobile App Development services.',
            discription:
                'I design high-performance apps for iOS and Android that are fast, secure, and packed with features.',
            detail: (
                <>
                    Mobile apps are everywhere, and I make sure yours stands out. Using frameworks like{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS['React Js']}
                    </span>
                    React Native, I build apps that work on both iOS and Android.
                    <br />
                    <br />
                    I focus on fast performance, great design, and secure features like encryption and authentication. Whether it’s
                    social apps, e-commerce, or enterprise tools, I create user-friendly experiences with features like geolocation,
                    real-time updates, and payment gateways.
                    <br />
                    <br />
                    If you’re looking for cutting-edge technology, I can integrate{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.AI}
                    </span>
                    AI and IoT for smarter apps.
                </>
            ),
            subheading: 'Why Mobile?',
            moreInfo: `With a mobile app, you can reach your audience wherever they are. I’ll make sure your app works perfectly across devices and feels like it belongs on both platforms.`,
            skills: [
                'React Native',
                'iOS',
                'Android',
                'Firebase',
                'IoT',
            ],
        },
        {
            title: 'Frontend Development',
            image: '/frontend.png',
            fiverrLink: 'https://www.fiverr.com/s/jj59yPV',
            message: 'Hi, I am interested in Frontend Development services.',
            discription:
                'I create beautiful, responsive, and interactive interfaces that make your app or website stand out.',
            detail: (
                <>
                    Frontend development is all about making your app look great and feel easy to use. I work with{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS['React Js']}
                    </span>
                    React,{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS['Next Js']}
                    </span>
                    Next.js, and{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS['TypeScript']}
                    </span>
                    TypeScript to build fast, responsive interfaces.
                    <br />
                    <br />
                    I make sure everything looks good on all devices using{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS['Tailwind Css']}
                    </span>
                    Tailwind CSS and{' '}
                    <span className="inline-flex items-end ml-1 service_icons">
                        {STACKS.Bootstrap}
                    </span>
                    Bootstrap. Plus, I optimize performance so pages load fast and users stick around.
                    <br />
                    <br />
                    Accessibility is key too. Following WCAG guidelines, I ensure everyone, including people with disabilities, can
                    use your app comfortably.
                </>
            ),
            subheading: 'Why Good Frontend?',
            moreInfo: `First impressions matter. A smooth and visually appealing interface not only attracts users but keeps them coming back.`,
            skills: [
                'React Js',
                'Next Js',
                'TypeScript',
                'Tailwind Css',
                'Bootstrap',
                'WCAG',
            ],
        },
    ];




    const handleWhatsAppClick = (message: string) => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/+923267146133?text=${encodedMessage}`;
        window.open(whatsappLink, '_blank');
    };
    return (
        <>
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
                        <span className="text-primaryColor px-1.5">
                            (Web or Mobile)
                        </span>
                        or an established company aiming to optimize your digital presence, I offer a wide range of services designed to help you succeed. From
                        <span className="text-primaryColor px-1.5">
                            web development
                        </span>
                        ,
                        <span className="text-primaryColor px-1.5">
                            mobile App development
                        </span>
                        and
                        <span className="text-primaryColor px-1.5">
                            AI solutions
                        </span>
                        to cloud infrastructure and beyond, I’m here to provide innovative, custom solutions that fit your unique needs. Ready to take your project to the
                        <span className="text-primaryColor px-1.5">
                            next level?
                        </span>
                        Let’s collaborate and turn your vision into reality.
                    </p>
                </div>



                <div className="space-y-2 w-full mt-10 ">
                    <div className="grid gap-8 md:grid-cols-2 relative">
                        {myServices.map((service, index) => (
                            <MorphingDialog
                                key={index}
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 24,
                                }}
                            >
                                <MorphingDialogTrigger className="h-full">
                                    <div
                                        className={`border bg-neutral-900 border-neutral-700 h-full text-white overflow-hidden rounded-xl`}
                                    >
                                        <MorphingDialogImage
                                            src={service.image}
                                            alt={service.title}
                                            className="h-60 mb-4 w-full md:h-72"
                                        />
                                        <div className="flex flex-col p-6 pb-4 justify-between">
                                            <div>
                                                <MorphingDialogTitle className="text-2xl lg:text-3xl font-semibold">
                                                    {service.title}
                                                </MorphingDialogTitle>
                                                <MorphingDialogSubtitle className="text-sm text-gray-400 mt-2">
                                                    {service.discription}
                                                </MorphingDialogSubtitle>
                                            </div>
                                            <div className="flex items-center justify-end mt-6">

                                                <button className="bg-primaryColor flex items-center text-black p-2 rounded-full px-5 group">
                                                    Detail
                                                    <ChevronRight className="h-5 w-5 me-2 group-hover:animate-shake" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </MorphingDialogTrigger>

                                <MorphingDialogContainer>
                                    <MorphingDialogContent
                                        style={{ borderRadius: '12px' }}
                                        className="relative w-full h-[90vh] sm:w-[500px] border border-neutral-700 bg-neutral-900"
                                    >
                                        <div className="relative flex flex-col w-full h-full">
                                            <ScrollArea className="flex-1 overflow-y-auto overflow-x-auto p-6 pb-20">
                                                <MorphingDialogImage
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="h-60 mb-4 rounded-xl w-full md:h-72"
                                                />

                                                {/* Title & Description */}
                                                <MorphingDialogTitle className="text-white font-semibold text-3xl">
                                                    {service.title}
                                                </MorphingDialogTitle>
                                                <MorphingDialogSubtitle className="font-normal text-gray-200 mt-1 text-sm">
                                                    {service.discription}
                                                </MorphingDialogSubtitle>

                                                <div className="font-normal text-gray-200 mt-4 whitespace-pre-line">
                                                    {service.detail}
                                                </div>

                                                {service.subheading && (
                                                    <h3 className="text-white font-semibold text-xl mt-6">
                                                        {service.subheading}
                                                    </h3>
                                                )}

                                                {service.moreInfo && (
                                                    <p className="font-light text-gray-200 mt-2 whitespace-pre-line">
                                                        {service.moreInfo}
                                                    </p>
                                                )}

                                                {service.skills && service.skills.length > 0 && (
                                                    <div className="mt-4">
                                                        <h4 className="text-white font-semibold text-lg">Key Skills:</h4>
                                                        <ul className="list-disc list-inside mt-2">
                                                            {service.skills.map((skill) => (
                                                                <li key={skill} className="text-gray-200 text-sm">
                                                                    {skill}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </ScrollArea>

                                            {/* Fixed icons at bottom */}
                                            <div className="absolute bottom-0 left-0 w-full p-4 border-t border-neutral-700 bg-neutral-800 bg-opacity-50 backdrop-blur-md">
                                                <div className="flex items-center gap-4 justify-between">
                                                    <a href={service.fiverrLink} target='_blank'

                                                        className=" flex items-center outline-none border-none text-white rounded-full group">
                                                        <button
                                                            className=" flex items-center outline-none border-none text-white p-2 rounded-full px-5 group">
                                                            Order Now
                                                            <ChevronRight className="h-5 w-5 me-2 mt-1 group-hover:animate-shake text-primaryColor" />
                                                        </button>
                                                    </a>

                                                    <div className="flex items-center gap-4 ">
                                                        <a href={service.fiverrLink} target='_blank' >

                                                            <svg
                                                                fill="#1DBF73"
                                                                viewBox="-2.5 -2 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                preserveAspectRatio="xMinYMin"
                                                                className="sm:h-8 sm:w-8 h-6 w-6 hover:animate-shake"
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
                                                        </a>
                                                        <FaWhatsapp
                                                            onClick={() => handleWhatsAppClick(service.message)}
                                                            className="sm:h-8 sm:w-8 h-6 w-6 text-[#108e42] hover:animate-shake cursor-pointer" />

                                                        <Link href={`/contact-us?service=${encodeURIComponent(service.message)}`}>
                                                            <SiGmail
                                                                className="sm:h-8 sm:w-8 h-6 w-6 text-[#D14836] hover:animate-shake cursor-pointer" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Close Button */}
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
            <Faqs />
        </>

    )
}

export default page