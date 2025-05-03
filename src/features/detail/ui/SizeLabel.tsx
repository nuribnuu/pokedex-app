// src/features/detail/ui/SizeLabel.tsx

import clsx from 'clsx';

type SizeLabelProps = {
  icon: React.ReactNode;
  label: string;
  className?: string;
};

export const SizeLabel: React.FC<SizeLabelProps> = ({ icon, label, className }) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-1 font-normal text-sm md:text-base',
        className
      )}
    >
      <span className='text-neutral-700'>{label}</span>
      <span className='text-neutral-900'>{icon}</span>
    </div>
  );
};
