import { gql } from 'graphql-request';

import { markdownToHtml } from '../markdown';
import { request } from './utils';

export interface About {
  name: string;
  title: string;
  updatedAt: string;
  content: string;
  profileimg: {
    alt: string;
    url: string;
    blurUpThumb: string;
  };
}

const ABOUT_QUERY = gql`
  {
    about {
      name
      title
      updatedAt
      content
      profileimg {
        alt
        url
      }
    }
  }
`;

const getAbout = async () => {
  const data: any = await request(ABOUT_QUERY);
  return data?.about as About;
};

export const getAboutInfo = async (): Promise<About | null> => {
  const about = (await getAbout()) || null;
  if (!about) return null;

  return {
    ...about,
    content: markdownToHtml(about.content),
  };
};
