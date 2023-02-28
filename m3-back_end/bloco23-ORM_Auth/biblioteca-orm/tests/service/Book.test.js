const { expect } = require('chai');
const { stub } = require('sinon');
const { Book } = require('../../src/models');
const BookService = require('../../src/services/book.service');

const testBook = {
  id: 1,
  title: 'The Lord of the Rings',
  author: 'J. R. R. Tolkien',
  pageQuantity: 1178,
  createdAt: '2001-09-28 01:00:00',
  updatedAt: '2001-09-28 01:00:00',
};

describe('Book Service', () => {
  describe('#getAll', () => {
    const findAllStub = stub(Book, 'findAll');
    let books;

    describe('Quando não existe nenhum livro cadastrado', () => {
      before(async () => {
        findAllStub.resolves([]);
        books = await BookService.getAll();
      });

      after(() => {
        findAllStub.reset();
      });

      it('called Book.findAll', () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });

      it('A resposta é um array', () => {
        expect(books).to.be.an('array');
      });

      it('O array está vazio', () => {
        expect(books).to.be.empty;
      });
    });

    describe('Quando existem livros cadastrados', () => {
      before(async () => {
        findAllStub.resolves([testBook]);
        books = await BookService.getAll();
      });

      after(() => {
        findAllStub.restore();
      })

      it('called Book.findAll', async () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });

      it('A resposta é um array', async () => {
        expect(books).to.be.an('array');
      });

      it('O array deve retornar objetos', async () => {
        expect(books).to.be.deep.equal([testBook]);
      });
    });
  });

  describe('#getById', () => {
    const findByPkStub = stub(Book, 'findByPk');
    let book;

    describe('Quando existe o livro', () => {
      before(async () => {
        findByPkStub.resolves(testBook);
        book = await BookService.getById(1);
      });

      after(() => {
        findByPkStub.reset();
        book = null;
      });

      it('called Book.findByPk', async () => {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });

      it('A resposta é um objeto contendo os dados do livro', async () => {
        expect(book).to.deep.equal(testBook);
      });
    });

    describe('Quando não existe o livro', () => {
      before(async () => {
        findByPkStub.resolves(null);
        book = await BookService.getById(1000);
      });

      after(() => {
        findByPkStub.reset();
        book = null;
      });

      it('called Book.findByPk', async () => {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });
      it('A resposta é um objeto contendo os dados do livro', () => {
        expect(book).to.be.null;
      });
    });
  });

  describe('#create', () => {
    describe('retorna o registro do livro criado', () => {
      const createStub = stub(Book, 'create');
      const mockBook = {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        pageQuantity: '689',
      };

      let book;

      before(async () => {
        createStub.resolves({
          id: 2,
          ...mockBook,
          updatedAt: '2022-01-28T15:45:28.398Z',
          createdAt: '2022-01-28T15:45:28.398Z',
        });

        book = await BookService.createBook(mockBook);
      });

      after(() => {
        createStub.reset();
      });

      it('called Book.create', async () => {
        expect(Book.create.calledOnce).to.be.equals(true);
      });

      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(book).to.include(mockBook); // como o objeto retornado tem menos atributos do que os esperados usamos o matcher include
      });
    });
  });

  describe('#update', () => {
    const updateStub = stub(Book, 'update');
    const mockBook = {
      title: 'The Va Cinci Dode',
      author: 'Ban Drown',
      pageQuantity: 589,
    };

    let updated;

    describe('Quando existe o livro', () => {
      before(async () => {
        updateStub.resolves([true]);
        updated = await BookService.updateBook(2, mockBook);
      });

      after(() => {
        updateStub.reset();
      });

      it('called Book.update', async () => {
        expect(Book.update.calledOnce).to.be.equals(true);
      });

      it('retorna true', async () => {
        expect(updated).to.be.true;
      });
    });

    describe('Quando não existe o livro', () => {
      before(async () => {
        updateStub.resolves([false]);
        updated = await BookService.updateBook(1000, mockBook);
      });

      after(() => {
        updateStub.reset();
      });

      it('called Book.update', async () => {
        expect(Book.update.calledOnce).to.be.equals(true);
      });

      it('retorna 0', async () => {
        expect(updated).to.be.false;
      });
    });
  });

  describe('#remove', () => {
    const removeStub = stub(Book, 'destroy');
    let removed;

    describe('Quando existe o livro', () => {
      before(async () => {
        removeStub.resolves(true);
        removed = await BookService.removeBook(2);
      });

      after(() => {
        removeStub.reset();
      });

      it('called Book.destroy', async () => {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });

      it('retorna true', async () => {
        expect(removed).to.be.eq(true);
      });
    });

    describe('quando não existe o livro', () => {
      before(async () => {
        removeStub.resolves(false);
        updated = await BookService.removeBook(1000);
      });

      after(() => {
        removeStub.reset();
      });

      it('called Book.update', async () => {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });

      it('retorna false', async () => {
        expect(updated).to.be.eq(false);
      });
    })
  });
})