"use client"

import React, { useRef } from 'react'
import { TextLoop } from '@/app/_components/shared/loopText';
import Link from 'next/link';
import { CircleArrowOutUpRight, FileUser } from 'lucide-react';
    import IconCloud from '@/app/_components/ui/icon-cloud';

import { motion, AnimatePresence, useInView } from "framer-motion";

function GradualSpacing({
    text = "Design. Build. Launch. Custom solutions.",
  }: {
    text: string;
  }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div className="flex flex-wrap justify-center max-w-[600px] max-md:mt-10">
        <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.span
              ref={ref}
              key={i}
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="text-white font-jakarta font-semibold leading-[120%] md:text-[56px] text-[24px]"
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }
  function GradualTextSpacing({
    text = "We turn challenges into growth opportunities through tailored digital solutions.",
  }: {
    text: string;
  }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div className="flex flex-wrap justify-center max-w-3xl">
        <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.span
              ref={ref}
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{ duration: 0.2, delay: i * 0.03 }}
              className="text-sm md:text-base font-inter primary-color"
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }
function AboutHero() {
 
    return (
        <div className="flex flex-wrap w-full px-4 sm:px-5 lg:px-10 items-start mb-20">
                 <div className="min-h-screen w-full z-0 left-0 absolute top-0 bg-cover bg-center bg-no-repeat"></div>
      <div
        className=" z-10 py-10 w-full flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/11.PNG')", backgroundSize: "cover" }}
      >

        <div className="flex flex-col items-center justify-center pt-32 w-full max-w-4xl mx-auto gap-6 p-4">
          <div className="flex items-center bg-neutral-800 rounded-full px-4 py-2 available-shadow  shadow-blue-200 cursor-pointer">
          <span className="relative flex h-4 w-4 me-2 ">
                            <span className="btn-ping"></span>
                            <span className="btn-ping_dot"></span>
                            </span>
            <p className="ml-2 text-sm font-medium text-white font-inter">
              Available for work
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex justify-center w-full relative">
              {/* Left side service badges */}
              <div className="absolute left-0 top-0 w-1/2 z-10">
                <div
                  className="flex flex-col items-center bg-neutral-900 rounded-full py-1.5 px-1.5 shadow-lg rotate-3 absolute
                    md:left-[-192px] md:top-[-52px]
                    left-[-40px] top-[-10px]"
                >
                                    <div className="flex items-center bg-neutral-800 rounded-full py-1 px-1.5 pr-3 shadow-sm gap-2">
                    <div className="flex items-center justify-center bg-orange-500/80 backdrop-blur-md border border-orange-500/60 rounded-full w-6 h-6 md:w-8 md:h-8">
                   
                      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.812762 6.55653C0.976468 3.57014 1.05832 2.07694 2.03693 1.20005C3.01554 0.323149 4.50874 0.405002 7.49513 0.568707C10.4815 0.732413 11.9747 0.814266 12.8516 1.79288C13.7285 2.77149 13.6467 4.26468 13.4829 7.25107L13.1853 12.6812C13.0216 15.6675 12.9397 17.1607 11.9611 18.0376C10.9825 18.9145 9.48931 18.8327 6.50292 18.669C3.51653 18.5053 2.02333 18.4234 1.14644 17.4448C0.269542 16.4662 0.351395 14.973 0.515101 11.9866L0.812762 6.55653Z" fill="#FDF3C7" fill-opacity="0.15" stroke="#FDF3C7" stroke-width="1.35956" stroke-linecap="round"/>
<path d="M5.7467 15.9041L7.55673 16.0033" stroke="#FDF3C7" stroke-width="1.35956" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.78015 0.419434L4.83421 0.90714C4.95135 1.96406 5.00993 2.49252 5.35163 2.83087C5.70807 3.18382 6.23875 3.22259 7.34636 3.2833C8.45397 3.34402 8.98571 3.36349 9.3786 3.05162C9.75523 2.75264 9.87122 2.23375 10.1032 1.19597L10.2102 0.717095" stroke="#FDF3C7" stroke-width="1.35956" stroke-linejoin="round"/>
</svg>

                    </div>
                    <p className="text-xs md:text-sm font-medium text-center font-inter whitespace-nowrap">
                      Mobile App Development
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col items-center bg-neutral-900 rounded-full p-2 shadow-lg rotate-2 absolute
                    md:left-[-171px] md:top-[12px]
                    left-[-35px] top-[45px]"
                >

                                    <div className="flex items-center bg-neutral-800 rounded-full py-1 px-1.5 pr-3 shadow-sm gap-2">
                    <div className="flex items-center justify-center bg-[#474747] backdrop-blur-md border border-gray-700/60 rounded-full w-6 h-6 md:w-8 md:h-8">
                      {/* <PenTool
                        className="w-3 h-3 md:w-4 md:h-4 text-white"
                        style={{ transform: "rotate(-2deg)" }}
                      /> */}
                      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2481 5.31416C11.5433 4.25751 12.3932 2.47661 11.5671 1.45798C11.0032 0.762655 9.87418 0.700721 7.61621 0.576852L7.37458 0.563597C5.1166 0.439729 3.98761 0.377794 3.35102 1.00726C2.41844 1.92941 3.06847 3.7926 3.24626 4.87519" stroke="#C9FDD4" stroke-width="1.35937" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3028 12.318L8.20091 17.2716C7.41414 18.2217 7.02076 18.6968 6.50259 18.6684C5.98441 18.64 5.64536 18.1247 4.96725 17.0942L1.43186 11.7216L1.43186 11.7216C0.864952 10.8601 0.581496 10.4294 0.626392 9.9894C0.671288 9.54941 1.10562 9.10974 1.97428 8.2304C2.8115 7.3829 3.15842 6.47674 3.24623 4.87597L11.2481 5.31453C11.1603 6.9153 11.4063 7.85415 12.1456 8.78826C12.9128 9.75754 13.2964 10.2422 13.2929 10.6844C13.2893 11.1266 12.9605 11.5237 12.3028 12.318Z" fill="#D5FFDE" fill-opacity="0.14" stroke="#C9FDD4" stroke-width="1.35937" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25703 11.5034C7.84195 11.7693 7.36933 11.9085 6.87487 11.8814M6.87487 11.8814C6.38041 11.8543 5.92586 11.6642 5.54236 11.3545M6.87487 11.8814L6.50257 18.6681" stroke="#C9FDD4" stroke-width="1.35937" stroke-linecap="round"/>
</svg>

                    </div>
                    <p className="text-xs md:text-sm font-medium text-center font-inter whitespace-nowrap">
                      UI/UX Design
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col items-center bg-neutral-900 rounded-full p-2 shadow-lg -rotate-5 absolute
                    md:left-[-165px] md:top-[84px]
                    left-[-30px] top-[100px]"
                >
                                    <div className="flex items-center bg-neutral-800 rounded-full py-1 px-1.5 pr-3 shadow-sm gap-2">
                    <div className="flex items-center justify-center bg-yellow-400/80 backdrop-blur-md border border-yellow-400/60 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.47232 7.36745C1.24011 4.3856 1.12401 2.89467 1.97821 1.8962C2.83242 0.897718 4.32334 0.781615 7.30519 0.549408C10.287 0.317202 11.778 0.201099 12.7764 1.0553C13.7749 1.90951 13.891 3.40043 14.1232 6.38228L14.5454 11.8041C14.7776 14.7859 14.8938 16.2769 14.0395 17.2753C13.1853 18.2738 11.6944 18.3899 8.71257 18.6221C5.73072 18.8543 4.2398 18.9704 3.24132 18.1162C2.24284 17.262 2.12674 15.7711 1.89453 12.7893L1.47232 7.36745Z" fill="#DE88FF" fill-opacity="0.15" stroke="#5D0E7B" stroke-width="1.35956" stroke-linecap="round"/>
<path d="M7.5979 15.9817L9.40517 15.841" stroke="#5D0E7B" stroke-width="1.35956" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.59424 0.760498L4.71224 1.23679C4.96797 2.26898 5.09584 2.78507 5.47924 3.07532C5.87918 3.37809 6.41033 3.34642 7.51625 3.2603C8.62218 3.17418 9.15183 3.12324 9.50008 2.7622C9.83392 2.4161 9.88035 1.88643 9.97321 0.827102L10.0161 0.338283" stroke="#5D0E7B" stroke-width="1.35956" stroke-linejoin="round"/>
</svg>

                    </div>
                    <p className="text-xs md:text-sm font-medium text-center font-inter whitespace-nowrap">
                      CMS Development
                    </p>
                  </div>
                </div>
              </div>

              {/* Center heading */}
              <div
                className="z-20 relative flex items-center justify-center
                md:mt-0 mt-[140px]"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <GradualSpacing text="Design. Build. Launch. Custom solutions." />
                </motion.div>
              </div>

              {/* Right side service badges */}
              <div className="absolute right-0 top-0 w-1/2 z-10">
                <div
                  className="flex flex-col items-center bg-neutral-900 rounded-full py-1.5 px-1.5 shadow-lg -rotate-5 absolute
                    md:right-[-187px] md:top-[-34px]
                    right-[-40px] top-[-10px]"
                >
                                                <div className="flex items-center bg-neutral-800 rounded-full py-1 px-1.5 pr-3 shadow-sm gap-2">
                    <div className="flex items-center justify-center bg-[#88fc7c] backdrop-blur-md border border-green-400/60 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0452 7.52452C16.7311 4.06638 16.5741 2.33731 15.4191 1.35905C14.2641 0.380785 12.5623 0.535365 9.15864 0.844524L7.35358 1.00848C3.94991 1.31764 2.24807 1.47222 1.28827 2.64257C0.328462 3.81292 0.485515 5.54199 0.799622 9.00013C1.11373 12.4583 1.27078 14.1873 2.42575 15.1656C2.88869 15.5577 3.4395 15.7678 4.15256 15.8589" stroke="#3025F5" stroke-width="1.35937" stroke-linecap="round"/>
<path d="M19.4547 14.0141C19.301 12.3219 19.2242 11.4759 18.7394 10.9219C18.5828 10.743 18.399 10.5898 18.1948 10.468C17.5626 10.091 16.7165 10.1679 15.0244 10.3215L10.5117 10.7314C8.81959 10.8851 7.97353 10.962 7.41955 11.4468C7.24064 11.6034 7.08749 11.7871 6.96572 11.9913C6.58867 12.6235 6.66552 13.4696 6.81922 15.1617C6.97292 16.8539 7.04977 17.6999 7.53456 18.2539C7.69113 18.4328 7.87488 18.586 8.07908 18.7077C8.71133 19.0848 9.5574 19.0079 11.2495 18.8542L15.7622 18.4444C17.4543 18.2907 18.3004 18.2138 18.8544 17.729C19.0333 17.5724 19.1864 17.3887 19.3082 17.1845C19.6853 16.5522 19.6084 15.7062 19.4547 14.0141Z" fill="white" fill-opacity="0.2" stroke="#3025F5" stroke-width="1.35937"/>
<path d="M14.3678 13.111L15.263 13.7512C15.6394 14.0203 15.8275 14.1549 15.8445 14.3418C15.8615 14.5288 15.7006 14.695 15.3789 15.0276L14.6137 15.8186" stroke="#3025F5" stroke-width="1.35937" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6601 13.3573L10.8949 14.1483C10.5732 14.4808 10.4123 14.6471 10.4293 14.834C10.4463 15.0209 10.6345 15.1555 11.0108 15.4247L11.9061 16.0649" stroke="#3025F5" stroke-width="1.35937" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.912476 5.23364L16.2556 3.84001" stroke="#3025F5" stroke-width="1.35937" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <p className="text-xs md:text-sm font-medium text-center font-inter whitespace-nowrap">
                      Website Development
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col items-center bg-neutral-900 rounded-full p-2 shadow-lg -rotate-5 absolute
                    md:right-[-199px] md:top-[24px]
                    right-[-35px] top-[45px]"
                >
                                    <div className="flex items-center bg-neutral-800 rounded-full py-1 px-1.5 pr-3 shadow-sm gap-2">
                    <div className="flex items-center justify-center bg-pink-500/80 backdrop-blur-md border border-pink-500/60 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7.64531 6.72767C4.87611 6.9792 2.81474 9.2035 3.04112 11.6958L8.0552 11.2403L7.64531 6.72767Z" fill="white" fill-opacity="0.1" stroke="#D4FDFB" stroke-width="1.35938"/>
<path d="M1.89695 14.4308C3.19923 16.5178 5.78565 17.8165 8.62865 17.5583L8.05481 11.2406L3.7427 11.6322C2.43848 11.7507 1.78636 11.8099 1.44838 12.4901C1.11039 13.1703 1.37258 13.5905 1.89695 14.4308Z" fill="#D9D9D9" fill-opacity="0.2" stroke="#D4FDFB" stroke-width="1.35938"/>
<path opacity="0.4" d="M11.4343 18.7576C15.0196 17.3975 17.4111 14.0686 17.0797 10.4207L8.05438 11.2405L8.54625 16.6557C8.66614 17.9756 8.72608 18.6355 9.29814 18.9932C9.87019 19.3509 10.3916 19.1532 11.4343 18.7576Z" fill="white" fill-opacity="0.1" stroke="#D4FDFB" stroke-width="1.35938"/>
<path d="M18.4403 7.60729C17.0715 4.28194 13.7854 1.88104 9.86585 1.36495C8.72981 1.21537 8.16179 1.14058 7.69052 1.59321C7.21926 2.04584 7.27903 2.70393 7.39858 4.0201L8.05441 11.2404L16.3778 10.4844C17.6963 10.3646 18.3556 10.3047 18.7114 9.71759C19.0672 9.13046 18.8583 8.62273 18.4403 7.60729Z" fill="#D9D9D9" fill-opacity="0.2" stroke="#D4FDFB" stroke-width="1.35938"/>
</svg>

                    </div>
                    <p className="text-xs md:text-sm font-medium text-center font-inter whitespace-nowrap">
                      SaaS Applications
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col items-center bg-neutral-900 rounded-full p-2 shadow-lg rotate-5 absolute
                    md:right-[-170px] md:top-[100px]
                    right-[-30px] top-[100px]"
                >
                                            <div className="flex items-center bg-neutral-800 rounded-full py-1 px-1.5 pr-3 shadow-sm gap-2">
                    <div className="flex items-center justify-center bg-yellow-500/80 backdrop-blur-md border border-yellow-500/60 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9.90214" cy="10.3394" r="9.0625" transform="rotate(4.12 9.90214 10.3394)" fill="white" fill-opacity="0.1" stroke="#5D0E7B" stroke-width="1.35938" stroke-linejoin="round"/>
<path d="M15.3256 10.7302L15.7704 11.2441L16.2843 10.7993L15.8395 10.2854L15.3256 10.7302ZM4.4787 9.94888L4.03386 9.43498L3.51996 9.87982L3.9648 10.3937L4.4787 9.94888ZM13.2286 8.30766L12.7147 8.7525L14.8117 11.175L15.3256 10.7302L15.8395 10.2854L13.7425 7.86282L13.2286 8.30766ZM15.3256 10.7302L14.8808 10.2163L12.4582 12.3133L12.903 12.8272L13.3479 13.3411L15.7704 11.2441L15.3256 10.7302ZM6.90124 7.85189L6.4564 7.33799L4.03386 9.43498L4.4787 9.94888L4.92354 10.4628L7.34608 8.36579L6.90124 7.85189ZM4.4787 9.94888L3.9648 10.3937L6.06179 12.8163L6.57569 12.3714L7.08959 11.9266L4.99259 9.50404L4.4787 9.94888ZM11.9704 6.85413L11.3859 6.50728L7.24937 13.4781L7.83389 13.825L8.41841 14.1718L12.5549 7.20099L11.9704 6.85413Z" fill="#5D0E7B"/>
</svg>

                    </div>
                    <p className="text-xs md:text-sm font-medium text-center font-inter whitespace-nowrap">
                      Custom Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="z-30 relative">
              <GradualTextSpacing text="We turn challenges into growth opportunities through tailored digital solutions." />
            </div>
          </div>

            <Link href={`/work`}>
                        <button className='bg-emerald-700 hover:bg-emerald-800 mt-7 items-center flex text-white p-2 rounded-full px-5 group'>
                            <CircleArrowOutUpRight className='h-5 w-5 me-2 group-hover:animate-shake' />
                           My Previous Work</button>
                    </Link>
        </div>
        </div>
        </div>
    )
}

export default AboutHero