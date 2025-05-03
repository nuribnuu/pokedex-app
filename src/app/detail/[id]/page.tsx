// src/app/detail/[id]/page.tsx

import React from 'react';

import { PokemonDetailSection } from '@/features/detail/section/PokemonDetailSection';
import { PokemonEvolutionSection } from '@/features/detail/section/PokemonEvolutionSection';
import { fetchPokemonDetail } from '@/features/detail/api/fetchPokemonDetail';
import { Title } from '@/features/shared/ui/Title';

type DetailPageProps = {
  params: {
    id: string;
  };
};

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = params;
  let data = null;

  try {
    data = await fetchPokemonDetail(id);
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
  }

  if (!data) {
    return (
      <main className='min-h-screen pt-[80px] md:pt-[120px] container mx-auto px-6 py-10'>
        <Title>Error fetching Pokémon details. Please try again later.</Title>
      </main>
    );
  }

  return (
    <main className='min-h-screen pt-[80px] md:pt-[120px] container mx-auto px-6 py-10'>
      <PokemonDetailSection
        identity={{
          id: data.id,
          name: data.name,
          description: data.description,
        }}
        attributes={{
          type: data.types,
          abilities: data.abilities,
        }}
        size={{
          height: data.height,
          weight: data.weight,
        }}
        artwork={{
          imageUrl: data.imageUrl,
        }}
        stats={data.stats.map((stat: { name: string; value: number }) => ({
          label: stat.name,
          value: stat.value,
        }))}
      />

      <PokemonEvolutionSection evolutions={data.evolutions} />
    </main>
  );
}
