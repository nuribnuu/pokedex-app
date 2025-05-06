// src/features/search/section/SearchEmptyStateSection.tsx

import { Description } from '@/features/shared/ui/Description';
import { Title } from '@/features/shared/ui/Title';
import { BackButton } from '@/features/shared/widgets/BackButton';
import Image from 'next/image';

type SearchEmptyStateSectionProps = {
  query?: string;
  type: 'no-query' | 'no-results' | 'not-found';
};

export const SearchEmptyStateSection = ({
  query,
  type,
}: SearchEmptyStateSectionProps) => {
  const renderContent = () => {
    if (type === 'no-query') {
      return (
        <div className='flex flex-col items-center gap-1 text-center'>
          <Title>Please enter a search query</Title>
          <Description>
            No search query entered. Start typing to search for Pokémon
          </Description>
        </div>
      );
    }

    if (type === 'no-results') {
      return (
        <div className='flex flex-col items-center gap-1 text-center'>
          <Title>No results found for &quot;{query}&quot;</Title>
          <Description>
            Change your keywords or try a different Pokémon
          </Description>
        </div>
      );
    }

    return (
      <div className='flex flex-col items-center gap-1 text-center'>
        <Title>404 - Page Not Found</Title>
        <Description>
          The page you are looking for does not exist
        </Description>
      </div>
    );
  };

  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-6 bg-white'>
      <div>
        <Image
          src='/images/shared/pokeball.svg'
          alt='Pokeball'
          width={130}
          height={130}
          className='mx-auto size-23 md:size-32 object-cover'
        />
      </div>

      <div className='flex flex-col items-center gap-1'>{renderContent()}</div>

      <div>
        <BackButton />
      </div>
    </section>
  );
};
