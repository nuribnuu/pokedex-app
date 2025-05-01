// src/app/detail/page.tsx

import React from 'react';
import { PokemonDetailSection } from '@/features/detail/section/PokemonDetailSection';
import { PokemonEvolutionSection } from '@/features/detail/section/PokemonEvolutionSection';

export default function DetailPage() {
  return (
    <main className='min-h-screen pt-[80px] md:pt-[100px] container mx-auto px-6 py-10'>
      <PokemonDetailSection
        identity={{
          id: '001',
          name: 'Bulbasaur',
          description: 'A strange seed was planted on its back at birth.',
        }}
        attributes={{
          type: ['Grass', 'Poison'],
          abilities: ['Overgrow', 'Chlorophyll'],
        }}
        size={{
          height: 0.7,
          weight: 6.9,
        }}
        artwork={{
          imageUrl: '/images/bulbasaur.svg',
        }}
        stats={[
          { label: 'HP', value: 45 },
          { label: 'Attack', value: 49 },
          { label: 'Defense', value: 49 },
          { label: 'Speed', value: 45 },
        ]}
      />
      <PokemonEvolutionSection
        pokemons={[
          { id: '001', name: 'Bulbasaur', imageUrl: '/images/bulbasaur.svg' },
          { id: '002', name: 'Ivysaur', imageUrl: '/images/ivysaur.svg' },
          { id: '003', name: 'Venusaur', imageUrl: '/images/venusaur.svg' },
        ]}
      />
    </main>
  );
}
