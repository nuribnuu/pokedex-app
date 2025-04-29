'use client';

import { FC, useState } from 'react';
import { RoundedCloseIcon, SearchIcon } from './Icons';

type SearchInputProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({
  placeholder = 'Search Pokemon',
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClear = () => {
    setSearchTerm('');
    onChange?.('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className='relative w-full max-w-[518px]'>
      {/* Input */}
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className='w-full rounded-full px-4 md:px-6 py-3 md:py-4 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-neutral-900 text-sm md:text-base placeholder:!text-sm md:placeholder:!text-base'
      />

      {/* Icon Search */}
      <button className='absolute right-4 top-1/2 -translate-y-1/2 bg-[#3663AD] hover:bg-[#86a8df] p-1 md:p-2  rounded-full text-neutral-25'>
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
