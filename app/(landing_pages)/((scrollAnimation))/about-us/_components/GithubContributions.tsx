"use client"
import { BsGithub } from 'react-icons/bs';


import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import OverviewItem from './OverviewGithub';
import Calendar from './GithubCalender';
import axios from 'axios';

function GithubContributions() {
    const [data, setData] = useState<any>(null)
    console.log("🚀 ~ GithubContributions ~ data:", data)

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/github`);
                if (response.status >= 400) {
                    throw new Error('Error fetching GitHub data');
                }
                setData(response.data.data)
            } catch (error: any) {
                console.error("Frontend Error:", error.message);
            }
        };
        fetchGithubData()

    }, [])
    const contributionCalendar =
        data?.contributionsCollection?.contributionCalendar;
    const totalContributions = contributionCalendar?.totalContributions || 0;
    const weeks = contributionCalendar?.weeks || [];

    const totalThisWeekContribution =
        weeks[weeks.length - 1]?.contributionDays
            ?.map((item: any) => item.contributionCount)
            ?.reduce(
                (previousValue: any, currentValue: any) => previousValue + currentValue,
                0,
            ) || 0;
    const totalContributionList = weeks
        .map((week: any) =>
            week.contributionDays.map(
                (contributionDay: any) => contributionDay.contributionCount,
            ),
        )
        .flat();

    const bestContribution = Math.max(...totalContributionList) || 0;
    const averageContribution = totalContributions / totalContributionList.length;
    // if (!data) {
    //     return
    // }
    return (
        <section className="py-7 px-4 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full  mx-auto">
                <div className='w-full justify-between sm:items-center flex flex-col sm:flex-row  border-b border-neutral-500 border-dashed pb-4'>
                    <div className='flex-col justify-start flex '>

                        <h2
                            className="text-gray-100 text-3xl flex items-center  font-semibold font-manrope leading-normal lg:text-start sm:text-center">
                            <BsGithub className='mr-1' /> Contributions
                        </h2>
                        <div className='dark:text-neutral-400 ml-1   md:flex-row md:items-center'>
                            <span>My </span>
                            <Link
                                target='_blank'
                                href='https://github.com/saif-arshad'
                                className='text-primaryColor hover:underline px-1'
                            >
                                Github
                            </Link>
                            <span>contributions from last year on github.</span>
                        </div>
                    </div>

                </div>
                {
                    data ?
                        <>

                            <div className='grid grid-cols-2 gap-3 py-2 mt-6 sm:grid-cols-4'>
                                <OverviewItem label='Total' value={totalContributions} />
                                <OverviewItem label='This Week' value={totalThisWeekContribution} />
                                <OverviewItem label='Best Day' value={bestContribution} />
                                <OverviewItem label='Average' value={averageContribution} unit='/ day' />
                            </div>
                            <div className='w-full mt-5 mx-auto'>
                                <Calendar data={contributionCalendar} />
                            </div>
                        </>
                        :
                        <div className="container mx-auto p-1 mt-8  flex flex-col lg:flex-row">

                            <div className="w-full ">
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
                        </div>
                }

            </div>
        </section>
    )
}

export default GithubContributions