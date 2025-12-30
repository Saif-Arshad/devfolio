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
            question: "What's your tech stack?",
            answer:
                "React, Next.js, Node.js, TypeScript, and databases like MongoDB & PostgreSQL.",
        },
        {
            id: "item-2",
            question: "Do you work remotely?",
            answer:
                "Yes! I'm comfortable working remotely and collaborating across different time zones.",
        },
        {
            id: "item-3",
            question: "What kind of projects do you work on?",
            answer:
                "Full-stack web apps, dashboards, APIs, and scalable systems — from MVPs to production-ready products.",
        },
        {
            id: "item-4",
            question: "Can you work with existing codebases?",
            answer:
                "Absolutely. I'm experienced in jumping into existing projects and contributing quickly.",
        },
    ];

    const rightSideFAQs = [
        {
            id: "item-5",
            question: "How do you handle communication?",
            answer:
                "I provide regular updates, maintain clear documentation, and ensure smooth collaboration throughout.",
        },
        {
            id: "item-6",
            question: "Do you have experience with Agile?",
            answer:
                "Yes, I've worked with Scrum and Kanban methodologies in team settings.",
        },
        {
            id: "item-7",
            question: "What's your availability?",
            answer:
                "I'm currently open to new projects and collaborations. Let's discuss your timeline!",
        },
        {
            id: "item-8",
            question: "How can I contact you?",
            answer:
                "Feel free to reach out via email or LinkedIn. I'd love to connect!",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center px-2 sm:px-4 md:px-10 lg:px-14 mt-20">
            <div className='flex mb-14 flex-col-reverse sm:flex-row  justify-between w-full  border-b border-neutral-500 border-dashed pb-4'>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">
                    FAQ's.
                    <span className="block text-sm text-primaryColor font-normal">
                        Quick answers about working with me.
                    </span>
                </h3>

                <Link href={`/contact-us`} >
                    <button className='sm:bg-emerald-700 sm:hover:bg-emerald-800 items-center flex text-primaryColor sm:text-white sm:p-2 sm:rounded-full mb-5 sm:mb-0 sm:px-5 group'>
                        <CircleArrowOutUpRightIcon className='h-4 me-2 w-4 sm:hidden' />
                        Get in Touch
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
