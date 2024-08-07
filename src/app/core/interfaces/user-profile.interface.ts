export interface UserProfile {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<{ url: string }>;
    country: string;
    email: string;
    explicit_content: {
      filter_enabled: boolean;
      filter_locked: boolean;
    };
    followers: {
      href: string | null;
      total: number;
    };
    product: string;
    type: string;
    uri: string;
}
  