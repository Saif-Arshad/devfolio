"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { formatDistanceToNowStrict } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

import React, { useEffect, useState } from 'react'

function WeeklyStats({ data }: any) {
    console.log("🚀 ~ WeeklyStats ~ data:", data)
    const [formattedLastUpdate, setFormattedLastUpdate] = useState<string | null>(
        null,
    );
    console.log("🚀 ~ WeeklyStats ~ formattedLastUpdate:", formattedLastUpdate)


    useEffect(() => {
        const formatLastUpdate = (): void => {
            const lastUpdateDate = data?.last_update;
            if (lastUpdateDate) {
                const zonedDate = toZonedTime(
                    toZonedTime(lastUpdateDate, 'Asia/Karachi'),
                    'Asia/Karachi',
                );
                const distance = formatDistanceToNowStrict(zonedDate, {
                    addSuffix: true,
                });
                setFormattedLastUpdate(distance);
            }

        };

        formatLastUpdate();
    }, [data]);
    const renderLastUpdate = () => {
        if (formattedLastUpdate) {
            return <span className='text-primaryColor '>{formattedLastUpdate}</span>;
        }
        return null;
    };

    return (
        <section className="py-14 px-2 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full  mx-auto">
                <div className='w-full justify-between items-center flex  '>
                    <div className='flex-col justify-start flex '>

                        <h2
                            className="text-gray-100 text-3xl sm:text-4xl font-semibold font-manrope leading-normal lg:text-start sm:text-center">
                            💻 Weekly Statistics
                        </h2>
                        <div className='dark:text-neutral-400 m-2   md:flex-row md:items-center'>
                            <span>My </span>
                            <Link
                                href='https://wakatime.com/@saif'
                                className='text-primaryColor hover:underline '
                            >
                                WakaTime
                            </Link>
                            <span> last 7 days stats.</span>
                        </div>
                    </div>
                    <div className='text-sm text-neutral-600 dark:text-neutral-500'>
                        Last update: {renderLastUpdate()}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WeeklyStats