import type { SortingState } from './SortingState';

export interface FilterState {
  query: string;
  sorting: SortingState;
  page: number;
}
