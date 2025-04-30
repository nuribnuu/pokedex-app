// src/features/detail/ui/SizeValue.tsx
import { FC } from 'react';
import clsx from 'clsx';

type SizeValueProps = {
  value: string | number;
  unit: string;
  className?: string;
};

export const SizeValue: FC<SizeValueProps> = ({ value, unit, className }) => {
  return (
    <div className={clsx('flex items-center gap-1 md:gap-2', className)}>
      <span className="font-bold text-2xl md:text-3xl text-neutral-900">{value}</span>
      <span className="font-bold text-sm md:text-base text-neutral-600">{unit}</span>
    </div>
  );
};
