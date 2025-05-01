// src/features/home/section/ListPokemonSection.tsx

import React from 'react';
import { Title } from '@/features/shared/ui/Title';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';
import { Button } from '../../shared/ui/Button';
import Link from 'next/link';

type ListPokemonSectionProps = {
  pokemons: {
    id: string;
    name: string;
    imageUrl: string;
    abilities?: string[];
  }[];
};

export const ListPokemonSection: React.FC<ListPokemonSectionProps> = ({
  pokemons,
}) => {
  return (
    <section className='flex flex-col gap-6 md:gap-8 mt-6 w-full  container mx-auto px-6'>
      <Title variant='md' className='text-center !text-[3vh]'>
        List Pokemon
      </Title>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
        {pokemons.map((pokemon) => (
          <Link href='/detail' key={pokemon.id}>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
              abilities={pokemon.abilities}
            />
          </Link>
        ))}
      </div>
      <Button className='mx-auto'>Load More</Button>
    </section>
  );
};
