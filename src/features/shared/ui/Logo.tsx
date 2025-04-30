// src/features/shared/ui/Logo.tsx
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type LogoProps = {
  hideText?: boolean;
};

export const Logo: FC<LogoProps> = ({ hideText = false }) => {
  return (
    <Link
      href={'/'}
      className='flex items-center gap-1 md:gap-2'
      aria-label='Go to Home page'
    >
      <Image
        src='/images/logo.svg'
        alt='Logo'
        className='w-7 h-7 md:w-10 md:h-10'
        width={40}
        height={40}
        priority
      />
      <span
        className={clsx(
          'font-semibold text-xl md:text-3xl text-neutral-900',
          hideText && 'hidden md:inline'
        )}
      >
        Pokedex
      </span>
    </Link>
  );
};
