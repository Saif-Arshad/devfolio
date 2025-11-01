import FirstAbout from "@/app/_components/home/hero-section";
import Skills from "./about-us/_components/Skills";
import FeatureProjects from "@/app/_components/home/feature-projects";
import LatestPost from "@/app/_components/home/latest-post";
import Faqs from "@/app/_components/home/Faqs";
import WhatWeDo from "./about-us/_components/what-we-do";
import Tools from "@/app/_components/home/Tools";
import About from "@/app/_components/home/About";

export default function Home() {
  return (
    <>
      <FirstAbout />
      <div className='flex items-center flex-col px-4 lg:px-10 xl:px-10 my-20 mb-10 w-full'>
        <Skills />
      </div>
      <About />
      <Tools />
      <FeatureProjects />
      <LatestPost />
      <Faqs />
      <WhatWeDo />
    </>
  );
}
