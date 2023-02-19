import { markdownToHtml } from '../../../lib/markdown';
import { notFound } from 'next/navigation';
import { Project } from '../../../lib/types';
import { getProjects } from '../../../lib/projects';

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const project = await getProject(slug);

  return (
    <div>
      <div className="mb-10">
        <h1 className="mb-4 text-center text-3xl font-bold md:text-5xl">
          {project.title}
        </h1>
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
