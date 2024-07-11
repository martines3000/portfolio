'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Chip } from '@/components/Chip';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';
import { ProjectImage } from './ProjectImage';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectCard = ({
  slug,
  title,
  description,
  tags,
  image,
}: ProjectCardProps) => {
  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked((current) => !current);
  };

  return (
    <div className="group relative h-96 w-64 [perspective:1000px]">
      <div
        onClick={toggleClicked}
        className={cn(
          'relative h-full w-full rounded-lg bg-gray-200 shadow-xl transition-transform duration-500 [transform-style:preserve-3d] dark:bg-gray-800',
          clicked && '[transform:rotateY(180deg)]',
        )}
      >
        <div className="absolute h-64 w-full cursor-pointer select-none rounded-t-lg bg-inherit">
          <ProjectImage src={image} clicked={clicked} />
        </div>
        <div className="h-64 w-full cursor-pointer select-none text-clip rounded-t-lg border-b-2 border-sky-800 bg-inherit p-4 text-left [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="line-clamp-9">{description}</p>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute bottom-0 left-0 flex h-2/6 w-full items-center justify-center p-4"
        >
          <Link
            className="cursor-pointer"
            key={slug}
            href={`/projects/${slug}`}
          >
            <h2
              className={cn(
                'text-center text-2xl font-semibold tracking-tight underline transition-transform duration-500 [transform-style:preserve-3d]',
                clicked && '[transform:rotateY(180deg)]',
              )}
            >
              {title}
            </h2>
          </Link>
        </div>
        <div className="absolute bottom-0 w-full">
          <div
            className={cn(
              'absolute -bottom-4 flex w-full justify-center gap-2 tracking-tight',
            )}
          >
            {tags.map((tag) => (
              <Chip
                key={tag}
                className={cn(
                  'transition-transform duration-500 [transform-style:preserve-3d]',
                  clicked && '[transform:rotateY(180deg)]',
                )}
                color="blue"
                label={tag}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

export const ProjectCardSkeleton = () => {
  return (
    <div className="relative">
      <Skeleton className="h-96 w-64" />
    </div>
  );
};
