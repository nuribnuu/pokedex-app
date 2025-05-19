// src/features/detail/section/PokemonDetailSection.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { PokemonIdentitiy } from '../widgets/PokemonIdentitiy';
import { PokemonType } from '../widgets/PokemonType';
import { PokemonAbilities } from '../widgets/PokemonAbilities';
import { PokemonSize } from '../widgets/PokemonSize';
import { PokemonArtwork } from '../widgets/PokemonArtwork';
import { PokemonStats } from '../widgets/PokemonStats';
import { Hr } from '../ui/Hr';
import { PageHeader } from '@/features/shared/widgets/PageHeader';
import { motion } from 'framer-motion';

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
  const searchParams = useSearchParams();
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const queryImageUrl = searchParams.get('imageUrl');

    if (queryImageUrl) {
      setImageUrl(queryImageUrl);
      sessionStorage.setItem('imageUrl', queryImageUrl);
    } else {
      const stored = sessionStorage.getItem('imageUrl');
      if (stored) setImageUrl(stored);
    }
  }, [searchParams]);

  return (
    <section className='flex flex-col gap-2 md:gap-5 w-full'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <PageHeader title={`Detail of ${identity.name}`} />
      </motion.div>

      <motion.div
        className='flex flex-col lg:flex-row w-full'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className='lg:w-2/5 xl:w-full flex items-center justify-center'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {imageUrl ? (
            <Image
              className='object-cover mx-auto size-80 xl:size-100 2xl:size-120'
              src={imageUrl}
              width={80}
              height={80}
              alt='Pokemon Image'
            />
          ) : (
            <div className='w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 bg-gray-300 animate-pulse rounded-full' />
          )}
        </motion.div>

        <motion.div
          className='flex flex-col gap-4 md:gap-6 lg:w-3/5 xl:w-full'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <PokemonIdentitiy identity={identity} />
          <Hr className='lg:hidden' />

          <motion.div
            className='w-full flex flex-col md:flex-row gap-4 md:gap-6'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='md:w-1/2'>
              <PokemonType type={type} />
            </div>
            <div className='md:w-1/2'>
              <PokemonAbilities abilities={abilities} />
            </div>
          </motion.div>

          <motion.div
            className='w-full flex flex-col md:flex-row gap-4 md:gap-6'
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='md:w-1/2'>
              <PokemonSize size={size} />
            </div>
            <div className='md:w-1/2'>
              <PokemonArtwork artwork={artwork} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <PokemonStats stats={stats} />
          </motion.div>

          <Hr className='lg:hidden' />
        </motion.div>
      </motion.div>
    </section>
  );
};
