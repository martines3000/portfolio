export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type Post = {
  title: string;
  slug: string;
  created: string;
  updated: string | null;
  ogImage?: string;
  tags: string[];
  summary: string;
  content: string;
};

export type Views = {
  id: string;
  count: number;
};

export type Project = {
  title: string;
  slug: string;
  created: string;
  updated: string | null;
  tags: string[];
  summary: string;
  content: string;
  ogImage: string;
  repository?: string;
  website?: string;
};
