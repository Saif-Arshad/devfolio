import SocialLinks from '@/app/_components/buttons/Social'
import React from 'react'

function WhatWeDo() {
    return (
        <section className='px-3 sm:px-6 lg:px-10 py-16'>
            <div className='relative overflow-hidden rounded-3xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900'>
                {/* Decorative gradient orbs */}
                <div className='absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl' />
                <div className='absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl' />
                
                <div className='relative z-10 p-6 sm:p-10 lg:p-14'>
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
                        {/* Left content */}
                        <div className='flex-1 max-w-2xl'>
                            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6'>
                                <span className="relative flex h-3 w-3">
                                    <span className="btn-ping"></span>
                                    <span className="btn-ping_dot"></span>
                                </span>
                                <span className='text-emerald-400 text-sm font-medium'>Open to collaborate</span>
                            </div>

                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Let&apos;s Build Something{' '}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300'>
                                    Amazing
                                </span>{' '}
                                Together
                            </h2>

                            <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4'>
                                I specialize in building scalable, high-performance web applications. 
                                Whether it&apos;s a new product from scratch or improving an existing system — I&apos;m here to help.
                            </p>

                            <p className='text-gray-400 text-sm sm:text-base leading-relaxed'>
                                Let&apos;s connect and discuss how we can work together to bring your ideas to life 
                                and create something extraordinary.
                            </p>

                            <SocialLinks />
                        </div>

                      
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo