import React from 'react';
import { ClassInfo, Testimonial, WhyJoinUsPoint, NavLink } from './types';
import {
    WindIcon, HeartPulseIcon, DumbbellIcon, FlameIcon, MoonIcon, BabyIcon, SmileIcon, ArmchairIcon,
    InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon,
    AwardIcon, FeatherIcon, CalendarDaysIcon, SparklesIcon, GemIcon, RecycleIcon
} from './components/Icons';

export const NAV_LINKS: NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Classes' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
];

export const CLASSES_DATA: ClassInfo[] = [
    { category: 'Beginner', title: 'Hatha Yoga', description: 'Find your foundation. A gentle practice focusing on posture, breath, and inner stillness.', icon: <WindIcon />, image: "https://images.unsplash.com/photo-1593164842244-eff5570fbdb0?q=80&w=1887&auto=format&fit=crop" },
    { category: 'Therapeutic', title: 'Therapeutic Yoga', description: 'A personalized path to healing, designed to restore balance and relieve chronic stress.', icon: <HeartPulseIcon />, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1820&auto=format&fit=crop" },
    { category: 'Advanced', title: 'Exclusive Pilates', description: 'Sculpt and strengthen. Our refined Pilates sessions build a powerful core and elegant posture.', icon: <DumbbellIcon />, image: "https://images.unsplash.com/photo-1599446432858-545a13347a6b?q=80&w=1887&auto=format&fit=crop" },
    { category: 'Advanced', title: 'Power Yoga', description: 'Ignite your inner fire with a dynamic, high-intensity flow for stamina and detoxification.', icon: <FlameIcon />, image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1887&auto=format&fit=crop" },
    { category: 'Advanced', title: 'Ashtanga Vinyasa', description: 'A moving meditation. Synchronize breath with vigorous movement for a transformative experience.', icon: <WindIcon />, image: "https://images.unsplash.com/photo-1622353399452-c277c4140043?q=80&w=1887&auto=format&fit=crop" },
    { category: 'Beginner', title: 'Restorative Yoga', description: 'Deeply relaxing, gentle yoga for mental clarity and profound rejuvenation.', icon: <MoonIcon />, image: "https://images.unsplash.com/photo-1562048200-342c337b5269?q=80&w=1887&auto=format&fit=crop" },
    { category: 'Therapeutic', title: 'Prenatal & Postnatal', description: 'Nurturing support for mothers. Strengthen your body and bond with your baby in a serene space.', icon: <BabyIcon />, image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=1887&auto=format&fit=crop" },
    { category: 'Kids', title: 'Little Sprouts Yoga', description: 'Playful practice for children, cultivating balance, focus, and joyful movement.', icon: <SmileIcon />, image: "https://images.unsplash.com/photo-1518997542232-34860b298e6c?q=80&w=1887&auto=format&fit=crop" },
    { category: 'Seniors', title: 'Golden Years Yoga', description: 'Accessible, gentle yoga to enhance mobility, balance, and vitality for seniors.', icon: <ArmchairIcon />, image: "https://images.unsplash.com/photo-1603572473204-ff2983d3170d?q=80&w=1887&auto=format&fit=crop" },
];

export const WHY_JOIN_US_POINTS: WhyJoinUsPoint[] = [
    { icon: <AwardIcon />, text: 'Expert Instructors' },
    { icon: <FeatherIcon />, text: 'Serene Atmosphere' },
    { icon: <CalendarDaysIcon />, text: 'Flexible Schedule' },
    { icon: <SparklesIcon />, text: 'Bespoke Sessions' },
    { icon: <GemIcon />, text: 'Exclusive Classes' },
    { icon: <RecycleIcon />, text: 'Holistic Approach' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    { quote: "BOGO YOGA is an oasis of calm. The grounding energy of the forest green studio and the golden accents make every session feel like a luxury retreat. It's my sanctuary.", name: "Aisha Al-Thani", role: "Art Curator", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1599&auto=format&fit=crop" },
    { quote: "The instructors here are masters of their craft. They guide you with a perfect balance of strength and serenity. The black-themed power yoga room is incredibly motivating.", name: "Hassan Al-Jaber", role: "Architect", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop" },
    { quote: "I've never felt more balanced. The harmony of the natural decor and the sophisticated ambiance is something truly special. It's a testament to refined wellness.", name: "Fatima Al-Kuwari", role: "Entrepreneur", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop" },
    { quote: "The desert gold accents and the warm beige tones of the studio create an incredibly uplifting atmosphere. It feels both earthy and elegant, a rare combination.", name: "David Chen", role: "Diplomat", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop" },
    { quote: "From the moment you walk in, you're enveloped in tranquility. The minimalist design with rich, natural colors allows the mind to truly settle. It's an escape.", name: "Noor Al-Meer", role: "Jewelry Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1587&auto=format&fit=crop" },
    { quote: "The blend of modern luxury and natural elements is impeccable. Practicing yoga in such a beautifully considered space enhances the entire experience tenfold.", name: "Yousef Al-Malki", role: "Fintech CEO", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop" },
    { quote: "A truly serene and exclusive environment. The attention to detail is remarkable, creating a space where one can completely disconnect and focus on wellness.", name: "Elena Ivanova", role: "Management Consultant", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop" },
    { quote: "The prenatal classes were a blessing. The calm, supportive, and elegant atmosphere made my journey to motherhood feel so special and empowered.", name: "Sofia Bianchi", role: "New Mother", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1587&auto=format&fit=crop" },
];


export const GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1626&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591291621227-972740b7b093?q=80&w=1770&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1681&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603988363602-91d1a13498c2?q=80&w=1770&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510894222348-43c3e1b9ed42?q=80&w=1770&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1699&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1770&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542496667-4d6b7942622e?q=80&w=1770&auto=format&fit=crop",
];

export const SOCIAL_LINKS = [
    { href: "#", icon: <InstagramIcon />, name: "Instagram" },
    { href: "#", icon: <FacebookIcon />, name: "Facebook" },
    { href: "#", icon: <TwitterIcon />, name: "Twitter" },
    { href: "#", icon: <YoutubeIcon />, name: "YouTube" },
];