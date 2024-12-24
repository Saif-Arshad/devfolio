import React from 'react';

function Page() {
    return (
        <section className="flex justify-center relative items-center max-h-[100vh] overflow-y-hidden h-[100vh] ">


            <div className="rounded-2xl bg-neutral-800 shadow-xl">
                <form action="" className=" p-7 mx-auto">
                    <div className="mb-11">
                        <h1 className="text-gray-100 text-start font-manrope text-3xl font-bold leading-10 mb-2">
                            Welcome Back
                        </h1>

                    </div>
                    <input
                        type="email"
                        className="w-full h-12 text-gray-100 bg-neutral-600 placeholder:text-gray-100 text-lg font-normal leading-7 rounded-full  shadow-sm focus:outline-none px-4 mb-6"
                        placeholder="Admin Email"
                    />
                    <input
                        type="password"
                        className="w-full h-12 text-gray-100 bg-neutral-600 placeholder:text-gray-100 text-lg font-normal leading-7 rounded-full  shadow-sm focus:outline-none px-4 mb-6"
                        placeholder="Password"
                    />
                    <div className='flex items-center justify-end'>

                        <button
                            type="submit"
                            className="w-24 h-12 mt-2 text-black text-center text-base font-semibold leading-6 rounded-full cursor-pointer transition-all duration-700 bg-primaryColor shadow-sm"
                        >
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default Page;
