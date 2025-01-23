"use client"

import React, { useEffect, useState } from 'react';
import ArticleDrawer from './ArticleDrawer';
import { Query } from 'appwrite';
import { ChevronLeftIcon, ChevronRightIcon, Edit3, TrashIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { databases } from '@/app/_lib/appwrite';
import { Input } from '@/app/_components/ui/input';

function Articles() {
    const [allArticles, setAllArticles] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const limit = 6;

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

    const fetchArticles = async (page: number, query: string) => {
        try {
            const offset = (page - 1) * limit;
            const queries = [
                Query.select(["discription", "$createdAt", "title", "content", "$id", "isPublish", "tags", "slug", "bannerImage"]),
                Query.limit(limit),
                Query.offset(offset),
                Query.orderDesc('$createdAt')

            ];
            if (query.trim()) {
                queries.unshift(Query.search('title', query));
            }
            const result = await databases.listDocuments(
                databaseId,
                collectionId,
                queries

            );
            setAllArticles(result.documents);
            setTotalPages(Math.ceil(result.total / limit));
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    useEffect(() => {
        fetchArticles(currentPage, searchQuery);
    }, [currentPage, searchQuery]);

    const handlePublish = (id: string, isPublish: boolean) => {
        databases.updateDocument(databaseId, collectionId, id, {
            isPublish: !isPublish
        })
            .then(() => {
                fetchArticles(currentPage, searchQuery);
            })
            .catch((error) => {
                console.error("Error updating article:", error);
            });

    }

    const handlePagination = (direction: "next" | "prev") => {
        if (direction === "next" && currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        } else if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };
    const deleteHandler = async (id: any) => {

        const isConfirm = confirm("Are you sure you want to delete this article?");
        if (isConfirm) {

            try {
                await databases.deleteDocument(databaseId, collectionId, id);
                fetchArticles(currentPage, searchQuery);
            } catch (error) {
                console.error("Error deleting article:", error);
            }


        }

    }

    return (
        <div className='py-10 px-5 lg:px-10 '>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>
                    All Articles ({allArticles?.length || 0})
                </h2>
                <div className='flex items-center gap-x-5'>
                    <div className='flex items-center relative'>
                        <Input
                            type='text'
                            className='w-[200px] lg:w-[220px]'
                            placeholder='Search articles...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <ArticleDrawer
                        button={
                            <button className='bg-primaryColor text-black hover:scale-105 duration-200 py-2 px-4 rounded-full'>
                                Add Article
                            </button>
                        }
                    />
                </div>
            </div>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
                {allArticles?.map((article: any) => (
                    <div key={article.slug} className='p-4 border rounded-2xl mb-3 bg-neutral-800'>
                        <div className='flex items-center justify-between pb-3 mb-3 border-b border-neutral-700'>
                            <span
                                onClick={() => { handlePublish(article.$id, article.isPublish) }}
                                className={`${article.isPublish ? "bg-primaryColor text-gray-800" : "bg-red-500 text-white"} cursor-pointer  px-3 py-1 rounded-full capitalize flex items-center justify-center text-sm`}>
                                {article.isPublish ? "Published" : "Draft"}
                            </span>
                            <div className='flex items-center gap-x-2'>
                                <ArticleDrawer
                                    button={
                                        <button

                                        >
                                            <Edit3 className='h-5 w-5 cursor-pointer text-green-500' />
                                        </button>
                                    }
                                    article={article}
                                />

                                <button onClick={() => deleteHandler(article.$id)}>
                                    <TrashIcon className='h-5 w-5 cursor-pointer text-red-500' />
                                </button>
                            </div>
                        </div>
                        <div className='relative h-[200px] rounded-xl overflow-hidden'>

                            <Image
                                alt={article.title}
                                src={article.bannerImage}
                                layout='fill'
                            // className=' w-full object-cover rounded-xl'
                            />
                        </div>
                        <h3 className='font-bold capitalize mt-5 text-xl'>{article.title}</h3>
                        <div className='flex items-center gap-2 my-2'>
                            {
                                article.tags.map((tag: string, index: number) => (

                                    <span key={index} className='bg-neutral-700 text-gray-400 px-3 py-1 rounded-full capitalize flex items-center justify-center text-sm'>

                                        {tag}
                                    </span>

                                ))
                            }
                        </div>
                        <p className='text-sm text-gray-300 mt-5'>{article.discription}</p>
                        <div className='flex items-center justify-end'>
                            <Link href={`/articles/${article.slug}`}>
                                <button className='bg-primaryColor text-black hover:scale-105 duration-200 py-2 px-4 rounded-full'>
                                    Preview
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex items-center mt-10 justify-center gap-4'>
                <button
                    onClick={() => handlePagination("prev")}
                    disabled={currentPage === 1}
                    className={`p-2  rounded-md ${currentPage === 1 ? "bg-transparent border cursor-not-allowed" : "bg-primaryColor text-black"}`}
                >
                    <ChevronLeftIcon className='h-5 w-5' />
                </button>
                <span className='text-sm'>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePagination("next")}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-md ${currentPage === totalPages ? "bg-transparent border cursor-not-allowed" : "bg-primaryColor text-black"}`}
                >
                    <ChevronRightIcon className='h-5 w-5' />
                </button>
            </div>
        </div>
    );
}

export default Articles;
