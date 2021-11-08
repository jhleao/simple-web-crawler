import { start } from '../src/main';
import { initCrawler } from '../src/utils/init-crawler';
import { storage } from '../src/utils/mem-storage';

jest.mock('../src/utils/init-crawler');
jest.mock('../src/utils/mem-storage');

it('should correctly initialize crawlers', async () => {
  storage.crawlerAmount = 20;
  storage.originalUrl = 'www.INVALID_URL.com';

  await start();

  expect(initCrawler).toHaveBeenCalledTimes(storage.crawlerAmount + 1);
});
