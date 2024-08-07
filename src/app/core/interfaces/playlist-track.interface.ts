export interface PlaylistTrack {
  added_at: string;
  track: {
    id: string;
    name: string;
    uri: string;
    album: {
      images: Array<{ url: string }>;
    };
  };
}
