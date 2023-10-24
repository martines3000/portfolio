import { getOrigin } from '@/lib/getOrigin';
import { Views } from '@/lib/types';

export const dynamic = 'force-dynamic';

interface ViewsDisplayProps {
  slug: string;
  increment?: boolean;
}

const ViewsDisplay = async ({ slug, increment }: ViewsDisplayProps) => {
  try {
    // Fetching all views makes less requests (also reading from cache is improved)
    const response = await fetch(`${getOrigin()}/api/views`);
    const data = (await response.json()) as Views[];

    if (increment) {
      await fetch(`${getOrigin()}/api/views/${slug}`, {
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
