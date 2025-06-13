// src/features/shared/widgets/ScrollButton.tsx

import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon } from '../ui/Icons';
import { Button } from '../ui/Button';

export const ScrollButton: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      setIsNearBottom(scrollY + innerHeight >= scrollHeight - 100);
      setIsAtBottom(scrollY + innerHeight >= scrollHeight - 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={isAtBottom ? scrollToTop : scrollToBottom}
      className={`fixed bottom-6 right-6 md:bottom-16 p-3 !size-16 rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300 cursor-pointer`}
      aria-label={isAtBottom ? 'Scroll to top' : 'Scroll to bottom'}
    >
      {isAtBottom ? (
        <ChevronLeftIcon className='rotate-90' />
      ) : (
        <ChevronLeftIcon className='rotate-270' />
      )}
    </Button>
  );
};
