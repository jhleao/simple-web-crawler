export function getPathFromUrl(url: string): string {
  const reg =
    /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/;
  const match = url.match(reg);
  return match ? match[3] : '';
}
