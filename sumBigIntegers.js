/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

function sumBigIntegers(numStr1, numStr2) {
  return BigInt(numStr1) + BigInt(numStr2);
}

if (import.meta.vitest) {
  const { describe, test, expect } = import.meta.vitest;

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
}

export default sumBigIntegers;
