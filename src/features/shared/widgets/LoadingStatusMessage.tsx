// src/features/shared/widgets/LoadingStatusMessage.tsx

'use client';

import Image from 'next/image';
import { Title } from '@/features/shared/ui/Title';
import { Description } from '@/features/shared/ui/Description';

type LoadingStatusMessageProps = {
  title: string;
  description: string;
  animate?: boolean;
  iconSrc?: string;
};

export function LoadingStatusMessage({
  title,
  description,
  animate = true,
  iconSrc = '/images/shared/pokeball.svg',
}: LoadingStatusMessageProps) {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-6'>
      <Image
        src={iconSrc}
        alt='Pokeball'
        width={130}
        height={130}
        className='mx-auto size-23 md:size-32 object-cover animate-spin'
      />
      <div className='flex flex-col items-center gap-1 text-center'>
        <Title className={animate ? 'animate-pulse' : ''}>{title}</Title>
        <Description className={animate ? 'animate-pulse' : ''}>
          {description}
        </Description>
      </div>
    </div>
  );
}
