import React from 'react';
import { ClassInfo, Testimonial, WhyJoinUsPoint, NavLink } from './types';
import {
    WindIcon, HeartPulseIcon, DumbbellIcon, FlameIcon, MoonIcon, BabyIcon, SmileIcon, ArmchairIcon,
    InstagramIcon, FacebookIcon, TikTokIcon, LinkedInIcon,
    AwardIcon, FeatherIcon, CalendarDaysIcon, SparklesIcon, GemIcon, RecycleIcon
} from './components/Icons';

// Import gallery images
import gal1Img from './components/src/images/gallery/gal1.png';
import gal2Img from './components/src/images/gallery/gal2.png';
import gal3Img from './components/src/images/gallery/gal3.png';
import gal4Img from './components/src/images/gallery/gal4.png';
import gal5Img from './components/src/images/gallery/gal5.png';
import gal6Img from './components/src/images/gallery/gal6.png';

// Import yoga class images
import hathaYogaImg from './components/src/images/yoga/hatha-yoga.png';
import therapeuticYogaImg from './components/src/images/yoga/therapeutic-yoga.png';
import pilatesImg from './components/src/images/yoga/pilates.png';
import powerYogaImg from './components/src/images/yoga/power-yoga.png';
import ashtangaVinyasaImg from './components/src/images/yoga/ashtanga-vinyasa-yoga.png';
import chairYogaImg from './components/src/images/yoga/chair-yoga.png';
import prenatalPostnatalImg from './components/src/images/yoga/prenatal-postnatal-yoga.png';
import kidsYogaImg from './components/src/images/yoga/kids-yoga.png';
import bogoStudioImg from './components/src/images/yoga/BOGO-STUDIO.png';
import therapeuticPilatesImg from './components/src/images/yoga/therapeutic-pilates.jpeg';

export const NAV_LINKS: NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Classes' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
];

export const CLASSES_DATA: ClassInfo[] = [
    // { category: 'Beginner', title: 'Hatha Yoga', description: 'Find your foundation. A gentle practice focusing on posture, breath, and inner stillness.', icon: <WindIcon />, image: hathaYogaImg },
    { category: 'Beginner', title: '', description: 'Find your foundation. A gentle practice focusing on posture, breath, and inner stillness.', icon: <WindIcon />, image: hathaYogaImg },
    // { category: 'Therapeutic', title: 'Therapeutic Yoga', description: 'A personalized path to healing, designed to restore balance and relieve chronic stress.', icon: <HeartPulseIcon />, image: therapeuticYogaImg },
    { category: 'Therapeutic', title: 'Therapeutic Pilates', description: 'A personalized path to healing, designed to restore balance and relieve chronic stress.', icon: <HeartPulseIcon />, image: therapeuticPilatesImg },
    // { category: 'Advanced', title: 'Exclusive Pilates', description: 'Sculpt and strengthen. Our refined Pilates sessions build a powerful core and elegant posture.', icon: <DumbbellIcon />, image: pilatesImg },
    { category: 'Advanced', title: '', description: 'Sculpt and strengthen. Our refined Pilates sessions build a powerful core and elegant posture.', icon: <DumbbellIcon />, image: pilatesImg },
    // { category: 'Advanced', title: 'Power Yoga', description: 'Ignite your inner fire with a dynamic, high-intensity flow for stamina and detoxification.', icon: <FlameIcon />, image: powerYogaImg },
    { category: 'Advanced', title: 'Power Pilates', description: 'Ignite your inner fire with a dynamic, high-intensity flow for stamina and detoxification.', icon: <FlameIcon />, image: powerYogaImg },
    { category: 'Advanced', title: 'Ashtanga Vinyasa', description: 'A moving meditation. Synchronize breath with vigorous movement for a transformative experience.', icon: <WindIcon />, image: ashtangaVinyasaImg },
    { category: 'Beginner', title: 'Restorative Pilates', description: 'Deeply relaxing, gentle pilates for mental clarity and profound rejuvenation.', icon: <MoonIcon />, image: chairYogaImg },
    { category: 'Therapeutic', title: 'Prenatal & Postnatal', description: 'Nurturing support for mothers. Strengthen your body and bond with your baby in a serene space.', icon: <BabyIcon />, image: prenatalPostnatalImg },
    // { category: 'Kids', title: 'Little Sprouts Yoga', description: 'Playful practice for children, cultivating balance, focus, and joyful movement.', icon: <SmileIcon />, image: kidsYogaImg },
    { category: 'Kids', title: 'Little Sprouts', description: 'Playful practice for children, cultivating balance, focus, and joyful movement.', icon: <SmileIcon />, image: kidsYogaImg },
    // { category: 'Seniors', title: 'Golden Years Yoga', description: 'Accessible, gentle yoga to enhance mobility, balance, and vitality for seniors.', icon: <ArmchairIcon />, image: bogoStudioImg },
    { category: 'Seniors', title: 'Golden Years', description: 'Accessible, gentle pilates to enhance mobility, balance, and vitality for seniors.', icon: <ArmchairIcon />, image: bogoStudioImg },
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
    { quote: "Bogo Fitness is an oasis of calm. The grounding energy of the forest green studio and the golden accents make every session feel like a luxury retreat. It's my sanctuary.", name: "Aisha Al-Thani", role: "Art Curator", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1599&auto=format&fit=crop" },
    { quote: "The instructors here are masters of their craft. They guide you with a perfect balance of strength and serenity. The black-themed power room is incredibly motivating.", name: "Hassan Al-Jaber", role: "Architect", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop" },
    { quote: "I've never felt more balanced. The harmony of the natural decor and the sophisticated ambiance is something truly special. It's a testament to refined wellness.", name: "Fatima Al-Kuwari", role: "Entrepreneur", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop" },
    { quote: "The desert gold accents and the warm beige tones of the studio create an incredibly uplifting atmosphere. It feels both earthy and elegant, a rare combination.", name: "David Chen", role: "Diplomat", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop" },
    { quote: "From the moment you walk in, you're enveloped in tranquility. The minimalist design with rich, natural colors allows the mind to truly settle. It's an escape.", name: "Noor Al-Meer", role: "Jewelry Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1587&auto=format&fit=crop" },
    { quote: "The blend of modern luxury and natural elements is impeccable. Practicing pilates in such a beautifully considered space enhances the entire experience tenfold.", name: "Yousef Al-Malki", role: "Fintech CEO", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop" },
    { quote: "A truly serene and exclusive environment. The attention to detail is remarkable, creating a space where one can completely disconnect and focus on wellness.", name: "Elena Ivanova", role: "Management Consultant", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop" },
    { quote: "The prenatal classes were a blessing. The calm, supportive, and elegant atmosphere made my journey to motherhood feel so special and empowered.", name: "Sofia Bianchi", role: "New Mother", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1587&auto=format&fit=crop" },
];


export const GALLERY_IMAGES = [
    gal1Img,
    gal2Img,
    gal3Img,
    gal4Img,
    gal5Img,
    gal6Img,
];

export const SOCIAL_LINKS = [
    { href: "https://www.instagram.com/bogoyogaqa/", icon: <InstagramIcon />, name: "Instagram" },
    { href: "https://www.facebook.com/profile.php?id=61583330872932", icon: <FacebookIcon />, name: "Facebook" },
    { href: "https://www.tiktok.com/@bogoyogaqa", icon: <TikTokIcon />, name: "TikTok" },
    { href: "https://www.linkedin.com/company/bogo-yoga/?viewAsMember=true", icon: <LinkedInIcon />, name: "LinkedIn" },
];