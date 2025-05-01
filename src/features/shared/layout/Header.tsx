// src/features/shared/layout/Header.tsx

'use client';

import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { Logo } from '@/features/shared/ui/Logo';
import { SearchInput } from '@/features/shared/widgets/SearchInput';
import clsx from 'clsx';

export const Header: FC = () => {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false); // Default false

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        const heroHeight = 400;
        // Update showSearch hanya ketika scroll lebih tinggi dari heroHeight
        setShowSearch(window.scrollY > heroHeight);
      };

      window.addEventListener('scroll', handleScroll);

      // Memastikan bahwa showSearch sudah ter-set dengan nilai yang benar ketika pertama kali dimuat
      handleScroll(); // Initial call on load to check scroll position

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setShowSearch(true); // Menetapkan true jika bukan di halaman home
    }
  }, [pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 z-999 w-full transition-colors',
        showSearch
          ? 'bg-white shadow-[0px_4px_24px_0px_#B4B2B240]' // Background putih ketika showSearch true
          : 'bg-primary-300' // Background primary ketika showSearch false
      )}
    >
      <div
        className={clsx(
          'container mx-auto px-4 py-3 md:py-5 flex items-center gap-2 justify-center',
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
