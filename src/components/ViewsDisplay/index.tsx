import { getOrigin } from '@/lib/getOrigin';
import { Views } from '@/lib/types';

interface ViewsDisplayProps {
  slug: string;
  increment?: boolean;
}

const ViewsDisplay = async ({ slug, increment }: ViewsDisplayProps) => {
  try {
    // Fetching all views makes less requests (also reading from cache is improved)
    const response = await fetch(`${getOrigin()}/api/views`, {
      cache: 'no-cache',
    });
    const data = (await response.json()) as Views[];

    if (increment) {
      await fetch(`${getOrigin()}/api/views/${slug}`, {
        cache: 'no-cache',
        method: 'POST',
      });
    }

    const currentBlogData = data?.find((view) => view.id === slug);
    const views = currentBlogData ? currentBlogData.count : 0;
    return <span>{`${data ? views : '...'} views`}</span>;
  } catch (e) {
    return <span>...</span>;
  }
};

export default ViewsDisplay;
