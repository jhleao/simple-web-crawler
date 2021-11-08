jest.mock('../../src/utils/mem-storage');
import { getNextJob } from '../../src/utils/get-next-job';
import { storage } from '../../src/utils/mem-storage';

it('should return correct next job', () => {
  const ORIGINAL_DOMAIN = 'www.amazon.com';
  const ORIGINAL_URL = `https://${ORIGINAL_DOMAIN}`;
  const NEXT_JOB = `${ORIGINAL_URL}/123`;
  storage.originalDomain = ORIGINAL_DOMAIN;
  storage.originalUrl = ORIGINAL_URL;
  storage.foundUrls.add(NEXT_JOB);

  const nextJob = getNextJob();

  expect(nextJob).toEqual(NEXT_JOB);
});
