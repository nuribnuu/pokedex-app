// src/features/detail/api/types.ts

export type Type = {
  type: {
    name: string;
  };
};

export type Stat = {
  base_stat: number;
  stat: {
    name: string;
    value:number;
  };
};

export type EvolutionChain = {
  species: { name: string };
  evolves_to: EvolutionChain[];
};
