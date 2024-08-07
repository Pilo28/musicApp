export interface NowPlaying {
    item: {
      name: string;
      artists: Array<{ name: string }>;
      album: {
        images: Array<{ url: string }>;
        name: string;
      };
      duration_ms: number;
    };
    is_playing: boolean;
    progress_ms: number;
}
  