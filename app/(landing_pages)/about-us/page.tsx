import React from 'react'
import AboutHero from './_components/AboutHero'
import WhatWeDo from './_components/what-we-do'
import AboutUs from './_components/AboutUs'
import WeeklyStats from './_components/WeeklyStats'
import { getWakaStats } from '@/_actions/waka-time'

async function page() {

    const { data, details, error } = await getWakaStats()
    console.log("🚀 ~ page ~ error:", error)
    console.log("🚀 ~ page ~ details:", details)
    console.log("🚀 ~ page ~ data:", data)
    return (
        <>
            <AboutHero />
            <WeeklyStats data={data} />
            <AboutUs />
            <WhatWeDo />
        </>
    )
}

export default page