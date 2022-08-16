const searchEmployee = require('./searchEmployee');

describe('Tests the searchEmployee() function:', () => {
  // This function should be able to:
  // 1 - Receive an ID and find the equivalent employee
  test('1 - Tests if the searchEmployee() function receives an ID and finds the equivalent user', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });

  // 2 - Return an error if id doesn't exist
  test('2 - Tests if searchEmployee() throws an error if ID doesnt exist', () => {
    expect(() => {
      searchEmployee('1234-5', 'firstName');
    }).toThrow(Error);
  });
  // 3 - Return 'ID nao identificada' if id isnt in professionalBoard
  test('3 - Tests if searchEmployee() returns the "ID nao identificada" message as error', () => {
    expect(() => {
      searchEmployee('1234-5', 'specialties');
    }).toThrowError(new Error('ID nao identificada'));
  });
  // 4 - Return an error if provided 'detail' doesn't exist.
  test('4 - Tests if searchEmployee() returns an error if detail doesnt exist', () => {
    expect(() => {
      searchEmployee('4678-2', 'specs');
    }).toThrow(Error);
  });
  // 5 - Return 'Informacao indisponivel' as message error when detail doesn't exist
  test('5 - Tests if searchEmployee() returns "Informacao indisponivel" as a message error', () => {
    expect(() => {
      searchEmployee('4678-2', 'specs');
    }).toThrowError(new Error('Informacao indisponivel'));
  })
  // 6 - Return the detail for the said ID
  test('6 - Returns the expected detail for the id', () => {
    expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
});
