// src/features/detail/widgets/PokemonDetailSection.tsx
import React from 'react';
import { PokemonIdentitiy } from '../widgets/PokemonIdentitiy';
import { PokemonType } from '../widgets/PokemonType';
import { PokemonAbilities } from '../widgets/PokemonAbilities';
import { PokemonSize } from '../widgets/PokemonSize';
import { PokemonArtwork } from '../widgets/PokemonArtwork';
import { PokemonStats } from '../widgets/PokemonStats';
import { Hr } from '../ui/Hr';
import { Button } from '@/features/shared/ui/Button';
import { ArrowLeftIcon } from '@/features/shared/ui/Icons';
import Image from 'next/image';
import Link from 'next/link';

type PokemonDetailSectionProps = {
  identity: {
    id: string;
    name: string;
    description: string;
  };
  attributes: {
    type: string[];
    abilities: string[];
  };
  size: {
    height: number;
    weight: number;
  };
  stats: {
    label: string;
    value: number;
  }[];
  artwork: {
    imageUrl: string;
  };
};

export const PokemonDetailSection: React.FC<PokemonDetailSectionProps> = ({
  identity,
  attributes: { type, abilities },
  size,
  artwork,
  stats,
}) => {
  return (
    <section className='flex flex-col gap-2 md:gap-5 w-full'>
      <div>
        <Link href='/'>
          <Button variant='secondary' className='flex items-center'>
            <ArrowLeftIcon />
            Back
          </Button>
        </Link>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-2/5 xl:w-1/2 flex items-center'>
          <Image
            className='object-cover mx-auto size-80 xl:size-100 2xl:size-120'
            src={'/images/detail/bulbasaur-lg.svg'}
            width={80}
            height={80}
            alt='Pokemon Artwork'
          />
        </div>
        <div className='flex flex-col gap-4 md:gap-6 lg:w-3/5 xl:w-1/2'>
          <PokemonIdentitiy identity={identity} />
          <Hr className='lg:hidden' />
          <div className='w-3/4 flex flex-col md:flex-row gap-4 md:gap-6'>
            <div className='md:w-1/2'>
              <PokemonType type={type} />
            </div>
            <div className='md:w-1/2'>
              <PokemonAbilities abilities={abilities} />
            </div>
          </div>
          <div className='w-3/4 flex flex-col md:flex-row gap-4 md:gap-6'>
            <div className='md:w-1/2'>
              <PokemonSize size={size} />
            </div>
            <div className='md:w-1/2'>
              <PokemonArtwork artwork={artwork} />
            </div>
          </div>

          <PokemonStats stats={stats} />
          <Hr className='lg:hidden' />
        </div>
      </div>
    </section>
  );
};
