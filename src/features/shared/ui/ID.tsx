// src/features/shared/ui/ID.tsx
import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type IDProps = {
  children: ReactNode;
  className?: string;
};

const baseStyles = 'font-normal text-base md:tex-lg text-neutral-500';

export const ID: FC<IDProps> = ({ children, className }) => {
  return (
    <span className={clsx(baseStyles, className)}>
      {children}
    </span>
  );
};
