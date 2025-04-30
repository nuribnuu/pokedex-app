// src/features/detail/widgets/PokemonSize.tsx
import { FC } from 'react';
import { Title } from '@/features/shared/ui/Title';
import { PokemonSizeItem } from './PokemonSizeItem';
import { RulerIcon, WeightIcon } from '@/features/shared/ui/Icons';

type PokemonSizeProps = {
  size: {
    height: number;
    weight: number;
  };
};

export const PokemonSize: FC<PokemonSizeProps> = ({
  size: { height, weight },
}) => {
  return (
    <div className='flex flex-col md:gap-2'>
      <Title variant='sm'>Size</Title>
      <div className='flex gap-2 md:gap-4'>
        <PokemonSizeItem
          icon={<WeightIcon />}
          label='Weight'
          value={weight}
          unit='kg'
        />
        <div className='border-l border-neutral-300' />
        <PokemonSizeItem icon={<RulerIcon />} label='Height' value={height} unit='m' />
      </div>
    </div>
  );
};
