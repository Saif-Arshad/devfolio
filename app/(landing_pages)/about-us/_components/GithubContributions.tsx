/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { BsGithub } from 'react-icons/bs';


import React from 'react'
import Link from 'next/link';
import OverviewItem from './OverviewGithub';
import Calendar from './GithubCalender';

function GithubContributions({ data }: any) {
    console.log("🚀 ~ GithubContributions ~ data:", data)
    const contributionCalendar =
        data?.contributionsCollection?.contributionCalendar;
    const totalContributions = contributionCalendar?.totalContributions || 0;
    console.log("🚀 ~ GithubContributions ~ totalContributions:", totalContributions)
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
    if (!data) {
        return
    }
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
                <div className='grid grid-cols-2 gap-3 py-2 mt-6 sm:grid-cols-4'>
                    <OverviewItem label='Total' value={totalContributions} />
                    <OverviewItem label='This Week' value={totalThisWeekContribution} />
                    <OverviewItem label='Best Day' value={bestContribution} />
                    <OverviewItem label='Average' value={averageContribution} unit='/ day' />
                </div>
                <div className='w-full mt-5 mx-auto'>
                    <Calendar data={contributionCalendar} />
                </div>

            </div>
        </section>
    )
}

export default GithubContributions