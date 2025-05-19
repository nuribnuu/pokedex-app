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

export const Stat: React.FC<StatProps> = ({ label, value }) => {
  return (
    <div className='flex items-center gap-4 max-w-full'>
      <span className='font-normal text-sm md:text-base text-neutral-900 w-1/5'>
        {label}
      </span>

      <div className='flex items-center gap-4 flex-1 min-w-0'>
        <span className='font-semibold text-sm md:text-base text-neutral-900'>
          {value}
        </span>

        <div className='relative flex-1 min-w-0 h-3 rounded-full bg-neutral-200 overflow-hidden'>
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
