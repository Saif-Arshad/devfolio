"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// GradualSpacing component for heading animation
function GradualSpacing({ text = "Ask Us Anything?" }: { text: string }) {
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
                            className="text-5xl font-jakarta font-normal text-gray-900 leading-tight max-md:text-2xl"
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
}

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}


interface Service {
  title: string;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

interface FAQSectionProps {
  service: Service;
}

const FAQSection: React.FC<FAQSectionProps> = ({ service }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl relative flex flex-col items-center justify-center  w-full p-6 max-md:px-5 rounded-2xl mx-auto">
            <div className="flex flex-col items-center justify-start gap-11 max-w-6xl w-full mx-auto">
                
                <div className="grid grid-cols-2 gap-3 w-full" style={{ alignItems: 'start', gridAutoRows: 'max-content' }}>
                    {service.faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="w-full bg-neutral-800 rounded-lg cursor-pointer overflow-hidden"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex items-center justify-between gap-2.5 px-4 py-3">
                                <p className="flex-1 text-[10px] md:text-base font-inter font-normal text-white text-left leading-relaxed">
                                    {faq.question}
                                </p>
                                <div className="w-5 h-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256"
                                        className={`w-full h-full fill-white transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    >
                                        <g>
                                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-4 pb-4 text-[10px] md:text-sm font-inter font-normal text-white leading-relaxed"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FAQSection;