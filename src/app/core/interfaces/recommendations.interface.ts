export interface Recommendations {
  album: {
    images: { url: string }[];
    name: string;
  };
  artists: { name: string }[];
  name: string;
  uri: string;
}
