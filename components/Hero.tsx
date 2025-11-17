
import React, { useState, useEffect } from 'react';
import { ArrowDownIcon } from './Icons';
import { SOCIAL_LINKS } from '../constants';

interface HeroProps {
    onAnimationsComplete?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAnimationsComplete }) => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const contentOpacity = Math.max(1 - offsetY / 400, 0);
    const contentScale = Math.max(1 - offsetY / 1200, 0.9);
    const contentTransform = `translateY(${offsetY * 0.2}px) scale(${contentScale})`;

    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative text-brand-text-light text-center p-4 sm:p-6 overflow-hidden">
            <div 
                className="absolute top-0 left-0 w-full h-[150vh] bg-cover bg-center bg-no-repeat z-0" 
                style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1820&auto=format&fit=crop')",
                    transform: `translateY(${offsetY * 0.5}px)`
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-brand-black/30 to-transparent z-10"></div>
            
            <div 
                className="relative z-20 flex flex-col items-center"
                style={{
                    opacity: contentOpacity,
                    transform: contentTransform,
                }}
            >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-wider font-playfair animate-fade-in-up [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
                    <span >Balance.</span> Breathe. <span >Become.</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light animate-fade-in-up [animation-delay:200ms] [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">A Sanctuary for Modern Wellness </p>

                <a 
                    href="#why-us"
                    onAnimationEnd={onAnimationsComplete}
                    className="mt-8 md:mt-12 bg-brand-green text-white font-semibold py-3 px-10 rounded-full text-lg uppercase tracking-wider transition-all duration-300 hover:bg-brand-green hover:shadow-[0_0_15px_rgba(241,228,50,0.8)] transform hover:scale-105 animate-fade-in-up [animation-delay:400ms] shadow-lg shadow-brand-green/30">
                    Begin Your Journey
                </a>
            </div>
            
            {/* Social links for mobile, at the bottom */}
            <div className="absolute bottom-24 z-20 flex space-x-6 md:hidden">
                {SOCIAL_LINKS.map((social, index) => (
                     <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-brand-text-light hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
                       {React.cloneElement(social.icon, { className: 'w-6 h-6' })}
                    </a>
                ))}
            </div>

            {/* Social links for desktop, on the side */}
            <div className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 flex-col space-y-4 p-2 bg-brand-black/20 rounded-l-lg backdrop-blur-sm z-20">
                {SOCIAL_LINKS.map((social, index) => (
                     <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-brand-text-light hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
                       {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
                    </a>
                ))}
            </div>

            <div className="absolute bottom-10 z-20 text-brand-text-light transition-transform duration-300 hover:translate-y-1">
                <a href="#about" aria-label="Scroll down">
                    <ArrowDownIcon />
                </a>
            </div>
        </section>
    );
};

export default Hero;