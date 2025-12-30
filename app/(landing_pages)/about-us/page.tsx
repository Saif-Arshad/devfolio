import React from 'react'
import AboutHero from './_components/AboutHero'
import WhatWeDo from './_components/what-we-do'
import AboutUs from './_components/AboutUs'
import WeeklyStats from './_components/WeeklyStats'
import GithubContributions from './_components/GithubContributions'
import Skills from './_components/Skills'
import WhyUs from './_components/WhyUs'
import CareerPath from './_components/CareerPath'
import Tools from '@/app/_components/home/Tools'
import Process from './_components/Process'

async function page() {


    return (
        <>
                       <AboutUs />

            <div className='flex items-center flex-col px-4 lg:px-10 xl:px-10 my-7 w-full'>
                <Skills />
            </div>
            <WeeklyStats  />
            <GithubContributions />
            <Process/>
          
        </>
    )
}

export default page