// src/features/shared/ui/Title.tsx

import { ReactNode, ElementType } from 'react';
import clsx from 'clsx';

type TitleProps = {
  variant?: 'lg' | 'md' | 'sm';
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

const baseStyles = 'text-neutral-900';

const variantStyles: Record<NonNullable<TitleProps['variant']>, string> = {
  lg: 'text-4xl md:text-5xl lg:text-6xl font-bold',
  md: 'text-xl md:text-2xl lg:text-3xl font-bold',
  sm: 'text-base md:text-lg lg:text-xl font-semibold',
};

export const Title: React.FC<TitleProps> = ({
  variant = 'sm',
  as: Tag = 'h3',
  children,
  className,
}) => {
  return (
    <Tag className={clsx(baseStyles, variantStyles[variant], className)}>
      {children}
    </Tag>
  );
};
