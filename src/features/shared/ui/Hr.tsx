// src/features/shared/ui/Hr.tsx
import { FC } from 'react';
import clsx from 'clsx';

type HrProps = {
  className?: string;
};

export const Hr: FC<HrProps> = ({ className }) => {
  return (
    <hr
      className={clsx(
        'border-t-1 border-neutral-300 my-4 md:my-5',
        'w-full',
        className
      )}
    />
  );
};
