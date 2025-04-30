// src/features/detail/widgets/PokemonType.tsx
import { FC } from 'react';
import { PokemonAttributes } from './PokemonAttributes';

type PokemonTypeProps = {
  type: string[];
};

export const PokemonType: FC<PokemonTypeProps> = ({ type }) => (
  <PokemonAttributes title='Type' attributes={type} />
);
