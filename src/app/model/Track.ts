export interface Track {
  album: {
    album_type: string;
    release_date: string;
    images: { height: number; url: string; width: number }[];
  };
  name: string;
  preview_url: string;
  type: string;
}
