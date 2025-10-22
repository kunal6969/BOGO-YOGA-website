
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WHY_JOIN_US_POINTS, TESTIMONIALS_DATA } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

const WhyJoinUs: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const startInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % TESTIMONIALS_DATA.length);
        }, 5000);
    }, []);

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startInterval]);

    const handleIndicatorClick = (index: number) => {
        setCurrentTestimonial(index);
        startInterval(); // Reset interval on manual navigation
    };

    return (
        <section className="relative bg-brand-beige">
            <div className="relative container mx-auto px-4 sm:px-6 py-16 md:py-32">
                <AnimateOnScroll>
                    <h2 className="text-3xl md:text-5xl font-bold text-center font-playfair mb-12 text-brand-text-dark">
                        An Experience in <span className="text-brand-gold">Exclusivity</span>
                    </h2>
                </AnimateOnScroll>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-16 md:mb-20 text-center">
                    {WHY_JOIN_US_POINTS.map((point, index) => (
                        <AnimateOnScroll key={index} delay={`delay-[${index * 100}ms]`}>
                            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:-translate-y-2 group">
                                <div className="p-4 bg-brand-gold/10 border-2 border-brand-gold rounded-full text-brand-gold transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green">
                                    {point.icon}
                                </div>
                                <p className="mt-3 font-semibold text-sm sm:text-base text-brand-text-dark">{point.text}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll>
                    <div className="max-w-3xl mx-auto relative">
                        <div className="relative z-10 bg-brand-surface/50 p-6 sm:p-8 rounded-lg backdrop-blur-sm text-center overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-gold/20 border border-brand-gold/10">
                            {TESTIMONIALS_DATA.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`transition-opacity duration-700 ease-in-out absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-center ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-brand-gold mb-4 object-cover shadow-lg" />
                                    <p className="text-base sm:text-lg italic text-brand-text-dark/90 font-playfair">"{testimonial.quote}"</p>
                                    <h4 className="mt-4 text-lg sm:text-xl font-bold text-brand-green">{testimonial.name}</h4>
                                    <p className="text-brand-text-dark/60">{testimonial.role}</p>
                                </div>
                            ))}
                            <div className="min-h-[20rem] sm:min-h-[18rem]"></div> {/* Placeholder for sizing */}
                            
                            <div className="absolute bottom-4 left-0 right-0 px-8">
                                <div className="flex space-x-2">
                                    {TESTIMONIALS_DATA.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleIndicatorClick(index)}
                                            className="flex-1 h-1.5 bg-brand-gold/20 rounded-full overflow-hidden transition-colors duration-300 hover:bg-brand-gold/40"
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        >
                                            <div
                                                className={`h-full bg-brand-gold transition-all duration-300 ${index < currentTestimonial ? 'w-full' : 'w-0'}`}
                                                style={{ animation: index === currentTestimonial ? 'fill-progress 5s linear forwards' : 'none' }}
                                                // Using a key forces React to re-mount the element, thus restarting the CSS animation
                                                key={currentTestimonial}
                                            ></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default WhyJoinUs;