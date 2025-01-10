import { TextLoop } from '@/app/_components/shared/loopText'
import React from 'react'

function page() {
    return (
        <div className="flex items-center flex-col px-4 lg:px-10 xl:px-20 my-7 w-full">
            <div className="border-b w-full border-white border-dashed mb-5 pb-7">
                <h1 className="text-4xl font-bold text-start mb-1">Explore My Services</h1>
                <p className='inline-flex whitespace-pre-wrap text-primaryColor'>
                    Looking for{' '}
                    <TextLoop
                        className='overflow-y-clip'
                        transition={{
                            type: 'spring',
                            stiffness: 1400,
                            damping: 80,
                            mass: 10,
                        }}
                        variants={{
                            initial: {
                                y: 20,
                                rotateX: 90,
                                opacity: 0,
                                filter: 'blur(4px)',
                            },
                            animate: {
                                y: 0,
                                rotateX: 0,
                                opacity: 1,
                                filter: 'blur(0px)',
                            },
                            exit: {
                                y: -20,
                                rotateX: -90,
                                opacity: 0,
                                filter: 'blur(4px)',
                            },
                        }}
                    >
                        <span>a Web App?</span>
                        <span>a Mobile App?</span>
                        <span>Backend Services?</span>
                        <span>Database Management?</span>
                        <span>Frontend Development?</span>
                        <span>Full Stack Services?</span>
                    </TextLoop>
                </p>

                <p className='max-w-5xl mt-4'>
                    Whether you're a startup looking to build your first app
                    <span className="text-primaryColor font-semibold px-1.5">
                        (Web or Mobile)
                    </span>
                    or an established company aiming to optimize your digital presence, I offer a wide range of services designed to help you succeed. From
                    <span className="text-primaryColor font-semibold px-1.5">
                        web development
                    </span>
                    ,
                    <span className="text-primaryColor font-semibold px-1.5">
                        mobile App development
                    </span>
                    and
                    <span className="text-primaryColor font-semibold px-1.5">
                        AI solutions
                    </span>
                    to cloud infrastructure and beyond, I’m here to provide innovative, custom solutions that fit your unique needs. Ready to take your project to the
                    <span className="text-primaryColor font-semibold px-1.5">
                        next level?
                    </span>
                    Let’s collaborate and turn your vision into reality.
                </p>
            </div>
            <div className='w-full'>

                <h2
                    className="font-display text-4xl text-start font-bold  text-black dark:text-gray-100 sm:text-6xl my-4 mt-10"

                >
                    I help founders turn{' '}
                    <TextLoop
                        className="inline text-primaryColor"
                        transition={{
                            type: 'spring',
                            stiffness: 2400,
                            damping: 80,
                            mass: 10,
                        }}
                        variants={{
                            initial: {
                                y: 20,
                                rotateX: 90,
                                opacity: 0,
                                filter: 'blur(4px)',
                            },
                            animate: {
                                y: 0,
                                rotateX: 0,
                                opacity: 1,
                                filter: 'blur(0px)',
                            },
                            exit: {
                                y: -20,
                                rotateX: -90,
                                opacity: 0,
                                filter: 'blur(4px)',
                            },
                        }}
                    >
                        <span>ideas</span>
                        <span>visions</span>
                        <span>dreams</span>
                    </TextLoop>{' '}
                    into business-focused digital products.

                </h2>
            </div>
        </div>
    )
}

export default page