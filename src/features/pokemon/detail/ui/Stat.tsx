// src/features/pokemon/detail/ui/Stat.tsx
import { FC } from 'react';
import clsx from 'clsx';

type StatProps = {
  label: string;
  value: number;
};

const getIndicatorColor = (value: number) => {
  if (value <= 40) return 'bg-red';
  if (value <= 79) return 'bg-yellow';
  return 'bg-green';
};

export const Stat: FC<StatProps> = ({ label, value }) => {
  return (
    <div className='flex items-center justify-between gap-4 max-w-[310px] md:max-w-[450px]'>
      <span className='font-normal text-sm md:text-base text-neutral-900'>
        {label}
      </span>

      <div className='flex items-center gap-4'>
        <span className='font-semibold text-sm md:text-base text-neutral-900'>
          {value}
        </span>

        <div className='relative w-[211px] md:w-[332px] h-3 rounded-full bg-neutral-200 overflow-hidden'>
          <div
            className={clsx(
              'absolute h-full rounded-full',
              getIndicatorColor(value)
            )}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
};
