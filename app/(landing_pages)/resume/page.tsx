import { FileUser } from 'lucide-react';
import React from 'react'
function page() {
    const experiences = [
        {
            title: "AI Backend Developer",
            company: "DevConst",
            description: [
                "Designed and developed scalable backend services in Node.js and Express to support AI-powered application workflows.",
                "Integrated MongoDB for managing structured and unstructured data used in AI features, prompts, and model responses.",
                "Built and optimized REST APIs for consuming and orchestrating third-party AI services (LLMs, vision APIs, and automation tools)."
            ],
            date: "07/2025 – Present",
            location: "Islamabad, Pakistan"
        },
        {
            title: "MERN Developer",
            company: "Fuziondev",
            description: [
                "Built and maintained multiple full-stack web applications using React, Next.js, Node.js, and MongoDB.",
                "Optimized Next.js apps for performance, SEO, and scalability, improving load times and user experience.",
                "Implemented TypeScript across frontend and backend for better maintainability and type safety.",
                "Developed serverless APIs using AWS Lambda and API Gateway."
            ],
            date: "11/2024 – 06/2025",
            location: "Faisalabad, Pakistan"
        },
        {
            title: "MERN Developer",
            company: "Devshine",
            description: [
                "Developed RESTful backend services and integrated MongoDB for data persistence.",
                "Delivered features on time by actively participating in Agile ceremonies.",
                "Enhanced API reliability and frontend-backend data synchronization."
            ],
            date: "06/2024 – 10/2024",
            location: "Faisalabad, Pakistan"
        },
        {
            title: "MERN Stack Developer",
            company: "Devontix Solutions",
            description: [
                "Contributed to the development of a large-scale Saudi Stadium web platform.",
                "Built an admin dashboard focused on usability and operational efficiency.",
                "Improved workflow automation, reducing manual admin tasks."
            ],
            date: "12/2023 – 05/2024",
            location: "Faisalabad, Pakistan"
        },
        {
            title: "MERN Stack Intern",
            company: "Weversity",
            description: [
                "Maintained and optimized the Weversity.org platform.",
                "Assisted senior engineers in implementing new features and performance improvements.",
                "Mentored junior students on web development best practices.",
                "Gained hands-on experience with production-level MERN applications."
            ],
            date: "03/2022 – 06/2022",
            location: "Faisalabad, Pakistan"
        }
    ];


    return (
        <div className="flex flex-wrap w-full sm:px-5 lg:px-10 items-start mb-20">
            <a href={"/resume/Saif Ur Rehman Resume.pdf"} download={"/resume/Saif Ur Rehman Resume.pdf"}>
                <button className='bg-emerald-700 hover:bg-emerald-800 fixed bottom-4  left-4 z-50 items-center flex text-white p-2 rounded-full px-5 group'>
                    <FileUser className='h-5 w-5 me-2 group-hover:animate-shake' />
                    Download Resume</button>
            </a>
            <div className="  py-10 px-2 w-full sm:px-5">
                <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-700 rounded-lg shadow-md overflow-hidden">
                    <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
                            <div>
                                <h2 className="text-3xl font-semibold">Saif Ur Rehman</h2>
                                <p className="text-sm text-gray-300">Full Stack Engineer</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Phone: +92 3491797803</p>
                                <p className="text-sm text-gray-300">Email: Saifarshad3344@gmail.com</p>
                                <p className="text-sm text-gray-300">Location: Faisalabad, Pakistan</p>
                            </div>
                        </div>
                        <hr className="my-4 bg-neutral-500" />
                        <div>
                            <h3 className="text-lg text-primaryColor font-semibold mb-2">Profile</h3>
                            <p className="text-sm leading-relaxed">Full Stack Software Engineer with 3+ years of experience building scalable, high-performance web applications using React, Next.js, Node.js, MongoDB, and TypeScript. Experienced in Agile environments, RESTful API design, cloud-based deployments, and modern UI frameworks. Strong focus on clean architecture, performance optimization, and delivering production-ready solutions aligned with business goals.</p>
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
                            <h3 className="text-lg text-primaryColor font-semibold mb-2">Technical Skills</h3>
                            <ul className="list-disc list-inside text-sm">
                                <li><strong>Languages:</strong> JavaScript (ES6+), TypeScript, C++, HTML5</li>
                                <li><strong>Frontend:</strong> React.js, Next.js, Redux Toolkit, GSAP</li>
                                <li><strong>Backend:</strong> Node.js, Express.js, REST APIs</li>
                                <li><strong>Databases:</strong> MongoDB, PostgreSQL, SQLite</li>
                                <li><strong>Cloud & DevOps:</strong> AWS, AWS Lambda, API Gateway, Serverless Framework</li>
                                <li><strong>BaaS:</strong> Firebase, Supabase, Appwrite</li>
                                <li><strong>Payments:</strong> Stripe</li>
                                <li><strong>CMS:</strong> Strapi</li>
                                <li><strong>Styling:</strong> Tailwind CSS, CSS3, SCSS, Bootstrap, MUI, ShadCN</li>
                                <li><strong>Tools:</strong> Git, GitHub, Postman, Jira, Vite, VS Code</li>
                                <li><strong>Methodologies:</strong> Agile, Scrum</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default page