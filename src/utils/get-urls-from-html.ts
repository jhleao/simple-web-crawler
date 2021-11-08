import * as cheerio from 'cheerio';

export function getUrlsFromHtml(html: string): string[] {
  // @note - cheerio is being used for proper html parsing
  const urls: Set<string> = new Set();
  const ch = cheerio.load(html);
  const anchorTags = ch('a');

  anchorTags.each((_, element) => {
    const href = ch(element).attr('href');
    if (href) {
      urls.add(href);
    }
  });

  return Array.from(urls);
}
