import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

type ProjectImageProps = {
  src: string;
  clicked: boolean;
};

export const ProjectImage = ({ src, clicked }: ProjectImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-full w-full">
      <Image
        className={cn(
          'rounded-t-lg object-cover absolute',
          clicked ? 'opacity-0 transition-all duration-500' : 'opacity-100',
        )}
        alt="Project image"
        src={src.startsWith('local:') ? src.replace('local:', '/images/') : src}
        fill
        onLoad={() => setIsLoading(false)}
      />
      <Skeleton
        className={cn(
          'rounded-none rounded-t-lg absolute bg-gray-400 dark:bg-gray-600 h-full w-full',
          !isLoading && 'hidden',
        )}
      />
    </div>
  );
};
