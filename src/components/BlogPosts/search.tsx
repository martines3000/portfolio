'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(window.location.search);

    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="relative mb-10 w-full">
      <input
        className="block w-full rounded-md border border-sky-800 bg-white px-4 py-2 text-gray-600 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-800 dark:text-gray-300"
        placeholder="Search posts"
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />

      <svg
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
