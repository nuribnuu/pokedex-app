// src/features/detail/widgets/PokemonCard.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ID } from '@/features/detail/ui/ID';
import { Title } from '../ui/Title';
import { BorderedLabel } from '../ui/BorderedLabel';
import { PokemonSummary } from '../types';

type PokemonCardProps = PokemonSummary;

export const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  imageUrl,
  abilities,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className='w-full md:max-w-sm rounded-3xl border border-neutral-300 p-4 md:p-6 bg-neutral-25 flex flex-col md:gap-6 
        transition ease-in-out hover:shadow-lg hover:scale-95 duration-200'
    >
      <div className='relative w-40 h-40 md:w-50 md:h-50 mx-auto'>
        {isLoading && (
          <div className='absolute inset-0 bg-neutral-200 animate-pulse rounded-xl' />
        )}
        <Image
          src={imageUrl}
          alt={name}
          fill
          className={`object-contain transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <div>
          <ID>{id}</ID>
          <Title variant='sm'>{name}</Title>
        </div>

        {abilities && abilities.length > 0 && (
          <div className='flex center gap-2 flex-wrap'>
            {abilities.slice(0, 3).map((ability, index) => (
              <BorderedLabel key={`${ability}-${index}`} label={ability} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
