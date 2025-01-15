// @ts-nocheck
"use client";

import React from "react";
import {
    Accordion,
    AccordionContainer,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    AccordionWrapper,
} from "../ui/accordion";
import Link from "next/link";
import { ArrowRight, CircleArrowOutUpRightIcon } from "lucide-react";

function Faqs() {
    const leftSideFAQs = [
        {
            id: "item-1",
            question: "Can you fix bugs or errors in my existing backend?",
            answer:
                "Yes, I offer comprehensive backend troubleshooting and bug-fixing services. I ensure your system operates without issues and provide recommendations to enhance its performance and reliability.",
        },
        {
            id: "item-2",
            question: "Do you offer support after project delivery?",
            answer:
                "Yes, I provide post-delivery support to ensure your backend system and APIs function smoothly. If any issues arise, I’ll assist you promptly to resolve them. Extended maintenance services are also available upon request.",
        },
        {
            id: "item-3",
            question: "What technologies do you use for backend development?",
            answer:
                "I work with modern frameworks and tools like Node.js. For databases, I use MySQL, MongoDB, and PostgreSQL. The choice of technology depends on your project requirements.",
        },
        {
            id: "item-4",
            question: "How long does it take to complete a project?",
            answer:
                "Project timelines depend on the scope and complexity of the work. For small to medium-sized projects, it typically takes 1-3 weeks. Larger projects or custom solutions may require more time, but I always strive to deliver within the agreed deadline.",
        },
    ];

    const rightSideFAQs = [
        {
            id: "item-5",
            question: "Can you fix issues or update my existing website?",
            answer:
                "Yes! I can fix errors, bugs, or broken features and also update your website with new functionality or a fresh design.",
        },
        {
            id: "item-6",
            question: "What do I need to provide before starting the project?",
            answer:
                "To get started, I’ll need: A clear description of your requirements. Any design references or mockups (if available). Additional details like specific features or integrations you need.",
        },
        {
            id: "item-7",
            question: "Do you provide deployment services?",
            answer:
                "Yes, I can deploy your website to hosting platforms like Vercel, Netlify, or your preferred hosting service.",
        },
        {
            id: "item-8",
            question: "Which technologies do you use for frontend development?",
            answer:
                "I primarily use modern technologies like React.js, Next.js, HTML, CSS, and Tailwind CSS to ensure high-quality and scalable solutions.",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center px-2 sm:px-4 md:px-10 lg:px-14 mt-20">
            <div className='flex mb-14 flex-col-reverse sm:flex-row  justify-between w-full  border-b border-neutral-500 border-dashed pb-4'>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">
                    FAQ's.
                    <span className="block text-sm text-primaryColor font-normal">
                        Find answers to common queries and concerns below.
                    </span>
                </h3>

                <Link href={`/services`} >
                    <button className='sm:bg-emerald-700 sm:hover:bg-emerald-800 items-center flex text-primaryColor sm:text-white sm:p-2 sm:rounded-full mb-5 sm:mb-0 sm:px-5 group'>
                        <CircleArrowOutUpRightIcon className='h-4 me-2 w-4 sm:hidden' />

                        Book a Service 

                    </button>
                  
                </Link>
            </div>
            <AccordionContainer className="md:grid-cols-2 grid-cols-1 w-full">
                <AccordionWrapper>
                    <Accordion >
                        {leftSideFAQs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionHeader className="2xl:text-base text-sm">
                                    {faq.question}
                                </AccordionHeader>
                                <AccordionPanel className="2xl:text-base text-sm">
                                    {faq.answer}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AccordionWrapper>
                <AccordionWrapper>
                    <Accordion >
                        {rightSideFAQs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionHeader className="2xl:text-base text-sm">
                                    {faq.question}
                                </AccordionHeader>
                                <AccordionPanel className="2xl:text-base text-sm">
                                    {faq.answer}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AccordionWrapper>
            </AccordionContainer>
        </div>
    );
}

export default Faqs;
