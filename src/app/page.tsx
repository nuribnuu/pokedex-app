import { PokemonEvolutionSection } from '@/features/pokemon/detail/widgets/PokemonEvolutionSection';
import { PokemonDetailSection } from '@/features/pokemon/detail/widgets/PokemonDetailSection';
import { Footer } from '@/features/shared/layout/Footer';
import { Header } from '@/features/shared/layout/Header';

export default function HomePage() {
  // Data Pokémon yang akan diteruskan ke PokemonDetailGroup
  const pokemonData = {
    identity: {
      id: '001',
      name: 'Bulbasaur',
      description: 'A strange seed was planted on its back at birth...',
    },
    attributes: {
      type: ['Grass', 'Poison'],
      abilities: ['Overgrow', 'Chlorophyll'],
    },
    size: { weight: 6.9, height: 0.7 },
    stats: [
      { label: 'HP', value: 45 },
      { label: 'Attack', value: 49 },
      { label: 'Defense', value: 49 },
      { label: 'Sp. Attack', value: 65 },
      { label: 'Sp. Defense', value: 65 },
      { label: 'Speed', value: 45 },
    ],
    artwork: { imageUrl: '/images/artwork.svg' },
  };

  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <div className='h-[500px] bg-primary-300 flex items-center justify-center'>
        Hero Section (scroll me)
      </div>

      {/* Main Content */}
      <div className='h-[2000px] bg-neutral-25 flex flex-col gap-2 items-start justify-center px-4 container mx-auto py-32'>
        {/* Pokémon Detail Group */}
        <PokemonDetailSection {...pokemonData} />
        <PokemonEvolutionSection
          pokemons={[
            {
              id: '1',
              name: 'Bulbasaur',
              imageUrl:
                '/images/bulbasaur.svg',
            },
            {
              id: '2',
              name: 'Ivysaur',
              imageUrl:
                '/images/bulbasaur.svg',
            },
            {
              id: '3',
              name: 'Venusaur',
              imageUrl:
                '/images/bulbasaur.svg',
            },
          ]}
        />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
