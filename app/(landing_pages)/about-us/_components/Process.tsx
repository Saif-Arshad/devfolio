"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";

// GradualSpacing component for heading animation
export function GradualSpacing({
  text = "Our 4 Stage Process",
  width,
}: {
  text: string;
  width?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={`flex flex-wrap justify-center ${!width ? "max-w-[580px]" : ""}`}
      style={width ? { maxWidth: width } : undefined}
    >
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="text-white font-jakarta font-normal leading-tight text-5xl max-md:text-2xl"
            style={{ fontWeight: "590" }}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

interface StepData {
  number: number;
  title: string;
  detail: string;
}

const stepsData: StepData[] = [
  {
    number: 1,
    title: "Understanding Requirements",
    detail:
      "I start by understanding your goals, users, and technical needs. Clear requirements lead to better solutions — so I ask the right questions upfront to ensure we're aligned from day one.",
  },
  {
    number: 2,
    title: "Planning & Architecture",
    detail:
      "Once requirements are clear, I design the technical architecture and plan the development roadmap. This includes defining the tech stack, database schema, and breaking work into manageable milestones.",
  },
  {
    number: 3,
    title: "Development & Iteration",
    detail:
      "I build in iterative cycles — shipping working features regularly. You'll see progress through demos and updates, with room for feedback and adjustments along the way.",
  },
  {
    number: 4,
    title: "Delivery & Support",
    detail:
      "After thorough testing and deployment, I ensure a smooth handoff with documentation and support. I'm available for post-launch fixes, optimizations, and future enhancements.",
  },
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Setup transforms for each line segment with proper scroll ranges
  const lineTransform1 = useTransform(scrollYProgress, [0, 0.25], [0, 387]); // 453 - 66 = 387px
  const lineTransform2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 387]);
  const lineTransform3 = useTransform(scrollYProgress, [0.5, 0.75], [0, 387]);

  const lineTransforms = [lineTransform1, lineTransform2, lineTransform3];

  return (
    <div
      className="max-w-[1240px] pt-40 relative flex flex-col items-center justify-center w-full rounded-2xl mx-auto"
      ref={containerRef}
    >
  
      {/* Header Section */}
      <div className="flex z-10 flex-col items-center gap-4 pb-24 max-w-2xl w-full relative">
        <motion.div
          className="flex items-center gap-2 bg-neutral-800 border border-neutral-800 rounded-full px-3 py-0.5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-4 h-4 fill-emerald-700 opacity-80"
          >
            <g>
              <path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z" />
            </g>
          </svg>
          <p className="text-base font-inter font-normal text-white text-[14px]">
            How i work
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          <GradualSpacing text="My 4 Stage Process" />
          <motion.p
            className="text-base font-inter font-normal text-white text-center leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            How i transform ideas into exceptional digital experiences through
            our proven methodology
          </motion.p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex items-start"
            style={{ height: "453px" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative flex-shrink-0 mr-16 max-md:mr-8">
              <motion.div
                className="text-[66px] font-unbounded max-md:text-[25px] text-white leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
              >
                0{step.number}
              </motion.div>

              {index < stepsData.length - 1 && (
                <motion.div
                  className="absolute left-14 w-[4px] rounded-2xl origin-top max-md:left-[20px]"
                  style={{
                    top: "66px",
                    height: lineTransforms[index],
                    background:
                      "linear-gradient(rgba(31, 199, 120, 0.12) 70.4472%, rgb(31, 199, 120) 100%)",     
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                  viewport={{ once: true }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <span className="text-sm font-medium font-inter text-gray-300 uppercase tracking-wider">
                    STEP 0{step.number}
                  </span>
                </div>
                    <h3 className="text-[20px] font-inter text-white mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-normal font-inter text-white opacity-50 leading-relaxed max-w-2xl">
                  {step.detail}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;