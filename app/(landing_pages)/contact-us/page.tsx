"use client"; // Required in Next.js (App Router) for client-side interactions like fetch, useState, etc.

import React, { useEffect, useRef, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { BriefcaseBusinessIcon, Clock, Mail, Phone, Send } from "lucide-react";
import { SiGmail } from "react-icons/si";

export default function Page({ searchParams }: any) {
    const params = searchParams
    const { service } = params
    const socials = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/saif-rehman-professional/",
            bgColor: "#0077B5",
            textColor: "#FFFFFF",
            icon: <BsLinkedin className="sm:h-5 sm:w-5 h-4 w-4 group-hover:animate-shake" />,
        },
        {
            name: "GitHub",
            link: "https://github.com/Saif-Arshad",
            bgColor: "#181717",
            textColor: "#FFFFFF",
            icon: <BsGithub className="sm:h-5 sm:w-5 h-4 w-4 group-hover:animate-shake" />,
        },
        {
            name: "WhatsApp",
            link: "https://wa.me/+923267146133",
            bgColor: "#108e3e",
            textColor: "#FFFFFF",
            icon: <FaWhatsapp className="sm:h-5 sm:w-5 h-4 w-4 group-hover:animate-shake" />,
        },
        // {
        //     name: "Fiverr",
        //     link: "https://www.fiverr.com/saifurrehman360",
        //     bgColor: "#118750",
        //     textColor: "#FFFFFF",
        //     icon: (
        //         <svg
        //             fill="#000000"
        //             viewBox="-2.5 -2 24 24"
        //             xmlns="http://www.w3.org/2000/svg"
        //             preserveAspectRatio="xMinYMin"
        //             className="sm:h-5 sm:w-5 h-4 w-4 group-hover:animate-shake"
        //         >
        //             <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        //             <g
        //                 id="SVGRepo_tracerCarrier"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //             ></g>
        //             <g id="SVGRepo_iconCarrier">
        //                 <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"></path>
        //                 <circle cx="14.375" cy="1.875" r="1.875"></circle>
        //             </g>
        //         </svg>
        //     ),
        // },
        // {
        //     name: 'Gmail',
        //     link: 'mailto:saifarshad3344@gmail.com',
        //     bgColor: '#D14836',
        //     textColor: '#FFFFFF',
        //     icon: <SiGmail className="sm:h-5 sm:w-5 h-4 w-4 group-hover:animate-shake" />
        // }
    ];

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const contactRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!firstName.trim() || !email.trim() || !userMessage.trim()) {
            setErrorMessage("Please fill out the required fields (Name, Email, Message).");
            setSuccessMessage(null);
            return;
        }

        setLoading(true);
        setErrorMessage(null);
        setSuccessMessage(null);

        try {
            const response = await fetch("/api/contact-page", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    message: userMessage,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setSuccessMessage(
                "Message sent successfully! Saif will surely see the mail in a few minutes and get back to you."
            );
            setFirstName("");
            setLastName("");
            setEmail("");
            setUserMessage("");
        } catch (err: any) {
            setErrorMessage(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (service && userMessage.length == 0) {
            setUserMessage(service)
            setErrorMessage("Please fill out the required fields (Name and Email)")
            contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [service])

    return (
        <div className="flex items-center flex-col px-4 lg:px-10 xl:px-20 my-7 w-full">
            <div className="border-b w-full border-white border-dashed mb-5 pb-7">
                <h1 className="text-4xl font-bold text-start mb-1">Contact Us</h1>
                <p>Get in touch with me via social media or send me an email.</p>

                {/* Social Links */}
                <div className="flex items-center gap-5 mt-8 flex-wrap">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 group px-3 text-sm sm:text-base sm:px-4 py-2 rounded-md   duration-500"
                            style={{
                                backgroundColor: social.bgColor,
                                color: social.textColor,
                            }}
                        >
                            {social.name === "Fiverr" ? (
                                <svg
                                    fill={social.textColor}
                                    viewBox="-2.5 -2 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMinYMin"
                                    className="sm:h-5 sm:w-5 h-4 w-4 group-hover:animate-shake group-hover:animate-shake"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"></path>
                                        <circle cx="14.375" cy="1.875" r="1.875"></circle>
                                    </g>
                                </svg>
                            ) : (
                                social.icon
                            )}
                            <span>{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="w-full my-5">
                <div className="max-w-7xl mx-auto">
                    <div className=" border bg-neutral-900 rounded-xl p-6  grid md:grid-cols-3 gap-12   border-neutral-700">
                        <div className="md:col-span-2">
                            <h1 className="text-3xl font-medium text-start mb-1">Send me a message</h1>
                            <p className="text-gray-400 mb-6">
                                My inbox is always open. Whether you have a question or just want to
                                talk more about your projects! Feel free to mail me about any relevant
                                job updates.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4"
                            >
                                <div
                                    ref={contactRef}
                                    className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm mb-2 font-medium text-primaryColor">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="mt-1 block w-full px-4 py-2 border border-neutral-600 bg-neutral-800 text-white rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor outline-none"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-2 font-medium text-primaryColor">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="mt-1 block w-full px-4 py-2 border border-neutral-600 bg-neutral-800 text-white rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor outline-none"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 font-medium text-primaryColor">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="mt-1 block w-full px-4 py-2 border border-neutral-600 bg-neutral-800 text-white rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor outline-none"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-primaryColor">
                                        Message *
                                    </label>
                                    <textarea
                                        placeholder="Message"
                                        rows={5}
                                        className="mt-1 block w-full px-4 py-2 border border-neutral-600 bg-neutral-800 text-white rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor outline-none"
                                        value={userMessage}
                                        onChange={(e) => setUserMessage(e.target.value)}
                                    ></textarea>
                                </div>

                                <p className="flex items-center gap-x-1 text-xs text-gray-400">
                                    <Clock className="h-3.5 w-3.5" />
                                    Avg. response: 1-2 Hours (Working Hours, GMT+7)
                                </p>



                                <div className="my-10 w-full flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className=" bg-emerald-700 group w-[120px] text-white flex items-center justify-center gap-x-2 px-4 py-2 rounded-full hover:bg-emerald-800 transition-colors disabled:opacity-50"
                                    >
                                        {loading ? (

                                            <>
                                                <Send className="h-5 w-5 animate-spin" />
                                                Send
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5 group-hover:animate-shake" />
                                                Send
                                            </>
                                        )}
                                    </button>
                                </div>
                                {errorMessage && (
                                    <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                                )}
                                {successMessage && (
                                    <p className="text-green-500 text-sm font-medium">{successMessage}</p>
                                )}
                            </form>
                        </div>

                        <div className=" flex flex-col gap-y-6">
                            <a
                                href="tel:+92491797803"
                            >
                                <div className="bg-neutral-800 border group border-neutral-700  text-white p-4 rounded-xl">
                                    <h3 className="text-lg font-medium text-primaryColor flex   items-center gap-x-2">
                                        <Phone className="h-5 w-5 group-hover:animate-shake" />
                                        Contact</h3>
                                    <p className="mb-3">Talk to us and see how we can work</p>
                                    +92-3491797803
                                </div>
                            </a>

                            <a
                                href="mailto:Saifarshad3344@gmail.com"
                            >
                                <div className="bg-neutral-800 border group border-neutral-700  text-white p-4 rounded-xl">

                                    <h3 className="text-lg font-medium text-primaryColor flex  items-center gap-x-2">
                                        <Mail className="h-5 w-5 group-hover:animate-shake" />
                                        Email</h3>
                                    <p className="mb-3">We're usually replying within 1-2 Hours</p>
                                    Saifarshad3344@gmail.com
                                </div>
                            </a>

                            <div className="bg-neutral-800 border group border-neutral-700  text-white p-4 rounded-xl">
                                <h3 className="text-lg font-medium text-primaryColor flex  items-center gap-x-2">
                                    <BriefcaseBusinessIcon className="h-5 w-5 group-hover:animate-shake" />
                                    Working Hours
                                </h3>
                                <p>
                                    Mon to Sat - 12 am to 12 pm
                                    <br />
                                    Sunday - 11 am to 5 pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
