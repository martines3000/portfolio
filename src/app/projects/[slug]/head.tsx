/* eslint-disable @next/next/no-css-tags */

import { getProjects } from '../../../lib/projects';
import { getOrigin } from '../../../lib/getOrigin';
import ogImage from '../../../lib/ogImage';

export default async function Head({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const projects = (await getProjects()) || [];

  let project = projects.find((project) => project.slug === slug);

  if (!project)
    project = {
      slug: slug,
      title: '',
      summary: 'The project you are looking for does not exist.',
      created: new Date().toISOString(),
      updated: null,
      content: '',
      tags: [],
      ogImage: '',
    };

  const image = ogImage({
    title: project.title !== '' ? project.title : '404 Not Found',
    url: project.ogImage,
  });

  const origin = getOrigin();

  return (
    <>
      {project.title !== '' && (
        <title>{`${project.title} | Martin Domajnko`}</title>
      )}
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
      <meta content={project.summary} name="description" />
      <meta property="og:url" content={`${origin}/blog/${project.slug}`} />
      <link rel="canonical" href={`${origin}/blog/${project.slug}`} />
      <meta property="og:description" content={project.summary} />
      <meta property="og:title" content={project.title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:url" content={image}></meta>
      <meta name="twitter:title" content={project.title} />
      <meta name="twitter:description" content={project.summary} />
      <meta name="twitter:image" content={image} />
      <meta property="article:published_time" content={project.created} />
      <meta
        property="article:updated_time"
        content={project.updated ?? project.created}
      />
    </>
  );
}
