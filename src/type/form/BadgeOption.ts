import type { Option } from '../form/Option';

export interface BadgeOption extends Option {
  badge?: {
    icon: string;
    label: string;
  };
}
