// src/features/detail/widgets/PokemonDetailSection.tsx
import React from 'react';
import { PokemonIdentitiy } from './PokemonIdentitiy';
import { PokemonType } from './PokemonType';
import { PokemonAbilities } from './PokemonAbilities';
import { PokemonSize } from './PokemonSize';
import { PokemonArtwork } from './PokemonArtwork';
import { PokemonStats } from './PokemonStats';
import { Hr } from '../ui/Hr';

type PokemonDetailSectionProps = {
  identity: {
    id: string;
    name: string;
    description: string;
  };
  attributes: {
    type: string[];
    abilities: string[];
  };
  size: {
    height: number;
    weight: number;
  };
  stats: {
    label: string;
    value: number;
  }[];
  artwork: {
    imageUrl: string;
  };
};

export const PokemonDetailSection: React.FC<PokemonDetailSectionProps> = ({
  identity,
  attributes: { type, abilities },
  size,
  artwork,
  stats,
}) => {
  return (
    <section className='flex flex-col gap-2 md:gap-5 w-full'>
      <PokemonIdentitiy identity={identity} />
      <Hr />
      <PokemonType type={type} />
      <PokemonAbilities abilities={abilities} />
      <PokemonSize size={size} /> <PokemonArtwork artwork={artwork} />
      <Hr />
      <PokemonStats stats={stats} />
    </section>
  );
};
