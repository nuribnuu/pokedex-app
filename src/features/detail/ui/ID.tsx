// src/features/detail/ui/ID.tsx

import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type IDProps = {
  children: ReactNode;
  className?: string;
};

const baseStyles = 'font-normal text-xl md:text-2xl text-neutral-500';

export const ID: FC<IDProps> = ({ children, className }) => {
  return (
    <span className={clsx(baseStyles, className)}>
      {children}
    </span>
  );
};
