// src/features/shared/store/pokemonStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PokemonStore {
  selectedImageUrl: string;
  setSelectedImageUrl: (url: string) => void;
}

export const usePokemonStore = create<PokemonStore>()(
  persist(
    (set) => ({
      selectedImageUrl: '',
      setSelectedImageUrl: (url) => set({ selectedImageUrl: url }),
    }),
    {
      name: 'selected-image-url',
    }
  )
);
