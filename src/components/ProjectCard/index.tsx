'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import Chip from '../Chip';

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

  // 3D card with a shadow that flips on hover (Tailwind CSS)
  return (
    <div className="group relative h-96 w-64 [perspective:1000px]">
      <div
        onClick={toggleClicked}
        className={clsx(
          'relative h-full w-full rounded-lg bg-gray-200 shadow-xl transition-transform duration-500 [transform-style:preserve-3d] dark:bg-gray-800',
          clicked ? '[transform:rotateY(180deg)]' : '',
        )}
      >
        <div className=" absolute h-64 w-full cursor-pointer select-none rounded-t-lg bg-inherit">
          <Image
            className={clsx(
              'rounded-t-lg object-cover',
              clicked ? 'opacity-0 transition-all duration-500' : 'opacity-100',
            )}
            alt="Project image"
            src={
              image.startsWith('local:')
                ? image.replace('local:', '/images/')
                : image
            }
            fill
          />
        </div>
        <div className="h-64 w-full cursor-pointer select-none text-clip rounded-t-lg border-b-2 border-sky-800 bg-inherit p-4 text-left [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="line-clamp-9">{description}</p>
        </div>
        <div
          onClick={(e) => {
            // TODO: Open project page
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
              className={clsx(
                'text-center text-2xl font-semibold tracking-tight underline transition-transform duration-500 [transform-style:preserve-3d]',
                clicked ? '[transform:rotateY(180deg)]' : '',
              )}
            >
              {title}
            </h2>
          </Link>
        </div>
        <div className="absolute bottom-0 w-full">
          <div
            className={clsx(
              'absolute -bottom-4 flex w-full justify-center gap-2 tracking-tight',
            )}
          >
            {tags.map((tag) => (
              <Chip
                key={tag}
                className={clsx(
                  'transition-transform duration-500 [transform-style:preserve-3d]',
                  clicked ? '[transform:rotateY(180deg)]' : '',
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
