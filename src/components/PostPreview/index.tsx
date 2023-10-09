import { Suspense } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import { Post } from '@/lib/types';
import ViewsDisplay from '@/components/ViewsDisplay';

export const PostPreview = ({ title, slug, created, content }: Post) => {
  return (
    <Link className="cursor-pointer" key={slug} href={`/blog/${slug}`}>
      <div className="mb-8">
        <h1 className="text-lg font-bold md:text-xl">{title}</h1>
        <div className="mt-2 flex flex-row items-center justify-between">
          <p className="text-sm font-light text-gray-600 dark:text-gray-100 md:text-base">
            {format(new Date(created), 'PPP')}
          </p>
          <p className="text-sm font-light text-gray-600 dark:text-gray-100 md:text-base">
            <Suspense fallback={<span>...</span>}>
              <ViewsDisplay slug={slug} />
            </Suspense>
          </p>
        </div>
        <div className="mt-4 sm:pr-20">
          <div
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </Link>
  );
};
