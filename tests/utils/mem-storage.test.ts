import { storage } from '../../src/utils/mem-storage';

it('should correctly parse args', async () => {
  const crawlerAmount = 20;
  const originalUrl = 'www.INVALID_URL.com';
  process.argv = ['_', '_', '-n', `${crawlerAmount}`, originalUrl];

  storage.parseArgv();

  expect(storage.originalUrl).toBe(`https://${originalUrl}`);
  expect(storage.crawlerAmount).toBe(crawlerAmount);
});

it('should exit process on invalid url', async () => {
  const crawlerAmount = 20;
  process.argv = ['_', '_', '-n', `${crawlerAmount}`];

  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    return undefined as never;
  });

  jest.spyOn(console, 'error').mockImplementation(() => {});

  storage.parseArgv();

  expect(mockExit).toHaveBeenCalledWith(1);
});
