import React from 'react'
import GradualSpacing from '../../../_components/ui/gradual-spacing'
import IconCloud from '../../../_components/ui/icon-cloud'
import { TextLoop } from '@/app/_components/shared/loopText';
import Link from 'next/link';
import { FileUser } from 'lucide-react';

function AboutHero() {
    const slugs = [
        "typescript",
        "javascript",
        "mysql",
        "python",
        "vue",
        "react",
        "reactnative",
        "postman",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "supabase",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "nextjs",
        "figma",
    ];
    return (
        <div className="flex flex-wrap w-full px-4 sm:px-5 lg:px-10 items-start mb-20">
            <div className="flex flex-col w-full lg:w-1/2  mt-7 ">
                <div className='flex flex-col items-start '>

                    <GradualSpacing
                        className="font-display text-4xl md:text-6xl font-bold -tracking-widest  text-black dark:text-white md:mt-3   md:leading-[5rem]"
                        text=" Saif Ur Rehman."
                    />
                    <h3 className="text-primaryColor tracking-wide ml-3  font-semibold text-xl">
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
                            <span>Software Engineer</span>
                            <span>Full Stack Developer</span>
                            <span>Mobile App Developer</span>
                            <span>Web App Developer</span>
                            <span>MERN Stack Developer</span>
                            <span>Next Js Developer</span>
                            <span>Member of the Jedi Order</span>
                        </TextLoop>
                    </h3>
                </div>
                <div className="flex flex-col items-start sm:pl-[10px]">
                    <p className="mt-5 text-white sm:text-lg">
                        I am a Full-Stack Developer specializing in both
                        <span className="text-primaryColor font-semibold px-1">web</span>
                        and
                        <span className="text-primaryColor font-semibold px-1">mobile</span>
                        applications.
                    </p>
                    <p className="mt-1 text-white sm:text-lg leading-relaxed">
                        I handle both the
                        <span className="text-primaryColor font-semibold px-1">frontend</span>
                        (<span className="italic">the interface you see on the screen</span>)
                        and the
                        <span className="text-primaryColor font-semibold px-1">backend</span>
                        (<span className="italic">the behind-the-scenes logic and infrastructure</span>).
                    </p>
                    <p className="mt-1 text-white sm:text-lg leading-relaxed">
                        I create clean, responsive, engaging, and accessible digital experiences. My expertise lies in crafting
                        <span className="text-primaryColor font-semibold px-1">complex</span>,
                        <span className="text-primaryColor font-semibold px-1">fast</span>, and
                        <span className="text-primaryColor font-semibold px-1">functional</span> digital products that deliver
                        <span className="text-primaryColor font-semibold px-1">exceptional user experiences</span>.

                    </p>
                    <Link href={`/resume`}>
                        <button className='bg-emerald-700 hover:bg-emerald-800 mt-7 items-center flex text-white p-2 rounded-full px-5 group'>
                            <FileUser className='h-5 w-5 me-2 group-hover:animate-shake' />
                            My Resume</button>
                    </Link>

                </div>

            </div>


            <div className="hidden sm:flex relative flex-col items-center justify-start w-full  lg:w-1/2 ">
                <IconCloud iconSlugs={slugs} />

            </div>
        </div>
    )
}

export default AboutHero