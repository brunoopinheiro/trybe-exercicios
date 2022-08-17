const sum = require('./sum');

describe('Tests the sum() function', () => {
  test('Tests if sum(4, 5) returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Tests if sum(0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Tests if sum() throws an error when one of its parameters is not a number', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(Error);
  });

  test("Tests if error message is 'parameters must be numbers' when one of its parameters is not a number", () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});
