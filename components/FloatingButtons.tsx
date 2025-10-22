import React from 'react';
import { WhatsAppIcon } from './Icons';

const FloatingButtons: React.FC = () => {
    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
            <a 
                href="https://wa.me/918755641996" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-green rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl"
            >
                <WhatsAppIcon />
            </a>
        </div>
    );
};

export default FloatingButtons;