import { Item } from './Item';

export interface Artist {
  artists: string;
  href: string;
  items: Item[];
}
