// src/feateres/shared/ui/Button.tsx

import { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

const baseStyles =
  'flex justify-center items-center gap-1 md:gap-2 bg-white text-sm md:text-base text-neutral-900';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'w-[180px] h-[44px] md:w-[237px] md:h-[52px] border border-neutral-300 rounded-full font-bold hover:bg-neutral-300',
  secondary: 'font-medium hover:underline',
};

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};
