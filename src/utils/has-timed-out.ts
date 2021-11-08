import { storage } from './mem-storage';

export function hasTimedOut(): boolean {
  const unixNow = new Date().getTime();
  return unixNow - storage.lastInsertUnixTime >= storage.timeoutMs;
}
