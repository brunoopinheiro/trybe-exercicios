const myFizzBuzz = require('./myFizzBuzz');

describe('Tests the myFizzBuzz() function', () => {
  test("1 - Tests if myFizzBuzz(15) returns 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test("2 - Tests if myFizzBuzz(9) returns 'fizz'", () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test("3 - Tests if myFizzBuzz(10) returns 'buzz'", () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test("4 - Tests if myFizzBuzz(2) returns 2", () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  test("5 - Tests if myFizzBuzz('dois') returns false", () => {
    expect(myFizzBuzz('dois')).toBeFalsy();
  });
});
