"use client";

import { databases } from '@/app/_lib/appwrite';
import { Query } from 'appwrite';
import { ArrowRight, CircleArrowOutUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function LatestPost() {
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [allArticles, setAllArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(date));
    };

    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;
    const fetchArticles = async () => {
        setLoading(true);
        try {
            const queries = [
                Query.equal("isPublish", true),
                Query.select(["title", "bannerImage", "$createdAt", "slug", "tags"]),
                Query.orderDesc('$createdAt'),
                Query.limit(3),

            ];



            const result = await databases.listDocuments(
                databaseId,
                collectionId,
                queries
            );
            setAllArticles(result.documents);

        } catch (error) {
            console.error("Error fetching articles:", error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchArticles();
    }, []);
    return (
        <div className='flex items-center flex-col w-full mt-10 px-4 lg:px-10 xl:px-20'>

            <div className='flex  flex-col-reverse sm:flex-row justify-between w-full  border-b border-neutral-500 border-dashed pb-4'>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">
                    Recent posts.
                    <span className="block text-sm text-primaryColor font-normal">
                        Stories and perspectives worth exploring.
                    </span>
                </h3>

                <Link href={`/articles`}>
                    <button className='sm:bg-emerald-700 sm:hover:bg-emerald-800 items-center flex text-primaryColor sm:text-white sm:p-2 sm:rounded-full mb-5 sm:mb-0 sm:px-5 group'>
                        <CircleArrowOutUpRightIcon className='h-4 me-2 w-4 sm:hidden' />

                        View All
                    </button>
                </Link>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-14'>
                {
                    loading ?


                        [1, 2, 3].map((item) => (

                            <div key={item} className="w-full lg:pr-8">
                                <div
                                    role="status"
                                    className="flex w-full h-[250px] items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-[#151515]"
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

                        ))
                        :
                        allArticles.map((article) => (
                            <Link href={`/articles/${article.slug}`} key={article.slug}>
                                <div className="p-4 flex flex-col justify-between cursor-pointer group border rounded-2xl mb-3 h-full bg-neutral-800 w-full">
                                <div >
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

                                    </div>
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
                            // <Link href={`/articles/${article.slug}`} key={article.$id}>
                            //     <div key={index} className='flex flex-col w-full  relative cursor-pointer group'>
                            //         <div key={index} className='z-0 w-full min-h-[300px] relative  overflow-hidden rounded-xl'>
                            //             <Image
                            //                 alt={article.title}
                            //                 layout='fill'

                            //                 src={article.bannerImage} className='w-full object-cover group-hover:scale-110 transition-all duration-700' />
                            //             <div className='bg-black h-full w-full absolute top-0 left-0 opacity-55 group-hover:opacity-65  transition-all duration-700 '></div>
                            //         </div>
                            //         <div className='flex flex-col mt-4 absolute bottom-0 left-0 h-full w-full right-0 p-4 z-10  justify-between'>
                            //             <div className="flex items-center gap-2">
                            //                 {article.tags.map((tag: string) => (
                            //                     <span
                            //                         key={tag}
                            //                         className="bg-neutral-300 capitalize text-black px-2 py-1 rounded-full text-xs"
                            //                     >
                            //                         {tag}
                            //                     </span>
                            //                 ))}
                            //             </div>
                            //             <div className="flex flex-col gap-2">

                            //                 <h3 className='text-lg font-medium text-gray-100'>{article.title}</h3>
                            //                 <div className=" flex items-center justify-end">
                            //                     <Image
                            //                         src="/images/icon.jpg"
                            //                         alt="Author Avatar"
                            //                         height={100}
                            //                         width={100}
                            //                         className="w-8 h-8 rounded-full object-cover"
                            //                     />
                            //                     <div className="ml-1">
                            //                         <p className="text-[13px] font-medium text-gray-900 dark:text-white">
                            //                             Saif Ur Rehman
                            //                         </p>
                            //                         <p className="text-[10px] text-gray-200">
                            //                             {article.$createdAt && formatDate(article.$createdAt)}
                            //                         </p>
                            //                     </div>
                            //                 </div>
                            //             </div>

                            //         </div>
                            //     </div>
                            // </Link>
                        ))
                }
            </div>




        </div>
    )
}

export default LatestPost