// src/app/detail/[id]/loading.tsx

import { ScrollToTop } from '@/features/detail/utils/scrollToTop';
import React from 'react';

export default function Loading() {
  return (
    <main className='min-h-screen pt-[90px] md:pt-[130px] container mx-auto px-6 py-10 animate-pulse space-y-8 '>
      <ScrollToTop />
      <div className='h-8 w-1/2 bg-gray-300 rounded' />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='w-full h-64 bg-gray-300 rounded-xl' />

        <div className='space-y-4'>
          <div className='h-6 w-2/3 bg-gray-300 rounded' />
          <div className='h-4 w-1/2 bg-gray-300 rounded' />
          <div className='h-4 w-1/3 bg-gray-300 rounded' />
          <div className='h-4 w-1/4 bg-gray-300 rounded' />
        </div>
      </div>

      <div className='space-y-2'>
        <div className='h-5 w-32 bg-gray-300 rounded' />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className='h-4 w-full bg-gray-300 rounded' />
          ))}
        </div>
      </div>

      <div className='space-y-2'>
        <div className='h-5 w-40 bg-gray-300 rounded' />
        <div className='grid grid-cols-3 gap-4'>
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className='h-32 bg-gray-300 rounded-lg' />
          ))}
        </div>
      </div>
    </main>
  );
}
