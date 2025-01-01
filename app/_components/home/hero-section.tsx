"use client"
import React from 'react'
import GradualSpacing from '../ui/gradual-spacing'
import { TypeAnimation } from 'react-type-animation'
import SocialLinks from '../buttons/Social'

export default function FirstAbout() {
    return (
        <div className="flex flex-wrap h-full w-full">
            <div className="flex flex-col h-full w-full lg:w-8/12  mt-7 px-3 sm:px-5 lg:px-10">
                <h3 className="text-primaryColor tracking-wide font-semibold md:text-xl">Hi , I am </h3>
                <div className='flex flex-col items-start'>

                    <GradualSpacing
                        className="font-display text-4xl font-bold -tracking-widest  text-black dark:text-white sm:text-7xl lg:text-[100px] md:my-3   md:leading-[5rem]"
                        text=" Saif Ur Rehman"
                    />
                    <h3 className="text-primaryColor tracking-wide mt-2 ml-7 font-semibold sm:text-xl">
                        <TypeAnimation
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
                        />

                    </h3>
                </div>
                <div className=''>

                    <p className="mt-7 text-white sm:text-lg">
                        🚀 A passionate Software Developer based in Faislabad,
                        Pakistan

                        .
                    </p>
                    <p className="mt-2 text-white sm:text-lg">
                        ⚡ I help your
                        <span className=" shine-text font-semibold px-1.5">
                            PRODUCT SHINE
                        </span>
                        in a crowded market

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
                        <span className="text-primaryColor font-semibold px-1.5">fast</span>, and
                        <span className="text-primaryColor font-semibold px-1.5">functional</span>
                        digital products that deliver
                        <span className="text-primaryColor font-semibold px-1.5">exceptional user experiences</span>.
                    </p>


                    <SocialLinks />
                </div>
            </div>


        </div>
    )
}
