
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyJoinUs from './components/WhyJoinUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { TESTIMONIALS_DATA } from './constants';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaderMounted, setIsLoaderMounted] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const animationsCompleteResolver = useRef<(() => void) | null>(null);
    const animationsCompletePromise = useMemo(() => {
        return new Promise<void>(resolve => {
            animationsCompleteResolver.current = resolve;
        });
    }, []);

    const handleAnimationsComplete = useCallback(() => {
        if (animationsCompleteResolver.current) {
            animationsCompleteResolver.current();
            animationsCompleteResolver.current = null; // Ensure it's only called once
        }
    }, []);

    useEffect(() => {
        const loadImage = (src: string): Promise<void> =>
            new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve();
                img.onerror = () => {
                    console.error(`Failed to load image: ${src}`);
                    resolve(); // Resolve even on error to not block the app
                };
            });

        const criticalImages = [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1820&auto=format&fit=crop", // Hero BG
            "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1770&auto=format&fit=crop", // About Img 1
            ...TESTIMONIALS_DATA.map(t => t.image)
        ];

        const imagePromises = criticalImages.map(loadImage);

        // Maximum 2 second timeout to prevent infinite loading
        const timeoutPromise = new Promise<void>((resolve) => {
            setTimeout(() => {
                console.log('Loading timeout reached, forcing page load');
                resolve();
            }, 2000);
        });

        // Wait for both critical images to load AND for the initial animations to finish, or timeout
        Promise.race([
            Promise.all([...imagePromises, animationsCompletePromise]),
            timeoutPromise
        ]).finally(() => {
            setIsLoading(false);
            setTimeout(() => {
                setIsLoaderMounted(false);
            }, 500); // Matches the loader's fade-out duration
        });
    }, [animationsCompletePromise]);

    const handleScroll = useCallback(() => {
        const pageYOffset = window.scrollY;
        let newActiveSection = 'home';
        
        Object.keys(sectionRefs.current).forEach(sectionId => {
            const ref = sectionRefs.current[sectionId];
            if (ref && ref.offsetTop <= pageYOffset + 100) {
                newActiveSection = sectionId;
            }
        });
        setActiveSection(newActiveSection);
    }, []);

    useEffect(() => {
        if (isLoading) return;
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoading, handleScroll]);

    return (
        <div className="bg-brand-beige text-brand-text-dark font-poppins relative overflow-x-hidden">
            {isLoaderMounted && <Loader isLoading={isLoading} />}
            <Navbar activeSection={activeSection} />
            <main>
                <div id="home" ref={el => { sectionRefs.current['home'] = el; }}><Hero onAnimationsComplete={handleAnimationsComplete} /></div>
                <div id="about" className="scroll-mt-20" ref={el => { sectionRefs.current['about'] = el; }}><About /></div>
                <div id="services" className="scroll-mt-20" ref={el => { sectionRefs.current['services'] = el; }}><Services /></div>
                <div id="why-us" className="scroll-mt-20" ref={el => { sectionRefs.current['why-us'] = el; }}><WhyJoinUs /></div>
                <div id="gallery" className="scroll-mt-20" ref={el => { sectionRefs.current['gallery'] = el; }}><Gallery /></div>
                <div id="contact" className="scroll-mt-20" ref={el => { sectionRefs.current['contact'] = el; }}><Contact /></div>
            </main>
            <Footer />
        </div>
    );
};

export default App;