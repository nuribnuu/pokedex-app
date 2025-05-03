// src/features/shared/widgets/SearchInput.tsx

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { RoundedCloseIcon, SearchIcon } from '../ui/Icons';
import clsx from 'clsx';

type SearchInputProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  isHeroSection?: boolean;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search poke name',
  onChange,
  className,
  isHeroSection = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const q = searchParams.get('q') ?? '';
    setSearchTerm(q);
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isHeroSection && e.key === 'Enter' && searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  useEffect(() => {
    if (pathname === '/search') {
      if (searchTerm.trim() === '') {
        router.push('/search');
      } else {
        router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      }
    }
  }, [searchTerm, router, pathname]);

  const handleClear = () => {
    setSearchTerm('');
    onChange?.('');
    if (pathname === '/search') {
      router.push('/search');
    }
  };

  return (
    <div className={clsx('relative w-full max-w-[518px]', className)}>
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className='w-full rounded-full px-4 md:px-6 py-3 md:py-4 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-neutral-900 text-xl '
      />

      <button
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-[#3663AD] hover:bg-[#86a8df] p-1 md:p-2 rounded-full text-neutral-25'
        onClick={() => {
          if (searchTerm.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
          }
        }}
      >
        <SearchIcon />
      </button>

      {searchTerm && (
        <button
          type='button'
          onClick={handleClear}
          className='absolute right-12 md:right-16 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600'
        >
          <RoundedCloseIcon />
        </button>
      )}
    </div>
  );
};
