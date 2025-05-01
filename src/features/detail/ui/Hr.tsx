// src/features/detail/ui/Hr.tsx

import { FC } from 'react';
import clsx from 'clsx';

type HrProps = {
  className?: string;
};

export const Hr: FC<HrProps> = ({ className }) => {
  return (
    <hr
      className={clsx(
        'border-t border-neutral-300',
        'w-full',
        className
      )}
    />
  );
};
