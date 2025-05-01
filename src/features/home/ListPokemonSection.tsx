// src/features/home/ListPokemonSection.tsx
import React from 'react';
import { Title } from '@/features/shared/ui/Title';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';
import { Button } from '../shared/ui/Button';


type ListPokemonSectionProps = {
  pokemons: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
};

export const ListPokemonSection: React.FC<
  ListPokemonSectionProps
> = ({ pokemons }) => {
  return (
    <section className='flex flex-col gap-6 md:gap-8 mt-6 w-full mx-auto px-6 container'>
      <Title variant='md' className='text-center !text-[3vh]'>List Pokemon</Title>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-6'>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.imageUrl}
          />
        ))}
      </div>
      <Button className='mx-auto'>Load More</Button>
    </section>
  );
};
