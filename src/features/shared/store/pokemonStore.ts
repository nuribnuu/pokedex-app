// src/features/shared/store/pokemonStore.ts

import { create } from 'zustand';
import { PokemonSummary } from '../types';

type PokemonStore = {
  pokemonList: PokemonSummary[];
  offset: number;
  setPokemonList: (pokemonList: PokemonSummary[]) => void;
  setOffset: (offset: number) => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemonList: [],
  offset: 0,
  setPokemonList: (pokemonList) => set({ pokemonList }),
  setOffset: (offset) => set({ offset }),
}));
