import { hasTimedOut } from './has-timed-out';
import { getNextJob } from './get-next-job';
import { crawl } from './crawl';
import { sleep } from './sleep';

export async function initCrawler(): Promise<void> {
  return new Promise(async (resolve) => {
    while (true) {
      if (!hasTimedOut()) {
        const nextJob = getNextJob();
        if (nextJob) {
          await crawl(nextJob);
        } else {
          await sleep(100);
        }
      } else {
        return resolve();
      }
    }
  });
}
