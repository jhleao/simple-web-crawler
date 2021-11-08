import { removePathFromUrl } from './remove-path-from-url';

export function normalizeUrls(url: string[], fullUrl: string): string[] {
  return (
    url
      .map((e) => {
        if (isHttp(e)) return e;
        else if (isAbsolute(e)) return joinAbsoluteUrl(e, fullUrl);
        else if (isAnchor(e)) return null;
        else return `${fullUrl}/${e}`;
      })
      .filter(Boolean) as string[]
  ).map(scrapeUrl);
}

function scrapeUrl(url: string): string {
  const urlInstance = new URL(url);
  return `${urlInstance.origin}${urlInstance.pathname}${urlInstance.search}`;
}

// @todo - separate files
export function isHttp(url: string): boolean {
  return url.substr(0, 4) === 'http';
}

function isAbsolute(url: string): boolean {
  return url[0] === '/';
}

function joinAbsoluteUrl(abs: string, fullUrl: string) {
  const joined = `${removePathFromUrl(fullUrl)}${abs}`;
  return joined;
}

function isAnchor(url: string): boolean {
  return url[0] === '#';
}
