# Homework 19 - JavaScript Functions and Testing

This project contains three JavaScript functions with their corresponding test suites:

1. `sumBigIntegers` - Adds two large numbers provided as strings
2. `getRandomInt` - Generates a random integer within a specified range
3. `greetByName` - Creates a greeting message by combining a greeting and a name

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd hw19
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

To run tests once:
```bash
npm test
```

To run tests in watch mode:
```bash
npm test -- --watch
```

To generate test coverage report:
```bash
npm run test:coverage
```

## Functions Documentation

### sumBigIntegers(numStr1, numStr2)
Takes two string numbers and returns their sum as a BigInt.

Example:
```javascript
sumBigIntegers('9007199254740991', '9007199254740991')
// Returns: 18014398509481982n
```

### getRandomInt(min, max)
Generates a random integer between min and max (inclusive).

Example:
```javascript
getRandomInt(1, 10) // Returns a number between 1 and 10
getRandomInt(40, 50) // Returns a number between 40 and 50
```

### greetByName(msg, name)
Creates a greeting message by combining a greeting and a name.

Example:
```javascript
greetByName('Hi', 'John') // Returns: "Hi, John"
greetByName('Hello', 'Mary') // Returns: "Hello, Mary"
```

## Project Structure
```
hw19/
├── sumBigIntegers.js
├── sumBigIntegers.test.js
├── getRandomInt.js
├── getRandomInt.test.js
├── greetByName.js
├── greetByName.test.js
├── vitest.config.js
├── vitest.setup.js
└── package.json
```
