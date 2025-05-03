// src/features/shared/api/fetchPokemonSummary.ts

import { Ability } from '@/features/shared/types';
import { capitalize } from '@/features/shared/utils/capitalize';

export const fetchPokemonSummary = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch Pokémon');

    const data = await response.json();

    return {
      id: data.id,
      name: capitalize(data.name),
      imageUrl: data.sprites.other['official-artwork'].front_default,
      abilities: data.abilities.map((a: Ability) => capitalize(a.ability.name)),
    };
  } catch (error) {
    console.error('Error in fetchPokemonDetails:', error);
    return null;
  }
};
