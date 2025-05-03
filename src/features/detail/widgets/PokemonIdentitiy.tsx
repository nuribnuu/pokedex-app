// src/features/detail/widgets/PokemonIdentitiy.tsx

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

export const PokemonIdentitiy: React.FC<PokemonIdentitiyProps> = ({
  identity: { id, name, description },
}) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2 md:gap-4'>
        <Image
          src='/images/shared/pokeball.svg'
          width={40}
          height={40}
          alt='Pokeball'
          className='w-8 h-8 md:w-10 md:h-10'
        />
        <ID>{id}</ID>
      </div>
      <div className='space-y-2 md:space-y-4'>
        <Title variant='lg' as='h1'>
          {name}
        </Title>
        <Description>{description}</Description>
      </div>
    </div>
  );
};
