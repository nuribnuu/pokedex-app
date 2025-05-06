// src/app/search/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchPokemonByBatch } from '@/features/shared/api/fetchPokemonsByBatch';
import { PokemonSummary } from '@/features/shared/types';
import { SearchEmptyStateSection } from '@/features/search/section/SearchEmptyStateSection';
import { SearchResultsSection } from '@/features/search/section/SearchResultsSection';
import { LoadingStatusMessage } from '@/features/shared/widgets/LoadingStatusMessage';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.trim().toLowerCase() || '';
  const hasQuery = query.length > 0;

  const [results, setResults] = useState<PokemonSummary[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hasQuery) return;

    const cachedResults = localStorage.getItem('searchResults');
    const cachedQuery = localStorage.getItem('lastSearchQuery');

    if (cachedResults && cachedQuery === query) {
      setResults(JSON.parse(cachedResults));
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const allPokemons = await fetchPokemonByBatch(1000);
        const filtered = allPokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(query)
        );
        setResults(filtered);
        localStorage.setItem('searchResults', JSON.stringify(filtered));
        localStorage.setItem('lastSearchQuery', query);
      } catch (error) {
        console.error('Error fetching Pokémons:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [hasQuery, query]);

  let content;

  if (!hasQuery) {
    content = <SearchEmptyStateSection type='no-query' />;
  } else if (loading) {
    content = (
      <LoadingStatusMessage title='Loading' description='Please be patient' />
    );
  } else if (results.length === 0) {
    content = <SearchEmptyStateSection type='no-results' query={query} />;
  } else {
    content = <SearchResultsSection results={results} query={query} />;
  }

  return <main>{content}</main>;
}
