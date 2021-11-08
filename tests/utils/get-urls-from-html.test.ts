import { getUrlsFromHtml } from '../../src/utils/get-urls-from-html';

it('should crawl any amount of links', () => {
  const linkToCrawl1 = 'http://www.com';
  const linkToCrawl2 = 'http://www.br';
  const linkToCrawl3 = 'http://www.anything';

  const HTML = `
    <html>
      <a href="${linkToCrawl1}">Link</a>
      <a href="${linkToCrawl2}">Link2</a>
      <a href="${linkToCrawl3}">Link3</a>
    </html>
    `;

  const urls = getUrlsFromHtml(HTML);

  expect(urls).toHaveLength(3);
  expect(urls[0]).toBe(linkToCrawl1);
  expect(urls[1]).toBe(linkToCrawl2);
  expect(urls[2]).toBe(linkToCrawl3);
});
