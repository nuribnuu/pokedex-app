// src/features/shared/ui/Description.tsx
import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type DescriptionProps = {
  children: ReactNode;
  className?: string;
};

const baseStyles = 'text-md md:text-base text-neutral-700';

export const Description: FC<DescriptionProps> = ({ children, className }) => {
  return (
    <p className={clsx(baseStyles, className)}>
      {children}
    </p>
  );
};
