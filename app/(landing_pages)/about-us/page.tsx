import React from 'react'
import AboutHero from './_components/AboutHero'
import WhatWeDo from './_components/what-we-do'
import AboutUs from './_components/AboutUs'
import WeeklyStats from './_components/WeeklyStats'
import { getWakaStats } from '@/_actions/waka-time'
import { fetchGithubData } from '@/_actions/github'
import GithubContributions from './_components/GithubContributions'
import Skills from './_components/Skills'
import LatestPost from '@/_components/home/latest-post'

async function page() {

    const { data } = await getWakaStats()

    const { data: githubData } = await fetchGithubData()
    return (
        <>
            <AboutHero />
            <WeeklyStats data={data} />
            <GithubContributions data={githubData} />
            <AboutUs />
            <div className='flex items-center flex-col px-4 lg:px-10 xl:px-20 w-full'>
                <div className='flex  justify-between w-full mb-6  border-b border-neutral-500 border-dashed pb-4'>
                    <h2
                        className="text-gray-100 text-2xl  font-bold font-manrope leading-normal lg:text-start sm:text-center">
                        ⚡ Tools that I have used
                    </h2>
                </div>
                <Skills />
            </div>
            <LatestPost />
            <WhatWeDo />
        </>
    )
}

export default page