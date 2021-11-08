import { getDomainFromUrl } from './get-domain-from-url';
import { storage } from './mem-storage';

export function getNextJob(): string | null {
  const getOriginalDomainUrls = (arr: string[]) =>
    arr.filter((e) => getDomainFromUrl(e) === storage.originalDomain);
  const removeProcessed = (arr: string[]) =>
    arr.filter((e) => !storage.processedUrls.has(e));

  const eligibleUrls = removeProcessed(
    getOriginalDomainUrls(Array.from(storage.foundUrls))
  );
  return eligibleUrls[0] ?? null;
}
