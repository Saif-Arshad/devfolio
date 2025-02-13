import SocialLinks from '@/app/_components/buttons/Social'
import React from 'react'
function WhatWeDo() {
    return (
        <>

            <div className='px-2 sm:px-4 lg:px-10 mt-10' >
                <div className='bg-neutral-800 my-7 mt-14 p-2 sm:p-5 rounded-2xl sm:mx-5'>

                    <h2
                        className="font-display flex items-center gap-x-1 text-xl text-start font-bold  text-black dark:text-white sm:text-4xl my-1"

                    >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="34" width="34" xmlns="http://www.w3.org/2000/svg" className="snipcss0-2-2-3"><path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z"></path><circle cx="15.73" cy="8.3" r="2"></circle><path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z"></path></svg>
                        Let&apos;s work together!
                    </h2>
                    <p className=' mt-10 hidden sm:flex  text-gray-200'>
                        I help create exceptional digital experiences for businesses by leveraging strategic development and innovative solutions, ensuring every product aligns with their unique goals and delivers measurable success.
                    </p>
                    <p className='mt-2 flex items-center'>
                        <span className="relative flex h-4 w-4 me-2 ">
                            <span className="btn-ping"></span>
                            <span className="btn-ping_dot"></span>
                        </span>
                        I&lsquo;m open for freelance projects, feel free to email me to see how can we collaborate.
                    </p>

                    <SocialLinks />

                </div>
            </div >
        </>
    )
}

export default WhatWeDo