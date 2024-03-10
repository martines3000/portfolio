'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';

interface PopoverProps {
  children: React.ReactNode;
  description: string;
}

const Popover = ({ children, description }: PopoverProps) => {
  return (
    <div className="relative inline-block text-left">
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="center"
            sideOffset={4}
            className={clsx(
              'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down z-40',
              'w-48 rounded-lg p-4 shadow-md md:w-56',
              'bg-white dark:bg-gray-800'
            )}
          >
            <PopoverPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />
            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
              Description
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>

            <PopoverPrimitive.Close
              aria-label="Close"
              className={clsx(
                'absolute right-3.5 top-4 inline-flex items-center justify-center rounded-full p-1',
                'focus:outline-none focus-visible:ring focus-visible:ring-sky-500/75'
              )}
            >
              <XMarkIcon className="h-4 w-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" />
            </PopoverPrimitive.Close>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  );
};

export default Popover;
