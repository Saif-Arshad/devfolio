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
            <div className='flex items-center flex-col px-4 lg:px-10 xl:px-20 my-7 w-full'>
                <Skills />
            </div>
            <AboutUs />
            <WeeklyStats data={data} />
            <GithubContributions data={githubData} />
            <LatestPost />
            <WhatWeDo />
        </>
    )
}

export default page