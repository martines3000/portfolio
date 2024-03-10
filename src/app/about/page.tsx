import { getAboutInfo } from '@/lib/datocms';
import ogImage from '@/lib/ogImage';

export const metadata = {
  title: 'About',
  description:
    "Here, you'll find general information about me, my work, and my interests.",
  openGraph: {
    images: [ogImage({ title: 'About' })],
  },
};

export default async function Page() {
  const about = await getAboutInfo();

  if (!about) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="font-semibold">
          An error occured while loading the data
        </h1>
      </div>
    );
  }

  const { content } = about;

  return (
    <div className="mt-[-56px] flex flex-col">
      <div className="flex w-full flex-1 flex-col">
        <div className="h-full w-full">
          <article className="prose max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
            <div
              className="main-content"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
