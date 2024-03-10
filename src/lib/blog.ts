import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

import type { Post } from './types';

export const getPosts = async (): Promise<Post[]> => {
  const postDir = path.join(process.cwd(), 'src/data/blog');
  const files = await readdir(postDir);

  const posts = await Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(postDir, fileName);
      const fileContents = await readFile(filePath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const {
        content,
        data: { title, created, updated = null, ogImage, tags, summary },
      } = matter(fileContents);

      return {
        title,
        slug: fileName.replace('.md', ''),
        created,
        updated,
        ogImage,
        tags,
        summary,
        content,
      } as Post;
    })
  );

  return posts;
};
