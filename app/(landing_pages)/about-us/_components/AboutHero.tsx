import React from 'react'
import GradualSpacing from '../../../_components/ui/gradual-spacing'
import IconCloud from '../../../_components/ui/icon-cloud'
import SocialLinks from '@/_components/buttons/Social';

function AboutHero() {
    const slugs = [
        "typescript",
        "javascript",
        "mysql",
        "python",
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
        <div className="flex flex-wrap w-full px-1 sm:px-5 lg:px-10 items-start mb-20">
            <div className="flex flex-col w-full lg:w-1/2  mt-7 ">
                <div className='flex flex-col items-start '>

                    <GradualSpacing
                        className="font-display text-4xl md:text-6xl font-bold -tracking-widest  text-black dark:text-white md:mt-3   md:leading-[5rem]"
                        text=" Saif Ur Rehman."
                    />
                    <h3 className="text-primaryColor tracking-wide mt-1 ml-3  font-semibold text-xl">
                        Software Engineer
                    </h3>
                </div>
                <div >

                    <p className="mt-7 text-white text-lg">
                        ⚡ I help your
                        <span className="text-primaryColor font-semibold px-1.5">
                            PRODUCT SHINE
                        </span>
                        in a crowded market

                    </p>
                    <p className="mt-3 text-white text-lg">
                        💻 Exploring opportunities and side projects.
                    </p>
                    <p className="mt-3 text-white text-lg">
                        🚀 I create clean, responsive, engaging, and accessible digital experiences.
                        I specialize in crafting
                        <span className="text-primaryColor font-semibold px-1.5">complex</span>,
                        <span className="text-primaryColor font-semibold px-1.5">fast</span>, and
                        <span className="text-primaryColor font-semibold px-1.5">functional</span>
                        digital products that deliver
                        <span className="text-primaryColor font-semibold px-1.5">exceptional user experiences</span>.
                    </p>



                    <SocialLinks />

                </div>
            </div>


            <div className="flex relative flex-col items-center justify-start w-full  lg:w-1/2 ">
                <IconCloud iconSlugs={slugs} />

            </div>
        </div>
    )
}

export default AboutHero