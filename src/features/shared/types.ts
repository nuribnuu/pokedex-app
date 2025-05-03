// src/features/shared/api/types.ts

export type PokemonSummary = {
  id: string;
  name: string;
  imageUrl: string;
  abilities?: string[];
};

export type Ability = {
  ability: {
    name: string;
  };
};

export type Type = {
  type: {
    name: string;
  };
};

export type Stat = {
  base_stat: number;
  stat: {
    name: string;
    value: number;
  };
};

export type EvolutionChain = {
  species: { name: string };
  evolves_to: EvolutionChain[];
};
