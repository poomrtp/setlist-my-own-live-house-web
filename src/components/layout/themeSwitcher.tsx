'use client';

import { MoonIcon, SunIcon } from '@/icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function onSwitch() {
    const switchTo = theme === 'light' ? 'dark' : 'light';
    setTheme(switchTo);
  }

  if (!mounted) return <></>;

  return (
    <div>
      <button
        className="swap swap-rotate btn btn-ghost btn-circle"
        onClick={() => onSwitch()}
      >
        <input type="checkbox" />
        <SunIcon
          className={`${
            theme === 'light' ? 'swap-off' : 'swap-on'
          } fill-current`}
        />
        <MoonIcon
          className={`${
            theme === 'dark' ? 'swap-off' : 'swap-on'
          } fill-current`}
        />
      </button>
    </div>
  );
}
