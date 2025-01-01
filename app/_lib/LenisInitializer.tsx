"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import Lenis from 'lenis';
import NextTopLoader from 'nextjs-toploader';


const LenisInitializer = () => {
    <NextTopLoader
        color="#3ccf91"
        height={5}
        zIndex={1000000}
        showSpinner={false}
    />

    useEffect(() => {
        // Initialize Lenis on client side
        const lenis = new Lenis();

        // Log scroll events
        lenis.on('scroll', (e) => {
            console.log(e);
        });

        // Use requestAnimationFrame to continuously update the scroll
        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Clean up Lenis when the component is unmounted
        };
    }, []);

    return null; // This component doesn't render any UI
};

export default LenisInitializer;
