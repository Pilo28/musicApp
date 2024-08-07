export interface SavedTracks {
    href: string;
    items: Array<{
      added_at: string;
      track: {
        album: {
          images: Array<{ url: string }>;
          name: string;
        };
        artists: Array<{ name: string }>;
        duration_ms: number;
        name: string;
        uri: string;
      };
    }>;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}
  