import React from 'react'
import FirstAbout from './hero-section'
import { TimelineDemo } from './experience-timeline'
import AboutUs from '../../(landing_pages)/about-us/_components/AboutUs'
import LatestPost from './latest-post'
import Skills from '@/app/(landing_pages)/about-us/_components/Skills'
import WhyUs from '@/app/(landing_pages)/about-us/_components/WhyUs'
import Faqs from './Faqs'
import WhatWeDo from '@/app/(landing_pages)/about-us/_components/what-we-do'
import FeatureProjects from './feature-projects'

function HomeMain() {
    return (
        <>
            <FirstAbout />
            <AboutUs />
            <div className='flex items-center flex-col px-4 lg:px-10 xl:px-10 my-12 w-full'>
                <Skills />
            </div>
            <WhyUs />
            <FeatureProjects />
            <TimelineDemo />
            <LatestPost />
            <Faqs />
            <WhatWeDo />

        </>
    )
}

export default HomeMain