import FirstAbout from "@/app/_components/home/hero-section";
import AboutUs from "./about-us/_components/AboutUs";
import Skills from "./about-us/_components/Skills";
import WhyUs from "./about-us/_components/WhyUs";
import FeatureProjects from "@/app/_components/home/feature-projects";
import LatestPost from "@/app/_components/home/latest-post";
import Faqs from "@/app/_components/home/Faqs";
import WhatWeDo from "./about-us/_components/what-we-do";

export default function Home() {
  return (
    <>
      <FirstAbout />
      <AboutUs />
      <div className='flex items-center flex-col px-4 lg:px-10 xl:px-10 my-12 w-full'>
        <Skills />
      </div>
      <WhyUs />
      <FeatureProjects />
      <LatestPost />
      <Faqs />
      <WhatWeDo />
    </>
  );
}
