// src/app/search/page.tsx

import { SearchEmptyStateSection } from '@/features/search/section/SearchEmptyStateSection';
import { SearchResultsSection } from '@/features/search/section/SearchResultsSection';

const query = '';
const mockResults = [];

export default function SearchPage() {
  const hasQuery = query.trim().length > 0;
  const hasResults = mockResults.length > 0;

  let content;

  if (!hasQuery) {
    content = <SearchEmptyStateSection type="no-query" />;
  } else if (!hasResults) {
    content = <SearchEmptyStateSection type="no-results" query={query} />;
  } else {
    content = <SearchResultsSection results={mockResults} query={query} />;
  }

  return (
    <main className="container mx-auto min-h-screen px-6 py-10 pt-[80px] md:pt-[100px]">
      {content}
    </main>
  );
}
