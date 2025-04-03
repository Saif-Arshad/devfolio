"use client";

import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
import Image from "next/image";
import {
    ArrowRightIcon,
    CircleArrowOutUpRightIcon,
    GithubIcon,
} from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import { ScrollProgress } from "@/app/_components/ui/scroll-bar";
import { STACKS } from "@/app/_lib/stack";
import { databases } from "@/app/_lib/appwrite";
import Carousel, {
    Slider,
    SliderContainer,
    SliderDotButton,
} from "@/app/_components/ui/slider";
import WhatWeDo from "../../about-us/_components/what-we-do";

function ProjectDetail({ slug }: { slug: string }) {
    const [project, setProjects] = useState<any>(null);
    const [headers, setHeaders] = useState<{ id: string; text: string }[]>([]);
    const [parsedContent, setParsedContent] = useState<React.ReactNode>(null);
    const [slides, setSlides] = useState<any>([]);
    // New state for active header
    const [activeHeader, setActiveHeader] = useState<string>("");

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    const collectionId =
        process.env.NEXT_PUBLIC_APPWRITE_PROJECT_COLLECTION_ID!;
    const OPTIONS: EmblaOptionsType = {
        loop: true,
    };

    useEffect(() => {
        if (slug) {
            const fetchData = async () => {
                try {
                    const result = await databases.listDocuments(databaseId, collectionId, [
                        Query.equal("slug", slug),
                    ]);
                    if (result.documents.length > 0) {
                        const fetchedProject = result.documents[0] as any;
                        setProjects(fetchedProject);
                        const downloadURL = fetchedProject && fetchedProject.banner && fetchedProject.banner.replace('/preview?', '/download?');
                        const galleryDownloadURLs = fetchedProject.gallery.map((url: string) => 
                            url.replace('/preview?', '/download?')
                        );

                        setSlides([downloadURL, ...galleryDownloadURLs]);
                        const parsed = extractHeaders(fetchedProject.content);
                        setParsedContent(parsed);
                    } else {
                        console.log("No articles found with the provided slug.");
                    }
                } catch (error) {
                    console.error("Error fetching article:", error);
                }
            };

            fetchData();
        }
    }, [slug]);

    const extractHeaders = (htmlContent: string): React.ReactNode => {
        const headerList: { id: string; text: string }[] = [];

        const options = {
            replace: (domNode: any) => {
                if (domNode.name === "p") {
                    return (
                        <p className="mb-4 leading-relaxed text-gray-200">
                            {domToReact(domNode.children)}
                        </p>
                    );
                }

                if (domNode.name === "li") {
                    return (
                        <li className="ml-5 list-disc text-gray-200">
                            {domToReact(domNode.children)}
                        </li>
                    );
                }

                if (domNode.name === "h2") {
                    const textContent = domNode.children
                        .map((child: any) => {
                            if (child.type === "text") return child.data;
                            return child.children?.[0]?.data || "";
                        })
                        .join("")
                        .trim();

                    if (!textContent) {
                        return null;
                    }

                    const id = textContent
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)+/g, "");

                    headerList.push({ id, text: textContent });

                    return React.createElement(
                        "h2",
                        {
                            id,
                            className:
                                "mt-8 mb-4 text-xl sm:text-2xl font-semibold sm:font-bold bg-neutral-800 py-2 rounded-tr-md rounded-br-md pl-5 border-l-[5px] border-primaryColor",
                        },
                        textContent
                    );
                }
            },
        };

        const parsedData = parse(htmlContent, options);
        setHeaders(headerList.filter((header) => header.text.trim() !== ""));
        return parsedData;
    };

    // Intersection Observer to track the active header in view
    useEffect(() => {
        const observerOptions = {
            root: null, // viewport
            rootMargin: "0px 0px -80% 0px", // adjust to trigger earlier/later
            threshold: 0,
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveHeader(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, observerOptions);
        const headerElements = document.querySelectorAll(".content-detail h2");

        headerElements.forEach((element) => observer.observe(element));

        return () => {
            headerElements.forEach((element) => observer.unobserve(element));
        };
    }, [parsedContent]);

    if (!project) {
        return (
            <div className="container mx-auto p-1 sm:p-4 flex flex-col lg:flex-row">
                <div className="w-full lg:pr-8">
                    <div
                        role="status"
                        className="flex w-full h-[500px] items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-[#151515]"
                    >
                        <svg
                            className="w-10 h-10 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                        >
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
    const downloadURL = project && project.banner && project.banner.replace('/preview?', '/download?');

    return (
        <div className="w-full sm:container mx-auto p-4 flex flex-col lg:flex-row scroll-smooth">
            <ScrollProgress className="top-[0px]" />

            <div className="w-full lg:pr-8">
                <h1 className="md:text-4xl text-2xl font-semibold md:font-bold mb-4 text-gray-100">
                    {project.name}
                </h1>

                <p className="max-w-2xl text-gray-300 mb-6">{project.discription}</p>

                <div className="border-b border-white gap-4 border-dashed flex-wrap my-6 pb-6 flex items-center justify-end">
                    <div className="flex items-center gap-5">
                        {project.github_url && (
                            <a href={project.github_url} target="_blank" rel="noreferrer">
                                <span className="flex items-center gap-1 text-sm text-primaryColor group transition-transform duration-300">
                                    <GithubIcon
                                        size={20}
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    />{" "}
                                    Source Code
                                </span>
                            </a>
                        )}
                        {project.live_url && (
                            <a href={project.live_url} target="_blank" rel="noreferrer">
                                <span className="flex items-center gap-1 group text-sm text-primaryColor">
                                    <CircleArrowOutUpRightIcon
                                        className="group-hover:scale-110 transition-transform duration-300"
                                        size={20}
                                    />{" "}
                                    Live Demo
                                </span>
                            </a>
                        )}
                    </div>
                </div>
                <div className="flex sm:items-center justify-between w-full mb-6">
                    <div className="flex items-center gap-4 text-lg font-medium text-gray-100">
                        Tech Stack
                        <div className="flex gap-x-1 items-center gap-1 text-lg font-medium text-gray-300">
                            {project.tech.map((tag: string) => (
                                <span key={tag}>{STACKS[tag]}</span>
                            ))}
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-x-2">
                        <div className="flex items-center gap-2">
                            {project.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="bg-neutral-600 capitalize text-white px-2 py-1 rounded-full text-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex">
                    {slides.length > 1 ? (
                        <Carousel options={OPTIONS} isAutoPlay={true}>
                            <SliderContainer>
                                {slides.map((slide: string, index: number) => (
                                    <Slider key={index}>
                                        <Image
                                            src={slide}
                                            alt={project.name}
                                            width={1000}
                                            height={1000}
                                            className="md:w-full md:h-[500px] object-cover rounded-xl mb-6"
                                        />
                                    </Slider>
                                ))}
                            </SliderContainer>
                            <div className="flex justify-center py-4">
                                <SliderDotButton />
                            </div>
                        </Carousel>
                    ) : (
                        <>
                            <Image
                                    src={downloadURL}
                                alt={project.name}
                                width={1000}
                                height={1000}
                                className="w-full h-auto md:h-[500px] object-cover rounded-xl mb-6"
                            />
                        </>
                    )}
                </div>
                <div className="flex md:hidden">
                    <Image
                        src={downloadURL}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="w-full h-auto rounded-xl mb-6"
                    />
                </div>

                <div className="w-full flex my-6 mb-10">
                    <div className="w-full lg:w-3/4 lg:pr-9">
                        <div className="prose-lg content-detail text-gray-200">
                            {parsedContent}
                        </div>
                        <div className="flex md:hidden flex-col">
                            <h1 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold sm:font-bold bg-neutral-800 py-2 rounded-tr-md rounded-br-md pl-5 border-l-[5px] border-primaryColor">
                                Gallery
                            </h1>
                            {slides.length > 1 &&
                                slides.slice(1).map((item: any, index: number) => (
                                    <Image
                                        src={item}
                                        key={index}
                                        alt={project.name}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-auto rounded-xl mb-6"
                                    />
                                ))}
                        </div>
                    </div>
                    <div className="hidden lg:inline lg:w-1/4 mt-8 lg:mt-0">
                        <div className="sticky top-4 p-4 bg-neutral-800 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4 text-gray-100">
                                Table of Contents
                            </h2>
                            <ul className="space-y-2">
                                {headers.map((header) => (
                                    <li key={header.id}>
                                        <a
                                            href={`#${header.id}`}
                                            className={`
                        flex items-center transition-all duration-300 hover:underline
                        ${activeHeader === header.id
                                                ? "text-white font-semibold scale-[1.03]"
                                                    : "text-primaryColor"
                                                }
                      `}
                                        >
                                            {header.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <WhatWeDo />
            </div>
        </div>
    );
}

export default ProjectDetail;
