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

export const GitHubIcon = ({ className = '' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={clsx(iconSize, className)}
  >
    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
    <path d='M9 18c-4.51 2-5-2-7-2' />
  </svg>
);

export const LinkedInIcon = ({ className = '' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={clsx(iconSize, className)}
  >
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
    <rect width='4' height='12' x='2' y='9' />
    <circle cx='4' cy='4' r='2' />
  </svg>
);

export const InstagramIcon = ({ className = '' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={clsx(iconSize, className)}
  >
    <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
  </svg>
);

export const WhatsAppIcon = ({ className = '' }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={clsx(iconSize, className)}
  >
    <path
      d='M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z'
      fill='currentColor'
    />
  </svg>
);

export const MailIcon = ({ className = '' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={clsx(iconSize, className)}
  >
    <path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' />
    <rect x='2' y='4' width='20' height='16' rx='2' />
  </svg>
);

export const GlobeIcon = ({ className = '' }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={clsx(iconSize, className)}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.05493 11H7.03227C7.21079 8.23716 8.12575 5.58161 9.6685 3.30493C6.13988 4.24871 3.46579 7.2833 3.05493 11ZM12 3.51468C10.2747 5.64943 9.2404 8.26127 9.03706 11H14.9629C14.7596 8.26127 13.7253 5.64943 12 3.51468ZM14.9629 13H9.03706C9.2404 15.7387 10.2747 18.3506 12 20.4853C13.7253 18.3506 14.7596 15.7387 14.9629 13ZM9.6685 20.6951C8.12575 18.4184 7.21079 15.7628 7.03227 13H3.05493C3.46579 16.7167 6.13988 19.7513 9.6685 20.6951ZM14.3315 20.6951C15.8743 18.4184 16.7892 15.7628 16.9677 13H20.9451C20.5342 16.7167 17.8601 19.7513 14.3315 20.6951ZM20.9451 11H16.9677C16.7892 8.23716 15.8743 5.58161 14.3315 3.30493C17.8601 4.24871 20.5342 7.2833 20.9451 11ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z'
      fill='currentColor'
    />
  </svg>
);
