import { ReactNode, ReactElement } from 'react';

export type ClassCategory = 'All' | 'Beginner' | 'Therapeutic' | 'Advanced' | 'Kids' | 'Seniors';

export interface ClassInfo {
  category: ClassCategory;
  title: string;
  description: string;
  // FIX: Changed icon type from ReactNode to ReactElement to be compatible with React.cloneElement.
  // FIX: Specify that the icon element can accept a className prop to resolve cloneElement type error.
  icon: ReactElement<{ className?: string }>;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface WhyJoinUsPoint {
    icon: ReactNode;
    text: string;
}

export interface NavLink {
    href: string;
    label: string;
}
