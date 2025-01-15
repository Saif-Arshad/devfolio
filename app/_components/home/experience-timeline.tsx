// import React from "react";
// import { Timeline } from "../ui/timeline";

// export function     TimelineDemo() {
//     const data = [
//         {
//             title: "2024",
//             content: (
//                 <div>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                         Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                     </p>
//                     <div className="grid grid-cols-2 gap-4">
//                         <img
//                             src="https://assets.aceternity.com/templates/startup-1.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/templates/startup-2.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/templates/startup-3.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/templates/startup-4.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             title: "Early 2023",
//             content: (
//                 <div>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                         I usually run out of copy, but when I see content this big, I try to
//                         integrate lorem ipsum.
//                     </p>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                         Lorem ipsum is for people who are too lazy to write copy. But we are
//                         not. Here are some more example of beautiful designs I built.
//                     </p>
//                     <div className="grid grid-cols-2 gap-4">
//                         <img
//                             src="https://assets.aceternity.com/pro/hero-sections.png"
//                             alt="hero template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/features-section.png"
//                             alt="feature template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/pro/bento-grids.png"
//                             alt="bento template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/cards.png"
//                             alt="cards template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             title: "Changelog",
//             content: (
//                 <div>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
//                         Deployed 5 new components on Aceternity today
//                     </p>
//                     <div className="mb-8">
//                         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Card grid component
//                         </div>
//                         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Startup template Aceternity
//                         </div>
//                         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Random file upload lol
//                         </div>
//                         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Himesh Reshammiya Music CD
//                         </div>
//                         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Salman Bhai Fan Club registrations open
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                         <img
//                             src="https://assets.aceternity.com/pro/hero-sections.png"
//                             alt="hero template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/features-section.png"
//                             alt="feature template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/pro/bento-grids.png"
//                             alt="bento template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/cards.png"
//                             alt="cards template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//     ];
//     return (
//         <div className="w-full">
//             <Timeline data={data} />
//         </div>
//     );
// }
import React from "react";
import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Present",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Full Stack Developer at <b>Fuziondev</b>
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <li>Designed and implemented scalable web applications using the MERN stack, ensuring seamless user experiences.</li>
                        <li>Enhanced application performance by optimizing backend APIs and database queries, reducing response time by 30%.</li>
                        <li>Led the integration of third-party services, streamlining development workflows and expanding application capabilities.</li>
                        <li>Collaborated with cross-functional teams to deliver high-quality, user-centric web solutions using React and Node.js.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2024 - 2025",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        MERN Developer at <b>DevShine</b>
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <li>Developed and maintained web applications with modular, reusable components using React.js and Next.js.</li>
                        <li>Optimized front-end performance, achieving a 25% faster load time through efficient asset management and code splitting.</li>
                        <li>Implemented robust RESTful APIs and integrated them with MongoDB to handle dynamic user data efficiently.</li>
                        <li>Actively participated in Agile sprints, ensuring timely delivery of key features and enhancements.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2023 - 2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Junior MERN Developer at <b>Devontix Solutions</b>
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <li>Optimized web application performance, ensuring scalability and reliability using advanced Next.js features.</li>
                        <li>Streamlined administrative workflows, enhancing user efficiency by designing intuitive dashboards and tools.</li>
                        <li>Integrated real-time data features, improving the overall interactivity of applications.</li>
                        <li>Collaborated with UI/UX designers to implement modern, responsive interfaces tailored to end-user needs.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        MERN Stack Intern at <b>Weversity</b>
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <li>Managed and updated the Weversity.org website, improving its performance and usability.</li>
                        <li>Collaborated with senior developers to enhance key functionalities, contributing to a 20% increase in user engagement.</li>
                        <li>Assisted in the development and implementation of new features, including interactive forms and user dashboards.</li>
                        <li>Provided mentorship to junior team members and students, fostering best practices in web development.</li>
                    </ul>
                </div>
            ),
        }
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
