
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { GoldLineAccent } from './Icons';

const About: React.FC = () => {
    return (
        <section className="py-16 md:py-32 bg-brand-beige overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <AnimateOnScroll>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-brand-text-dark">A Lifestyle of <span className="text-brand-gold">Calm Sophistication</span></h2>
                        <GoldLineAccent className="mx-auto my-6" />
                        <p className="text-md md:text-xl max-w-3xl mx-auto text-brand-text-dark/70">
                            “True wellness is found in the harmony of a tranquil mind and a graceful body.”
                        </p>
                    </div>
                </AnimateOnScroll>
                
                <div className="mt-16 md:mt-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                        <AnimateOnScroll>
                             <div className="rounded-lg shadow-xl overflow-hidden h-full border border-brand-gold/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-brand-gold">
                               <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1770&auto=format&fit=crop" alt="Serene yoga space" className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" />
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="flex flex-col justify-center h-full p-6 md:p-8 bg-brand-surface/50 rounded-lg border border-brand-gold/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-brand-gold">
                                <h3 className="text-2xl md:text-3xl font-bold font-playfair text-brand-green mb-4">Our Philosophy</h3>
                                <p className="mb-4 text-brand-text-dark/80">At Bogo Fitness, we believe pilates is an art form—a journey into mindfulness, resilience, and inner balance. We provide a sanctuary where movement becomes meditation, and breath becomes the anchor to your serene center.</p>
                                <p className="text-brand-text-dark/80">Our ethos is built on providing an exclusive, refined environment for personal transformation.</p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>

                <div className="mt-16 md:mt-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                         <AnimateOnScroll className="md:order-2">
                            <div className="rounded-lg shadow-xl overflow-hidden h-full border border-brand-gold/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-brand-gold">
                               <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1699&auto=format&fit=crop" alt="Yoga class" className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" />
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll className="md:order-1">
                             <div className="flex flex-col justify-center h-full p-6 md:p-8 bg-brand-surface/50 rounded-lg border border-brand-gold/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-brand-gold">
                                <h3 className="text-2xl md:text-3xl font-bold font-playfair text-brand-green mb-4">Our Story</h3>
                                <p className="mb-4 text-brand-text-dark/80">Born from a desire to create an oasis of tranquility amidst the bustle of modern life, Bogo Fitness is more than a studio—it's a curated wellness experience. We offer a holistic blend of traditional, therapeutic practices, and Pilates within a space designed for peace and inspiration.</p>
                                <p className="text-brand-text-dark/80">Our mission is to elevate the practice of pilates into a lifestyle of grace and mindfulness.</p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
                
                <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 text-center">
                    <AnimateOnScroll>
                        <div className="p-6 md:p-8 bg-brand-surface/50 rounded-lg border border-brand-gold/20 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-brand-gold">
                            <h4 className="text-2xl md:text-3xl font-bold font-playfair text-brand-green mb-4">Our Vision</h4>
                            <p className="text-brand-text-dark/80">To be a beacon of serene luxury in the wellness community, where every individual can access a life of mental clarity, emotional balance, and physical grace.</p>
                        </div>
                    </AnimateOnScroll>
                     <AnimateOnScroll>
                        <div className="p-6 md:p-8 bg-brand-surface/50 rounded-lg border border-brand-gold/20 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-brand-gold">
                            <h4 className="text-2xl md:text-3xl font-bold font-playfair text-brand-green mb-4">Our Mission</h4>
                            <p className="text-brand-text-dark/80">To offer exceptionally curated pilates, and therapeutic sessions in a serene and empowering space, inspiring our community to embrace self-care and live with intention and harmony.</p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default About;
