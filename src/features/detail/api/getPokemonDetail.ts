// src/features/detail/api/getPokemonDetail.ts

import { Ability } from '@/features/home/api/types';
import { Type, Stat, EvolutionChain } from './types';

const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getPokemonDetail = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) throw new Error('Failed to fetch Pokémon details');
  const data = await response.json();

  const speciesResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  if (!speciesResponse.ok)
    throw new Error('Failed to fetch Pokémon species data');
  const speciesData = await speciesResponse.json();

  const englishEntry = speciesData.flavor_text_entries.find(
    (entry: { flavor_text: string; language: { name: string } }) =>
      entry.language.name === 'en'
  );
  const description = englishEntry
    ? englishEntry.flavor_text.replace(/\f|\n|\r/g, ' ')
    : 'No description available.';

  const evolutionUrl = speciesData.evolution_chain.url;
  const evolutionResponse = await fetch(evolutionUrl);
  if (!evolutionResponse.ok) throw new Error('Failed to fetch evolution chain');
  const evolutionData = await evolutionResponse.json();

  const extractEvolutions = (chain: EvolutionChain): string[] => {
    const names: string[] = [];
    let current: EvolutionChain | undefined = chain;

    while (current) {
      names.push(current.species.name);
      current = current.evolves_to[0];
    }

    return names;
  };

  const evolutionNames = extractEvolutions(evolutionData.chain);

  const evolutions = await Promise.all(
    evolutionNames.map(async (name) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const evoData = await res.json();
      return {
        id: evoData.id,
        name: capitalize(evoData.name),
        imageUrl: evoData.sprites.front_default,
      };
    })
  );

  return {
    id: id,
    name: capitalize(data.name),
    imageUrl: data.sprites.front_default,
    abilities: data.abilities.map((ability: Ability) =>
      capitalize(ability.ability.name)
    ),
    types: data.types.map((t: Type) => capitalize(t.type.name)),
    height: data.height / 10,
    weight: data.weight / 10,
    stats: data.stats.map((s: Stat) => ({
      name: capitalize(s.stat.name),
      value: s.base_stat,
    })),
    description,
    evolutions,
  };
};
