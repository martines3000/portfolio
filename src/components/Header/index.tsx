'use client';

import { Bars3Icon } from '@heroicons/react/24/solid';

import { useNavStore } from '@/stores/navStore';
import ToggleTheme from '../ToggleTheme';

const Header = () => {
  const setIsOpen = useNavStore((state) => state.setIsOpen);

  return (
    <div className="z-50 flex h-12 w-full items-center justify-start border-b-2 border-sky-800 bg-white p-3 dark:bg-black">
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex"
          aria-label="Menu toggle"
        >
          <Bars3Icon className="h-[28px] w-[28px]" />
        </button>
      </div>
      <div className="ml-3 flex w-full flex-1 justify-end">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
