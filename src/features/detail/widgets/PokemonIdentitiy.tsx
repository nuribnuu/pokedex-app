// src/features/detail/widgets/PokemonIdentitiy.tsx
import { FC } from 'react';
import Image from 'next/image';
import { ID } from '../ui/ID';
import { Title } from '@/features/shared/ui/Title';
import { Description } from '@/features/shared/ui/Description';

type PokemonIdentitiyProps = {
  identity: {
    id: string;
    name: string;
    description: string;
  };
};

export const PokemonIdentitiy: FC<PokemonIdentitiyProps> = ({
  identity: { id, name, description },
}) => {
  return (
    <div className='flex flex-col gap-2.5 md:gap-4'>
      <Image
        src='/images/shared/pokeball.svg'
        width={40}
        height={40}
        alt='Pokeball'
        className='w-8 h-8 md:w-10 md:h-10'
      />
      <div>
        <ID>{id}</ID>
        <Title variant='lg' as='h1'>
          {name}
        </Title>
        <Description>{description}</Description>
      </div>
    </div>
  );
};
