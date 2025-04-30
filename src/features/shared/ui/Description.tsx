// src/features/detail/ui/Description.tsx
import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type DescriptionProps = {
  children: ReactNode;
  className?: string;
  variant?: 'bold' | 'light';
};

const baseStyles = 'text-sm md:text-base';
const variantStyles = {
  bold: 'font-medium text-neutral-900',
  light: 'font-normal text-neutral-700',
};

export const Description: FC<DescriptionProps> = ({
  variant = 'light',
  children,
  className,
}) => {
  return (
    <p className={clsx(baseStyles, variantStyles[variant], className)}>{children}</p>
  );
};
