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

// 1 Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
function findByBirthYear(year, array) {
  const answ = array.find((book) => {
    if (book.author.birthYear === year) {
      return book;
    }
  });
  return answ.author.name;
};

// 2 Retorno o nome do livro de menor nome.
function smallerName(arr) {
  let nameBook;

  nameBook = arr[0].name;
  arr.forEach((element) => {
    if(element.name.length < nameBook.length) {
      nameBook = element.name;
    };
  });

  return nameBook;
}

// 3 Encontre o primeiro livro cujo nome possui 26 caracteres
function getBookByTitleLength(length, arr) {
  const book = arr.find((element) => (element.name.length === length) ? true : false);
  return book;
}

// 4 Ordene os livros por data de lancamento em ordem decrescente
function booksOrderedByReleaseYearDec(arr) {
 const orderedBooks = arr.sort((a, b) => b.releaseYear - a.releaseYear);
 return orderedBooks;
}

// 5 Funcao que retorne true se todas as pessoas autoras nasceram no seculo XX ou false caso contrario
const everyoneWasBornOnSecXX = (arr) => arr.every((element) => (element.author.birthYear > 1900 && element.author.birthYear < 2001) ? true : false);

// 6 Funcao que retorne true se algum livro foi lancado na decada de 80 e false caso contrario
const someBookReleasedOnThe80s = (arr) => arr.some((element) => (element.releaseYear > 1979 && element.releaseYear < 1990) ? true : false);

// 7 Funcao que retorne true caso nenhum autor tenha nascido no mesmo ano e false caso contrario
function authorUnique(arr) {
  let isUnique = true;
  arr.forEach((element) => {
    arr.find((other) => {
      if (element.author.birthYear === other.author.birthYear && element !== other) {
        isUnique = false;
      }
    })
  })
  return isUnique;
}

// console.log(findByBirthYear(1947, books));
// console.log(smallerName(books));
// console.log(getBookByTitleLength(26, books));
// console.log(booksOrderedByReleaseYearDec(books));
// console.log(everyoneWasBornOnSecXX(books));
// console.log(someBookReleasedOnThe80s(books));
// console.log(authorUnique(books));
