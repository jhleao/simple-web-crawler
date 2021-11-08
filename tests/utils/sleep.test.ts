import { sleep } from '../../src/utils/sleep';

it('should resolve sleep promise', async () => {
  await sleep(10);
  expect(true).toBe(true);
});
