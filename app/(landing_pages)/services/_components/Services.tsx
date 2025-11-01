"use client";

import {
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
  Handshake,
  Zap,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useInView as useInViewObserver } from "react-intersection-observer";
import Link from "next/link";

function GradualSpacing({ text = "What we are offering" }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-wrap justify-center max-w-[580px]">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="text-[#16101E] font-jakarta font-normal leading-[120%] text-[32px] sm:text-[40px]  lg:text-[56px] max-md:text-2xl"
            style={{ fontWeight: "590" }}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Animation variant for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animation variant for heading
const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function AnimatedCard({ children }: any) {
  const { ref, inView } = useInViewObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      // @ts-ignore
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
}

function Services2() {
  const { ref, inView } = useInViewObserver({
    triggerOnce: true,
    threshold: 0.2,
  });

  const data = [
    {
        id:"mobile",
      icon: <Smartphone />,
      title: "Mobile Development",
      detail:
        "Build scalable, high-performance mobile apps to reach users on the devices they use most.",
      tech: [
        {
          name: "React",
          image: "/images/react.png",
        },
        // {
        //   name: "Swift",
        //   image: "/images/swift.png",
        // },
        {
          name: "iOS",
          image: "/images/ios.png",
        },
        {
          name: "Android",
          image: "/images/andriod.png",
        },
        {
          name: "Flutter",
          image: "/images/flutter.png",
        },
      ],
    },
    {
        id:"web",

      icon: <Globe />,
      title: "Website Development",
      detail:
        "Create fast, responsive, and conversion-focused websites that deliver strong digital presence and user trust.",
      tech: [
        {
          name: "CSS",
          image: "/images/css.png",
        },
        {
          name: "HTML",
          image: "/images/html.png",
        },
        {
          name: "Python",
          image: "/images/python.png",
        },
        {
          name: "React",
          image: "/images/react.png",
        },
        {
          name: "JavaScript",
          image: "/images/js.png",
        },
      ],
    },
    {
        id:"saas",

      icon: <Server />,
      title: "SaaS Applications",
      detail:
        "Launch powerful SaaS platforms with flexible architecture to serve users at scale and drive recurring revenue.",
      tech: [
        {
          name: "Docker",
          image: "/images/docker.png",
        },
        {
          name: "Typescript",
          image: "/images/typescript.png",
        },
        {
          name: "React",
          image: "/images/react.png",
        },
        {
          name: "Node.js",
          image: "/images/node.png",
        },
        {
          name: "Postgresql",
          image: "/images/postgresql.png",
        },
      ],
    },
    {
        id:"design",

      icon: <Palette />,
      title: "UIUX Design",
      detail:
        "Transform complex ideas into intuitive, user-friendly interfaces that boost engagement and retention.",
      tech: [
        {
          name: "Figma",
          image: "/images/figma.png",
        },
        {
          name: "Illustrator",
          image: "/images/Illustrator.png",
        },
        {
          name: "Framer",
          image: "/images/framer.png",
        },
      ],
    },
    {
        id:"cms",

      icon: <Database />,
      title: "CMS Development",
      detail:
        "Control over your website content with a custom or CMS-based solution tailored for easy updates and growth.",
      tech: [
     
        {
          name: "Shopify",
          image: "/images/shopify.png",
        },
        {
          name: "Ecommerce",
          image: "/images/ecommerce.png",
        },
        {
          name: "Framer",
          image: "/images/framer.png",
        },
        {
          name: "Wordpress",
          image: "/images/wordpress.png",
        },
      ],
    },
  ];

  const featureBadges = [
    {
      icon: <Handshake className="w-5 h-5" />,
      text: "Expert Collaboration",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Seamless Integration",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Scalable Solutions",
    },
  ];

  return (
    <div className="max-w-[1140px]  z-20 relative flex flex-col items-center  justify-center  w-full p-4 sm:p-6 md:p-10 rounded-2xl mx-auto">
      <div className="w-full gap-4 md:gap-6 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {data.slice(0, 2).map((service, i) => (
                <Link href={`/services/${service.id}`}>

            <AnimatedCard key={i}>
              <motion.div
                className="w-full rounded-2xl bg-neutral-800 p-4 md:p-7"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center pb-2 justify-between">

                <div className="shadow h-6 w-6 md:h-8 md:w-8 flex items-center justify-center rounded text-emerald-700">
                  {service.icon}
                </div>
                <Link href={`/services/${service.id}`}>
                <ArrowUpRight size={28} color="white"/>
                </Link>
                </div>
                <h2 className="font-semibold text-lg md:text-xl mt-2 font-inter">
                  {service.title}
                </h2>
                    <p className="mt-3 text-white text-sm md:text-base">
                  {service.detail}
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6">
                  {service.tech.map((tech, j) => (
                    <div key={j} className="flex flex-col gap-1 items-center">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        title={tech.name}
                      />
                      <h4 className="text-xs text-white">{tech.name}</h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
            </Link>

          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-6 w-full">
          {data.slice(2,4).map((service, i) => (
                <Link href={`/services/${service.id}`}>

            <AnimatedCard key={i + 2}>
              <motion.div
                className="w-full rounded-2xl bg-neutral-800 p-4 md:p-7"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                 <div className="flex items-center pb-2 justify-between">

<div className="shadow h-6 w-6 md:h-8 md:w-8 flex items-center justify-center rounded text-emerald-700">
  {service.icon}
</div>
<Link href={`/services/${service.id}`}>
<ArrowUpRight size={28} color="white"/>
</Link>
</div>
                <h2 className="font-semibold text-lg md:text-xl mt-2 font-inter">
                  {service.title}
                </h2>
                <p className="mt-3 text-white text-sm md:text-base">
                  {service.detail}
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
                  {service.tech.map((tech, j) => (
                    <div key={j} className="flex flex-col gap-1 items-center">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        title={tech.name}
                      />
                      <h4 className="text-xs text-white">{tech.name}</h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1   gap-4 md:gap-6 w-full">
          {data.slice(4).map((service, i) => (
                <Link href={`/services/${service.id}`}>

            <AnimatedCard key={i + 2}>
              <motion.div
                className="w-full rounded-2xl bg-neutral-800 p-4 md:p-7"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
               <div className="flex items-center pb-2 justify-between">

<div className="shadow h-6 w-6 md:h-8 md:w-8 flex items-center justify-center rounded text-emerald-700">
  {service.icon}
</div>
<Link href={`/services/${service.id}`}>
<ArrowUpRight size={28} color="white"/>
</Link>
</div>
                <h2 className="font-semibold text-lg md:text-xl mt-2 font-inter">
                  {service.title}
                </h2>
                <p className="mt-3 text-white text-sm md:text-base">
                  {service.detail}
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
                  {service.tech.map((tech, j) => (
                    <div key={j} className="flex flex-col gap-1 items-center">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        title={tech.name}
                      />
                      <h4 className="text-xs text-white ">{tech.name}</h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
            </Link>
          ))}
        </div>
      </div>

     
    </div>
  );
}

export default Services2;
