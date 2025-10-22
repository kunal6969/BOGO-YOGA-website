
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CLASSES_DATA } from '../constants';
import { ClassCategory } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

const categories: ClassCategory[] = ['All', 'Beginner', 'Therapeutic', 'Advanced', 'Kids', 'Seniors'];

const Services: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<ClassCategory>('All');
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const filteredClasses = activeCategory === 'All'
        ? CLASSES_DATA
        : CLASSES_DATA.filter(cls => cls.category === activeCategory);

    useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, filteredClasses.length);
    }, [filteredClasses]);

    const handleDotClick = (index: number) => {
        itemRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    };

    const onScroll = useCallback(() => {
        if (!carouselRef.current) return;
        
        const scrollLeft = carouselRef.current.scrollLeft;
        const containerWidth = carouselRef.current.offsetWidth;

        let closestIndex = 0;
        let smallestDistance = Infinity;

        itemRefs.current.forEach((item, index) => {
            if (item) {
                const itemLeft = item.offsetLeft;
                const itemWidth = item.offsetWidth;
                const itemCenter = itemLeft + itemWidth / 2;
                const containerCenter = scrollLeft + containerWidth / 2;
                const distance = Math.abs(itemCenter - containerCenter);

                if (distance < smallestDistance) {
                    smallestDistance = distance;
                    closestIndex = index;
                }
            }
        });

        setActiveIndex(closestIndex);
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', onScroll, { passive: true });
        }
        return () => {
            if (carousel) {
                carousel.removeEventListener('scroll', onScroll);
            }
        };
    }, [onScroll]);

    return (
        <section className="py-16 md:py-32 bg-gradient-to-b from-brand-black to-[#080808] text-brand-text-light relative overflow-hidden">
            <div className="container mx-auto relative">
                <AnimateOnScroll className="px-4 sm:px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center font-playfair mb-4">Curated Wellness <span className="text-brand-gold">Journeys</span></h2>
                </AnimateOnScroll>
                
                <AnimateOnScroll delay="delay-200" className="px-4 sm:px-6">
                    <div className="flex justify-center flex-wrap gap-3 my-8 md:my-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-sm whitespace-nowrap md:text-base font-semibold rounded-full transition-all duration-300 border ${
                                    activeCategory === category
                                        ? 'bg-brand-green text-white border-brand-green'
                                        : 'bg-transparent text-brand-text-light border-brand-gold/30 hover:bg-brand-gold/10 hover:border-brand-gold'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll>
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto gap-4 md:gap-8 pb-4 carousel no-scrollbar -mx-4 px-4 sm:px-6 md:px-8"
                        style={{ paddingLeft: 'calc(50% - 150px)', paddingRight: 'calc(50% - 150px)' }} // Values adjusted for card width
                    >
                        {filteredClasses.map((cls, index) => (
                             <div
                                key={cls.title}
                                // FIX: Changed ref callback to a block body to avoid implicit return value, resolving TypeScript error.
                                ref={el => { itemRefs.current[index] = el; }}
                                className="flex-shrink-0 w-[300px] carousel-item"
                             >
                                <div className="rounded-2xl overflow-hidden relative group aspect-[3/4] shadow-xl w-full border border-brand-gold/20 transition-all duration-300 hover:border-brand-gold/50 hover:shadow-2xl hover:shadow-brand-gold/20">
                                    <img src={cls.image} alt={cls.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                                    <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-white">
                                        <div className="text-brand-gold mb-4 transition-transform duration-300 group-hover:scale-110">
                                            {React.cloneElement(cls.icon, { className: 'w-10 h-10' })}
                                        </div>
                                        <h3 className="text-2xl font-bold font-playfair mb-2">{cls.title}</h3>
                                        <p className="text-brand-text-light/80 text-sm leading-relaxed font-light">{cls.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="flex justify-center items-center gap-2 mt-8">
                        {filteredClasses.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`transition-all duration-300 rounded-full transform hover:scale-125 ${
                                    index === activeIndex ? 'w-6 h-2 bg-brand-gold' : 'w-2 h-2 bg-brand-gold/50'
                                }`}
                                aria-label={`Go to class ${index + 1}`}
                            />
                        ))}
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Services;