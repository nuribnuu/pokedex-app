// src/features/home/section/PokemonListSection.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Title } from '@/features/shared/ui/Title';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';
import { Button } from '@/features/shared/ui/Button';
import { usePokemonStore } from '@/features/shared/store/pokemonStore';
import { ScrollButton } from '@/features/shared/widgets/ScrollButton';
import { fetchPokemonByBatch } from '@/features/shared/api/fetchPokemonsByBatch';
import { PokemonSummary } from '@/features/shared/types';
import { motion } from 'framer-motion';

type PokemonListSectionProps = {
  pokemons: PokemonSummary[];
};

export const PokemonListSection: React.FC<PokemonListSectionProps> = ({
  pokemons,
}) => {
  const { pokemonList, setPokemonList, setOffset } = usePokemonStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem('homePokemons');

    if (cached) {
      try {
        const parsed = JSON.parse(cached) as PokemonSummary[];
        setPokemonList(parsed);
        setOffset(parsed.length);
        return;
      } catch {
      }
    }

    setPokemonList(pokemons);
    setOffset(pokemons.length);
    localStorage.setItem('homePokemons', JSON.stringify(pokemons));
  }, [pokemons, setPokemonList, setOffset]);

  const loadMorePokemons = async () => {
    setLoading(true);
    const currentLength = pokemonList.length;

    try {
      const morePokemons = await fetchPokemonByBatch(50, currentLength);
      const newList = [...pokemonList, ...morePokemons];
      setPokemonList(newList);
      setOffset(newList.length);
      localStorage.setItem('homePokemons', JSON.stringify(newList));
    } catch (error) {
      console.error('Error fetching more Pokémon:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='flex flex-col gap-6 md:gap-8 mt-6 w-full container mx-auto px-6'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Title variant='md' className='text-center !text-[3vh]'>
          Pokemon List
        </Title>
      </motion.div>

      <motion.div
        className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {pokemonList.map((pokemon, index) => (
          <Link
            href={{
              pathname: `/detail/${pokemon.id}`,
              query: { imageUrl: pokemon.imageUrl },
            }}
            key={`${pokemon.id}-${index}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                abilities={pokemon.abilities}
              />
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <motion.div
        className='mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          className='mx-auto'
          onClick={loadMorePokemons}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load More'}
        </Button>
      </motion.div>

      <ScrollButton />
    </section>
  );
};
