import type { AlertType } from '../../enum/AlertType';

export interface Alert {
  id: string;
  content: string;
  type: AlertType;
  ttl: number;
}
