"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Query } from "appwrite";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { databases } from "@/app/_lib/appwrite";
import { Input } from "@/app/_components/ui/input";

const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

function ArticlesMain() {
    const [randomBlog, setRandomBlog] = useState<any>(null);
    const [allArticles, setAllArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const limit = 6;

    const fetchArticles = useCallback(
        async (page: number, query: string, isLoadMore = false) => {
            setLoading(true);
            try {
                const offset = (page - 1) * limit;
                const queries = [
                    Query.equal("isPublish", true),
                    Query.limit(limit),
                    Query.offset(offset),
                    Query.orderDesc('$createdAt')

                ];

                if (query.trim()) {
                    queries.unshift(Query.search("title", query));
                }

                const result = await databases.listDocuments(
                    databaseId,
                    collectionId,
                    queries
                );

                setTotalPages(Math.ceil(result.total / limit));

                if (isLoadMore) {
                    setAllArticles((prev) => [...prev, ...result.documents]);
                } else {
                    setAllArticles(result.documents);
                }

                if (!randomBlog && result.documents.length > 0) {
                    const randomIndex = Math.floor(
                        Math.random() * result.documents.length
                    );
                    setRandomBlog(result.documents[randomIndex]);
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        },
        [randomBlog]
    );

    useEffect(() => {
        setAllArticles([]);
        setCurrentPage(1);
    }, [searchQuery]);

    useEffect(() => {
        fetchArticles(currentPage, searchQuery, currentPage > 1);
    }, [currentPage, searchQuery, fetchArticles]);


    useEffect(() => {
        const handleScroll = () => {
            const bottomOffset = 300;
            const reachedBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - bottomOffset;

            if (!loading && reachedBottom && currentPage < totalPages) {
                setCurrentPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, currentPage, totalPages]);

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(date));
    };

    return (
        <div className="flex flex-wrap h-full w-full z-20">
            <div className="w-full min-h-[75vh] lg:py-10 py-5 lg:px-10 px-4 flex flex-col">
                {loading && allArticles.length === 0 ? (
                    <div
                        role="status"
                        className="flex w-full h-[350px] sm:h-[500px] items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-[#151515]"
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
                ) : randomBlog ? (
                    <div className="relative">
                        <div className="relative bg-white rounded-lg overflow-hidden">
                            <Image
                                src={randomBlog.bannerImage}
                                height={1000}
                                width={1000}
                                alt="Blog Image"
                                className="w-full h-[350px] sm:h-[500px] object-cover"
                            />
                        </div>
                        <div className="lg:w-[500px] z-10 bg-white absolute lg:-bottom-10 lg:left-10 -bottom-10 lg:p-8 p-4 lg:px-6 rounded-lg shadow-2xl dark:bg-[#151515] dark:text-white mx-3 sm:mx-8">
                            <Link href={`/articles/${randomBlog.slug}`}>
                                <h2 className="mt-2 capitalize text-lg md:text-xl text-white">
                                    {randomBlog.title}
                                </h2>
                                <div className="mt-4 flex items-center justify-end">
                                    <Image
                                        src="/images/icon.jpg"
                                        alt="Author Avatar"
                                        height={100}
                                        width={100}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div className="ml-2">
                                        <p className="text-gray-900 dark:text-white">
                                            Saif Ur Rehman
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {randomBlog.$createdAt && formatDate(randomBlog.$createdAt)}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : null}
                <div className="flex gap-10 sm:items-center justify-between w-full my-20 mt-28 flex-col-reverse sm:flex-row">
                    <h2 className="text-2xl font-semibold flex items-center">
                        Latest Articles
                        <span className="bg-neutral-800 text-lg p-1 rounded-full font-light px-3.5 mx-2 flex items-center justify-center">
                            {allArticles?.length || 0}
                        </span>
                    </h2>
                    <div className="flex items-center relative">
                        <Search className="absolute left-2 text-gray-300" />
                        <Input
                            type="text"
                            className="w-full sm:w-[200px] lg:w-[270px] pl-10"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5 w-full ">
                    {allArticles.map((article: any) => (
                        <Link href={`/articles/${article.slug}`} key={article.$id}>
                            <div className="p-4 cursor-pointer group h-full border rounded-2xl mb-3 bg-neutral-800 w-full">
                                <div className="relative h-[200px] rounded-xl overflow-hidden">
                                    <Image
                                        alt={article.title}
                                        src={article.bannerImage}
                                        fill
                                        className="group-hover:scale-110 transition-transform duration-700 object-cover"
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-3">
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
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold capitalize">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-2 capitalize">
                                        {article.discription}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <Image
                                        src="/images/icon.jpg"
                                        alt="Author Avatar"
                                        height={100}
                                        width={100}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div className="ml-1">
                                        <p className="text-[13px] font-medium text-gray-900 dark:text-white">
                                            Saif Ur Rehman
                                        </p>
                                        <p className="text-[10px] text-gray-400">
                                            {article.$createdAt && formatDate(article.$createdAt)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {loading && allArticles.length > 0 && (
                    <div className="text-center mt-6 text-gray-400">Loading more...</div>
                )}
            </div>
        </div>
    );
}

export default ArticlesMain;
