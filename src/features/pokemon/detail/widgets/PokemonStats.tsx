// src/features/pokemon/detail/widgets/PokemonStats.tsx

import { FC } from 'react';
import { Title } from '@/features/shared/ui/Title';
import { Stat } from '../ui/Stat';

type PokemonStatsProps = {
  stats: {
    label: string;
    value: number;
  }[];
};

export const PokemonStats: FC<PokemonStatsProps> = ({
  stats,
}) => {
  return (
    <div className='flex flex-col md:gap-2.5'>
      <Title>Stats</Title>

      <div className='flex flex-col md:gap-1'>
        {stats.map((stat) => (
          <Stat key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>
  );
};
