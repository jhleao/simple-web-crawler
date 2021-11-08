jest.mock('../../src/utils/get-html-from-url');
jest.mock('../../src/utils/mem-storage');

import { crawl } from '../../src/utils/crawl';
import { getHtmlFromUrl } from '../../src/utils/get-html-from-url';
import { storage } from '../../src/utils/mem-storage';

jest.spyOn(console, 'log').mockImplementation(() => undefined as never);

it('should crawl correctly', async () => {
  const originalUrl = 'https://www.amazon.com/';
  const linkToCrawl = 'https://www.amazon.com/products/2';

  (getHtmlFromUrl as jest.Mock).mockReturnValue(
    `<html><a href="${linkToCrawl}">Link</a></html>`
  );

  await crawl(originalUrl);

  expect(storage.foundUrls.has(linkToCrawl)).toBe(true);
});

it('should support relative, absolute and anchor links', async () => {
  const domain = `https://www.amazon.com`;
  const crawlUrl = `${domain}/store`;
  const httpLink = `${crawlUrl}/products/2`;
  const relativeLink = `products/2`;
  const absoluteLink = `/products/3`;
  const anchorLink = `#products`;

  const EXPECTED_FOUND_LINKS = [
    httpLink,
    `${crawlUrl}/${relativeLink}`,
    `${domain}${absoluteLink}`,
  ];

  (getHtmlFromUrl as jest.Mock).mockReturnValue(
    `
    <html>
      <a href="${httpLink}">Link 1</a>
      <a href="${relativeLink}">Link 2</a>
      <a href="${absoluteLink}">Link 3</a>
      <a href="${anchorLink}">Link 4</a>
    </html>
    `
  );

  await crawl(crawlUrl);

  expect(storage.foundUrls.size).toBe(3);
  expect(storage.foundUrls.has(EXPECTED_FOUND_LINKS[0])).toBe(true);
  expect(storage.foundUrls.has(EXPECTED_FOUND_LINKS[1])).toBe(true);
  expect(storage.foundUrls.has(EXPECTED_FOUND_LINKS[2])).toBe(true);
});

it('should not do nothing if html returns null', async () => {
  const crawlUrl = `https://www.amazon.com`;

  (getHtmlFromUrl as jest.Mock).mockReturnValue(null);

  await crawl(crawlUrl);

  expect(storage.foundUrls.size).toBe(3);
});
