// src/features/home/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Description } from '../shared/ui/Description';
import { SearchInput } from '../shared/widgets/SearchInput';
import { Title } from '../shared/ui/Title';

export const HeroSection: React.FC = () => {
  return (
    <section className='min-h-screen flex items-center justify-center relative bg-primary-300 '>
      <div className='flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6 text-center'>
        <Image
          src='/images/home/pokemon-text.svg'
          alt='pokemon text'
          width={175}
          height={64}
          className='w-[103px] h-[38px] md:w-[175px] md:h-[64px]'
        />
        <Description variant='bold' className='!text-lg md:!text-xl'>
          Train, Battle, and Collect Your Favorites!
        </Description>
        <SearchInput />
        <Title
          variant='lg'
          as='h1'
          className='max-w-sm md:max-w-2xl lg:max-w-4xl'
        >
          Discover the Most Powerful Pokémon in the Wild!
        </Title>
      </div>

      <Image
        src='/images/home/cloud.svg'
        alt='cloud'
        width={1440}
        height={120}
        className='w-full absolute bottom-0 z-50'
      />

      <div className='absolute bottom-0 left-1/4 transform -translate-x-1/2'>
        <Image
          src='/images/home/charizard.svg'
          alt='charizard'
          width={160}
          height={160}
          className='size-[18vh] sm:size-[20vh] md:size-[24vh] lg:size-[30vh] xl:size-[36vh] 2xl:size-[40vh]'
        />
      </div>
      <div className='absolute bottom-0 right-1/4 transform translate-x-1/2'>
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
