'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

type ProfileImageProps = {
  src: string;
  alt: string;
};

export const ProfileImage = ({ src, alt }: ProfileImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-[171px] w-[256px]">
      <Image
        className="absolute rounded-lg shadow-md object-cover"
        src={src}
        alt={alt}
        width={256}
        height={171}
        quality={85}
        onLoad={() => setIsLoading(false)}
      />
      <Skeleton
        className={cn(
          'absolute rounded-lg bg-gray-200 dark:bg-gray-800 h-[171px] w-[256px]',
          !isLoading && 'hidden',
        )}
      />
    </div>
  );
};
