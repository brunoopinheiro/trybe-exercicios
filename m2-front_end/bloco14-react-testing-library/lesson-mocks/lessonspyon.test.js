const math = require('./math');

test('#somar', () => {
  jest.mock('./math');

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test('#somar spyOn', () => {
  const mockSomar = jest.spyOn(math, 'somar');

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});

test('#somar resets', () => {
  // implementacao original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementacao por uma subtracao
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resentando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});

test('#somar spyOn reset', () => {
  // implementacao original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando mock e substituindo a implementacao por uma subtracao
  const mockSomar = jest
    .spyOn(math, 'somar')
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementacao original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
})
