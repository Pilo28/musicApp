export interface Playlist {
  id: string;
  name: string;
  images: Array<{ url: string }>;
  tracks: {
    href: string;
    total: number;
  };
}
