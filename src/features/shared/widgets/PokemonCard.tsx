// src/features/detail/widgets/PokemonCard.tsx

import React from 'react';
import Image from 'next/image';
import { ID } from '@/features/detail/ui/ID';
import { Title } from '../ui/Title';
import { BorderedLabel } from '../ui/BorderedLabel';

type PokemonCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  abilities?: string[];
};

export const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  imageUrl,
  abilities,
}) => {
  return (
    <div className='w-full md:max-w-sm rounded-3xl border border-neutral-300 p-4 md:p-6 bg-neutral-25 flex flex-col md:gap-6'>
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        className='w-40 h-40 md:w-50 md:h-50 mx-auto object-contain'
      />
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
