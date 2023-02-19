'use client';

import Link from 'next/link';
import { headerLinks } from '../../constants/headerLinks';
import { useNavStore } from '../../stores/navStore';
import Spotify from '../Spotify';
import { SidebarOverlay } from './overlay';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const isOpen = useNavStore((state) => state.isOpen);
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`${
          isOpen
            ? 'absolute inset-y-0 left-0 translate-x-0'
            : 'absolute -translate-x-full'
        } z-30 flex h-full max-h-screen min-h-screen w-2/3 flex-none flex-col overflow-y-auto border-r-2 border-sky-800 bg-gray-300 transition-transform duration-200 ease-in-out dark:bg-black sm:w-1/3 lg:relative lg:w-44 lg:translate-x-0`}
      >
        <div className="flex h-12 items-center justify-start border-b-2 border-sky-800 p-3">
          <h1 className="text-sm font-semibold dark:text-white">
            Martin Domajnko
          </h1>
        </div>
        <div className="flex-1 p-3">
          <ul className="space-y-1">
            {headerLinks.map((link) => (
              <li
                key={link.title}
                className={`w-full rounded hover:bg-gray-400 dark:hover:bg-gray-700 ${
                  pathname === link.href ||
                  (pathname &&
                    pathname.split('/').length > 2 &&
                    `/${pathname.split('/')[1]}` === link.href)
                    ? 'bg-gray-400 dark:bg-gray-700'
                    : ''
                }`}
              >
                <Link
                  className="flex items-center space-x-2 p-2 text-lg font-medium"
                  href={link.href}
                  title={link.title}
                >
                  <span>
                    <link.icon className="h-6 w-6" />
                  </span>
                  <span className="h-6 flex-1 text-lg">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <hr className="my-1 border-sky-800" />
        </div>
        <div className="p-3">
          <Spotify />
        </div>
      </nav>
      <SidebarOverlay />
    </>
  );
};

export default Menu;
