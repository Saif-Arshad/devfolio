"use client"

import InfiniteLoopSlider from '@/app/_components/ui/InfiniteLoopSlider';
import { STACKS } from '@/app/_lib/stack';
import { memo, ReactNode, useEffect, useState } from 'react';


// eslint-disable-next-line react/display-name
const Tag = memo(({ icon, title }: { icon: ReactNode; title: string }) => (
    <div className='mr-3 flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50'>
        {icon}
        <span>{title}</span>
    </div>
));

const Skills = () => {
    const [shuffledSkills, setShuffledSkills] = useState<
        Array<[string, ReactNode]>
    >([]);

    useEffect(() => {
        const skillsArray = Object.entries(STACKS);
        const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
        setShuffledSkills(shuffledArray);
    }, []);

    const sliders = Array.from({ length: 3 }, (_, index) => {
        const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
        return (
            <InfiniteLoopSlider key={index} isReverse={index === 1}>
                {sliderSkills.map(([title, icon], index) => (
                    <Tag key={index} icon={icon} title={title} />
                ))}
            </InfiniteLoopSlider>
        );
    });

    return (
        <div className='space-y-8 w-full'>
            <div className='flex w-full mx-auto'>
                <div className='relative flex  max-auto w-[95vw] flex-col justify-center gap-y-4 overflow-hidden py-2'>
                    {sliders}
                    <div className='fade flex styled-fade' />
                </div>
            </div>
        </div>
    );
};

export default Skills;

