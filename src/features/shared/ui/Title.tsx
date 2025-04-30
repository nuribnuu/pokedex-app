// src/features/shared/ui/Title.tsx
import { FC, ReactNode, ElementType } from 'react';
import clsx from 'clsx';

type TitleProps = {
  variant?: 'lg' | 'md' | 'sm';
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

const baseStyles = 'text-neutral-900';

const variantStyles: Record<NonNullable<TitleProps['variant']>, string> = {
  lg: 'text-2xl md:text-4xl font-bold',
  md: 'text-xl md:text-2xl font-semibold',
  sm: 'text-lg md:text-xl font-semibold',
};

export const Title: FC<TitleProps> = ({
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
