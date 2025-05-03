// src/features/shared/widgets/PageHeader.tsx

import { Title } from '@/features/shared/ui/Title';
import { BackButton } from './BackButton';

type PageHeaderProps = {
  title: string;
};

export const PageHeader = ({ title }: PageHeaderProps) => (
  <div className='flex items-center justify-between'>
    <Title variant='md'>{title}</Title>
    <BackButton />
  </div>
);
