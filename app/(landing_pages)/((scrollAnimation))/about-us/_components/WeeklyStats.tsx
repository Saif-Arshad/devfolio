"use client"

import Link from 'next/link'
import { toZonedTime } from 'date-fns-tz';
import { format, parseISO, formatDistanceToNowStrict } from 'date-fns';
import React, { useEffect, useState } from 'react'
import WakaItem from './WakaItem';
import Progress from '@/app/_components/ui/progress';

interface ItemProps {
    name: string;
    hours: number;
    minutes: number;
}

function WeeklyStats({ data }: any) {
    const [formattedLastUpdate, setFormattedLastUpdate] = useState<string | null>(
        null,
    );
    console.log("🚀 ~ WeeklyStats ~ formattedLastUpdate:", formattedLastUpdate)
    const formatDate = (date: string, type = 'MMMM dd, yyyy') => {
        if (!date) {
            return '';
        }

        const formattedDate = format(
            toZonedTime(parseISO(date), 'Asia/Karachi'),
            type,
        );
        return formattedDate;
    };

    const dailyTotal = data?.human_readable_total || 'N/A';
    const dailyAverage = data?.human_readable_daily_average || 'N/A';
    const bestDayText = data?.best_day?.text || 'N/A';
    const bestDayDate = data?.best_day?.date;
    const allTimeSinceToday = data?.all_time_since_today?.text || 'N/A';
    const startDate = data?.start_date ? formatDate(data.start_date) : '';
    const endDate = data?.end_date ? formatDate(data.end_date) : '';
    const bestDay = bestDayDate
        ? `${formatDate(bestDayDate)} (${bestDayText})`
        : 'N/A';

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
    const sumTotalFromArray = <T extends { hours: number; minutes: number }>(
        data: T[],
        key: keyof T,
    ) => {
        return (
            data.reduce(
                (previousValue, currentValue) =>
                    previousValue + (currentValue[key] as number),
                0,
            ) ?? 0
        );
    };

    const getLanguagesTotalHours = sumTotalFromArray<ItemProps>(
        data?.languages || [],
        'hours',
    );
    const getLanguagesTotalMinutes = sumTotalFromArray<ItemProps>(
        data?.languages || [],
        'minutes',
    );
    const getLanguagesTotalTimeDisplay = `${Math.floor((getLanguagesTotalMinutes % 3600) / 60) + getLanguagesTotalHours
        } hrs ${getLanguagesTotalMinutes} mins`;

    const getEditorTotalHours = sumTotalFromArray<ItemProps>(
        data?.categories || [],
        'hours',
    );
    const getEditorTotalMinutes = sumTotalFromArray<ItemProps>(
        data?.categories || [],
        'minutes',
    );
    const getEditorTotalTimeDisplay = `${Math.floor((getEditorTotalMinutes % 3600) / 60) + getEditorTotalHours
        } hrs ${getEditorTotalMinutes} mins`;

    const actives = [
        {
            title: 'Languages',
            total: getLanguagesTotalTimeDisplay,
            data: data?.languages,
            styles: {
                bg: 'bg-gradient-to-r from-amber-400 to-rose-600',
            },
        },
        {
            title: 'Categories',
            total: getEditorTotalTimeDisplay,
            data: data?.categories,
            styles: {
                bg: 'bg-gradient-to-r from-blue-400 to-purple-600',
            },
        },
    ];
    if (!data) {
        return null;
    }

    return (
        <section className="py-14 px-4 sm:px-5 lg:px-10 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full  mx-auto">
                <div className='w-full justify-between sm:items-center flex flex-col sm:flex-row  border-b border-neutral-500 border-dashed pb-2'>
                    <div className='flex-col justify-start flex '>

                        <h2
                            className="text-gray-100 text-3xl  font-semibold font-manrope leading-normal lg:text-start sm:text-center">
                            💻Weekly Coding Stats
                        </h2>
                        <div className='dark:text-neutral-400 m-2 -mt-1  md:flex-row md:items-center'>
                            <span>My </span>
                            <Link
                                target='_blank'
                                href='https://wakatime.com/@saif'
                                className='text-primaryColor hover:underline '
                            >
                                WakaTime
                            </Link>
                            <span> last 7 days stats.</span>
                        </div>
                    </div>
                    <div className='text-sm sm:flex hidden text-neutral-600 dark:text-neutral-500'>
                        Last update: {renderLastUpdate()}
                    </div>
                </div>
                <div className='mb-1 grid gap-3 py-2 md:grid-cols-2 xl:grid-cols-3 mt-8'>
                    <WakaItem label='Start Date' value={startDate} />
                    <WakaItem label='End Date' value={endDate} />
                    <WakaItem label='Daily Coding Average' value={dailyAverage} />
                    <WakaItem label='This Week Coding Time' value={dailyTotal} />
                    <WakaItem label='Best Day Coding Time' value={bestDay} />
                    <WakaItem label='All Time Since Today' value={allTimeSinceToday} />
                </div>
                <div className='mt-5 flex flex-col gap-6 sm:flex-row sm:gap-4'>
                    {actives.map((item) => (
                        <div
                            key={item?.title}
                            className={`${item?.styles?.bg} relative flex flex-1 flex-col gap-2 rounded-lg p-[2px]`}
                        >
                            <div className='h-full w-full rounded-lg bg-black p-2 '>
                                <p className='absolute -top-3 left-3 bg-black px-2 '>
                                    {item?.title}
                                </p>

                                <ul className='flex flex-col gap-1 px-4 py-3'>
                                    {item?.data?.map((subItem: any) => (
                                        <li key={subItem?.name}>
                                            <Progress data={subItem} className={item?.styles?.bg} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WeeklyStats