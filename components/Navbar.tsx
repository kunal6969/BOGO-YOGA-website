import React, { useState, useEffect } from 'react';
import { BogoLogo, MenuIcon, CloseIcon } from './Icons';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add('mobile-menu-open');
        } else {
            document.documentElement.classList.remove('mobile-menu-open');
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        // Delay scrolling to allow the 'overflow: hidden' class to be removed
        setTimeout(() => {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isOpen ? 'bg-brand-black shadow-md' : 'bg-transparent'
    }`;

    return (
        <nav className={navClass}>
            <div className="container mx-auto px-4 sm:px-6 py-2 md:py-3 flex justify-between items-center">
                <a href="#home" aria-label="BOGO YOGA Home">
                    <BogoLogo />
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className={`font-semibold uppercase text-sm tracking-wider transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all after:duration-300 ${
                            activeSection === link.href.substring(1) ? 'text-brand-gold after:w-1/2 after:-translate-x-1/2' : 'text-brand-text-light hover:text-brand-gold after:hover:w-1/2 after:hover:-translate-x-1/2'
                        }`}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu" className="z-[100] relative text-brand-text-light">
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-brand-black z-[60] transition-opacity duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => handleMobileLinkClick(e, link.href)} className={`font-semibold text-2xl uppercase tracking-wider transition-all duration-300 ${
                             activeSection === link.href.substring(1) ? 'text-brand-gold' : 'text-brand-text-light hover:text-brand-gold'
                        }`}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
