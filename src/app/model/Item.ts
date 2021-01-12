export interface Item {
  genres: string[];
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  popularity: number;
}
