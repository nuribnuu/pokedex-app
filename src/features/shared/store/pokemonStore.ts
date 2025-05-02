// src/features/shared/store/pokemonStore.ts

import { create } from 'zustand';

interface PokemonStore {
  selectedImageUrl: string;
  setSelectedImageUrl: (url: string) => void;
}

export const usePokemonStore = create<PokemonStore>((set) => ({
  selectedImageUrl: '',
  setSelectedImageUrl: (url) => set({ selectedImageUrl: url }),
}));
