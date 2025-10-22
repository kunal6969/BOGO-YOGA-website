import React from 'react';
import { MandalaIcon } from './Icons';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-brand-beige flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-brand-gold">
        <MandalaIcon className="w-24 h-24 animate-spin [animation-duration:10s]" />
      </div>
      <p className="mt-6 text-brand-gold text-lg tracking-widest font-playfair animate-pulse">
        Cultivating Calm...
      </p>
    </div>
  );
};

export default Loader;