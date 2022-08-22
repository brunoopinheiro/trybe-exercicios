// Solucoes feitas por Cadu e T25-A (Cafe com Let) na monitoria invertida.

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

// 1 pessoa autora nascido em 1947
const authorBornIn1947 = (data) => {
  return data.find((livro) => livro.author.birthYear === 1947).author.name;
};

// 2 Retorne o livro de menor nome.
const smallerName = (data) => {
  let nameBook;
  data.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) nameBook = book.name;
  });

  return nameBook;
}

// 3 Encontre o primeiro livro cujo nome 26 chars
const getNamedBook = (data) => data.find((element) => element.name.length === 26);

// 4 ordene livros por data de lancamento decrescente
const orderBooks = (data) => data.sort((a, b) => a.releaseYear - b.releaseYear);

console.log(orderBooks(books));
