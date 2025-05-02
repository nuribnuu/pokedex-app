// src/features/detail/section/PokemonDetailSection.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { PokemonIdentitiy } from '../widgets/PokemonIdentitiy';
import { PokemonType } from '../widgets/PokemonType';
import { PokemonAbilities } from '../widgets/PokemonAbilities';
import { PokemonSize } from '../widgets/PokemonSize';
import { PokemonArtwork } from '../widgets/PokemonArtwork';
import { PokemonStats } from '../widgets/PokemonStats';
import { Hr } from '../ui/Hr';
import { usePokemonStore } from '@/features/shared/store/pokemonStore';
import { Title } from '@/features/shared/ui/Title';
import { BackButton } from '@/features/shared/widgets/BackButton';

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
  const selectedImageUrl = usePokemonStore((state) => state.selectedImageUrl);
  const searchParams = useSearchParams();
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const queryImageUrl = searchParams.get('imageUrl');

    if (queryImageUrl) {
      setImageUrl(queryImageUrl);
      sessionStorage.setItem('imageUrl', queryImageUrl);
    } else if (selectedImageUrl) {
      setImageUrl(selectedImageUrl);
      sessionStorage.setItem('imageUrl', selectedImageUrl);
    } else {
      const stored = sessionStorage.getItem('imageUrl');
      if (stored) setImageUrl(stored);
    }
  }, [searchParams, selectedImageUrl]);

  return (
    <section className='flex flex-col gap-2 md:gap-5 w-full'>
      <div>
        <BackButton />
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-2/5 xl:w-1/2 flex items-center justify-center'>
          {imageUrl ? (
            <Image
              className='object-cover mx-auto size-80 xl:size-100 2xl:size-120'
              src={imageUrl}
              width={80}
              height={80}
              alt='Pokemon Image'
            />
          ) : (
            <Title>Loading image...</Title>
          )}
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
