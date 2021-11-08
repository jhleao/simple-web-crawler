import axios from 'axios';
import { getHtmlFromUrl } from '../../src/utils/get-html-from-url';

it('should fetch HTML from remote URL', async () => {
  const URL = 'https://www.google.com/';
  const html = await getHtmlFromUrl(URL);
  expect(html?.includes('<html')).toBe(true);
});

it('should return null on request throw', async () => {
  axios.get = jest.fn(() => {
    return new Promise((r) => {
      throw new Error();
    });
  });
  const URL = 'https://www.google.com/';
  const html = await getHtmlFromUrl(URL);
  expect(html).toBeNull();
});
