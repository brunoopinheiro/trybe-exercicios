const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercicio 2 - Crie uma string com os nomes de todas as pessoas autoras.
const reduceNames = (array) => array.reduce((acc, book) => (acc === '') ? book.author.name : acc.concat(', ', book.author.name), '');

// Exercicio 3 - Calcule a media de idade que as pessoas autoras tinham quando seus respectivos livros foram lancados.
const averageAge = (array) => (array.reduce((acc, book) => acc + (book.releaseYear - book.author.birthYear), 0)) / array.length;

// Exercicio 4 - Encontre o livro com o maior nome;
const longestNamedBook = (array) => array.reduce((acc, book) => (acc.name.length < book.name.length) ? book : acc);

console.log(longestNamedBook(books));
