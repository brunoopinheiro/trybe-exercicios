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

// P1 - Array com strings no formato `Nome do Livro - Genero do Livro - Nome da Pessoa Autora`
const formatedBookNames = (arr) => arr.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// P2 - Array de objetos. { author : author.name, age: idadeqQuandoLivroLancado }. Array ordenado por idade (jovem > velha)
const nameAndAge = (arr) => arr.map((book) => ({
  name: book.author.name,
  age: (book.releaseYear - book.author.birthYear)
})).sort((a, b) => a.age - b.age);

// P3 - Array com genero = ficcao cientifica
const genreFilter = (genre1, genre2, arr) => arr.filter((book) => (book.genre === genre1 || book.genre === genre2));

// P4 - Array com livros com mais de 60 anos desde publicacao. Ordenado do mais velho pro mais novo.
const oldBooksOrdered = (ageFilter, year, arr) => arr.filter((book) => year - book.releaseYear > ageFilter).sort((a, b) => a.releaseYear - b.releaseYear);

// P5 - Array em ordem alfabetica apenas com autores de ficcao cientifica ou fantasia.
const sortedAuthors = (arr) => arr.map((book) => book.author.name).sort();
const filtered5 = genreFilter('Fantasia', 'Ficção Científica', books);

// P6 - Array com nome dos livros com >60 anos publicacao.
const oldBooks = (arr) => arr.map((book) => book.name);
const filtered6 = oldBooksOrdered(60, 2022, books);

// P7 - Nome do livro escrito pela pessoa cujo nome registrado comeca com 3 iniciais.
// Solucao do gabarito
function authorWIth3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
  )).name;
};

console.log(authorWIth3DotsOnName());
