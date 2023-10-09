export interface NowPlayingSong {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

export interface Post {
  title: string;
  slug: string;
  created: string;
  updated: string | null;
  ogImage?: string;
  tags: string[];
  summary: string;
  content: string;
}

export interface Views {
  id: string;
  count: number;
}

export interface Project {
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
}
