
import React from 'react';
import { FooterLogo } from './Icons';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-t from-brand-black to-[#080808] text-brand-text-light relative">
            <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
                    {/* Logo and Social */}
                    <div className="flex flex-col items-center md:items-start">
                        <a href="#home" aria-label="BOGO YOGA Home" className="mb-4">
                           <FooterLogo />
                        </a>
                        <p className="text-brand-text-light/90 mb-6">Balance. Breathe. Become.</p>
                        <div className="flex space-x-4">
                            {SOCIAL_LINKS.map(social => (
                                <a key={social.name} href={social.href} aria-label={social.name} className="text-brand-text-light hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-brand-text-light">Explore</h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-brand-text-light/90 hover:text-brand-gold transition-colors duration-300">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 text-center text-brand-text-light/80">
                    <p>&copy; {new Date().getFullYear()} BOGO YOGA. A Sanctuary for Wellness. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;