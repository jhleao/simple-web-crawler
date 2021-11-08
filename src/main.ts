import { addToFoundUrls } from './utils/add-to-found-urls';
import { initCrawler } from './utils/init-crawler';
import { storage } from './utils/mem-storage';

export async function start() {
  storage.parseArgv();
  addToFoundUrls(storage.originalUrl, true);

  const crawlerPromises: Array<Promise<void>> = [];

  for (let i = 0; i < storage.crawlerAmount; i++) {
    crawlerPromises.push(initCrawler());
  }

  await Promise.all(crawlerPromises);
}

start();
