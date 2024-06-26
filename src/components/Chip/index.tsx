import clsx from 'clsx';

import Popover from '@/components/Popover';
import { Skeleton } from '@/components/ui/skeleton';

export const chipColors = ['green', 'yellow', 'red', 'gray', 'blue'] as const;

interface ChipProps {
  label: string;
  color: (typeof chipColors)[number];
  description?: string;
  className?: string;
}

export const Chip = ({ label, color, description, className }: ChipProps) => {
  const colorVariants = {
    green:
      'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200 border-green-400 dark:border-green-400',
    yellow:
      'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200 border-yellow-400 dark:border-yellow-400',
    red: 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200 border-red-400 dark:border-red-400',
    gray: 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-400 dark:border-gray-400',
    blue: 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200 border-blue-400 dark:border-blue-400',
  };

  if (description)
    return (
      <Popover description={description}>
        <button
          type="button"
          className={clsx(
            colorVariants[color],
            'cursor-pointer select-none rounded-full border-2 px-3 py-1 text-sm font-medium',
          )}
        >
          {label}
        </button>
      </Popover>
    );

  return (
    <span
      className={clsx(
        className,
        colorVariants[color],
        'select-none rounded-full border-2 px-3 py-1 text-sm font-medium',
      )}
    >
      {label}
    </span>
  );
};
