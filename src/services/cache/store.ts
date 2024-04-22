import { openDB } from 'idb';
import type { IDBPDatabase } from 'idb';

export interface CachedItem {
  value: unknown;
  ttl: number;
}

export const TTL_THRESHOLD = 86400;
export const STORE_NAME = 'cache';

export function getTimestamp(): number {
  return Math.round(Date.now() / 1000);
}

export function getCacheStore(): Promise<IDBPDatabase> {
  return openDB('app-cache', 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME);
    },
  });
}