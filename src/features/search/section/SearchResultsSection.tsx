// src/features/search/section/SearchResultsSection.tsx

import { Title } from '@/features/shared/ui/Title';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';

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
  return (
    <section className='flex flex-col gap-6'>
      <Title variant='md'>Results for &quot;{query}&quot;</Title>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        {results.map((pokemon) => (
          <PokemonCard
            key={pokemon.id + pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.imageUrl}
            abilities={pokemon.abilities}
          />
        ))}
      </div>
    </section>
  );
};
