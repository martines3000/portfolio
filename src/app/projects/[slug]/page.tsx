import { markdownToHtml } from '../../../lib/markdown';
import { notFound } from 'next/navigation';
import { Project } from '../../../lib/types';
import { getProjects } from '../../../lib/projects';
import { Metadata } from 'next';
import ogImage from '../../../lib/ogImage';
import { getOrigin } from '../../../lib/getOrigin';
import { format } from 'date-fns';
import { ExternalLink } from '../../../components/ExternalLink';

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const projects = (await getProjects()) || [];

  let project = projects.find((project) => project.slug === slug);

  if (!project) return;

  const image = ogImage({
    title: project.title,
    url: project.ogImage,
  });

  const origin = getOrigin();

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      publishedTime: project.created,
      type: 'article',
      url: `${origin}/project/${project.slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [image],
    },
  };
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const project = await getProject(slug);

  return (
    <div>
      <div className="mb-10">
        <h1 className="mb-4 text-center text-3xl font-bold md:text-5xl">
          {project.title}
        </h1>
        <p className="my-4 text-center text-gray-600 dark:text-gray-300">
          {format(new Date(project.created), 'PPP')}
        </p>
        {project.updated && (
          <p className="my-4 text-center text-gray-600 dark:text-gray-300">
            Last updated: {format(new Date(project.updated), 'PPP')}
          </p>
        )}
        <div className="flex flex-wrap justify-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 flex w-full justify-center gap-x-4">
          {project.website && (
            <ExternalLink href={project.website} value="Website" />
          )}
          {project.repository && (
            <ExternalLink href={project.repository} value="Repository" />
          )}
        </div>
      </div>
      <div className="h-full w-full">
        <article className="prose max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
          <div
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: project.content }}
          ></div>
        </article>
      </div>
    </div>
  );
};

export default Page;

const getProject = async (slug: string): Promise<Project> => {
  const projects = (await getProjects()) || [];

  const project = projects.find((projects) => projects.slug === slug);

  if (!project) notFound();

  return {
    ...project,
    content: markdownToHtml(project.content),
  };
};

export async function generateStaticParams() {
  const projects = (await getProjects()) || [];
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
