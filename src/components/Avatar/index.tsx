import { getAboutInfo } from '@/lib/datocms';
import SocialIcon from '@/components/SocialIcon';
import { Skeleton } from '../ui/skeleton';
import { ProfileImage } from './ProfileImage';

export default async function Avatar() {
  const about = await getAboutInfo();

  // Render skeleton
  if (!about) return <AvatarLoading />;

  const { profileimg, name, title } = about;

  return (
    <div className="flex h-fit flex-col sm:flex-row">
      <div className="flex justify-center">
        <div className="flex flex-col items-center rounded-xl border-2 border-sky-800 bg-white p-6 dark:bg-black">
          <div className="pb-3">
            <ProfileImage src={profileimg.url} alt={profileimg.alt} />
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

const AvatarLoading = () => {
  return (
    <div className="flex h-fit flex-col sm:flex-row">
      <div className="flex justify-center">
        <div className="flex h-[278px] w-[278px] flex-col items-center rounded-xl border-2 border-sky-800 bg-white p-6 dark:bg-black">
          <div className="pb-3">
            <Skeleton className="h-[128px] w-[128px]" />
          </div>
          <div className="mb-4 mt-2 flex w-full flex-col space-y-2">
            <div className="h-3 w-full animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
            <div className="h-3.5 w-full animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
          </div>
          <div className="flex space-x-4">
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
};
