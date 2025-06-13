// src/features/shared/widgets/ScrollButton.tsx

import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon } from '../ui/Icons';
import { Button } from '../ui/Button';

export const ScrollButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // Jika sudah di bawah (atau hampir di bawah, toleransi 2px)
      setIsAtBottom(scrollY + windowHeight >= docHeight - 2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  if (!mounted) return null;

  return (
    <div
      className='fixed right-0 left-0 pointer-events-none'
      style={{ zIndex: 50 }}
    >
      <div className='container mx-auto max-w-4xl flex justify-end'>
        <Button
          onClick={handleScrollClick}
          className={`
            pointer-events-auto
            fixed
            bottom-8
            right-8
            md:bottom-12
            md:right-12
            p-3
            !size-16
            rounded-full
            shadow-lg
            flex
            items-center
            justify-center
            transition-all
            duration-300
            cursor-pointer
            bg-white
            hover:bg-neutral-100
          `}
          style={{
            marginBottom: isAtBottom ? '5rem' : undefined,
          }}
          aria-label={isAtBottom ? 'Scroll to top' : 'Scroll to bottom'}
        >
          {isAtBottom ? (
            <ChevronLeftIcon className='rotate-90' />
          ) : (
            <ChevronLeftIcon className='rotate-270' />
          )}
        </Button>
      </div>
    </div>
  );
};
