// src/features/detail/widgets/PokemonAbilities.tsx
import { FC } from 'react';
import { PokemonAttributes } from './PokemonAttributes';

type PokemonAbilitiesProps = {
  abilities: string[];
};

export const PokemonAbilities: FC<PokemonAbilitiesProps> = ({ abilities }) => (
  <PokemonAttributes title='Abilities' attributes={abilities} />
);
