"use client"
import React from 'react'
import GradualSpacing from '../ui/gradual-spacing'
import { TypeAnimation } from 'react-type-animation'
import SocialLinks from '../buttons/Social'
import { TextLoop } from '../shared/loopText'

export default function FirstAbout() {
    return (
        <div className="flex flex-wrap h-full w-full">
            <div className="flex flex-col h-full w-full lg:w-8/12  mt-7 px-3 sm:px-5 lg:px-10">
                <h3 className="text-primaryColor tracking-wide font-semibold md:text-xl">Hi , I am </h3>
                <div className='flex flex-col items-start'>

                    <GradualSpacing
                        className="font-display text-4xl xs:text-5xl font-bold -tracking-widest  text-black dark:text-white sm:text-7xl lg:text-[100px] md:my-3   md:leading-[5rem]"
                        text=" Saif Ur Rehman"
                    />
                    <h3 className="text-primaryColor tracking-wide mt-2 ml-7 font-medium sm:text-xl">
                        <p className='inline-flex whitespace-pre-wrap '>
                            A{' '}
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
                        </p>
                        {/* <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                3000,
                                'A Full Stack Developer',
                                3000,
                                'Mobile App Stack Developer',
                                3000,
                                'Web App Developer',
                                3000,
                                'A MERN Stack Developer',
                                3000,
                                'A Next Js Developer',
                                3000,
                                'A Member of the Jedi Order',
                                3000,

                            ]}
                            wrapper="h2"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        /> */}

                    </h3>
                </div>
                <div className=''>

                    <p className="mt-7 text-white sm:text-lg">
                        🚀 A passionate Software Developer based in Faislabad,
                        Pakistan

                        .
                    </p>
                    <p className="mt-2 text-white sm:text-lg">
                        ⚡ Exploring opportunities and side projects.

                    </p>
                    <p className="mt-2 text-white sm:text-lg">
                        💻
                        My main tech stack currently is
                        <span className="text-primaryColor font-semibold px-1.5">MERN</span>
                        in combination with
                        Tailwind CSS,
                        TypeScript,
                        and
                        <span className="text-primaryColor font-semibold px-1.5">Next.js</span>.
                        I specialize in building
                        <span className="text-primaryColor font-semibold px-1.5">complex</span>,
                        fast, and
                        <span className="text-primaryColor font-semibold px-1.5">functional</span>
                        digital products that deliver
                        exceptional user experiences.
                    </p>


                    <SocialLinks />
                </div>
            </div>


        </div>
    )
}
