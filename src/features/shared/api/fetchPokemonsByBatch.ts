// src/features/shared/api/fetchPokemonByBatch.ts

import { PokemonSummary } from '@/features/shared/types';
import { fetchPokemonSummary } from './fetchPokemonSummary';

export const fetchPokemonByBatch = async (
  limit = 500,
  offset = 0
): Promise<PokemonSummary[]> => {
  const batchSize = 100;
  const allPokemons: PokemonSummary[] = [];

  for (let i = 0; i < limit; i += batchSize) {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${batchSize}&offset=${
          i + offset
        }`
      );
      const data = await res.json();

      const batchResults = await Promise.all(
        data.results.map((pokemon: { url: string }) =>
          fetchPokemonSummary(pokemon.url)
        )
      );

      allPokemons.push(...(batchResults.filter(Boolean) as PokemonSummary[]));
    } catch (error) {
      console.error(`Error fetching batch at offset ${i}:`, error);
    }
  }

  return allPokemons;
};
