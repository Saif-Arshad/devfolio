'use client'
import React, { useRef } from 'react'
import { motion, AnimatePresence, useInView } from "framer-motion";

// Fast GradualSpacing component for quick typing animation
function GradualSpacing({
    text = "Latest Articles",
    delay = 0.015,
    duration = 0.15,
    className = "text-white font-jakarta font-semibold leading-[120%] md:text-[36px] text-[24px]"
}: {
    text: string;
    delay?: number;
    duration?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div className="flex flex-wrap ">
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.span
                        ref={ref}
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: duration,
                            delay: i * delay,
                            ease: "easeOut"
                        }}
                        className={className}
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
}

interface Service {
  title: string;
  description: string;
  benefitsDescription: string;
}

interface BenifitsProps {
  service: Service;
}

const Benifits = ({ service }: BenifitsProps) => {
    return (
        <div className='flex justify-center'>
            <div className="space-y-6 max-w-6xl px-6 ">
                {/* Benefits Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-neutral-800 border border-neutral-800 rounded-full px-3 py-0.5 w-fit"
                >
                    <p className="text-base font-inter font-normal text-white text-[14px]">
                        Benefits
                    </p>
                </motion.div>

                {/* Main Heading */}
                <GradualSpacing
                    text={`Why you Need ${service.title}`}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="md:text-[24px] font-inter font-normal text-white  leading-relaxed"
                >
                    {service.benefitsDescription}
                </motion.p>

            </div>
        </div>
    )
}

export default Benifits