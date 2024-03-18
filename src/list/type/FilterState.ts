import type { SortingState } from './SortingState';

export default interface FilterState {
  query: string;
  sorting: SortingState;
  page: number;
}
