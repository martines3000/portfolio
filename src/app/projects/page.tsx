import { Suspense } from 'react';
import ProjectsShowcase from '../../components/ProjectsShowcase';

export default async function Page() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl font-bold md:text-5xl">Projects</h1>
      <p className="my-4 text-gray-600 dark:text-gray-300">
        Welcome to my projects page! This is where I present projects I worked
        on professionally and things I built for fun in my free time.
      </p>
      <Suspense fallback={null}>
        {/* @ts-expect-error Async Server Component */}
        <ProjectsShowcase />
      </Suspense>
    </div>
  );
}
