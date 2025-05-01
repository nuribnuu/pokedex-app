// src/app/page.tsx

import { HeroSection } from '@/features/home/section/HeroSection';
import { ListPokemonSection } from '@/features/home/section/ListPokemonSection';

const mockPokemons = [
  {
    id: '001',
    name: 'Bulbasaur',
    imageUrl: '/images/bulbasaur.svg',
    abilities: ['Overgrow', 'Chlorophyll'],
  },
  {
    id: '002',
    name: 'Ivysaur',
    imageUrl: '/images/bulbasaur.svg',
    abilities: ['Overgrow', 'Poison Powder'],
  },
  {
    id: '003',
    name: 'Venusaur',
    imageUrl: '/images/bulbasaur.svg',
    abilities: ['Overgrow', 'Solar Beam'],
  },
  {
    id: '004',
    name: 'Charmander',
    imageUrl: '/images/bulbasaur.svg',
    abilities: ['Blaze', 'Solar Power'],
  },
  {
    id: '005',
    name: 'Charmeleon',
    imageUrl: '/images/bulbasaur.svg',
    abilities: ['Blaze', 'Flamethrower'],
  },
  {
    id: '006',
    name: 'Charizard',
    imageUrl: '/images/bulbasaur.svg',
    abilities: ['Blaze', 'Flying'],
  },
  {
    id: '007',
    name: 'Squirtle',
    imageUrl: '/images/bulbasaur.svg',
    abilities: ['Torrent', 'Rain Dish'],
  },
  {
    id: '008',
    name: 'Wartortle',
    imageUrl: '/images/bulbasaur.svg',
    abilities: ['Torrent', 'Shell Armor'],
  },
  {
    id: '009',
    name: 'Blastoise',
    imageUrl: '/images/bulbasaur.svg',
    abilities: ['Torrent', 'Hydro Pump'],
  },
];

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ListPokemonSection pokemons={mockPokemons} />
    </main>
  );
}
