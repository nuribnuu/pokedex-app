// src/app/page.tsx

import { HeroSection } from '@/features/home/section/HeroSection';
import { getPokemons } from '@/features/home/api/getPokemons';
import { PokemonListSection } from '@/features/home/section/PokemonListSection';

export default async function HomePage() {
  const pokemons = await getPokemons();
  return (
    <main>
      <HeroSection />
      <PokemonListSection pokemons={pokemons} />
    </main>
  );
}
