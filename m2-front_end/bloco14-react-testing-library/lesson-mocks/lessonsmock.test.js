function retornaNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

function divisivelPorDois() {
  return (retornaNumeroAleatorio() % 2) === 0;
}

function somaDoisNumeros() {
  return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}

describe('Aprendendo sobre mocks', () => {
  it('Testa se a funcao foi chamada', () => {
    somaDoisNumeros = jest.fn();

    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalled();
  });

  it('Testa o resultado da funcao', () => {
    somaDoisNumeros = jest
      .fn()
      .mockReturnValue(8);

    expect(somaDoisNumeros()).toBe(8);
  });

  it('Testa quantas vezes a funcao foi chamada', () => {
    somaDoisNumeros = jest.fn();

    somaDoisNumeros();
    somaDoisNumeros();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalledTimes(3);
  });

  it('Testa que retorna true quando o numero eh par', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(2);

    expect(divisivelPorDois()).toBe(true);
  });

  it('Testa que retorna false quando o numero eh impar', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(3);

    expect(divisivelPorDois()).toBe(false);
  });
});
