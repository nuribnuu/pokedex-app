// src/features/shared/widgets/BackButton.tsx

'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { ArrowLeftIcon } from '../ui/Icons';

export const BackButton = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Button
      variant='secondary'
      className='flex items-center gap-2'
      onClick={handleBackClick}
    >
      <ArrowLeftIcon />
      Back
    </Button>
  );
};
