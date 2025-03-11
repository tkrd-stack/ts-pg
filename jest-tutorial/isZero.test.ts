import { isZero } from './isZero';

test('value is zero', () => {
  const result = isZero(0);
  expect(result).toBe(true);
});

test('value is not zero', () => {
  const result = isZero(1);
  expect(result).toBe(false);
});

test('value is not zero', () => {
  const result = isZero(1);
  expect(result).toBe(true);
});
