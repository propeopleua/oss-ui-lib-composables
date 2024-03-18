import { Sorting } from '../../enum/Sorting';

export type SortingState = {
  key: string;
  direction: Omit<Sorting, Sorting.BOTH>;
};