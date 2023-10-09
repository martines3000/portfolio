import Image from 'next/image';

import { getAboutInfo } from '@/lib/datocms';
import SocialIcon from '@/components/SocialIcon';

export default async function Avatar() {
  const about = await getAboutInfo();

  // Render skeleton
  if (!about) return null;

  const { profileimg, name, title } = about;

  return (
    <div className="flex h-fit flex-col sm:flex-row">
      <div className="flex justify-center">
        <div className="flex flex-col items-center rounded-xl border-2 border-sky-800 bg-white p-6 dark:bg-black">
          <div className="pb-3">
            <Image
              className="rounded-lg"
              width={256}
              height={256}
              src={profileimg.url}
              quality={95}
              blurDataURL={profileimg.blurUpThumb}
              alt={profileimg.alt}
            />
          </div>
          <h1 className="text-lg font-bold">{name}</h1>
          <h1>{title}</h1>
          <div className="mt-2 flex space-x-4">
            <SocialIcon icon="github" href="https://github.com/martines3000" />
            <SocialIcon icon="twitter" href="https://twitter.com/MartinesXD" />
            <SocialIcon
              icon="linkedin"
              href="https://www.linkedin.com/in/martin-domajnko/"
            />
            <SocialIcon icon="mail" href="mailto:domajnko.martin@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
