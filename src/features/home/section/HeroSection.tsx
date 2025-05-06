// src/features/home/section/HeroSection.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Title } from '@/features/shared/ui/Title';
import { SearchInput } from '@/features/shared/widgets/SearchInput';

export const HeroSection: React.FC = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-primary-300 relative px-20 md:px-0 overflow-hidden'>
      <motion.div
        className='flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6 text-center md:-mt-30'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72'
        >
          <Image
            src='/images/home/pokemon-text.svg'
            alt='pokemon text'
            width={175}
            height={64}
            layout='responsive'
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Title
            variant='lg'
            as='h1'
            className='max-w-[300px] md:max-w-2xl lg:max-w-5xl font-bold text-2xl md:text-2xl lg:text-4xl'
          >
            Find Pokémon Details
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SearchInput
            className='text-sm md:text-base placeholder:text-sm md:placeholder:text-base'
            isHeroSection={true}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className='absolute bottom-0 w-full z-50'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Image
          src='/images/home/cloud.svg'
          alt='cloud'
          width={1440}
          height={120}
          className='w-full wave-motion'
        />
      </motion.div>
    </section>
  );
};
