// src/features/home/section/PokemonListSection.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Title } from '@/features/shared/ui/Title';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';
import { Button } from '@/features/shared/ui/Button';
import { getPokemons } from '../api/getPokemons'; // Import getPokemons

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
  const [pokemonsList, setPokemonsList] = useState(pokemons); // State untuk pokemons yang sudah dimuat
  const [loading, setLoading] = useState(false); // State untuk loading

  const loadMorePokemons = async () => {
    setLoading(true); // Menandakan sedang memuat
    const currentLength = pokemonsList.length;
    const morePokemons = await getPokemons(50, currentLength); // Fetch lebih banyak pokemons
    setPokemonsList((prevPokemons) => [...prevPokemons, ...morePokemons]); // Menambahkan pokemons baru ke state
    setLoading(false); // Mematikan loading
  };

  return (
    <section className='flex flex-col gap-6 md:gap-8 mt-6 w-full container mx-auto px-6'>
      <Title variant='md' className='text-center !text-[3vh]'>
        Pokemon List
      </Title>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
        {pokemonsList.map((pokemon) => (
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
      <Button
        className='mx-auto'
        onClick={loadMorePokemons}
        disabled={loading} // Tombol tidak dapat ditekan saat loading
      >
        {loading ? 'Loading...' : 'Load More'}
      </Button>
    </section>
  );
};
