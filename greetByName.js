/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад "Hi", "Hey" або "Hello".
 name: Рядок, який представляє ім'я особи, наприклад "John", "Bob" або "Mary".

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це "Hi" і name це "John", то функція повинна повернути рядок "Hi, John".

 Ось приклад використання цієї функції:

 console.log(greet('Hi', 'John')) // Hi, John
 console.log(greet('Hey', 'Bob')) // Hey, Bob
 console.log(greet('Hello', 'Mary')) // Hello, Mary
*/

function greetByName(msg, name) {
  return `${msg}, ${name}`;
}

if (import.meta.vitest) {
  const { describe, test, expect } = import.meta.vitest;

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
      expect(greetByName('Hello', "O'Connor")).toBe("Hello, O'Connor");
    });
  });
}

export default greetByName;
