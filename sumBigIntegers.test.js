const sumBigIntegers = require('./sumBigIntegers');

describe('sumBigIntegers', () => {
  test('adds two large numbers correctly', () => {
    expect(sumBigIntegers('9007199254740991', '9007199254740991').toString()).toBe('18014398509481982');
  });

  test('adds zero correctly', () => {
    expect(sumBigIntegers('0', '12345').toString()).toBe('12345');
    expect(sumBigIntegers('12345', '0').toString()).toBe('12345');
  });

  test('adds negative numbers correctly', () => {
    expect(sumBigIntegers('-123456789', '987654321').toString()).toBe('864197532');
    expect(sumBigIntegers('-123456789', '-987654321').toString()).toBe('-1111111110');
  });
}); 