"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// GradualSpacing component for heading animation
function GradualSpacing({ text = "About Us" }: { text: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex flex-wrap justify-center max-w-2xl">
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.span
                        ref={ref}
                        key={i}
                        initial={{ opacity: 0, x: -18 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        exit="hidden"
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="text-5xl font-jakarta font-bold text-white leading-tight max-md:text-2xl"
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
}
function GradualButtonSpacing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const buttons = [
      {
        href: "/contact-us",
        target: "",
        className:
            "flex items-center gap-2 bg-emerald-700 rounded-lg px-6 py-3 text-white font-inter font-medium shadow-lg hover:shadow-xl transition-shadow get-started-btn text-sm md:text-base cursor-pointer",
        text: "Get Started",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            style={{
              userSelect: "none",
              width: "22px",
              height: "22px",
              display: "inline-block",
              fill: "rgb(255, 255, 255)",
              color: "rgb(255, 255, 255)",
              flexShrink: 0,
            }}
          >
            <g fill="currentColor">
              <path d="M224,128a8,8,0,0,1-3.2,6.4l-80,60a8,8,0,0,1-12.8-6.4V136H40a8,8,0,0,1,0-16H128V70.4a8,8,0,0,1,12.8-6.4l80,60A8,8,0,0,1,224,128Z" />
            </g>
          </svg>
        ),
      }
   
    ];
  
    return (
      <div className="flex flex-wrap justify-center gap-4" ref={ref}>
        <AnimatePresence>
          {buttons.map((button, index) => (
            <motion.a
              key={index}
              href={button.href}
              target={button.target}
              className={button.className}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {button.text} {button.icon}
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    );
  }
interface Service {
  title: string;
  description: string;
  heroDescription: string;
}

interface HeroProps {
  service: Service;
}

const Hero = ({ service }: HeroProps) => {
    return (
        <div>
            {/* Header Section */}
            <section className=" relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1240px] relative flex flex-col items-center justify-center  w-full p-10 max-md:px-5 rounded-2xl mx-auto">
                        <div className="flex flex-col items-center z-10 gap-4 max-w-2xl w-full">
                       

                            <div className="flex flex-col items-center gap-4">
                                {/* Main Heading */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <GradualSpacing text={service.title} />
                                </motion.div>

                                {/* Subtitle */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="text-base font-inter font-normal text-white text-center leading-relaxed"
                                >
                                    {service.heroDescription}
                                </motion.p>
                               {/*     <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="text-base font-inter font-normal text-gray-900 text-center leading-relaxed"
                                >
                                    <button className="bg-[#3e66fb] text-white flex items-center gap-2 px-6 py-2 rounded-lg" >
                                        Get Started
                                        <ArrowRight />
                                    </button> */}
                                {/* </motion.div> */}

          <GradualButtonSpacing />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main Content Section */}
            <section className="py-8 relative z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-1">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + 0.2 }}
                            viewport={{ once: true }}
                            className={"bg-[#F0F8FF] p-6 rounded-3xl"}
                        >
                            <Image
                                alt=""
                                className="rounded-2xl object-cover w-full h-full"
                                width={800}
                                height={500}
                                src={'/images/service.png'}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
