// src/app/page.tsx

import { HeroSection } from '@/features/home/section/HeroSection';
import { PokemonListSection } from '@/features/home/section/PokemonListSection';
import { fetchPokemonByBatch } from '@/features/shared/api/fetchPokemonsByBatch';

export default async function HomePage() {
  const pokemons = await fetchPokemonByBatch(50, 0);
  return (
    <main>
      <HeroSection />
      <PokemonListSection pokemons={pokemons} />
    </main>
  );
}
