// src/features/shared/layout/Header.tsx
'use client';

import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { Logo } from '@/features/shared/ui/Logo';
import { SearchInput } from '@/features/shared/widgets/SearchInput';
import clsx from 'clsx';

export const Header: FC = () => {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (pathname !== '/') {
      setShowSearch(true);
      return;
    }

    const handleScroll = () => {
      const heroHeight = 400;
      setShowSearch(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full transition-colors',
        showSearch
          ? 'bg-white shadow-[0px_4px_24px_0px_#B4B2B240]'
          : 'bg-[#FFCB05]'
      )}
    >
      <div
        className={clsx(
          'container mx-auto px-4 py-3 flex items-center gap-2 justify-center',
          showSearch && 'md:justify-between'
        )}
      >
        <Logo hideText={showSearch} />
        {showSearch && (
          <div className='max-w-xs w-full'>
            <SearchInput placeholder='Search Pokemon' />
          </div>
        )}
      </div>
    </header>
  );
};
