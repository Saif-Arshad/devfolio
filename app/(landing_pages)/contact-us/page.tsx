import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Page() {
    const socials = [
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/saif-rehman-professional/',
            bgColor: '#0077B5',
            textColor: '#FFFFFF',
            icon: <BsLinkedin className="sm:h-5 sm:w-5 h-4 w-4" />
        },
        {
            name: 'GitHub',
            link: 'https://github.com/Saif-Arshad',
            bgColor: '#181717',
            textColor: '#FFFFFF',
            icon: <BsGithub className="sm:h-5 sm:w-5 h-4 w-4" />
        },
        {
            name: 'WhatsApp',
            link: 'https://wa.me/+923267146133',
            bgColor: '#108e3e',
            textColor: '#FFFFFF',
            icon: <FaWhatsapp className="sm:h-5 sm:w-5 h-4 w-4" />
        },
        {
            name: 'Fiverr',
            link: 'https://www.fiverr.com/saifurrehman360',
            bgColor: '#118750',
            textColor: '#FFFFFF',
            icon: (
                <svg
                    fill="#000000"
                    viewBox="-2.5 -2 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin"
                    className="sm:h-5 sm:w-5 h-4 w-4"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"></path>
                        <circle cx="14.375" cy="1.875" r="1.875"></circle>
                    </g>
                </svg>
            )
        },
        {
            name: 'Gmail',
            link: 'mailto:saifarshad3344@gmail.com',
            bgColor: '#D14836',
            textColor: '#FFFFFF',
            icon: <SiGmail className="sm:h-5 sm:w-5 h-4 w-4" />
        }
    ];

    return (
        <div className="flex items-center flex-col px-4 lg:px-10 xl:px-20 my-7 w-full">
            <div className="border-b w-full border-white border-dashed mb-5 pb-7">
                <h1 className="text-4xl font-bold text-start mb-1">Contact Us</h1>
                <p>
                    Get in touch with me via social media or send me an email.
                </p>
                <div className="flex items-center gap-5 mt-8 flex-wrap">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 text-sm sm:text-base sm:px-4 py-2 rounded-md hover:scale-95 duration-500"
                            style={{
                                backgroundColor: social.bgColor,
                                color: social.textColor
                            }}
                        >
                            {social.name === 'Fiverr' ? (
                                <svg
                                    fill={social.textColor}
                                    viewBox="-2.5 -2 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMinYMin"
                                    className="sm:h-5 sm:w-5 h-4 w-4"
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

                <h1 className="text-4xl font-bold text-start mb-1">NEED A DEVELOPER?</h1>


                <div className="max-w-7xl mx-auto p-8">
                    <div className="bg-neutral-900 shadow-md rounded-lg p-6 grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-bold mb-4 text-primaryColor">Contact Me</h2>
                            <p className="text-gray-400 mb-6">
                                We are deeply committed to delivering unparalleled service and unwavering support to ensure your experience exceeds expectations.
                            </p>
                            <form action="#" method="POST" className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-primaryColor">First Name *</label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-neutral-800 text-white rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-primaryColor">Last Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-neutral-800 text-white rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primaryColor">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-neutral-800 text-white rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primaryColor">Message *</label>
                                    <textarea
                                        placeholder="Message"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-neutral-800 text-white rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primaryColor text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-neutral-800 text-white p-4 rounded-md">
                                <h3 className="text-lg font-medium text-primaryColor">Address</h3>
                                <p>3680 Schamberger Pass, North Catalina<br />01984-8381</p>
                            </div>
                            <div className="bg-neutral-800 text-white p-4 rounded-md">
                                <h3 className="text-lg font-medium text-primaryColor">Contact</h3>
                                <p>Talk to us and see how we can work<br />1800-14-0147</p>
                            </div>
                            <div className="bg-neutral-800 text-white p-4 rounded-md">
                                <h3 className="text-lg font-medium text-primaryColor">Email</h3>
                                <p>We're usually replying within 24 hours<br />pagedone1234@gmail.com</p>
                            </div>
                            <div className="bg-neutral-800 text-white p-4 rounded-md">
                                <h3 className="text-lg font-medium text-primaryColor">Working Hours</h3>
                                <p>Mon to Sat - 10 am to 7 pm<br />Sunday - 11 am to 5 pm</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;
