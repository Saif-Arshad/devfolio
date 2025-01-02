import React from 'react'
import AboutHero from './_components/AboutHero'
import WhatWeDo from './_components/what-we-do'
import AboutUs from './_components/AboutUs'
import WeeklyStats from './_components/WeeklyStats'
import { getWakaStats } from '@/_actions/waka-time'
import { fetchGithubData } from '@/_actions/github'
import GithubContributions from './_components/GithubContributions'

async function page() {

    const { data, error } = await getWakaStats()
    console.log("🚀 ~ page ~ error:", error)

    const { data: githubData, status } = await fetchGithubData()
    console.log("🚀 ~ page ~ status:", status)
    console.log("🚀 ~ page ~ githubData:", githubData)
    return (
        <>
            <AboutHero />
            <WeeklyStats data={data} />
            <GithubContributions data={githubData} />
            <AboutUs />

            <WhatWeDo />
        </>
    )
}

export default page