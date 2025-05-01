import { HeroSection } from '@/features/home/HeroSection';
import { ListPokemonSection } from '@/features/home/ListPokemonSection';

const mockPokemons = [
  {
    id: '001',
    name: 'Bulbasaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '002',
    name: 'Ivysaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '003',
    name: 'Venusaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '001',
    name: 'Bulbasaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '002',
    name: 'Ivysaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '003',
    name: 'Venusaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '001',
    name: 'Bulbasaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '002',
    name: 'Ivysaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '003',
    name: 'Venusaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '001',
    name: 'Bulbasaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '002',
    name: 'Ivysaur',
    imageUrl: '/images/bulbasaur.svg',
  },
  {
    id: '003',
    name: 'Venusaur',
    imageUrl: '/images/bulbasaur.svg',
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
