'use client';
import { useEffect, useMemo, useState } from 'react';
import { PostPreview } from '../../components/PostPreview';
import { Post } from '../../lib/types';

const Blog = ({ posts }: { posts: Post[] }) => {
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      ),
    [search, posts]
  );

  useEffect(() => {
    posts.sort((a, b) => (new Date(a.created) < new Date(b.created) ? 1 : -1));
  }, [posts]);

  return (
    <>
      <div className="relative mb-10 w-full">
        <input
          className="block w-full rounded-md border border-sky-800 bg-white px-4 py-2 text-gray-600 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-800 dark:text-gray-300"
          placeholder="Search posts"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <h1 className="mb-4 text-2xl font-bold md:text-4xl">All posts</h1>
      {filteredPosts.length === 0 && (
        <div className="text-gray-600 dark:text-gray-300">No posts found</div>
      )}
      <div>
        {filteredPosts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </>
  );
};

export default Blog;
