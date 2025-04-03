"use client";

import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
import Image from "next/image";
import { ArrowRightIcon, TimerIcon } from "lucide-react";
import Link from "next/link";
import { databases } from "@/app/_lib/appwrite";
import { ScrollProgress } from "@/app/_components/ui/scroll-bar";

interface Article {
    title: string;
    isPublish: boolean;
    content: string;
    tags: string[];
    bannerImage: string;
    discription: string;
    slug: string;
    $createdAt: string;
}

function ArticleDetail({ slug }: { slug: string }) {
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

    const [article, setArticle] = useState<Article | null>(null);
    const [headers, setHeaders] = useState<{ id: string; text: string }[]>([]);
    const [parsedContent, setParsedContent] = useState<React.ReactNode>(null);
    // New state for active header
    const [activeHeader, setActiveHeader] = useState<string>("");

    useEffect(() => {
        if (slug) {
            const fetchData = async () => {
                try {
                    const result = await databases.listDocuments(databaseId, collectionId, [
                        Query.equal("slug", slug),
                    ]);
                    if (result.documents.length > 0) {
                        const fetchedArticle = result.documents[0] as any;
                        setArticle(fetchedArticle);

                        const parsed = extractHeaders(fetchedArticle.content);
                        setParsedContent(parsed);
                    } else {
                        console.warn("No articles found with the provided slug.");
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

    // Set up Intersection Observer to track active header
    useEffect(() => {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: "0px 0px -80% 0px", // adjust this to trigger earlier/later
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

        // Select all h2 elements within the content area
        const headerElements = document.querySelectorAll(".content-detail h2");
        headerElements.forEach((element) => observer.observe(element));

        return () => {
            headerElements.forEach((element) => observer.unobserve(element));
        };
    }, [parsedContent]);

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(date));
    };
    const downloadURL = article && article.bannerImage && article.bannerImage.replace('/preview?', '/download?');

    if (!article) {
        return (
            <div className="container mx-auto p-4 flex flex-col lg:flex-row">
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

    return (
        <div className="w-full sm:container mx-auto p-4 flex flex-col lg:flex-row scroll-smooth">
            <ScrollProgress className="top-[0px]" />

            <div className="w-full lg:pr-8">
                {downloadURL && (
                    <Image
                        src={downloadURL}
                        alt={article.title}
                        width={1000}
                        height={1000}
                        className="w-full h-auto md:h-[500px] object-cover rounded-xl mb-6"
                    />
                )}

                <h1 className="md:text-4xl text-2xl font-semibold md:font-bold mb-8 text-gray-100">
                    {article.title}
                </h1>
                <div className="border-b border-white gap-4 border-dashed flex-wrap my-6 pb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {article.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="bg-neutral-600 capitalize text-white px-2 py-1 rounded-full text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex sm:items-center gap-4 flex-col sm:flex-row">
                        <p className="text-gray-300 text-sm">
                            Published on {article.$createdAt && formatDate(article.$createdAt)}
                        </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-full lg:w-3/4 lg:pr-9">
                        <div className="prose-lg content-detail text-gray-200">
                            {parsedContent}
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
                                        <Link
                                            href={`#${header.id}`}
                                            className={`
                        flex items-center transition-all duration-300 hover:underline
                        ${activeHeader === header.id ? "text-white font-semibold scale-[1.03]" : "text-primaryColor"}
                      `}
                                        >
                                            {header.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetail;
