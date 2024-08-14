export interface FollowedArtists {
    artists: {
      items: Array<{
        name: string;
        images: Array<{ url: string }>;
        genres: Array<string>;
      }>;
    };
}
  