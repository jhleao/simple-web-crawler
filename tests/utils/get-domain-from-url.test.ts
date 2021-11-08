import { getDomainFromUrl } from '../../src/utils/get-domain-from-url';

it('should extract domain', () => {
  const URL = 'https://www.youtube.com/watch?v=JuBbeFafcqo';
  expect(getDomainFromUrl(URL)).toBe('www.youtube.com');
});
