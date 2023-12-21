import { Sorting } from '../../enum/Sorting';

export interface TheadProps {
  label: string;
  icon?: string;
  sorting?: Sorting;
  key: string;
}
