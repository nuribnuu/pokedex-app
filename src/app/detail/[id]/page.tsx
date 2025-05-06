// src/app/detail/[id]/page.tsx

import React from 'react';
import { PokemonDetailSection } from '@/features/detail/section/PokemonDetailSection';
import { PokemonEvolutionSection } from '@/features/detail/section/PokemonEvolutionSection';
import { fetchPokemonDetail } from '@/features/detail/api/fetchPokemonDetail';
import { Title } from '@/features/shared/ui/Title';
import { ScrollToTop } from '@/features/detail/utils/scrollToTop';
import ClientGuard from '@/features/shared/widgets/ClientGuard';

export default async function DetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ imageUrl?: string }>;
}) {
  const { id } = await params;
  const { imageUrl: imageUrlParam } = await searchParams;

  let data = null;
  try {
    data = await fetchPokemonDetail(id);
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
  }

  const errorPage = (
    <main className='min-h-screen pt-[90px] md:pt-[130px] container mx-auto px-6 py-10'>
      <Title>Error fetching Pokémon details. Please try again later.</Title>
    </main>
  );

  if (!data) {
    return imageUrlParam ? errorPage : <ClientGuard>{errorPage}</ClientGuard>;
  }

  const detailPage = (
    <main className='min-h-screen pt-[90px] md:pt-[130px] container mx-auto px-6 py-10'>
      <ScrollToTop />
      <PokemonDetailSection
        identity={{ id: data.id, name: data.name, description: data.description }}
        attributes={{ type: data.types, abilities: data.abilities }}
        size={{ height: data.height, weight: data.weight }}
        artwork={{ imageUrl: data.imageUrl }}
        stats={data.stats.map((stat: { name: string; value: number }) => ({
          label: stat.name,
          value: stat.value,
        }))}
      />
      <PokemonEvolutionSection evolutions={data.evolutions} />
    </main>
  );

  return imageUrlParam ? detailPage : <ClientGuard>{detailPage}</ClientGuard>;
}
