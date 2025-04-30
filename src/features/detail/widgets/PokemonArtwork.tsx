// src/features/detail/widgets/PokemonArtwork.tsx
import { FC } from 'react';
import { Title } from '@/features/shared/ui/Title';
import Image from 'next/image';

type PokemonArtworkProps = {
  artwork: {
    imageUrl: string;
  };
};

export const PokemonArtwork: FC<PokemonArtworkProps> = ({
  artwork: { imageUrl },
}) => {
  return (
    <div className='flex flex-col md:gap-1.5'>
      <Title>Artwork</Title>
      <Image
        className='w-20 h-20 object-cover rounded-lg'
        src={imageUrl}
        width={80}
        height={80}
        alt='Pokemon Artwork'
      />
    </div>
  );
};
