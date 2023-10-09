import { markdownToHtml } from '@/lib/markdown';
import { getProjects } from '@/lib/projects';
import { Project } from '@/lib/types';
import Projects from './client';

const getProjectsWithHtml = async (): Promise<Project[]> => {
  const projects = (await getProjects()) || [];

  return projects.map((project) => ({
    ...project,
    content: markdownToHtml(project.summary),
  }));
};

const ProjectsShowcase = async () => {
  const projects = await getProjectsWithHtml();
  return <Projects projects={projects} />;
};

export default ProjectsShowcase;
