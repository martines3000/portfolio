import { Chip } from '@/components/Chip';
import Avatar from '@/components/Avatar';
import { FRAMEWORKS, LANGUAGES, OTHER, TOOLS } from '../constants/homeInfo';

export const metadata = {
  description:
    "Here, you'll find a short description about me and a compact list of my skills.",
};

export default function Page() {
  return (
    <div className="mb-12 w-full">
      <div className="flex flex-col items-center md:flex-row md:space-x-6">
        <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold">
            Welcome to my personal website!
          </h1>
          <p className="text-base sm:text-lg">
            As a fullstack engineer and blockchain enthusiast, I am dedicated to
            creating innovative and optimized solutions. My passion for
            technology is matched by my desire to continuously learn and
            improve. Whether it&apos;s staying up-to-date with the latest
            blockchain technologies, or continuously improving my development
            skills, I am dedicated to personal growth and self-improvement.
            Based in the beautiful country of Slovenia, I am excited to share my
            work and insights with you.
          </p>
        </div>
        <div className="md:min-w-max">
          <Avatar />
        </div>
      </div>
      <div className="mt-8 sm:mt-6 ">
        <div className="mb-5">
          <h2 className="mb-2 text-2xl font-bold">Skills</h2>
          {/* Background text */}
          <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
            Clicking on specific skills, languages or tools will show you some
            extra information.
          </p>
          <div className="flex flex-wrap gap-2">
            <Chip
              label="Advanced"
              color="red"
              description="I have extensive experience with this skill and I used it in production-ready projects in a variety of domains."
            />
            <Chip
              label="Intermediate"
              color="yellow"
              description="I have decent experience with this skill and I used it many hobby projects."
            />
            <Chip
              label="Advanced beginner"
              color="green"
              description="I have some experience with this skill and I used it in a few simple projects. This does not include skills that I only did a few tutorials on."
            />
          </div>
        </div>
        <h3 className="mb-2 text-2xl font-bold">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((language) => (
            <Chip
              key={language.name}
              label={language.name}
              color={language.color}
              description={language.description}
            />
          ))}
        </div>
        <h3 className="mb-2 mt-6 text-2xl font-bold">Frameworks</h3>
        <div className="flex flex-wrap gap-2">
          {FRAMEWORKS.map((framework) => (
            <Chip
              key={framework.name}
              label={framework.name}
              color={framework.color}
            />
          ))}
        </div>
        <h3 className="mb-2 mt-6 text-2xl font-bold">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {TOOLS.map((tool) => (
            <Chip
              key={tool.name}
              label={tool.name}
              color={tool.color}
              description={tool.description}
            />
          ))}
        </div>
        <h3 className="mt-6 text-xl font-bold">Other</h3>
        <p className="mb-2 mt-1 text-gray-800 dark:text-gray-200">
          Other skills I&apos;m familiar with and used in more than one project.
        </p>
        <div className="flex flex-wrap gap-2">
          {OTHER.map((other) => (
            <Chip key={other.name} label={other.name} color="gray" />
          ))}
        </div>
      </div>
    </div>
  );
}
