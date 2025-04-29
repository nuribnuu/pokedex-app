// src/features/shared/ui/BorderedLabel.tsx
import { FC } from 'react';
import clsx from 'clsx';

type BorderedLabelProps = {
  label: string;
  className?: string;
};

export const BorderedLabel: FC<BorderedLabelProps> = ({ label, className }) => {
  return (
    <div
      className={clsx(
        'border border-neutral-300 rounded-lg p-2 md:p-3 font-medium text-sm md:text-base text-neutral-900',
        className
      )}
    >
      {label}
    </div>
  );
};
