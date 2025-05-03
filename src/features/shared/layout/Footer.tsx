// src/features/shared/layout/Footer.tsx

import React from 'react';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className='w-full border-t border-neutral-300 bg-white py-6 mt-10 md:mt-20'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4'>
        <Logo />
        <small className='font-normal text-sm md:text-base text-neutral-600 text-center'>
          © 2025 findpoke. All rights reserved.
        </small>
      </div>
    </footer>
  );
};
