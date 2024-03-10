import { getPosts } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import type { Post } from '@/lib/types';
import { PostPreview } from '../PostPreview';
import Search from './search';

const getBlogPosts = async ({
  search,
}: {
  search: string;
}): Promise<Post[]> => {
  const allPosts = (await getPosts()) || [];

  const posts = search
    ? allPosts.filter((post) => post.title.toLowerCase().includes(search))
    : allPosts;

  return posts.map((post) => ({
    ...post,
    content: markdownToHtml(post.summary),
  }));
};

const BlogPosts = async ({ search }: { search: string }) => {
  const posts = await getBlogPosts({ search });

  return (
    <>
      <Search />
      <h1 className="mb-4 text-2xl font-bold md:text-4xl">All posts</h1>
      {posts.length === 0 && (
        <div className="text-gray-600 dark:text-gray-300">No posts found</div>
      )}
      <div>
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </>
  );
};

export default BlogPosts;
