// src/features/detail/ui/Hr.tsx

import clsx from 'clsx';

type HrProps = {
  className?: string;
};

export const Hr: React.FC<HrProps> = ({ className }) => {
  return (
    <hr
      className={clsx(
        'border-t border-neutral-300',
        'w-full',
        className
      )}
    />
  );
};
