// src/features/shared/widgets/BackButton.tsx

import Link from 'next/link';
import { Button } from '../ui/Button';
import { ArrowLeftIcon } from '../ui/Icons';

export const BackButton = () => {
  return (
    <Link href='/'>
      <Button variant='secondary' className='flex items-center gap-2'>
        <ArrowLeftIcon />
        Back
      </Button>
    </Link>
  );
};
