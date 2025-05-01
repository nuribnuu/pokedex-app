// src/features/home/section/HeroSection.tsx

import React from 'react';
import Image from 'next/image';
import { Description } from '../../shared/ui/Description';
import { SearchInput } from '../../shared/widgets/SearchInput';
import { Title } from '../../shared/ui/Title';

export const HeroSection: React.FC = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-primary-300 relative px-20 md:px-0'>
      <div className='flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6 text-center md:-mt-30'>
        <Image
          src='/images/home/pokemon-text.svg'
          alt='pokemon text'
          width={175}
          height={64}
          className='w-[103px] h-[38px] md:w-[175px] md:h-[64px]'
        />
        <Title
          variant='lg'
          as='h1'
          className='max-w-sm md:max-w-2xl lg:max-w-4xl !text-[4.5vh] md:!text-[6vh]'
        >
          Discover the Most Powerful Pokémon in the Wild!
        </Title>
        <Description variant='bold' className='!text-[2vh] md:!text-[3vh]'>
          Train, Battle, and Collect Your Favorites!
        </Description>
        <SearchInput className='!text-[2vh] md:!text-[2.5vh] placeholder:!text-[2vh] md:placeholder:!text-[3vh]' />
      </div>

      <Image
        src='/images/home/cloud.svg'
        alt='cloud'
        width={1440}
        height={120}
        className='w-full absolute bottom-0 z-50'
      />

      <div className='absolute bottom-0 left-1/5 transform -translate-x-1/2'>
        <Image
          src='/images/home/charizard.svg'
          alt='charizard'
          width={160}
          height={160}
          className='size-[18vh] sm:size-[20vh] md:size-[24vh] lg:size-[30vh] xl:size-[36vh] 2xl:size-[40vh]'
        />
      </div>
      <div className='absolute bottom-0 right-1/5 transform translate-x-1/2'>
        <Image
          src='/images/home/pikachu.svg'
          alt='pikachu'
          width={160}
          height={160}
          className='size-[18vh] sm:size-[20vh] md:size-[24vh] lg:size-[30vh] xl:size-[36vh] 2xl:size-[40vh]'
        />
      </div>
    </section>
  );
};
