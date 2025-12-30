"use client"
import React from 'react'
import GradualSpacing from '../ui/gradual-spacing'
import { TypeAnimation } from 'react-type-animation'
import SocialLinks from '../buttons/Social'
import { TextLoop } from '../shared/loopText'
import { logoutUser } from '@/app/_lib/auth'


export default function FirstAbout() {
    const logoutCurrentUser = () => {
        logoutUser();
        document.cookie = 'admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    }
    return (
        <div className="flex flex-wrap h-full w-full relative">
            {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4a90e22e_1px,transparent_1px),linear-gradient(to_bottom,#4a90e22e_1px,transparent_1px)] bg-[size:22px_30px]"></div> */}

            <div className="flex flex-col h-full w-full lg:w-9/12 xl:w-8/12  mt-7 px-3 sm:px-5 lg:px-10">
                <h3 className="text-primaryColor tracking-wide md:text-xl">Hi

                    <span className="waving-hand">👋</span>
                    , I am


                </h3>
                <div className='flex flex-col items-start'>

                    <GradualSpacing
                        className="font-display text-4xl xs:text-5xl font-bold -tracking-widest  text-black dark:text-white sm:text-7xl lg:text-[100px] md:my-3   md:leading-[5rem]"
                        text=" Saif Ur Rehman"
                    />
                    <h3 className="text-primaryColor tracking-wide mt-2 ml-7 font-medium sm:text-xl">
                        <p className='inline-flex whitespace-pre-wrap '>
                            A{' '}
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
                                <span>Software Engineer</span>
                                <span>Full Stack Developer</span>
                                <span>Mobile App Developer</span>
                                <span>Web App Developer</span>
                                <span>MERN Stack Developer</span>
                                <span>Next Js Developer</span>
                                <span>Member of the Jedi Order</span>
                            </TextLoop>
                        </p>
                        {/* <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                3000,
                                'A Full Stack Developer',
                                3000,
                                'Mobile App Stack Developer',
                                3000,
                                'Web App Developer',
                                3000,
                                'A MERN Stack Developer',
                                3000,
                                'A Next Js Developer',
                                3000,
                                'A Member of the Jedi Order',
                                3000,

                            ]}
                            wrapper="h2"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        /> */}

                    </h3>
                </div>
                <div className=''>

                    <p className="mt-7 text-white sm:text-lg">
                        <span onClick={logoutCurrentUser}>
                            🚀
                        </span> {" "}
                        A passionate Software Developer based in Faislabad,
                        Pakistan

                        .
                    </p>
               
                    <p className="mt-2 text-white sm:text-lg flex items-center ">
                        <span className="relative flex h-4 w-4 me-2 ">
                            <span className="btn-ping"></span>
                            <span className="btn-ping_dot"></span>
                        </span> Open to opportunities.

                    </p>
                  
                    <p className="mt-2 text-white sm:text-lg">
  🛠️ I'm mainly into{" "}
  <span className="text-primaryColor px-1.5">full-stack development</span>, 
  working across{" "}
  <span className="text-primaryColor px-1.5">MEAN</span>,{" "}
  <span className="text-primaryColor px-1.5">PERN</span>, and{" "}
  <span className="text-primaryColor px-1.5">MERN</span> stacks,
  with a strong focus on{" "}
  <span className="text-primaryColor px-1.5">AI integration</span> 
  and{" "}
  <span className="text-primaryColor px-1.5">automation</span>. 
  I take full ownership of projects from idea to deployment, ensuring everything 
  runs smoothly and efficiently.
</p>



                    <SocialLinks />
                </div>
            </div>


        </div>
    )
}
