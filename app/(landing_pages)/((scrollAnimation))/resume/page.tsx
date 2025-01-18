import { FileUser } from 'lucide-react';
import React from 'react'
function page() {
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "Fuziondev",
            description: [
                "Developed multiple web applications using the MERN stack, ensuring seamless and user-friendly experiences.",
                "Optimized applications for maximum speed and scalability using advanced Next.js features.",
                "Built dynamic, user-centric interfaces with React.js and Node.js, improving overall user engagement.",
                "Collaborated with cross-functional teams to deliver high-quality, scalable solutions."
            ],
            date: "12/2024 – Present",
            location: "Faisalabad, Pakistan"
        },
        {
            title: "MERN Developer",
            company: "DevShine",
            description: [
                "Implemented robust RESTful APIs integrated with MongoDB for efficient data handling.",
                "Actively contributed to Agile sprints, ensuring the timely delivery of features and enhancements.",
                "Developed and maintained modular, reusable components using React.js and Next.js.",
                "Enhanced front-end performance by reducing load time through code splitting and efficient asset management."
            ],
            date: "08/2024 – 12/2024",
            location: "Faisalabad, Pakistan"
        },
        {
            title: "Junior MERN Developer",
            company: "Devontix Solutions",
            description: [
                "Developed the Saudi Stadium website with a focus on creating an efficient and user-friendly admin interface.",
                "Streamlined administrative workflows, enhancing efficiency and user experience.",
                "Optimized web applications for performance and scalability using Next.js.",
                "Collaborated with UI/UX designers to implement responsive and modern interfaces tailored to user needs."
            ],
            date: "12/2023 – 08/2024",
            location: "Faisalabad, Pakistan"
        },
        {
            title: "MERN Stack Intern",
            company: "Weversity",
            description: [
                "Managed and updated the Weversity.org website, enhancing its performance and usability.",
                "Collaborated with senior developers to refine web functionalities, leading to a 20% increase in user engagement.",
                "Contributed to the development and implementation of new features, including interactive forms and dashboards.",
                "Mentored students in web development techniques and best practices."
            ],
            date: "01/2023 – 11/2023",
            location: "Faisalabad, Pakistan"
        }
    ];


    return (
        <div className="flex flex-wrap w-full sm:px-5 lg:px-10 items-start mb-20">
            <a href={"/resume/Saif Ur Rehman Resume.pdf"} download={"/resume/Saif Ur Rehman Resume.pdf"}>
                <button className='bg-emerald-700 hover:bg-emerald-800 fixed bottom-4  right-4 z-50 items-center flex text-white p-2 rounded-full px-5 group'>
                    <FileUser className='h-5 w-5 me-2 group-hover:animate-shake' />
                    Download Resume</button>
            </a>
            <div className="  py-10 px-2 w-full sm:px-5">
                <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-700 rounded-lg shadow-md overflow-hidden">
                    <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
                            <div>
                                <h2 className="text-3xl font-semibold">Saif Ur Rehman</h2>
                                <p className="text-sm text-gray-300">Full Stack Developer</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Phone: +92 3491797803</p>
                                <p className="text-sm text-gray-300">Email: Saifarshad3344@gmail.com</p>
                                <p className="text-sm text-gray-300">Location: Faisalabad, Pakistan</p>
                            </div>
                        </div>
                        <hr className="my-4 bg-neutral-500" />
                        <div>
                            <h3 className="text-lg text-primaryColor font-semibold mb-2">Summary</h3>
                            <p className="text-sm leading-relaxed">I am a full-stack web developer specializing in the MERN stack, Next.js, and React Native, with expertise in Tailwind CSS and TypeScript. With a proven track record of delivering robust web applications, I aim to contribute to innovative projects that challenge my skills and foster professional growth.</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-primaryColor mb-2">Experience</h3>
                            {
                                experiences.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="text-md font-semibold">{item.company}</h4>
                                        <p className="text-sm text-gray-300">{item.title} | {item.date}</p>
                                        <ul className="list-disc list-inside text-sm mt-3 mb-2">

                                            {
                                                item.description.map((item: any, index: number) => (
                                                    <li key={index}>{item}</li>

                                                ))
                                            }

                                        </ul>
                                    </div>

                                ))
                            }

                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg text-primaryColor font-semibold mb-2">Qualification</h3>
                            <div className='flex flex-col gap-3 sm:flex-row sm:items-center justify-between mb-3'>
                                <div className='flex flex-col'>
                                    <strong>Bachelor in Computer Science</strong>
                                    GC University Of Faisalabad

                                </div>
                                <div className='flex flex-col'>
                                    Faisalabad, Pakistan
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 sm:flex-row sm:items-center justify-between mb-3'>

                                <div className='flex flex-col'>
                                    <strong>Intermediate in Computer Science</strong>
                                    Dhariwal College
                                </div>
                                <div className='flex flex-col'>
                                    Faisalabad, Pakistan
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 sm:flex-row sm:items-center justify-between mb-3'>

                                <div className='flex flex-col'>
                                    <strong>Secondary School Certificate (SSC) in Computer Science</strong>
                                    Dhariwal College
                                </div>
                                <div className='flex flex-col'>
                                    Faisalabad, Pakistan
                                </div>
                            </div>

                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg text-primaryColor font-semibold mb-2">Skills</h3>
                            <ul className="list-disc list-inside text-sm">
                                <li><strong>Languages:</strong> JavaScript, TypeScript, C++, HTML, EJS</li>
                                <li><strong>Styles:</strong> CSS, SCSS, BootStrap, TailwindCSS, MUI, ShadCN</li>
                                <li><strong>Libraries:</strong> ReactJs, Vue.js, GSAP, Redux Toolkit, ExpressJs</li>
                                <li><strong>Runtime:</strong> NodeJs</li>
                                <li><strong>Frameworks:</strong> NextJs</li>
                                <li><strong>Database:</strong> MongoDB, PostgreSQL, SQLite</li>
                                <li><strong>Cloud & Backend:</strong> Supabase, Firebase, Appwrite</li>
                                <li><strong>Payments:</strong> Stripe</li>
                                <li><strong>DevTools:</strong> Git, GitHub, Postman</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default page