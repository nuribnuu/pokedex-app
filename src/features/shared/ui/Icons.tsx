// src/features/shared/ui/Icons.tsx

import clsx from 'clsx';

type IconProps = {
  className?: string;
};

const iconSize = 'size-4.5 md:size-6';

export const SearchIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(iconSize, className)}
    >
      <path
        d='M21 21L17 17M19 11C19 13.1217 18.1571 15.1566 16.6569 16.6569C15.1566 18.1571 13.1217 19 11 19C8.87827 19 6.84344 18.1571 5.34315 16.6569C3.84285 15.1566 3 13.1217 3 11C3 8.87827 3.84285 6.84344 5.34315 5.34315C6.84344 3.84285 8.87827 3 11 3C13.1217 3 15.1566 3.84285 16.6569 5.34315C18.1571 6.84344 19 8.87827 19 11Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const CloseIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(iconSize, className)}
    >
      <path
        d='M18 6L6 18M6 6L18 18'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const ChevronUpIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(iconSize, className)}
    >
      <path
        d='M17 14L12 9L7 14'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const ArrowLeftIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(iconSize, className)}
    >
      <path
        d='M9.57 18.8201C9.38 18.8201 9.19 18.7501 9.04 18.6001L2.97 12.5301C2.68 12.2401 2.68 11.7601 2.97 11.4701L9.04 5.40012C9.33 5.11012 9.81 5.11012 10.1 5.40012C10.39 5.69012 10.39 6.17012 10.1 6.46012L4.56 12.0001L10.1 17.5401C10.39 17.8301 10.39 18.3101 10.1 18.6001C9.96 18.7501 9.76 18.8201 9.57 18.8201Z'
        fill='currentColor'
      />
      <path
        d='M20.5 12.75H3.66998C3.25998 12.75 2.91998 12.41 2.91998 12C2.91998 11.59 3.25998 11.25 3.66998 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const RoundedCloseIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(iconSize, className)}
    >
      <mask
        id='mask0_22419_3266'
        maskUnits='userSpaceOnUse'
        x='1'
        y='1'
        width='22'
        height='22'
      >
        <path
          d='M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z'
          fill='white'
          stroke='white'
          strokeWidth='2'
          strokeLinejoin='round'
        />
        <path
          d='M14.8285 9.17139L9.17151 14.8284M9.17151 9.17139L14.8285 14.8284'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </mask>
      <g mask='url(#mask0_22419_3266)'>
        <path d='M0 0H24V24H0V0Z' fill='currentColor' />
      </g>
    </svg>
  );
};

export const WeightIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(iconSize, className)}
    >
      <path
        d='M6.00016 19H18.0002L16.5752 9H7.42517L6.00016 19ZM12.0002 7C12.2835 7 12.5212 6.904 12.7132 6.712C12.9052 6.52 13.0008 6.28267 13.0002 6C12.9995 5.71733 12.9035 5.48 12.7122 5.288C12.5208 5.096 12.2835 5 12.0002 5C11.7168 5 11.4795 5.096 11.2882 5.288C11.0968 5.48 11.0008 5.71733 11.0002 6C10.9995 6.28267 11.0955 6.52033 11.2882 6.713C11.4808 6.90567 11.7182 7.00133 12.0002 7ZM14.8252 7H16.5752C17.0752 7 17.5085 7.16667 17.8752 7.5C18.2418 7.83333 18.4668 8.24167 18.5502 8.725L19.9752 18.725C20.0585 19.325 19.9045 19.8543 19.5132 20.313C19.1218 20.7717 18.6175 21.0007 18.0002 21H6.00016C5.3835 21 4.87916 20.771 4.48716 20.313C4.09516 19.855 3.94116 19.3257 4.02516 18.725L5.45016 8.725C5.5335 8.24167 5.7585 7.83333 6.12516 7.5C6.49183 7.16667 6.92517 7 7.42517 7H9.17517C9.12516 6.83333 9.0835 6.671 9.05017 6.513C9.01683 6.355 9.00016 6.184 9.00016 6C9.00016 5.16667 9.29183 4.45833 9.87516 3.875C10.4585 3.29167 11.1668 3 12.0002 3C12.8335 3 13.5418 3.29167 14.1252 3.875C14.7085 4.45833 15.0002 5.16667 15.0002 6C15.0002 6.18333 14.9835 6.35433 14.9502 6.513C14.9168 6.67167 14.8752 6.834 14.8252 7Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const RulerIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(iconSize, className)}
    >
      <path
        d='M9.25 2C8.65326 2 8.08097 2.23705 7.65901 2.65901C7.23705 3.08097 7 3.65326 7 4.25V19.75C7 20.3467 7.23705 20.919 7.65901 21.341C8.08097 21.7629 8.65326 22 9.25 22H14.75C15.3467 22 15.919 21.7629 16.341 21.341C16.7629 20.919 17 20.3467 17 19.75V4.25C17 3.65326 16.7629 3.08097 16.341 2.65901C15.919 2.23705 15.3467 2 14.75 2H9.25ZM8.5 19H10.25C10.4489 19 10.6397 18.921 10.7803 18.7803C10.921 18.6397 11 18.4489 11 18.25C11 18.0511 10.921 17.8603 10.7803 17.7197C10.6397 17.579 10.4489 17.5 10.25 17.5H8.5V16H12.25C12.4489 16 12.6397 15.921 12.7803 15.7803C12.921 15.6397 13 15.4489 13 15.25C13 15.0511 12.921 14.8603 12.7803 14.7197C12.6397 14.579 12.4489 14.5 12.25 14.5H8.5V12.75H10.25C10.4489 12.75 10.6397 12.671 10.7803 12.5303C10.921 12.3897 11 12.1989 11 12C11 11.8011 10.921 11.6103 10.7803 11.4697C10.6397 11.329 10.4489 11.25 10.25 11.25H8.5V9.5H12.25C12.4489 9.5 12.6397 9.42098 12.7803 9.28033C12.921 9.13968 13 8.94891 13 8.75C13 8.55109 12.921 8.36032 12.7803 8.21967C12.6397 8.07902 12.4489 8 12.25 8H8.5V6.5H10.25C10.4489 6.5 10.6397 6.42098 10.7803 6.28033C10.921 6.13968 11 5.94891 11 5.75C11 5.55109 10.921 5.36032 10.7803 5.21967C10.6397 5.07902 10.4489 5 10.25 5H8.5V4.25C8.5 4.05109 8.57902 3.86032 8.71967 3.71967C8.86032 3.57902 9.05109 3.5 9.25 3.5H14.75C14.9489 3.5 15.1397 3.57902 15.2803 3.71967C15.421 3.86032 15.5 4.05109 15.5 4.25V19.75C15.5 19.9489 15.421 20.1397 15.2803 20.2803C15.1397 20.421 14.9489 20.5 14.75 20.5H9.25C9.05109 20.5 8.86032 20.421 8.71967 20.2803C8.57902 20.1397 8.5 19.9489 8.5 19.75V19Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const ChevronLeftIcon = ({ className = '' }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 28 28'
    fill='none'
    className={clsx(iconSize, className)}
  >
    <path
      d='M16.3333 8.16683L10.5 14.0002L16.3333 19.8335'
      stroke='currentColor'
      strokeWidth='2.33333'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
