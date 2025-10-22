import React from 'react';
import logoSvg from './src/images/logo/bogayoga_logo.svg';

const iconProps = {
    className: "w-6 h-6",
};

export const BogoLogo = ({ className }: { className?: string }) => (
    <div className={`font-playfair text-xl md:text-2xl font-semibold tracking-wide ${className}`}>
        <span className="text-brand-gold">BOGO</span>
        <span className="text-brand-green"> YOGA</span>
    </div>
);

export const FooterLogo = ({ className }: { className?: string }) => (
    <img 
        src={logoSvg} 
        alt="Bogo Yoga" 
        className={`h-32 md:h-40 w-auto ${className}`}
        style={{ 
            display: 'block',
            maxWidth: '100%',
            objectFit: 'contain'
        }} 
    />
);

export const MandalaIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
        <g transform="translate(50,50)">
            <g transform="scale(1)">
                <circle cx="0" cy="0" r="48" strokeWidth="0.5"/>
                <g>
                    <g transform="rotate(0)">
                        <path d="M 0 -48 A 48 48 0 0 1 41.56921938165306 24 L 20.78460969082653 12 A 24 24 0 0 0 0 -24 Z" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(60)">
                        <path d="M 0 -48 A 48 48 0 0 1 41.56921938165306 24 L 20.78460969082653 12 A 24 24 0 0 0 0 -24 Z" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(120)">
                        <path d="M 0 -48 A 48 48 0 0 1 41.56921938165306 24 L 20.78460969082653 12 A 24 24 0 0 0 0 -24 Z" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(180)">
                        <path d="M 0 -48 A 48 48 0 0 1 41.56921938165306 24 L 20.78460969082653 12 A 24 24 0 0 0 0 -24 Z" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(240)">
                        <path d="M 0 -48 A 48 48 0 0 1 41.56921938165306 24 L 20.78460969082653 12 A 24 24 0 0 0 0 -24 Z" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(300)">
                        <path d="M 0 -48 A 48 48 0 0 1 41.56921938165306 24 L 20.78460969082653 12 A 24 24 0 0 0 0 -24 Z" strokeWidth="0.25"/>
                    </g>
                </g>
                <circle cx="0" cy="0" r="24" strokeWidth="0.25"/>
                <g>
                    <g transform="rotate(30)">
                        <path d="M 0 0 L 24 0" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(90)">
                        <path d="M 0 0 L 24 0" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(150)">
                        <path d="M 0 0 L 24 0" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(210)">
                        <path d="M 0 0 L 24 0" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(270)">
                        <path d="M 0 0 L 24 0" strokeWidth="0.25"/>
                    </g>
                    <g transform="rotate(330)">
                        <path d="M 0 0 L 24 0" strokeWidth="0.25"/>
                    </g>
                </g>
                <circle cx="0" cy="0" r="12" strokeWidth="0.25"/>
                <g>
                    <path d="M 0,-12 A 12 12 0 0 1 10.392304845413264 6" strokeWidth="0.25"/>
                    <path d="M 10.392304845413264 6 A 12 12 0 0 1 -10.392304845413264 6" strokeWidth="0.25"/>
                    <path d="M -10.392304845413264 6 A 12 12 0 0 1 0 -12" strokeWidth="0.25"/>
                </g>
            </g>
        </g>
    </svg>
);


export const InstagramIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
export const FacebookIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
export const TwitterIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
export const WhatsAppIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
export const YoutubeIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3a24.12 24.12 0 0 1 0 10c0 1-4.5 3-9.5 3s-9.5-2-9.5-3Z"/><path d="m10 15 5-3-5-3z"/></svg>;
export const MailIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
export const PhoneIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
export const MapPinIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
export const MenuIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
export const CloseIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
export const ArrowDownIcon = () => <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>;
export const ArrowLeftIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>;
export const ArrowRightIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
export const CheckCircleIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
export const SearchIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;


// Why Join Us Icons
export const AwardIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
export const FeatherIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="m16 16-4-4"/><path d="m22 2-6 6"/></svg>;
export const CalendarDaysIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
export const SparklesIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3L11.5 6L14.5 7.5L11.5 9L10 12L8.5 9L5.5 7.5L8.5 6L10 3Z"/><path d="M18 13L19 15L21 16L19 17L18 19L17 17L15 16L17 15L18 13Z"/><path d="M3 8L4 10L6 11L4 12L3 14L2 12L0 11L2 10L3 8Z"/></svg>;
export const GemIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20"/></svg>;
export const RecycleIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 19H4.5a2.5 2.5 0 0 1 0-5H9"/><path d="m11.5 16.5 2.5-2.5-2.5-2.5"/><path d="M17 10h2.5a2.5 2.5 0 0 1 0 5H15"/><path d="m12.5 7.5-2.5 2.5 2.5 2.5"/><path d="M15 14V5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2"/></svg>;

export const SpinnerIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
    <div className={`animate-spin rounded-full border-4 border-solid border-current border-r-transparent ${className}`} role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
    </div>
);

// Class Icons
export const HeartPulseIcon = ({className = "w-12 h-12"}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.7-1 2.1 4.4 2.1-4.4.7 1h6.22"/></svg>;
export const DumbbellIcon = ({className = "w-12 h-12"}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m6 2 4 4"/><path d="m3 10 4 4"/><path d="m14 21 4-4"/><path d="M10 3l-4 4"/><path d="M2 6l-1 1"/><path d="M22 18l-1 1"/></svg>;
export const FlameIcon = ({className = "w-12 h-12"}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
export const WindIcon = ({className = "w-12 h-12"}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 0-3.5-3.5"/><path d="M12 12H2"/><path d="M15.5 15.5a2.5 2.5 0 1 0-3.5-3.5"/><path d="M20 20H2"/><path d="M12 4.5V12"/></svg>;
export const MoonIcon = ({className = "w-12 h-12"}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>;
export const BabyIcon = ({className = "w-12 h-12"}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12.5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2.5c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v2.5z"/><path d="M12 18a2.5 2.5 0 0 0-2.5 2.5c0 1.38.94 2.5 2.5 2.5s2.5-1.12 2.5-2.5A2.5 2.5 0 0 0 12 18zM16 3.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .75.4 1.5.9 2.5L12 6l-1-1c.5-1 1-1.75 1-2.5 0-1.1-.9-2-2-2s-2 .9-2 2c-1.5 2.5-3 5.5-3 8.5 0 2.8 2.2 5 5 5h2c2.8 0 5-2.2 5-5 0-3-1.5-6-3-8.5z"/></svg>;
export const SmileIcon = ({className = "w-12 h-12"}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>;
export const ArmchairIcon = ({className = "w-12 h-12"}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"/><path d="M5 11v-2"/><path d="M19 11v-2"/><path d="M12 11v11"/></svg>;

// Decorative Accent Icons
export const GoldLineAccent = ({ className }: { className?: string }) => (
    <div className={`w-24 h-px bg-brand-gold ${className}`} />
);

export const ConcentricRings = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="100" cy="100" r="79" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="100" cy="100" r="59" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
);

export const CornerAccent = ({ className, position = 'top-left' }: { className?: string; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
    const transform = {
        'top-left': '',
        'top-right': 'scaleX(-1)',
        'bottom-left': 'scaleY(-1)',
        'bottom-right': 'scale(-1, -1)',
    }[position];

    return (
        <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform }}>
            <path d="M40 0H0V40" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M30 0H0V30" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
    );
};