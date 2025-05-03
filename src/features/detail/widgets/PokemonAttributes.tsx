// src/features/detail/widgets/PokemonAttributes.tsx

import { Title } from '@/features/shared/ui/Title';
import { BorderedLabel } from '@/features/shared/ui/BorderedLabel';

type PokemonAttributesProps = {
  title: string;
  attributes: string[];
};

export const PokemonAttributes: React.FC<PokemonAttributesProps> = ({
  title,
  attributes,
}) => {
  return (
    <div className='flex flex-col gap-0.5 md:gap-2'>
      <Title>{title}</Title>
      <div className='flex gap-1.5 md:gap-2.5 flex-wrap'>
        {attributes.map((attribute) => (
          <BorderedLabel key={attribute} label={attribute} />
        ))}
      </div>
    </div>
  );
};
