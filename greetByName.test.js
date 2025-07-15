const greetByName = require('./greetByName');

describe('greetByName', () => {
  test('creates correct greeting with "Hi"', () => {
    expect(greetByName('Hi', 'John')).toBe('Hi, John');
  });

  test('creates correct greeting with "Hey"', () => {
    expect(greetByName('Hey', 'Bob')).toBe('Hey, Bob');
  });

  test('creates correct greeting with "Hello"', () => {
    expect(greetByName('Hello', 'Mary')).toBe('Hello, Mary');
  });

  test('handles empty strings', () => {
    expect(greetByName('', '')).toBe(', ');
  });

  test('handles special characters in name', () => {
    expect(greetByName('Hi', 'John-Paul')).toBe('Hi, John-Paul');
    expect(greetByName('Hello', 'O\'Connor')).toBe('Hello, O\'Connor');
  });
}); 