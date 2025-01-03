import React from 'react'
import GradualSpacing from '../../../_components/ui/gradual-spacing'
import IconCloud from '../../../_components/ui/icon-cloud'
import SocialLinks from '@/app/_components/buttons/Social';

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
        <div className="flex flex-wrap w-full px-4 sm:px-5 lg:px-10 items-start mb-20">
            <div className="flex flex-col w-full lg:w-1/2  mt-7 ">
                <div className='flex flex-col items-start '>

                    <GradualSpacing
                        className="font-display text-4xl md:text-6xl font-bold -tracking-widest  text-black dark:text-white md:mt-3   md:leading-[5rem]"
                        text=" Saif Ur Rehman."
                    />
                    <h3 className="text-primaryColor tracking-wide ml-3  font-semibold text-xl">
                        Software Engineer
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