// src/features/shared/widgets/PokemonSizeItem.tsx

import { FC, ReactNode } from 'react';
import { SizeLabel } from '../ui/SizeLabel';
import { SizeValue } from '../ui/SizeValue';

type PokemonSizeItemProps = {
  icon: ReactNode;
  label: string;
  value: number;
  unit: string;
};

export const PokemonSizeItem: FC<PokemonSizeItemProps> = ({ icon, label, value, unit }) => {
  return (
    <div className='flex flex-col'>
      <SizeLabel icon={icon} label={label} />
      <SizeValue value={value} unit={unit} />
    </div>
  );
};
