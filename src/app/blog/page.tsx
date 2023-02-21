import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogPosts from '../../components/BlogPosts';
import ogImage from '../../lib/ogImage';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Here, you'll find a collection of my thoughts and experiences using different technology.",
  openGraph: {
    images: [ogImage({ title: 'Blog' })],
  },
};

export default async function Page() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl font-bold md:text-5xl">Blog</h1>
      <p className="my-4 text-gray-600 dark:text-gray-300">
        Welcome to my tech blog! Here, you&apos;ll find a collection of my
        thoughts and experiences using different technology. From personal
        projects to industry insights, I hope to provide interesting and
        engaging content for my readers. Be sure to check out my latest posts
        below. Thanks for stopping by!
      </p>
      <Suspense fallback={null}>
        {/* @ts-expect-error Async Server Component */}
        <BlogPosts />
      </Suspense>
    </div>
  );
}
