// src/features/home/api/getPokemons.tsx

import { Pokemon, Ability } from './types';

// Fungsi untuk mengubah ID menjadi format 3 digit
const formatId = (id: number): string => {
  return id.toString().padStart(3, '0');
};

// Fungsi untuk mengubah huruf pertama menjadi kapital dan sisanya kecil
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Fungsi untuk format abilities menjadi title case
const formatAbilities = (abilities: string[]): string[] => {
  return abilities.map((ability) => capitalize(ability));
};

export async function getPokemons(limit = 100, offset = 0): Promise<Pokemon[]> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await res.json();

  const results = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const detailRes = await fetch(pokemon.url);
      const detail = await detailRes.json();

      return {
        id: formatId(detail.id),
        name: capitalize(detail.name),
        imageUrl: detail.sprites.other['official-artwork'].front_default,
        abilities: formatAbilities(
          detail.abilities.map((a: Ability) => a.ability.name)
        ),
      };
    })
  );

  return results;
}
