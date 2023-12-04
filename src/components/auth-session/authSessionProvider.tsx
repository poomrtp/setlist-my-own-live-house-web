'use client';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function AuthSessionProvider({
  session,
  children,
}: {
  children: React.ReactNode;
  session: Session | null | undefined;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') return;
    if (!session || !session.user) {
      router.push('/');
    }
  }, [session, router, pathname]);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default AuthSessionProvider;
