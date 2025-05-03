// src/features/detail/widgets/PokemonSizeItem.tsx

import { ReactNode } from 'react';
import { SizeLabel } from '../ui/SizeLabel';
import { SizeValue } from '../ui/SizeValue';

type PokemonSizeItemProps = {
  icon: ReactNode;
  label: string;
  value: number;
  unit: string;
};

export const PokemonSizeItem: React.FC<PokemonSizeItemProps> = ({
  icon,
  label,
  value,
  unit,
}) => {
  return (
    <div className='flex flex-col'>
      <SizeLabel icon={icon} label={label} />
      <SizeValue value={value} unit={unit} />
    </div>
  );
};
