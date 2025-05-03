// src/app/search/loading.tsx

import Image from 'next/image';
import { Title } from '@/features/shared/ui/Title';

export default function Loading() {
  <main className='min-h-screen flex flex-col justify-center items-center gap-6 -mt-30'>
    <Image
      src='/images/shared/pokeball.svg'
      alt='Pokeball'
      width={130}
      height={130}
      className='mx-auto size-23 md:size-32 object-cover animate-spin'
    />
    <Title className='animate-pulse'>Loading...</Title>
  </main>;
}
