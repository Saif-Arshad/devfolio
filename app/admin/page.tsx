"use client"
import React, { useState } from 'react';
import { loginUser } from '../_lib/auth';
import { useRouter } from 'next/navigation';

function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const validateForm = () => {
        if (!email || !password) {
            setErrorMessage('Please fill in all fields.');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return false;
        }
        return true;
    };

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setErrorMessage('');

        if (!validateForm()) return;

        setLoading(true);
        try {
            await loginUser(email, password);
            router.replace('/dashboard');
        } catch (error: any) {
            setErrorMessage(error.message || 'An error occurred during login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex justify-center relative items-center max-h-[100vh] overflow-y-hidden h-[100vh] ">
            <div className="rounded-2xl bg-neutral-800 shadow-xl">
                <form onSubmit={handleLogin} className="p-7 mx-auto">
                    <div className="mb-11">
                        <h1 className="text-gray-100 text-start font-manrope text-3xl font-bold leading-10 mb-2">
                            Welcome Back
                        </h1>
                    </div>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 text-gray-100 bg-neutral-600 placeholder:text-gray-100 text-lg font-normal leading-7 rounded-full shadow-sm focus:outline-none px-4 mb-6"
                        placeholder="Admin Email"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 text-gray-100 bg-neutral-600 placeholder:text-gray-100 text-lg font-normal leading-7 rounded-full shadow-sm focus:outline-none px-4 mb-6"
                        placeholder="Password"
                    />
                    {errorMessage && (
                        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                    )}
                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-24 h-12 mt-2 text-black text-center text-base font-semibold leading-6 rounded-full cursor-pointer transition-all duration-700 ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-primaryColor'
                                } shadow-sm`}
                        >
                            {loading ? 'Loading...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Page;