"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutFAQs = [
  {
    id: 1,
    question: "Experience",
    answer:
      "With over 3-4 years working in tech, I've gained extensive knowledge and hands-on experience. I can help your business grow with the right solutions and strategies.",
  },
  {
    id: 2,
    question: "Why Me?",
    answer:
      "I have successfully completed multiple projects that delivered real results. This is not part-time work—it's my full-time commitment. I have two stable internet connections to ensure seamless productivity and reliable service.",
  },
  {
    id: 3,
    question: "My Approach",
    answer:
      "I provide daily updates, weekly progress reports, and live demonstrations of the work being done. I address issues and implement updates promptly to keep projects on track.",
  },
  {
    id: 4,
    question: "Team",
    answer:
      "I'm not working alone. I have a qualified team of skilled professionals who bring expertise and dedication to every project. Together, we deliver exceptional results and exceed expectations.",
  },
];

const AboutFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="space-y-3">
        {aboutFAQs.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, layout: { duration: 0.3, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="w-full bg-neutral-800 rounded-lg shadow-[0_0.8px_1.43px_-0.88px_rgba(16,49,77,0.21),0_2.41px_4.35px_-1.75px_rgba(16,49,77,0.2),0_6.38px_11.49px_-2.63px_rgba(16,49,77,0.17),0_20px_36px_-3.5px_rgba(16,49,77,0.09)] cursor-pointer overflow-hidden transition-all duration-300"
            layout
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between gap-2.5 px-4 py-3">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-white text-left leading-relaxed">
                  {String(item.id).padStart(2, "0")}.
                </span>
                <p className="text-sm font-medium text-white text-left leading-relaxed">
                  {item.question}
                </p>
              </div>
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className={`w-full h-full fill-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
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
                  className="px-4 pb-4 text-sm font-inter font-normal text-white leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutFAQSection;
