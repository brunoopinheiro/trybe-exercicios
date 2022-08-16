const {sum, sub, mul, div} = require('./calculator');

describe('The sum function', () => {
  it('returns 3 when sum(1, 2)', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('The sub function', () => {
  it('returns -1 when sub(1, 2)', () => {
    expect(sub(1, 2)).toBe(-1);
  });
});

describe('The mul function', () => {
  it('returns 6 when mul(2, 3)', () => {
    expect(mul(2, 3)).toBe(6);
  });
});

describe('The div function', () => {
  it('returns 4 when div(100, 25)', () => {
    expect(div(100, 25)).toBe(4);
  });

  it('throws an error when tries to divide by 0', () => {
    expect(() => div(1,0)).toThrow(Error);
  });
});
