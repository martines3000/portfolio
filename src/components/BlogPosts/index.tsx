import { getPosts } from '../../lib/blog';
import { markdownToHtml } from '../../lib/markdown';
import { Post } from '../../lib/types';
import Blog from './client';

const getBlogPosts = async (): Promise<Post[]> => {
  const posts = (await getPosts()) || [];

  return posts.map((post) => ({
    ...post,
    content: markdownToHtml(post.summary),
  }));
};

const BlogPosts = async () => {
  const posts = await getBlogPosts();

  return <Blog posts={posts} />;
};

export default BlogPosts;
