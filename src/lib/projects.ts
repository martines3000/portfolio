import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

import { Project } from './types';

export const getProjects = async (): Promise<Project[]> => {
  const projectsDir = path.join(process.cwd(), 'src/data/projects');
  const files = await readdir(projectsDir);

  const projects = await Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(projectsDir, fileName);
      const fileContents = await readFile(filePath, 'utf8');

      // Use gray-matter to parse the project metadata section
      const {
        content,
        data: {
          title,
          created,
          updated = null,
          summary,
          tags,
          ogImage,
          repository,
          website,
        },
      } = matter(fileContents);

      return {
        title,
        slug: fileName.replace('.md', ''),
        created,
        updated,
        tags,
        summary,
        content,
        ogImage,
        repository,
        website,
      } as Project;
    }),
  );

  return projects;
};
