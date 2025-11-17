
import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { MapPinIcon, PhoneIcon, MailIcon, CornerAccent } from './Icons';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', class: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '5f37f725-b6e9-4890-b476-1adc6b3ffc5a',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    from_name: 'BOGO YOGA Website',
                    subject: 'New Contact Form Submission from BOGO YOGA',
                }),
            });

            const result = await response.json();
            
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '', class: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
        
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section className="py-16 md:py-32 bg-brand-beige relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative">
                <AnimateOnScroll>
                    <h2 className="text-3xl md:text-5xl font-bold text-center font-playfair mb-12 text-brand-text-dark">
                        Begin Your Journey of <span className="text-brand-gold">Tranquility</span>
                    </h2>
                </AnimateOnScroll>

                <div className="grid lg:grid-cols-2 gap-12">
                    <AnimateOnScroll>
                        <div className="bg-brand-surface/50 p-6 md:p-8 rounded-lg shadow-xl backdrop-blur-sm border border-brand-gold/10 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/20">
                            <h3 className="text-2xl font-bold font-playfair mb-6 text-brand-green">Send a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full bg-brand-beige p-3 rounded-md border-2 border-brand-gold/20 focus:border-brand-gold focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-brand-gold/20 transition-all" />
                                </div>
                                <div className="mb-4">
                                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full bg-brand-beige p-3 rounded-md border-2 border-brand-gold/20 focus:border-brand-gold focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-brand-gold/20 transition-all" />
                                </div>
                                <div className="mb-6">
                                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} required className="w-full bg-brand-beige p-3 rounded-md border-2 border-brand-gold/20 focus:border-brand-gold focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-brand-gold/20 transition-all"></textarea>
                                </div>
                                <div>
                                    <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-green text-white font-semibold py-3 px-8 rounded-full text-lg uppercase tracking-wider transition-all duration-300 hover:bg-brand-green hover:shadow-[0_0_15px_rgba(241,228,50,0.8)] disabled:bg-gray-400 transform hover:scale-105">
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                                {status === 'success' && <p className="mt-4 text-green-600">Message sent successfully! We'll be in touch soon.</p>}
                                {status === 'error' && <p className="mt-4 text-red-500">Something went wrong. Please try again.</p>}
                            </form>
                        </div>
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll className="flex flex-col gap-8">
                        <div className="relative overflow-hidden p-6 md:p-8 rounded-lg bg-brand-surface/50 shadow-lg backdrop-blur-sm border border-brand-gold/10 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/20 hover:border-brand-gold">
                            <CornerAccent position="top-left" className="absolute top-0 left-0 text-brand-gold/30" />
                            <CornerAccent position="bottom-right" className="absolute bottom-0 right-0 text-brand-gold/30" />
                            <h3 className="text-2xl font-bold font-playfair mb-6 text-brand-green">Contact Details</h3>
                            <div className="space-y-4">
                                <a href="https://www.google.com/maps/place/Bogo+Yoga/@25.1593651,51.5178013,17z/data=!3m1!4b1!4m6!3m5!1s0x3e45cd64efbe6ceb:0x5850b8232e97b970!8m2!3d25.1593651!4d51.5178013!16s%2Fg%2F11ym3s1cf6?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-brand-gold/10 group">
                                    <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold transition-colors duration-300 group-hover:text-brand-green flex-shrink-0">
                                        <MapPinIcon />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-semibold font-playfair text-lg text-brand-green mb-1">Location</p>
                                        <p className="text-brand-text-dark/80 transition-colors duration-300 group-hover:text-brand-green break-words">Bogoyoga studio</p>
                                    </div>
                                </a>
                                <a href="tel:+97471718108" className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-brand-gold/10 group">
                                    <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold transition-colors duration-300 group-hover:text-brand-green flex-shrink-0">
                                        <PhoneIcon />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-semibold font-playfair text-lg text-brand-green mb-1">Phone</p>
                                        <p className="text-brand-text-dark/80 transition-colors duration-300 group-hover:text-brand-green break-words">+974-71718108</p>
                                    </div>
                                </a>
                                <a href="mailto:bogoyogaqatar@gmail.com" className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-brand-gold/10 group">
                                     <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold transition-colors duration-300 group-hover:text-brand-green flex-shrink-0">
                                        <MailIcon />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-semibold font-playfair text-lg text-brand-green mb-1">Email</p>
                                        <p className="text-brand-text-dark/80 transition-colors duration-300 group-hover:text-brand-green break-words">bogoyogaqatar@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden border-4 border-brand-gold/20 min-h-[250px] md:min-h-[300px] shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8973831735376!2d51.515390075718044!3d25.159365177697776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cd64efbe6ceb%3A0x5850b8232e97b970!2sBogo%20Yoga!5e0!3m2!1sen!2sqa!4v1730898765432!5m2!1sen!2sqa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="BOGO YOGA Location"
                            ></iframe>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Contact;