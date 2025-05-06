// src/features/shared/widgets/ClientGuard.tsx

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingStatusMessage } from './LoadingStatusMessage';

interface ClientGuardProps {
  children: React.ReactNode;
}

export default function ClientGuard({ children }: ClientGuardProps) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const fromInternal = sessionStorage.getItem('fromInternalNavigation');
    if (fromInternal === 'true') {
      setAllowed(true);
      sessionStorage.removeItem('fromInternalNavigation');
    }
    setChecked(true);
  }, []);

  useEffect(() => {
    if (checked && !allowed) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        router.replace('/');
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [checked, allowed, router]);

  if (!checked) return null;

  if (!allowed) {
    return (
      <LoadingStatusMessage
        title='Access Denied'
        description={`Redirecting to the homepage in ${countdown} second${
          countdown !== 1 ? 's' : ''
        }`}
      />
    );
  }

  return <>{children}</>;
}
