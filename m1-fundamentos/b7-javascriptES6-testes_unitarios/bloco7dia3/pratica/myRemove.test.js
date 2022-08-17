const myRemove = require('./myRemove');

describe('Tests the myRemove() function', () => {

  test('1 - Tests if myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
    const testArray = [1, 2, 3, 4];
    expect(myRemove(testArray, 3)).toEqual([1, 2, 4]);
  });

  test('2 - Tests if myRemove([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    const testArray = [1, 2, 3, 4];
    expect(myRemove(testArray, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('3 - Tests if myRemove([1, 2, 3, 4], 5) returns [1, 2, 3, 4]', () => {
    const testArray = [1, 2, 3, 4];
    expect(myRemove(testArray, 5)).toEqual(testArray);
  });

});
