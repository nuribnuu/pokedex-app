// src/features/home/section/PokemonListSection.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Title } from '@/features/shared/ui/Title';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';
import { Button } from '@/features/shared/ui/Button';
import { usePokemonStore } from '@/features/shared/store/pokemonStore';
import { getPokemons } from '@/features/shared/api/getPokemons';

type PokemonListSectionProps = {
  pokemons: {
    id: string;
    name: string;
    imageUrl: string;
    abilities?: string[];
  }[];
};

export const PokemonListSection: React.FC<PokemonListSectionProps> = ({
  pokemons,
}) => {
  const [pokemonList, setPokemonList] = useState(pokemons);
  const [loading, setLoading] = useState(false);
  const setSelectedImageUrl = usePokemonStore(
    (state) => state.setSelectedImageUrl
  );

  const loadMorePokemons = async () => {
    setLoading(true);
    const currentLength = pokemonList.length;
    const morePokemons = await getPokemons(50, currentLength);
    setPokemonList((prevPokemons) => [...prevPokemons, ...morePokemons]);
    setLoading(false);
  };

  return (
    <section className='flex flex-col gap-6 md:gap-8 mt-6 w-full container mx-auto px-6'>
      <Title variant='md' className='text-center !text-[3vh]'>
        Pokemon List
      </Title>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
        {pokemonList.map((pokemon) => (
          <Link
            href={`/detail/${pokemon.id}`}
            onClick={() => {
              setSelectedImageUrl(pokemon.imageUrl);
            }}
            key={pokemon.id}
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
      <Button className='mx-auto' onClick={loadMorePokemons} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </Button>
    </section>
  );
};
