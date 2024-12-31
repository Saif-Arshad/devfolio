import React from 'react'
import FirstAbout from './hero-section'
import { TimelineDemo } from './experience-timeline'
import AboutUs from '../../(landing_pages)/about-us/_components/AboutUs'
import LatestPost from './latest-post'

function HomeMain() {
    return (
        <>
            <FirstAbout />
            <AboutUs />
            <TimelineDemo />
            <LatestPost />
        </>
    )
}

export default HomeMain