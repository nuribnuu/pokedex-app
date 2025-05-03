// src/features/detail/section/PokemonEvolutionSection.tsx

'use client';

import React from 'react';
import { Title } from '@/features/shared/ui/Title';
import { PokemonCard } from '@/features/shared/widgets/PokemonCard';
import { motion } from 'framer-motion';

type PokemonEvolutionSectionProps = {
  evolutions: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
};

export const PokemonEvolutionSection: React.FC<
  PokemonEvolutionSectionProps
> = ({ evolutions }) => {
  return (
    <section className='flex flex-col gap-4 mt-6 w-full'>
      {evolutions.length > 0 && <Title variant='md'>Evolution Chain</Title>}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
        {evolutions.map((pokemon, index) => (
          <motion.div
            key={pokemon.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
