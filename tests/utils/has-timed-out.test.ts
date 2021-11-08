import { hasTimedOut } from '../../src/utils/has-timed-out';
import { storage } from '../../src/utils/mem-storage';

jest.mock('../../src/utils/mem-storage');

it('should correctly check timeout', () => {
  storage.timeoutMs = 10000;
  storage.lastInsertUnixTime = new Date().getTime();

  expect(hasTimedOut()).toBe(false);

  storage.lastInsertUnixTime = new Date(0).getTime();

  expect(hasTimedOut()).toBe(true);
});
