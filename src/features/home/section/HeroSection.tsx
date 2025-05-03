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
        >
          <Image
            src='/images/home/pokemon-text.svg'
            alt='pokemon text'
            width={175}
            height={64}
            className='w-[103px] h-[38px] md:w-[175px] md:h-[64px]'
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
            className='max-w-sm md:max-w-2xl lg:max-w-4xl !text-[4.5vh] md:!text-[6vh]'
          >
            Discover the Most Powerful Pokémon in the Wild!
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SearchInput
            className='!text-[2vh] md:!text-[2.5vh] placeholder:!text-[2vh] md:placeholder:!text-[3vh]'
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
          className='w-full'
        />
      </motion.div>

      <motion.div
        className='absolute bottom-0 left-1/5 transform -translate-x-1/2'
        initial={{ y: 100, opacity: 0, rotate: -10 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Image
          src='/images/home/charizard.svg'
          alt='charizard'
          width={160}
          height={160}
          className='size-[18vh] sm:size-[20vh] md:size-[24vh] lg:size-[30vh] xl:size-[36vh] 2xl:size-[40vh]'
        />
      </motion.div>

      <motion.div
        className='absolute bottom-0 right-1/5 transform translate-x-1/2'
        initial={{ y: 100, opacity: 0, rotate: 10 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Image
          src='/images/home/pikachu.svg'
          alt='pikachu'
          width={160}
          height={160}
          className='size-[18vh] sm:size-[20vh] md:size-[24vh] lg:size-[30vh] xl:size-[36vh] 2xl:size-[40vh]'
        />
      </motion.div>
    </section>
  );
};
