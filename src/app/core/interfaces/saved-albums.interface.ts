export interface SavedAlbums {
    href: string;
    items: Array<{
      added_at: string;
      album: {
        images: Array<{ url: string }>;
        name: string;
        artists: Array<{ name: string }>;
        release_date: string;
        total_tracks: number;
      };
    }>;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}
  