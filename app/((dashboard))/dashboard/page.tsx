import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div
            className='flex flex-col sm:flex-row items-center gap-10 justify-center min-h-[90vh]  text-neutral-100'
        >
            <Link href="/dashboard/articles">
                <div className='bg-neutral-800 flex items-center justify-center hover:bg-emerald-700  duration-300 text-xl font-bold rounded-2xl  w-[300px] hover:scale-105 h-[200px]'>
                    Manage Articles
                </div>
            </Link>
            <Link href="/dashboard/work">
                <div className='bg-neutral-800 flex items-center justify-center hover:bg-emerald-700  duration-300 text-xl font-bold rounded-2xl  w-[300px] hover:scale-105 h-[200px]'>

                    Manage Projects
                </div>
            </Link>


        </div>
    )
}

export default page