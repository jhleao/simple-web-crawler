export function removePathFromUrl(url: string): string {
  return new URL(url).origin;
}
