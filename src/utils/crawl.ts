import { getHtmlFromUrl } from './get-html-from-url';
import { getUrlsFromHtml } from './get-urls-from-html';
import { addToFoundUrls } from './add-to-found-urls';
import { storage } from './mem-storage';
import { normalizeUrls } from './normalize-urls';

export async function crawl(url: string): Promise<void> {
  return new Promise(async (resolve) => {
    storage.processedUrls.add(url);
    const html = await getHtmlFromUrl(url);
    if (!html) return resolve();
    const pageUrls = getUrlsFromHtml(html);
    const normalUrls = normalizeUrls(pageUrls, url);
    normalUrls.forEach((e) => {
      addToFoundUrls(e);
    });
    return resolve();
  });
}
