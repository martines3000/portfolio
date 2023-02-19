'use client';

import { useEffect } from 'react';
import { Views } from '../../lib/types';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

type ViewsDisplayProps = {
  slug: string;
  increment?: boolean;
};

const ViewsDisplay = ({ slug, increment }: ViewsDisplayProps) => {
  // Fetching all views makes less requests (also reading from cache is improved)
  const { data } = useSWR<Views[]>(`/api/views`, fetcher);
  const currentBlogData = data && data.find((view) => view.id === slug);
  const views = currentBlogData ? currentBlogData.count : 0;

  useEffect(() => {
    const incrementView = () => {
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
    };

    if (increment) incrementView();
  }, [slug, increment]);

  return <span>{`${data ? views : '...'} views`}</span>;
};

export default ViewsDisplay;
