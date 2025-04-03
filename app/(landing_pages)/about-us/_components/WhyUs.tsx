"use client";

import { TransitionPanel } from "@/app/_components/ui/Tabs";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

function WhyUs() {
    const [activeIndex, setActiveIndex] = useState(2);

    const ITEMS = [
        {
            title: "Experience",
            description: "With extensive expertise, we excel in delivering bespoke mobile applications for iOS and Android. Utilizing advanced frameworks like React Native and the MERN stack, we ensure seamless collaboration to craft solutions tailored to your business needs.",
            bullets: [
                "A reliable and experienced partner",
                "State-of-the-art product security",
                "Comprehensive system security protocols",
                "Operational excellence and integrity",
            ],
        },
        {
            title: "Why Us",
            description: "Our value goes beyond development. By choosing us, you benefit from transparent pricing, discounts for large orders, and a dedication to delivering premium-quality web and mobile solutions designed with your goals in mind.",
            bullets: [
                "Affordable, high-quality solutions",
                "Customized approaches for unique challenges",
                "Modern, responsive designs",
                "Dedicated, ongoing technical support",
            ],
        },
        {
            title: "My Approach",
            description: "Driven by innovation, My approach ensures that every project is handled with care, from conceptualization to deployment. Leveraging cutting-edge tools like MERN stack and Next.js, we create scalable, efficient, and user-friendly digital experiences.",
            bullets: [
                "Providing daily updates to keep clients informed",
                "Conducting weekly meetings to gather feedback",
                "Delivering live demonstrations of progress",
                "Proactively resolving challenges for seamless development",
            ],
        },
    ];

    return (
        <section className="py-14 px-4 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5  text-gray-300">
            <div className="w-full mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-8">
                            <h6 className="text-gray-400 text-base font-normal">
                                {ITEMS[activeIndex].title}
                            </h6>
                            <h2
                                className="text-gray-100 text-3xl sm:text-4xl font-bold font-manrope leading-normal lg:text-start sm:text-center">
                                Let's make it happen together!</h2>
                            <div className="my-4 mb-1 flex space-x-2">
                                {ITEMS.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${activeIndex === index
                                            ? "bg-emerald-700 text-white"
                                            : "bg-neutral-800 text-gray-300 hover:bg-neutral-600"
                                            }`}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-1">
                                <TransitionPanel
                                    activeIndex={activeIndex}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    variants={{
                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                    }}
                                >
                                    {ITEMS.map((item, index) => (
                                        <div key={index} className="py-2">
                                            <p className="mb-4 text-gray-300">{item.description}</p>
                                            {item.bullets.map((bullet, bulletIndex) => (
                                                <div key={bulletIndex} className="flex items-start gap-3 mb-3">
                                                    <FaCheckCircle className="text-primaryColor mt-1" />
                                                    <p className="text-gray-300">{bullet}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </TransitionPanel>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-start">
                        <div className="w-full h- relative">
                            <img
                                className="w-full h-full object-cover"
                                src="/workshop-.png"
                                alt="About Us"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
