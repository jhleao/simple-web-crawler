import { crawl } from '../../src/utils/crawl';
import { getNextJob } from '../../src/utils/get-next-job';
import { hasTimedOut } from '../../src/utils/has-timed-out';
import { initCrawler } from '../../src/utils/init-crawler';
import { sleep } from '../../src/utils/sleep';

jest.mock('../../src/utils/crawl');
jest.mock('../../src/utils/sleep');
jest.mock('../../src/utils/mem-storage');
jest.mock('../../src/utils/get-next-job');
jest.mock('../../src/utils/has-timed-out');

it('should call crawler', async () => {
  (hasTimedOut as jest.Mock).mockReturnValue(true);
  (hasTimedOut as jest.Mock).mockReturnValueOnce(false);
  (getNextJob as jest.Mock).mockReturnValue(null);
  (getNextJob as jest.Mock).mockReturnValueOnce('www.com');

  await initCrawler();

  expect(crawl).toHaveBeenCalledTimes(1);
});

it('should call sleep if not job available', async () => {
  (hasTimedOut as jest.Mock).mockReturnValue(true);
  (hasTimedOut as jest.Mock).mockReturnValueOnce(false);
  (getNextJob as jest.Mock).mockReturnValue(null);

  await initCrawler();

  expect(sleep).toHaveBeenCalledTimes(1);
});
