// src/features/search/widgets/SearchEmptyState.tsx

import Image from 'next/image';
import { Title } from '@/features/shared/ui/Title';
import { Description } from '@/features/shared/ui/Description';

type SearchEmptyStateProps = {
  type: 'no-query' | 'no-results';
  query?: string;
};

export const SearchEmptyState = ({ type, query }: SearchEmptyStateProps) => {
  const isNoQuery = type === 'no-query';

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6'>
      <Image
        src='/images/shared/pokeball.svg'
        alt='Pokeball'
        width={130}
        height={130}
        className='mx-auto size-23 md:size-32 object-cover'
      />

      <div className='flex flex-col items-center gap-1 text-center'>
        <Title>
          {isNoQuery ? 'No Search Keyword' : 'Pokémon Not Found'}
        </Title>
        <Description>
          {isNoQuery
            ? 'Start by entering a keyword.'
            : `No results found for “${query}”`}
        </Description>
      </div>
    </div>
  );
};
