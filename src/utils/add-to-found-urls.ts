import { storage } from './mem-storage';

export function addToFoundUrls(url: string, silent: boolean = false) {
  if (!storage.foundUrls.has(url)) {
    storage.foundUrls.add(url);
    storage.lastInsertUnixTime = new Date().getTime();
    if (!silent) {
      console.log(url);
    }
  }
}
