// src/features/shared/ui/SizeLabel.tsx
import { FC } from 'react';
import clsx from 'clsx';

type SizeLabelProps = {
  icon: React.ReactNode;
  label: string;
  className?: string;
};

export const SizeLabel: FC<SizeLabelProps> = ({ icon, label, className }) => {
  return (
    <div
      className={clsx('flex items-center gap-1 md:gap-2 font-normal text-sm md:text-base', className)}
    >
      <span className="text-neutral-900">{icon}</span>
      <span className="text-neutral-700">{label}</span>
    </div>
  );
};
