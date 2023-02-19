---
title: Portfolio website built with Next.js and Markdown
created: '2023-02-12T08:00:00.000Z'
summary: Building my portfolio website using Next.js 13, PlanetScale, Prisma, DatoCMS and Tailwind.
tags: ['Next.js', 'Markdown', 'PlanetScale', 'Prisma', 'DatoCMS', 'Tailwind']
---

## Introduction

I would like to welcome you to my portfolio website. This project has been on my to-do list for a long time now, but university assignments, work, and a bunch of side projects kept delaying it for longer than I wanted. Being in my last semester of studies and having extra spare time, I finally decided to pull the trigger and build it. I'm eager to not only showcase my skills and accomplishments, but also learn about the exciting new features of Next.js 13 Beta. I've also decided to include technologies like PlanetScale, Prisma, and DatoCMS to add some extra challenge and keep my learning experience fresh and engaging. I also took inspiration from [leerob.io](https://leerob.io/), [thvu.dev](https://www.thvu.dev/), [styfle.dev](https://styfle.dev/) and [brianlovin.com](https://brianlovin.com/)

## Tecnologies used

- **Framework:** [Next.js](https://nextjs.org/)
- **Deployed with:** [Vercel](https://vercel.com/home)
- **CMS:**: [DatoCMS](https://www.datocms.com/)
- **CSS:** [Tailwind](https://tailwindcss.com/)
- **DB:** [PlanetScale](https://planetscale.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Markdown compiler**: [Marked](https://github.com/markedjs/marked)

## A Focus on Simplicity and Maintainability

The main reason I decided to build my own portfolio website was to have a platform to showcase my skills, accomplishments, and passion for technology. I wanted a space where I could share my projects and write about my experiences in a way that was easily maintainable and accessible. This is why I decided to build my portfolio by combining the power of Next.js and the simplicity of writing in Markdown. With a background of building my frontend projects using Next.js and taking notes with [Obsidian](https://obsidian.md/), I already had a good amount of experience with both technologies.

## Markdown

The Markdown content for the website is stored in the `/data` directory and is split into `blog` and `projects` subdirectories. Using dynamic route segments `/blog/[slug]` and `generateStaticParams` the blog posts and projects are read at build time from the disk and statically rendered. In addition, I included extra metadata about my projects and blog posts in the front-matter of the Markdown files and utilized [gray-matter](https://github.com/jonschlinkert/gray-matter) to parse it.

```ts
// Function showing how posts are read and the extraction of their metadata
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
      };
    })
  );

  return posts;
};
```

The markdown is transformed into HTML using the [marked](https://github.com/markedjs/marked) library and code sections are highlighted with the help of [highlight.js](https://highlightjs.org/) prior to its display.

## DatoCMS

I use DatoCMS to keep my profile picture and information for the about page. This information is retrieved through the GraphQL API, and the CMS offers a convenient and user-friendly interface.

## Prisma & PlanetScale

I use Prisma and PlanetScale combined with Next.js API routes to track my blog views. It was straightforward to set up and didn't require much code to get it up and running. I really enjoy using PlanetScale because it offers many insights into the queries, automatic backups and a nice way to manage the database using branches. This will help with future upgrades. On top of all the features, it is also very performant.

## Spotify Web API

As a music fan, I wanted to showcase what I'm listening to on my website. The Spotify Web API provides an easy way to share the song I'm jamming to in real-time. It also has the benefit of adding a personal touch to my site and lets others see my music taste. In the future, I'll probably update the component with some nice CSS animations.

For now the component looks like this:
![Spotify component](/images/spotify.png)

It includes the song title, the artist and the album cover image.
