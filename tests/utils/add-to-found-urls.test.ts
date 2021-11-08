import { storage } from '../../src/utils/mem-storage';
import { addToFoundUrls } from '../../src/utils/add-to-found-urls';

jest.mock('../../src/utils/mem-storage');
jest.spyOn(console, 'log').mockImplementation(() => undefined as never);

it('should add to foundUrls Set', () => {
  const URL = 'www.com';
  addToFoundUrls(URL);
  expect(storage.foundUrls.size).toBe(1);
  expect(storage.foundUrls.has(URL)).toBe(true);
});
