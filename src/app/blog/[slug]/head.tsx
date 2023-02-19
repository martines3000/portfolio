/* eslint-disable @next/next/no-css-tags */

import { getPosts } from '../../../lib/blog';
import { getOrigin } from '../../../lib/getOrigin';
import ogImage from '../../../lib/ogImage';

export default async function Head({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const posts = (await getPosts()) || [];

  let post = posts.find((post) => post.slug === slug);

  if (!post)
    post = {
      slug: slug,
      title: '',
      summary: 'The blog post you are looking for does not exist.',
      created: new Date().toISOString(),
      updated: null,
      content: '',
      tags: [],
    };

  const image = ogImage({
    title: post.title !== '' ? post.title : '404 Not Found',
    url: post.ogImage,
  });

  const origin = getOrigin();

  return (
    <>
      {post.title !== '' && <title>{`${post.title} | Martin Domajnko`}</title>}
      <link
        href="/themes/tomorrow-night-bright.css"
        rel="stylesheet"
        media="(prefers-color-scheme: dark)"
        // @ts-ignore
        precedence="default"
      ></link>
      <link
        href="/themes/github.css"
        rel="stylesheet"
        media="(prefers-color-scheme: light)"
        // @ts-ignore
        precedence="default"
      ></link>
      <meta content={post.summary} name="description" />
      <meta property="og:url" content={`${origin}/blog/${post.slug}`} />
      <link rel="canonical" href={`${origin}/blog/${post.slug}`} />
      <meta property="og:description" content={post.summary} />
      <meta property="og:title" content={post.title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:url" content={image}></meta>
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.summary} />
      <meta name="twitter:image" content={image} />
      <meta property="article:published_time" content={post.created} />
      <meta
        property="article:updated_time"
        content={post.updated ?? post.created}
      />
    </>
  );
}
