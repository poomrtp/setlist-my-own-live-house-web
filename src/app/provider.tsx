'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

interface IProviderProps {
  children?: ReactNode;
}

export default function Provider({ children }: IProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return <ThemeProvider>{children}</ThemeProvider>;
}
