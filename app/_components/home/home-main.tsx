import React from 'react'
import FirstAbout from './hero-section'
import { TimelineDemo } from './experience-timeline'
import AboutUs from '../../(landing_pages)/about-us/_components/AboutUs'
import LatestPost from './latest-post'
import Skills from '@/app/(landing_pages)/about-us/_components/Skills'

function HomeMain() {
    return (
        <>
            <FirstAbout />
            <AboutUs />
            <div className='flex items-center flex-col px-4 lg:px-10 xl:px-10 my-12 w-full'>
                <Skills />
            </div>
            <TimelineDemo />
            <LatestPost />
        </>
    )
}

export default HomeMain