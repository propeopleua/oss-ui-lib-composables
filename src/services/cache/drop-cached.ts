import { getCacheStore, STORE_NAME } from './store';

export default async function dropCached(key: string): Promise<void> {
  const db = await getCacheStore();
  await db.delete(STORE_NAME, key);
}
