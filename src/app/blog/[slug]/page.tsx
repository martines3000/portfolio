import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

import { getPosts } from '@/lib/blog';
import { getOrigin } from '@/lib/getOrigin';
import { markdownToHtml } from '@/lib/markdown';
import ogImage from '@/lib/ogImage';
import { Post } from '@/lib/types';
import ViewsDisplay from '@/components/ViewsDisplay';

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const posts = (await getPosts()) || [];

  const post = posts.find((post) => post.slug === slug);

  if (!post) return;

  const image = ogImage({
    title: post.title,
    url: post.ogImage,
  });

  const origin = getOrigin();

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      publishedTime: post.created,
      type: 'article',
      url: `${origin}/blog/${post.slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [image],
    },
  };
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await getBlogPost(slug);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-center text-3xl font-bold md:text-5xl">
          {post.title}
        </h1>
        <p className="my-4 text-center text-gray-600 dark:text-gray-300">
          {format(new Date(post.created), 'PPP')}
          {' • '}
          {
            <Suspense fallback={<span>...</span>}>
              <ViewsDisplay slug={slug} increment={true} />
            </Suspense>
          }
        </p>
        {post.updated && (
          <p className="my-4 text-center text-gray-600 dark:text-gray-300">
            Last updated: {format(new Date(post.updated), 'PPP')}
          </p>
        )}
        <div className="flex flex-wrap justify-center">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="h-full w-full">
        <article className="prose max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
          <div
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </article>
      </div>
    </div>
  );
};

export default Page;

const getBlogPost = async (slug: string): Promise<Post> => {
  const posts = (await getPosts()) || [];

  const post = posts.find((post) => post.slug === slug);

  if (!post) notFound();

  return {
    ...post,
    content: markdownToHtml(post.content),
  };
};

export async function generateStaticParams() {
  const posts = (await getPosts()) || [];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
