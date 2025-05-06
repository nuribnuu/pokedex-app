// src/features/search/section/SearchResultsSection.tsx

'use client';

import { PokemonSummary } from '@/features/shared/types';
import { PageHeader } from '@/features/shared/widgets/PageHeader';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';
import { ScrollButton } from '@/features/shared/widgets/ScrollButton';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Pokemon = PokemonSummary;

type SearchResultsSectionProps = {
  results: Pokemon[];
  query: string;
};

export const SearchResultsSection = ({
  results,
  query,
}: SearchResultsSectionProps) => {
  return (
    <section className='container mx-auto min-h-screen px-6 py-10 pt-[90px] md:pt-[130px]'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='mb-6'
      >
        <PageHeader title={`Results for "${query}"`} />
      </motion.div>

      <motion.div
        className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {results.map((pokemon) => (
          <Link
            href={{
              pathname: `/detail/${pokemon.id}`,
              query: { imageUrl: pokemon.imageUrl },
            }}
            key={pokemon.id}
            onClick={() => {
              sessionStorage.setItem('fromInternalNavigation', 'true');
            }}
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

      <ScrollButton />
    </section>
  );
};
