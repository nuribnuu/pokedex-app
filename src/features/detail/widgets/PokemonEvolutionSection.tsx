// src/features/detail/widgets/PokemonEvolutionSection.tsx
import React from 'react';
import { Title } from '@/features/shared/ui/Title';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';


type PokemonEvolutionSectionProps = {
  pokemons: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
};

export const PokemonEvolutionSection: React.FC<
  PokemonEvolutionSectionProps
> = ({ pokemons }) => {
  return (
    <section className='flex flex-col gap-4 mt-6 w-full'>
      <Title variant='md'>Evolution Chain</Title>
      <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};
