import { markdownToHtml } from '@/lib/markdown';
import { getProjects } from '@/lib/projects';
import type { Project } from '@/lib/types';
import Projects from './client';
import { Skeleton } from '@/components/ui/skeleton';
import { ProjectCardSkeleton } from '@/components/ProjectCard';

const getProjectsWithHtml = async (): Promise<Project[]> => {
  const projects = (await getProjects()) || [];

  // SLeep 3s to simulate loading
  await new Promise((r) => setTimeout(r, 3000));

  return projects.map((project) => ({
    ...project,
    content: markdownToHtml(project.summary),
  }));
};

export const ProjectsShowcase = async () => {
  const projects = await getProjectsWithHtml();
  return <Projects projects={projects} />;
};

export const ProjectShowcaseSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-[42px] mb-10" />
      <div className="flex w-full flex-wrap justify-center gap-x-6 gap-y-12 pb-12">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </div>
  );
};
