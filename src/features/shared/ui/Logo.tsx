// src/features/shared/ui/Logo.tsx

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';

type LogoProps = {
  hideText?: boolean;
};

export const Logo: React.FC<LogoProps> = ({ hideText = false }) => {
  const router = useRouter();
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsSpinning(true);
    sessionStorage.setItem('fromInternalNavigation', 'true');

    router.push('/');
  };

  return (
    <div className='flex items-center gap-1 md:gap-2'>
      <Link
        href='/'
        onClick={handleClick}
        className='flex items-center gap-1 md:gap-2'
        aria-label='Go to Home page'
      >
        <Image
          src='/images/shared/logo.svg'
          alt='Logo'
          className={clsx(
            'transition-all duration-500',
            hideText ? 'size-12' : 'size-8',
            isSpinning && 'animate-spin'
          )}
          width={40}
          height={40}
          priority
        />
        <span
          className={clsx(
            'font-semibold text-2xl md:text-3xl text-neutral-900',
            hideText && 'hidden md:inline'
          )}
        >
          findpoké
        </span>
      </Link>
    </div>
  );
};
