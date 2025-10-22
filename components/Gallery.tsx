import React, { useState, useCallback, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from './Icons';

const Gallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            if (selectedImageIndex === null) {
                goToNext();
            }
        }, 5000); // 5 seconds
        return () => clearInterval(interval);
    }, [selectedImageIndex, currentIndex]);

    const goToNext = useCallback(() => {
        if (isTransitioning) return;
        setDirection('right');
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
        setTimeout(() => setIsTransitioning(false), 800);
    }, [isTransitioning]);

    const goToPrev = useCallback(() => {
        if (isTransitioning) return;
        setDirection('left');
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
        setTimeout(() => setIsTransitioning(false), 800);
    }, [isTransitioning]);

    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentIndex) return;
        setDirection(index > currentIndex ? 'right' : 'left');
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    // Touch handlers for mobile swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        
        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrev();
        }
    };

    // Lightbox handlers
    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto';
    }, []);

    const goToNextLightbox = useCallback(() => {
        setSelectedImageIndex(prevIndex => {
            if (prevIndex === null) return 0;
            return (prevIndex + 1) % GALLERY_IMAGES.length;
        });
    }, []);

    const goToPrevLightbox = useCallback(() => {
        setSelectedImageIndex(prevIndex => {
            if (prevIndex === null) return 0;
            return (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
        });
    }, []);
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex !== null) {
                if (e.key === 'ArrowRight') {
                    goToNextLightbox();
                } else if (e.key === 'ArrowLeft') {
                    goToPrevLightbox();
                } else if (e.key === 'Escape') {
                    closeLightbox();
                }
            }
        };

        if (selectedImageIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImageIndex, goToNextLightbox, goToPrevLightbox, closeLightbox]);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-brand-black to-[#080808] text-brand-text-light relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative">
                <AnimateOnScroll>
                    <h2 className="text-3xl md:text-5xl font-bold text-center font-playfair mb-8 md:mb-12">
                        Our Studio <span className="text-brand-gold">Gallery</span>
                    </h2>
                </AnimateOnScroll>

                {/* Premium Carousel */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Main Image Container */}
                    <div 
                        className="relative overflow-hidden rounded-lg"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
                            {GALLERY_IMAGES.map((src, index) => {
                                const isActive = index === currentIndex;
                                const isPrev = index === (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
                                const isNext = index === (currentIndex + 1) % GALLERY_IMAGES.length;
                                
                                let translateClass = '';
                                let opacityClass = 'opacity-0';
                                
                                if (isActive) {
                                    translateClass = 'translate-x-0';
                                    opacityClass = 'opacity-100';
                                } else if (isPrev) {
                                    translateClass = direction === 'left' ? 'translate-x-full' : '-translate-x-full';
                                } else if (isNext) {
                                    translateClass = direction === 'right' ? 'translate-x-full' : '-translate-x-full';
                                } else {
                                    translateClass = direction === 'right' ? 'translate-x-full' : '-translate-x-full';
                                }
                                
                                return (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-800 ease-out transform ${translateClass} ${opacityClass}`}
                                        style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-full object-cover cursor-pointer transform transition-transform duration-700 hover:scale-105"
                                            onClick={() => openLightbox(index)}
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                        />
                                        {/* Gradient Overlay for better text contrast */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent pointer-events-none" />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation Arrows - Desktop */}
                        <button
                            onClick={goToPrev}
                            disabled={isTransitioning}
                            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-brand-black/40 hover:bg-brand-gold/90 text-white hover:text-brand-black backdrop-blur-sm rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 shadow-lg"
                            aria-label="Previous image"
                        >
                            <ArrowLeftIcon />
                        </button>
                        <button
                            onClick={goToNext}
                            disabled={isTransitioning}
                            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-brand-black/40 hover:bg-brand-gold/90 text-white hover:text-brand-black backdrop-blur-sm rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 shadow-lg"
                            aria-label="Next image"
                        >
                            <ArrowRightIcon />
                        </button>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
                        {GALLERY_IMAGES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                disabled={isTransitioning}
                                className="group relative disabled:cursor-not-allowed"
                                aria-label={`Go to image ${index + 1}`}
                            >
                                {/* Background track */}
                                <div className={`h-1 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'w-12 sm:w-16 bg-brand-gold' 
                                        : 'w-8 sm:w-10 bg-brand-gold/30 group-hover:bg-brand-gold/50'
                                }`}>
                                    {/* Progress fill animation */}
                                    {index === currentIndex && (
                                        <div className="h-full bg-brand-gold rounded-full animate-fill-progress" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Swipe hint for mobile */}
                    <p className="text-center text-brand-gold/60 text-sm mt-4 md:hidden">
                        Swipe or tap indicators to browse
                    </p>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-brand-black/95 backdrop-blur-md z-[999] flex items-center justify-center p-2 sm:p-4 animate-fade-in group" onClick={closeLightbox}>
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white bg-brand-black/50 hover:bg-brand-gold hover:text-brand-black rounded-full p-2 z-[1001] shadow-lg transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100"
                        aria-label="Close image view"
                    >
                        <CloseIcon />
                    </button>
                    
                    <button
                        onClick={(e) => { e.stopPropagation(); goToPrevLightbox(); }}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-brand-black/50 hover:bg-brand-gold hover:text-brand-black rounded-full p-2 sm:p-3 shadow-lg z-[1000] transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100"
                        aria-label="Previous image"
                    >
                        <ArrowLeftIcon />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img 
                            key={selectedImageIndex} 
                            src={GALLERY_IMAGES[selectedImageIndex]} 
                            alt="Full screen view" 
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" 
                        />
                    </div>
                    
                    <button
                        onClick={(e) => { e.stopPropagation(); goToNextLightbox(); }}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-brand-black/50 hover:bg-brand-gold hover:text-brand-black rounded-full p-2 sm:p-3 shadow-lg z-[1000] transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100"
                        aria-label="Next image"
                    >
                        <ArrowRightIcon />
                    </button>
                    
                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                        {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;