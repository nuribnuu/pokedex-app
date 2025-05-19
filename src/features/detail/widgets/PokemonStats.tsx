// src/features/detail/widgets/PokemonStats.tsx

import { Title } from '@/features/shared/ui/Title';
import { Stat } from '../ui/Stat';

type PokemonStatsProps = {
  stats: {
    label: string;
    value: number;
  }[];
};

export const PokemonStats: React.FC<PokemonStatsProps> = ({
  stats,
}) => {
  return (
    <div className='flex flex-col gap-2 md:gap-3'>
      <Title>Stats</Title>

      <div className='flex flex-col gap-2 w-full'>
        {stats.map((stat) => (
          <Stat key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>
  );
};
