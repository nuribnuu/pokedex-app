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
  placeholder = 'Search Pokémon',
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
    <div
      className={clsx(
        'relative w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl',
        className
      )}
    >
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className='
          w-full rounded-full 
          px-4 sm:px-5 md:px-6 
          py-2.5 sm:py-3 md:py-4 
          bg-neutral-100 
          focus:outline-none focus:ring-2 focus:ring-neutral-900 
          text-neutral-900 
          text-base sm:text-lg md:text-xl
          placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg
        '
      />

      {isHeroSection && (
        <button
          className='
      absolute right-4 top-1/2 -translate-y-1/2 
      bg-[#3663AD] hover:bg-[#86a8df] 
      p-1 sm:p-1.5 md:p-2 
      rounded-full text-neutral-25 cursor-pointer
    '
          onClick={() => {
            if (searchTerm.trim()) {
              router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
            }
          }}
        >
          <SearchIcon />
        </button>
      )}

      {searchTerm && (
        <button
          type='button'
          onClick={handleClear}
          className={clsx(
            'absolute top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer',
            isHeroSection ? 'right-12 sm:right-14 md:right-16' : 'right-6'
          )}
        >
          <RoundedCloseIcon />
        </button>
      )}
    </div>
  );
};
