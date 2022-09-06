const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lanca Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Agua',
    ability: 'Jato de Agua',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Nao temos esse pokemon para voce :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Ola, seu pokemon e o ${name}, o tipo dele e ${type} e a habilidade principal dele e ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const handlePokemonSearch = (error, message) => console.log(error !== null ? error : message);

getPokemonDetails('Charmander', handlePokemonSearch);
