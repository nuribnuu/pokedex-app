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
        'border border-neutral-300 rounded-lg px-2 py-0.5 font-medium text-sm text-neutral-900',
        className
      )}
    >
      {label}
    </div>
  );
};
