// src/features/search/section/SearchResultsSection.tsx

'use client';

import { usePokemonStore } from '@/features/shared/store/pokemonStore';
import { Title } from '@/features/shared/ui/Title';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';
import Link from 'next/link';

type Pokemon = {
  id: string;
  name: string;
  imageUrl: string;
  abilities?: string[];
};

type SearchResultsSectionProps = {
  results: Pokemon[];
  query: string;
};

export const SearchResultsSection = ({
  results,
  query,
}: SearchResultsSectionProps) => {
  const setSelectedImageUrl = usePokemonStore(
    (state) => state.setSelectedImageUrl
  );

  return (
    <section className='flex flex-col gap-6'>
      <Title variant='md'>Results for &quot;{query}&quot;</Title>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        {results.map((pokemon) => (
          <Link
            href={`/detail/${pokemon.id}`}
            key={pokemon.id}
            onClick={() => setSelectedImageUrl(pokemon.imageUrl)}
          >
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
              abilities={pokemon.abilities}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
