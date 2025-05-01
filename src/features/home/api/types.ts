// src/features/home/api/types.ts

export type Pokemon = {
  id: string;
  name: string;
  imageUrl: string;
  abilities: string[];
};

export type Ability = {
  ability: {
    name: string;
  };
};
