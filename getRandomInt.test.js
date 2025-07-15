const getRandomInt = require('./getRandomInt');

describe('getRandomInt', () => {
  test('returns number within specified range', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('handles min equal to max', () => {
    const result = getRandomInt(5, 5);
    expect(result).toBe(5);
  });

  test('handles negative numbers', () => {
    const min = -10;
    const max = -1;
    const result = getRandomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
    expect(Number.isInteger(result)).toBe(true);
  });
}); 