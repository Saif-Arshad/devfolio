"use client"

import { databases } from '@/app/_lib/appwrite';
import { STACKS } from '@/app/_lib/stack';
import { Query } from 'appwrite';
import { ArrowRight, CircleArrowOutUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function FeatureProjects() {
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [allProjects, setAllProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(date));
    };

    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_COLLECTION_ID!;

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const queries = [
                Query.equal("isPublish", true),
                Query.equal("isFeatured", true),
                Query.orderDesc('$createdAt'),
            ];



            const result = await databases.listDocuments(
                databaseId,
                collectionId,
                queries
            );
            setAllProjects(result.documents);

        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProjects();
    }, []);
    return (
        <div className='flex items-center flex-col w-full mt-10 px-4 lg:px-10 xl:px-20'>

            <div className='flex flex-col-reverse sm:flex-row  justify-between w-full  border-b border-neutral-500 border-dashed pb-4'>

                <h3 className='text-xl sm:text-2xl font-semibold text-gray-200'>
                    Featured Projects.
                    <span className='block text-sm text-primaryColor font-normal'>
                        Here's some of my projects that I have worked on.
                    </span>
                </h3>

                <Link href={`/work`}>
                    <button className='sm:bg-emerald-700 sm:hover:bg-emerald-800 items-center flex text-primaryColor sm:text-white sm:p-2 sm:rounded-full mb-5 sm:mb-0 sm:px-5 group'>
                        <CircleArrowOutUpRightIcon className='h-4 me-2 w-4 sm:hidden' />
                        View All

                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 3xl:grid-cols-3 mt-20 gap-5 w-full ">

                {
                    allProjects.length == 0 ? (
                        <>
                            {

                                [1, 2, 3].map((item) => (

                                    <div key={item} className="w-full lg:pr-8">
                                        <div
                                            role="status"
                                            className="flex w-full h-[300px] items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-[#151515]"
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
                            }
                        </>

                    )
                        :
                        <>
                            {allProjects && allProjects.length > 0 && allProjects.map((project: any) => (
                                <Link href={`/work/${project.slug}`} key={project.$id}>
                                    <div className="p-4 cursor-pointer group h-full border rounded-2xl mb-3 bg-neutral-800 w-full">
                                        <div className="flex relative h-[250px] rounded-xl overflow-hidden">
                                            <Image
                                                alt={project.name}
                                                src={project.banner}
                                                fill
                                                className="group-hover:scale-110 transition-transform duration-700 object-cover"
                                            />
                                            {/* <div className="absolute inset-0 bg-black bg-opacity-80 scale-0 group-hover:scale-100 origin-center duration-300 flex items-center justify-center">

                                        <p className='flex items-center gap-x-1 text-primaryColor font-medium'>
                                            View Project <ArrowRight className='h-5 w-5' />
                                        </p>
                                    </div> */}
                                        </div>
                                        {/* <Image
                                            alt={project.name}
                                            width={1000}
                                            height={1000}
                                            src={project.banner}
                                            className="w-full h-auto flex md:hidden  rounded-xl mb-6"
                                        /> */}

                                        <div className='flex items-center justify-end gap-2 my-2 mt-5'>
                                            {
                                                project.tech.map((tag: string) => (
                                                    <span key={tag}>{STACKS[tag]}</span>
                                                ))
                                            }
                                        </div>

                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold capitalize">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-gray-400 mt-2 capitalize">
                                                {project.discription}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between mt-6">
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
                                            <p className='items-center group-hover:text-primaryColor group-hover:scale-110 transition-transform duration-700'>
                                                <CircleArrowOutUpRightIcon />
                                            </p>
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </>
                }



            </div>
        </div>
    )
}

export default FeatureProjects