"use client";

import React from 'react';

function AboutUs() {
    return (
        <section className="py-14 px-4 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5 mr-0">
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
                                    <p
                                        className="text-gray-300 text-base font-normal leading-relaxed lg:text-start sm:text-center">
                                        I&apos;m Saif Ur Rehman I&lsquo;ve been working in web development for over 3 years (and if you count the sleepless nights,
                                        <span className="text-primaryColor font-semibold px-1.5">
                                            it’s easily 4!
                                        </span>
                                        ) doing both

                                        <span className="text-primaryColor font-semibold px-1.5">

                                            frontend
                                        </span>
                                        (The stuff you see on the screen)
                                        and
                                        <span className="text-primaryColor font-semibold px-1.5">
                                            backend
                                        </span>
                                        (The stuff that happens behind the scenes)



                                        I focus on building practical and reliable solutions that help businesses solve problems and achieve their goals. I am a firm believer in the
                                        <span className="text-primaryColor font-semibold px-1.5">
                                            power of technology
                                        </span>
                                        to transform businesses and lives.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        className="w-full h-full p-3.5 rounded-2xl bg-neutral-800  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                                    >
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">4+ Years</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Professional Experience in Development
                                        </p>
                                    </div>
                                    <div
                                        className="w-full h-full p-3.5 rounded-2xl bg-neutral-800  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                                    >
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">50+ Projects</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Successfully Delivered with Excellence
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid grid-cols-1">
                                    <div
                                        className="w-full h-full p-3.5 rounded-2xl bg-neutral-800  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
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
        </section>
    );
}

export default AboutUs;
