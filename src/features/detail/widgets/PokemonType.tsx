// src/features/detail/widgets/PokemonType.tsx

import { PokemonAttributes } from './PokemonAttributes';

type PokemonTypeProps = {
  type: string[];
};

export const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => (
  <PokemonAttributes title='Type' attributes={type} />
);
