import { getCacheStore, getTimestamp, STORE_NAME, TTL_THRESHOLD } from './store';
import type { CachedItem } from './store';

export default async function getCached<T> (
  key: string,
  setter: () => Promise<T>,
  ttlThreshold: number = TTL_THRESHOLD
): Promise<T> {
  const db = await getCacheStore();
  let cachedItem = (await db.get(STORE_NAME, key)) as CachedItem;
  const timestamp = getTimestamp();

  if (!cachedItem || cachedItem.ttl <= timestamp) {
    cachedItem = {
      value: await setter(),
      ttl: getTimestamp() + ttlThreshold,
    }
    await db.put(STORE_NAME, cachedItem, key);
  }

  return cachedItem.value as T;
}