"use client";

import GradualSpacing from '@/app/_components/ui/gradual-spacing';
import React from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import AboutFAQSection from './AboutFAQSection';

function AboutUs() {
    return (
        <>
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - About Company Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-neutral-800 rounded-2xl shadow-[0_0.8px_1.43px_-0.88px_rgba(16,49,77,0.21),0_2.41px_4.35px_-1.75px_rgba(16,49,77,0.2),0_6.38px_11.49px_-2.63px_rgba(16,49,77,0.17),0_20px_36px_-3.5px_rgba(16,49,77,0.09)] p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Who we are Badge */}
                  <div className="flex items-center gap-2 bg-neutral-900 border border-gray-900 rounded-full px-3 py-1.5  w-fit">
                    <p className="text-sm font-inter font-normal text-white">
                      Who i am
                    </p>
                  </div>

                  {/* Main Heading */}
                  <div className="flex items-center gap-3">
                 
                    <h2 className="text-2xl font-jakarta font-semibold text-white max-md:text-2xl">
                      About Saif
                    </h2>
                  </div>

                  {/* Description */}
                  <p
                                        className="text-gray-300 text-base font-normal leading-relaxed lg:text-start sm:text-center">
                                        I&apos;m Saif Ur Rehman I&lsquo;ve been working in tech for over 3 years (and if you count the sleepless nights,
                                        <span className="text-primaryColor px-1.5">
                                            it’s easily 4!
                                        </span>
                                        ) doing both

                                        <span className="text-primaryColor px-1.5">

                                            frontend
                                        </span>
                                        (The stuff you see on the screen)
                                        and
                                        <span className="text-primaryColor px-1.5">
                                            backend
                                        </span>
                                        (The stuff that happens behind the scenes)



                                        I focus on building practical and reliable solutions that help businesses solve problems and achieve their goals. I am a firm believer in the
                                        <span className="text-primaryColor px-1.5">
                                            power of technology
                                        </span>
                                        to transform businesses and lives.
                                    </p>
                </div>
              </motion.div>

              {/* Right Column - FAQ Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className=""
              >
                <AboutFAQSection />
              </motion.div>
            </div>
          </div>
        </section>
        {/* <section className="py-14 px-4 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full  mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start flex">
                        <div className="w-full h-full relative">
                            <img
                                className="sm:mt-5 w-full h-full rounded-3xl object-cover"
                                src="/images/icons/Developer activity-bro.png"
                                alt="About Us image"
                            />
                        </div>
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Me</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-gray-100 text-3xl sm:text-4xl font-bold font-manrope leading-normal lg:text-start sm:text-center">
                                        Let’s create something amazing together! 🚀</h2>
                                  
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        className="w-full h-full p-3.5 rounded-2xl bg-neutral-800 border border-neutral-700 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                                    >
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">Quality Solutions</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Expertise in delivering top-quality solutions
                                        </p>
                                    </div>
                                    <div
                                        className="w-full h-full p-3.5 rounded-2xl bg-neutral-800 border border-neutral-700 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"

                                    >
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">50+ Projects</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Successfully Delivered with Excellence
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid grid-cols-1">
                                    <div
                                        className="w-full h-full p-3.5 rounded-2xl bg-neutral-800 border border-neutral-700 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"

                                    >
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">100% Happy Clients</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Reflecting Our Commitment to Satisfaction.  We believe in building strong relationships and delivering exceptional results that exceed expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section> */}
        </>
    
    );
}

export default AboutUs;
