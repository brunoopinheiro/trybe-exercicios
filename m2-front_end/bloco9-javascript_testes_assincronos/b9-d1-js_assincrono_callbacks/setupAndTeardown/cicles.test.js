let cities = [];

const addCity = (city) => {
  cities.push(city);
}

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

describe('Agrupa o primeiro bloco de testes', () => {
  beforeEach(() => {
    cities = [...cities, 'Pindamonhangaba'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a funcao addCity utilizando o beforeEach', () => {
    expect.assertions(5);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Pindamonhangaba');
  });

  test('Testa a funcao removeCity utilizando o beforeEach', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).toHaveLength(0);
    expect(cities).not.toContain('Pindamonhangaba');
  });
});

describe('Agrupa o segundo bloco de testes', () => {
  beforeEach(() => {
    cities = [...cities, 'Tangamandapio'];
  });

  afterEach(() => {
    cities = [];
  });

  test('Testa a funcao addCity dentro do segundo bloco de testes', () => {
    expect.assertions(5);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Tangamandapio');
  });

  test('Testa a funcao removeCity dentro do segundo bloco de testes', () => {
    expect.assertions(3);
    removeCity('Tangamandapio');
    expect(cities).toHaveLength(0);
    expect(cities).not.toContain('Tangamandapio');
    expect(cities).not.toContain('Pindamonhangaba');
  });
});
