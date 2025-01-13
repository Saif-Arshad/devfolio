"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import Lenis from 'lenis';


const LenisInitializer = () => {
    

    useEffect(() => {
        // Initialize Lenis on client side
        const lenis = new Lenis();

        // Log scroll events
        lenis.on('scroll', (e) => {
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
