import type { Nav } from './nav';

export interface MenuItem extends Nav {
  url?: string;
  icon?: string;
  onClick?: (key: string) => void;
}
