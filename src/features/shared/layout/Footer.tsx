// src/features/shared/layout/Footer.tsx

import React from 'react';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  MailIcon,
  GlobeIcon,
} from '../ui/Icons';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full border-t border-neutral-300 bg-white py-6 mt-10 md:mt-20'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-2'>
        <div className='flex gap-2 md:gap-4'>
          <Link
            href='https://nuribnuu.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-neutral-200 rounded-md hover:bg-neutral-300 transition'
          >
            <GlobeIcon className='size-5 text-neutral-700' />
          </Link>
          <Link
            href='https://github.com/nuribnuu'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-neutral-200 rounded-md hover:bg-neutral-300 transition'
          >
            <GitHubIcon className='size-5 text-neutral-700' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/nuribnuu/'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-neutral-200 rounded-md hover:bg-neutral-300 transition'
          >
            <LinkedInIcon className='size-5 text-neutral-700' />
          </Link>
          <Link
            href='https://instagram.com/nuribnuu'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-neutral-200 rounded-md hover:bg-neutral-300 transition'
          >
            <InstagramIcon className='size-5 text-neutral-700' />
          </Link>
          <Link
            href='https://wa.me/6285866473926'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-neutral-200 rounded-md hover:bg-neutral-300 transition'
          >
            <WhatsAppIcon className='size-5 text-neutral-700' />
          </Link>
          <Link
            href='mailto:nuribnuu@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-neutral-200 rounded-md hover:bg-neutral-300 transition'
          >
            <MailIcon className='size-5 text-neutral-700' />
          </Link>
        </div>

        <small className='font-normal text-sm md:text-base text-neutral-600 text-center'>
          © {new Date().getFullYear()} findpoke. All rights reserved.
        </small>
      </div>
    </footer>
  );
};
