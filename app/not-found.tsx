import Link from 'next/link';
import React from 'react';
const NotFoundPage = () => {
    return (
        <main className="z-50 w-full flex flex-col justify-center items-center bg-black">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-[#3ccf91] px-2 text-sm rounded rotate-12 absolute text-black">
                Page Not Found
            </div>
            <button className="mt-5">
                <Link href={"/"}
                    className="relative inline-block text-sm font-medium text-[#3ccf91] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#3ccf91] group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-black border border-current">
                        <Link href="/">Go Home</Link>
                    </span>
                </Link>
            </button>
        </main>
    )
};

export default NotFoundPage;
