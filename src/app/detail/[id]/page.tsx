// src/app/detail/[id]/page.tsx

import React from 'react';
import { getPokemonDetail } from '@/features/detail/api/getPokemonDetail';
import { PokemonDetailSection } from '@/features/detail/section/PokemonDetailSection';
import { PokemonEvolutionSection } from '@/features/detail/section/PokemonEvolutionSection';

type DetailPageProps = {
  params: {
    id: string;
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = params;
  const data = await getPokemonDetail(id);
  console.log(data);

  return (
    <main className='min-h-screen pt-[80px] md:pt-[100px] container mx-auto px-6 py-10'>
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
      <PokemonEvolutionSection
        evolutions={data.evolutions}
      />
    </main>
  );
}
