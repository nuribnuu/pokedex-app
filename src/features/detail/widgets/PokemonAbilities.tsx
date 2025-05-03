// src/features/detail/widgets/PokemonAbilities.tsx

import { PokemonAttributes } from './PokemonAttributes';

type PokemonAbilitiesProps = {
  abilities: string[];
};

export const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({
  abilities,
}) => <PokemonAttributes title='Abilities' attributes={abilities} />;
