export interface SearchResult {
    tracks: {
      items: Array<{
        name: string;
        artists: Array<{ name: string }>;
        album: {
          images: Array<{ url: string }>;
          name: string;
        };
        uri: string;
      }>;
    };
}

export interface Track {
  album: {
    images: { url: string }[];
    name: string;
  };
  artists: { name: string }[];
  name: string;
  uri: string;
}
  