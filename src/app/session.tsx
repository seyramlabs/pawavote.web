/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { SessionProvider } from 'next-auth/react';

import { TanstackQueryProvider } from '@/hooks/tankstack';

// import { Session } from 'next-auth'

export const ProviderSession = ({ children, session }: { children: React.ReactNode; session: any }) => {
  return (
    <SessionProvider session={session}>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </SessionProvider>
  )
}
