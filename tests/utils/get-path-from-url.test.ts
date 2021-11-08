import { getPathFromUrl } from '../../src/utils/get-path-from-url';

it('should extract path from URL', () => {
  const URL = 'https://www.youtube.com/watch?v=JuBbeFafcqo';
  expect(getPathFromUrl(URL)).toBe('/watch?v=JuBbeFafcqo');
});
