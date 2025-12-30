"use client"

import React, { useEffect, useState } from 'react';
import './BackTop.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function BackTop() {
    const [isVisible, setIsVisible] = useState(false);
    const path = usePathname()
    const isResumePage = path == "/resume"
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const onWhatsAppCLick = () => {
        const whatsappMessage = `Hey, How are you?`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=+923491797803&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
      }
  
    return (
        <div className='fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3'>
            {/* WhatsApp Button */}
            <div 
                onClick={onWhatsAppCLick}
                className='h-16 w-16 cursor-pointer rounded-full overflow-hidden hover:scale-110 transition-transform duration-300'
            >
                <Image
                    src='/Animation - 1722963379264.gif'
                    height={48}
                    width={48}
                    className='h-full w-full object-cover'
                    alt='whatsapp'
                />
            </div>

            {/* Back to Top Button */}
            {isVisible && (
                <button 
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-110 shadow-lg"
                    onClick={scrollToTop}
                >
                    <svg className="h-5 w-5 text-white" viewBox="0 0 384 512" fill="currentColor">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </button>
            )}
        </div>
    );
}

export default BackTop;
