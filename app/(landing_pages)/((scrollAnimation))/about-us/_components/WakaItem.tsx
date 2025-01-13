import React from 'react'

interface OverviewItemProps {
    label: string;
    value: string;
}

function WakaItem({ label, value }: OverviewItemProps) {
    return (
        <div className='flex flex-col space-y-1 rounded-xl border bg-neutral-800 px-4 py-3 border-neutral-900 sm:col-span-1' >
            <span className='text-sm dark:text-neutral-400'>{label}</span>
            <span>{value || '-'}</span>
        </div >
    )
}

export default WakaItem