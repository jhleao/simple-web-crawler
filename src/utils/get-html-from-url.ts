import axios from 'axios';

export async function getHtmlFromUrl(url: string): Promise<string | null> {
  // @note - axios is used for its 301 redirect support
  return axios
    .get(url, { timeout: 5000 })
    .then((r) => r.data)
    .catch(() => {
      return null;
    });
}
