/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: Request) {
  const font = fetch(
    new URL('../../../../public/fonts/Karla-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  try {
    const fontData = await font;

    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : '👋 🌎';

    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(127deg, rgba(112,129,172,1) 78%, rgba(243,166,120,1) 100%)',
        }}
      >
        <div tw="flex">
          <div tw="flex w-full flex-col p-12 md:flex-row md:items-center">
            <h2
              tw={`flex flex-3 flex-col tracking-tight ${
                hasTitle ? 'text-6xl' : 'items-center text-8xl'
              }`}
            >
              <span>{title}</span>
            </h2>
            <div tw="h-[128px] w-[2px] bg-gray-600 mx-8" />
            <div tw="flex flex-2 flex-col items-center justify-center">
              <img
                width="256"
                height="256"
                alt="profile"
                src={'https://github.com/martines3000.png'}
                style={{
                  borderRadius: 128,
                }}
              />
              <h2 tw="text-3xl">Martin Domajnko</h2>
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'IBMPlexSans-Bold',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e: unknown) {
    console.log(e);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
