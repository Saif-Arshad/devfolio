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
import Link from 'next/link';
import Skills from '../about-us/_components/Skills';
import Services2 from './_components/Services';


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

                
                </div>



                <Services2/>

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