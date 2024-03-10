'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className={`flex h-[28px] w-[28px] items-center justify-center rounded-lg bg-gray-200 hover:outline hover:outline-2 hover:outline-gray-500 dark:bg-gray-800
       ${resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
      type="button"
      onClick={toggleTheme}
      aria-label="Theme toggle"
    >
      {resolvedTheme === 'dark' ? (
        <MoonIcon className={'h-[14px] w-[14px] fill-current'} />
      ) : (
        <SunIcon className={'h-[14px] w-[14px] fill-current'} />
      )}
    </button>
  );
};

export default ToggleTheme;
